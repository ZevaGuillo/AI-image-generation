import { useState } from "react";
import { Model } from "../types/model";
import { Post } from "../types/post";
import { modelList } from "../utils/models";
import { useAppSelector } from './useRedux';
import { useNavigate } from 'react-router';

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

        if (form.prompt && form.prompt.length > 5 ) {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:8000/api/v1/post/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userid: form.userid,
                        model: form.model,
                        prompt: form.prompt,
                        negative_prompt: form.negative_prompt,
                        image: form.image || 'https://d1okzptojspljx.cloudfront.net/generations/cd8f53f5-ebb9-45bc-b8cb-d6be2cc6cfa9-0.png',
                    }),
                });
                const data = await response.json();
                if(data.status === 'ok'){
                    navigate('/')
                }


            } catch (error) {
                alert(error);
            } finally {
                setLoading(false);
            }

        } else {
            alert("llenar el campo");
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (form.prompt && form.prompt.length > 5) {
            try {
                setLoading(true);
                //* FETCH
                const response = await fetch("http://localhost:8000/api/v1/generate", {
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

                if (data.msg) {
                    throw new Error('Fuera de servicio')
                }

                setForm({
                    ...form,
                    image: data.image,
                });
            } catch (error) {
                alert(error);
            } finally {
                setLoading(false);
            }
        } else {
            alert("llenar el campo");
        }
    };

    return {
        loading,
        form,
        models,
        handleChange,
        handleSubmit,
        createPost,
        handleModel,
        removerModel
    };
};


