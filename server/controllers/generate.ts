import { Request, Response } from "express"
import { fetchApi, fetchApiWithoutModel } from "../helpers/fetchAPi";
import User from "../models/mongo/User";

export const generateImage = async (req: Request, res: Response) => {
    const { prompt, negative_prompt, model, width, height } = req.body;

    const userId = req.user['_id'];
    const user = await User.findById(userId);

    try {
        let data;
        if(model===''){
            data = await fetchApiWithoutModel(prompt, negative_prompt, width, height)
        }else{

            data = await fetchApi(prompt, negative_prompt, model, width, height)
        }

        if( data.message === 'Server Error' || data.status === 'failed'){
            return res.status(500).json({
                'message': 'Try without selecting a model'
            })
        }

        // REFACTOR---

        if (data.status === 'processing') {
            console.log('prrroocceessisingg');
            
            setTimeout(async() => {
                const response = await fetch(data.fetch_result, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "key": process.env.SD_API_Key,
                    })
                })
            
                data = await response.json();
                user.credits -= 1;
                user.history.push({prompt, negative_prompt, model, image: data.output[0]})
                await user.save();
                return res.status(200).json({
                    'image': data.output[0]
                })
            }, 60500);

            

        }else if(data.status === 'error'){
            return res.status(500).json({
                'message': 'Out of service'
            })
        }else{
            user.credits -= 1;
            user.history.push({prompt, negative_prompt, model, image: data.output[0]})
            await user.save();

            return res.status(200).json({
                'image': data.output[0]
            })
        }

        
    } catch (error) {
        res.status(500).send('Something went wrong')
    }
}

export const verifyCredits = async (req: Request, res: Response)=>{
    const userId = req.user['_id'];
    try {
        const user = await User.findById(userId);
        return res.status(200).json({
            'credits': user.credits
        })
    } catch (error) {
        res.status(500).send('Something went wrong')
    }
}