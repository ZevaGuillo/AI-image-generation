import { useState } from "react";
import { Post } from "../types/post";

export const useGenerator = () => {


    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState<Post>({
        username: "",
        prompt: "",
        image: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const createPost = async () => {

        if (form.prompt && form.username) {
            try {

                const response = await fetch("http://localhost:8080/api/v1/post/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: form.prompt,
                        model: 'stable diffusion',
                        prompt: form.prompt,
                        image: form.image || 'https://d1okzptojspljx.cloudfront.net/generations/cd8f53f5-ebb9-45bc-b8cb-d6be2cc6cfa9-0.png',
                    }),
                });
                const data = await response.json();
                console.log(data);
                
                
            }catch (error) {
                alert(error);
            } finally {
                // setLoading(false);
                // TODO: loading post
                console.log('se hizo algo')
            }

        } else {
            alert("llenar el campo");
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (form.prompt && form.username) {
            setLoading(true);

            try {
                //* FETCH
                const response = await fetch("http://localhost:8080/api/v1/generate", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        prompt: form.prompt,
                    }),
                });
                const data = await response.json();

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
        handleChange,
        handleSubmit,
        createPost
    };
};


