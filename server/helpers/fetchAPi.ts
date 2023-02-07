export const fetchApi = async (prompt: string, negative_prompt: string, model: string) => {
    const gen = {
        "key": process.env.SD_API_Key,
        "model_id": model,
        "prompt": prompt,
        "negative_prompt": negative_prompt,
        "width": "512",
        "height": "512",
        "samples": "1",
        "num_inference_steps": 60,
        "safety_checker": "not",
        "seed": 2029243644,
        "guidance_scale": 13,
        "webhook": null,
        "track_id": null
    }
    console.log(JSON.stringify(gen));
    
    const response = await fetch('https://stablediffusionapi.com/api/v3/dreambooth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(gen)
    })

    return await response.json();
}

export const fetchApiWithoutModel = async (prompt: string, negative_prompt: string) => {
    const gen = {
        "key": process.env.SD_API_Key,
        "prompt": prompt,
        "negative_prompt": negative_prompt,
        "width": "512",
        "height": "512",
        "samples": "1",
        "num_inference_steps": 60,
        "seed": 2029243644,
        "guidance_scale": 13,
        "safety_checker": "not",
        "webhook": null,
        "track_id": null
    }
    console.log(JSON.stringify(gen));
    
    const response = await fetch('https://stablediffusionapi.com/api/v3/text2img', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(gen)
    })

    return await response.json();
}