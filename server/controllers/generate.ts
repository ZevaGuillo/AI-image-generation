import { Request, Response } from "express"
import { fetchApi } from "../helpers/fetchAPi";

export const generateImage = async (req: Request, res: Response) => {
    console.log(req.body);
    const { prompt } = req.body;

    try {

        const data = await fetchApi(prompt)

        console.log(data);

        res.status(200).json({
            'image': data.output[0]
        })

    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message || 'Something went wrong')
    }
}