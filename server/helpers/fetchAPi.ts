
const options = (prompt: string, negative_prompt: string, width: string, height: string) => ({
    "key": process.env.SD_API_Key,
    "prompt": prompt,
    "negative_prompt": negative_prompt + " nsfw, nude, tits, pussy, masturbating, cum, breasts, small_breasts",
    "width": width,
    "height": height,
    "samples": "1",
    "num_inference_steps": 60,
    "seed": 2029243644,
    "guidance_scale": 13,
    "safety_checker": "yes",
    "webhook": null,
    "track_id": null
})

interface optionsWithModel extends ReturnType<typeof options> {
    model_id?: string
}

export const fetchApi = async (prompt: string, negative_prompt: string, model: string, width: string, height: string) => {
    const gen = options(prompt, negative_prompt, width, height) as optionsWithModel
    gen.model_id = model


    const response = await fetch('https://stablediffusionapi.com/api/v3/dreambooth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(gen)
    })

    return await response.json();
}

export const fetchApiWithoutModel = async (prompt: string, negative_prompt: string, width: string, height: string) => {
    const gen = options(prompt, negative_prompt, width, height)

    const response = await fetch('https://stablediffusionapi.com/api/v3/text2img', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(gen)
    })

    return await response.json();
}