import { useState } from "react";
import { Model } from "../types/model";
import { Post } from "../types/post";
import { modelList } from "../utils/models";
import { useAppSelector } from './useRedux';
import { useNavigate } from 'react-router';
import Swal from "sweetalert2";
import { getRandomPrompt } from "../utils";

export const useGenerator = () => {
    const { _id } = useAppSelector(state => state.auth)
    const navigate = useNavigate();

    const [models, setModels] = useState<Model[]>(modelList);
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState<Post>({
        userid: _id,
        prompt: "",
        negative_prompt: "",
        image: "",
        model: "",
    });

    const handleSurpriseMe = () => {
        const randomPrompt = getRandomPrompt(form.prompt);
        setForm({ ...form, prompt: randomPrompt });
    };

    const handleRandomNegativePrompt = () => {
        const randomPrompt = getRandomPrompt(form.prompt, true);

        setForm((prev) => ({ ...form, negative_prompt: prev.negative_prompt.concat(" | "+randomPrompt) }));
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

        setForm({
            ...form,
            model: model_id,
        });
    };

    const removerModel = (model_id: string) => {
        setModels(models.map(model => {
            if (model.mode_id === model_id) {
                model.active = false;
            }
            return model;
        }));
        setForm({
            ...form,
            model: '',
        });
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const createPost = async () => {

        if (form.prompt && form.prompt.length > 5) {
            try {
                setLoading(true);
                const response = await fetch(`${import.meta.env.VITE_SERVER}/api/v1/post/create`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userid: form.userid,
                        model: form.model,
                        prompt: form.prompt,
                        negative_prompt: form.negative_prompt,
                        image: form.image,
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

        if (form.prompt && form.prompt.length > 5) {
            try {
                setLoading(true);
                //* FETCH
                const response = await fetch(`${import.meta.env.VITE_SERVER}/api/v1/generate`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        prompt: form.prompt,
                        negative_prompt: form.negative_prompt,
                        model: form.model,
                    }),
                });
                const data = await response.json();

                if (data.message || data.messege) {
                    throw new Error('Out of service')
                }

                setForm({
                    ...form,
                    image: data.image,
                });
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
        form,
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


