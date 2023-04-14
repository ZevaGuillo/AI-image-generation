import { useState, useEffect } from 'react';
import { Model } from "../types/model";
import { modelList } from "../utils/models";
import { useAppDispatch, useAppSelector } from './useRedux';
import { useNavigate } from 'react-router';
import Swal from "sweetalert2";
import { getRandomPrompt } from "../utils";
import { onSetId, onSetImage, onSetModel, onSetNegativePrompt, onSetNegativePromptBtn, onSetPrompt } from "../store/generator/genratorSlice";

export const useGenerator = () => {
    const { _id } = useAppSelector(state => state.auth)
    const { prompt, userid, model, negative_prompt, image } = useAppSelector(state => state.generator)

    const dispatch = useAppDispatch();
    
    const navigate = useNavigate();

    const [models, setModels] = useState<Model[]>(modelList);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        dispatch(onSetId(_id))
    },[])


    const handleSurpriseMe = () => {
        const randomPrompt = getRandomPrompt(prompt);
        dispatch(onSetPrompt(randomPrompt))
    };

    const handleRandomNegativePrompt = () => {
        const nevRandomPrompt = getRandomPrompt(prompt, true);
        dispatch(onSetNegativePromptBtn(nevRandomPrompt))
    };

    const handleModel = (model_id: string) => {
        setModels(models.map(model => {
            if (model.mode_id === model_id) {
                model.active = true;
            } else {
                model.active = false;
            }
            return model;
        }))

        console.log(model_id);
        
        dispatch(onSetModel(model_id))
    };

    const removerModel = (model_id: string) => {
        setModels(models.map(model => {
            if (model.mode_id === model_id) {
                model.active = false;
            }
            return model;
        }));

        dispatch(onSetModel(''))
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        if(event.target.name === 'prompt'){
            dispatch(onSetPrompt(event.target.value))
        }else{
            dispatch(onSetNegativePrompt(event.target.value))
        }
    };

    const createPost = async () => {

        if (prompt && prompt.length > 5) {
            try {
                setLoading(true);
                const response = await fetch(`${import.meta.env.VITE_SERVER}/api/v1/post/create`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userid,
                        model,
                        prompt: prompt,
                        negative_prompt,
                        image,
                    }),
                });
                const data = await response.json();
                if (data.status === 'ok') {
                    navigate('/')
                }


            } catch (error) {
                // alert(error);
                Swal.fire({
                    title: 'Try again later',
                    icon: 'error',
                    focusConfirm: false,
                    confirmButtonText: 'Ok',
                })
            } finally {
                setLoading(false);
            }

        } else {
            Swal.fire({
                title: 'At least complete the prompt',
                icon: 'info',
                focusConfirm: false,
                confirmButtonText:
                    'Great!',
            })
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (prompt && prompt.length > 5) {
            try {
                setLoading(true);
                //* FETCH
                const response = await fetch(`${import.meta.env.VITE_SERVER}/api/v1/generate`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        prompt: prompt,
                        negative_prompt: negative_prompt,
                        model: model,
                    }),
                });
                const data = await response.json();

                if (data.message || data.messege) {
                    throw new Error('Out of service')
                }

                dispatch(onSetImage(data.image))
                
            } catch (error) {
                Swal.fire({
                    title: 'Out of service',
                    text: 'Try again later',
                    icon: 'error',
                    focusConfirm: false,
                    confirmButtonText: 'Ok',
                })
            } finally {
                setLoading(false);
            }
        } else {
            // alert("llenar el campo");

            Swal.fire({
                title: 'At least complete the prompt',
                icon: 'info',
                focusConfirm: false,
                confirmButtonText:
                    'Great!',
            })
        }
    };

    return {
        loading,
        // form,
        models,
        handleChange,
        handleSurpriseMe,
        handleRandomNegativePrompt,
        handleSubmit,
        createPost,
        handleModel,
        removerModel
    };
};


