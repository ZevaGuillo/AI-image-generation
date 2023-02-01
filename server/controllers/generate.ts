import { Request, Response } from "express"

export const generateImage = async (req: Request, res: Response) => {
    console.log(req.body);
    const { prompt } = req.body;

    try {

        const response = await fetch('https://stablediffusionapi.com/api/v3/text2img', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "key": process.env.SD_API_Key,
                "prompt": prompt,
                "negative_prompt": "",
                "width": "512",
                "height": "512",
                "samples": "1",
                "num_inference_steps": "20",
                "seed": null,
                "guidance_scale": 7.5,
                "safety_checker": "yes",
                "webhook": null,
                "track_id": null
            })
        })
        const data = await response.json()

        console.log(data);

        res.status(200).json({
            'image': data.output[0]
        })

    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message || 'Something went wrong')
    }
}