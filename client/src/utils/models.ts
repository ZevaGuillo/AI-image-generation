import { Model } from "../types/model";

export const modelList: Model[] = [
    
    {
        name: 'Dream Shaper',
        mode_id: 'dream-shaper-8797',
        image_url: 'https://d1okzptojspljx.cloudfront.net/generations/9782515001675014614.png',
        active: false
    },
    {
        name: 'Redshift Diffusion',
        mode_id: 'redshift-diffusion',
        image_url: 'https://d1okzptojspljx.cloudfront.net/generations/12363803511669563372.png',
        active: false
    },
    {
        name: 'Arcane Diffusion',
        mode_id: 'arcane-diffusion',
        image_url: 'https://d1okzptojspljx.cloudfront.net/generations/1493213501669561761.png',
        active: false
    },
    {
        name: 'Stable Diffusion 2.1',
        mode_id: 'stable-diffu-5089',
        image_url: 'https://d1okzptojspljx.cloudfront.net/generations/1829088371675101187.png',
        active: false
    },
    {
        name: 'Project Unreal Engine 5',
        mode_id: 'project-unreal-engin',
        image_url: 'https://d1okzptojspljx.cloudfront.net/generations/171433501675425853.png',
        active: false
    },
    {
        name: 'Vintedois',
        mode_id: 'vintedois-diffusion',
        image_url: 'https://stablediffusionapi.com/storage/generations/vintedois.png',
        active: false
    },
    {
        name: 'Deliberate',
        mode_id: 'deliberate',
        image_url: 'https://d1okzptojspljx.cloudfront.net/generations/3577020801675158232.png',
        active: false
    },
    {
        name: 'Elldreth Vivid Mix',
        mode_id: 'elldreths-vi',
        image_url: 'https://d1okzptojspljx.cloudfront.net/generations/5642196911675175414.png',
        active: false
    },
    {
        name: 'Realistic Vision V1.3',
        mode_id: 'realistic-vision-v13',
        image_url: 'https://d1okzptojspljx.cloudfront.net/generations/593190021675281138.png',
        active: false
    },
    {
        name: 'OpenJourney V2',
        mode_id: 'midjourney-v2',
        image_url: 'https://stablediffusionapi.com//storage/generations/out-0.png',
        active: false
    },
    {
        name: 'Babes',
        mode_id: 'babes',
        image_url: 'https://d1okzptojspljx.cloudfront.net/generations/479676201675092529.png',
        active: false
    },
    {
        name: 'Anything V4',
        mode_id: 'anything-v4',
        image_url: 'https://d1okzptojspljx.cloudfront.net/generations/14779611201675081298.png',
        active: false
    },
    {
        name: 'redream',
        mode_id: 'redream',
        image_url: 'https://d1okzptojspljx.cloudfront.net/generations/21177596551674938226.png',
        active: false
    },

    {
        name: 'Low Poly World',
        mode_id: 'lowpoly-diffusion',
        image_url: 'https://stablediffusionapi.com//storage/generations/lowpoly.png',
        active: false
    },

    {
        name: 'F222',
        mode_id: 'f222-diffusion',
        image_url: 'https://d1okzptojspljx.cloudfront.net/generations/6729910051670825439.png',
        active: false
    },
    {
        name: 'MidJourney PaperCut',
        mode_id: 'midjourney-papercut',
        image_url: 'https://s3.amazonaws.com/moonup/production/uploads/1668139335005-633a520aecbd8b19357b4806.png',
        active: false
    },
    {
        name: 'SynthwavePunk',
        mode_id: 'synthwave-diffusion',
        image_url: 'https://s3.amazonaws.com/moonup/production/uploads/1670018139245-635eafb49f24f6db0a1eafd1.png',
        active: false
    },
    {
        name: 'Robo Diffusion',
        mode_id: 'robo-diffusion',
        image_url: 'https://d1okzptojspljx.cloudfront.net/generations/17449677621669563875.png',
        active: false
    },

    {
        name: 'GTA5 Artwork Diffusion',
        mode_id: 'gta5-artwork-diffusi',
        image_url: 'https://d1okzptojspljx.cloudfront.net/generations/20313028851675529498.png',
        active: false
    },
    {
        name: 'MidJourney V4',
        mode_id: 'midjourney',
        image_url: 'https://d1okzptojspljx.cloudfront.net/generations/14853540911669470514.png',
        active: false
    },
]

export const getActiveFalse = ()=>{
    return modelList.map(model => ({...model, active:false}));
}