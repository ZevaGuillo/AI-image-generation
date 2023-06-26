import { Model } from "../types/model";

export const modelList: Model[] = [
    {
        name: 'majicMIX Fantasy',
        mode_id: 'majicmixfantasy',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687821322/PixelAI/2981986281684908770_soipeb.jpg',
        active: false
    }, 
    {
        name: 'Disney Pixal Cartoon Type',
        mode_id: 'disney-pixal-cartoon',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687821406/PixelAI/42705-1080836037-_masterpiece_best_quality_ultra-detailed_highly_detailed_CG_illustration_an_extremely_delicate_and_beauti_z6ujvf.jpg',
        active: false
    },
    {
        name: 'Dream Shaper',
        mode_id: 'dream-shaper-8797',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687820345/PixelAI/5_m5hmxw.png',
        active: false
    },
    {
        name: 'Redshift Diffusion',
        mode_id: 'redshift-diffusion',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687820433/PixelAI/9860833e-e8f7-404a-94dc-270b25df05c8-0_v3rxyp.png',
        active: false
    },
    {
        name: 'Arcane Diffusion',
        mode_id: 'arcane-diffusion',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687820482/PixelAI/69438-3187489593-arcane_style___1girl_arm_tattoo_asymmetrical_bangs_bangs_blue_hair_braid_brown_shirt_cloud_tattoo_looking_at_viewer_lau_nrwaj7.jpg',
        active: false
    },
    {
        name: 'Stable Diffusion 2.1',
        mode_id: 'stable-diffu-5089',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687820631/PixelAI/1628938322191950983_imaixu.jpg',
        active: false
    },
    {
        name: 'Vintedois',
        mode_id: 'vintedois-diffusion',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687820692/PixelAI/vintedois_qvkvvw.png',
        active: false
    },
    {
        name: 'Deliberate',
        mode_id: 'deliberate',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687820733/PixelAI/download_eqxzd5.jpg',
        active: false
    },
    {
        name: 'Elldreth Vivid Mix',
        mode_id: 'elldreths-vi',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687820781/PixelAI/12373-3660953056-award_winning_waist_up_photo_of_a_rugged_fantasy_wizard_8K_wizard_hat_wearing_torn_wizard_robes_old_and_wrinkled_long_white_z4flgy.jpg',
        active: false
    },
    {
        name: 'Realistic Vision V1.3',
        mode_id: 'realistic-vision-v13',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687820851/PixelAI/download_xbpa4p.jpg',
        active: false
    },
    {
        name: 'OpenJourney V2',
        mode_id: 'midjourney-v2',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687820869/PixelAI/out-0_ww5vmc.png',
        active: false
    },
    {
        name: 'Anything V4',
        mode_id: 'anything-v4',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687820897/PixelAI/Anything_v4_sucks_00004-2158472955-a_happy_furry_fandom_male_Khajiit_white_brown_male_tiger_big_nose_round_iris_wears_an_open_jacket_close_up_masculine_zs1azq.jpg',
        active: false
    },
    {
        name: 'Low Poly World',
        mode_id: 'lowpoly-diffusion',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687820942/PixelAI/prompthero-prompt-4194159f9d3_qbcwqv.png',
        active: false
    },

    {
        name: 'F222',
        mode_id: 'f222-diffusion',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687820974/PixelAI/prompthero-prompt-af7e72451e1_a8rsdd.webp',
        active: false
    },
    {
        name: 'MidJourney PaperCut',
        mode_id: 'midjourney-papercut',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687820995/PixelAI/1668139335005-633a520aecbd8b19357b4806_iya7bj.png',
        active: false
    },
    {
        name: 'Robo Diffusion',
        mode_id: 'robo-diffusion',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687821023/PixelAI/robo_example_byfqln.png',
        active: false
    },

    {
        name: 'GTA5 Artwork Diffusion',
        mode_id: 'gta5-artwork-diffusi',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687821046/PixelAI/1670902497106-635eafb49f24f6db0a1eafd1_gbgti8.png',
        active: false
    },
    {
        name: 'MidJourney V4',
        mode_id: 'midjourney',
        image_url: 'https://res.cloudinary.com/dzx6dg1ws/image/upload/v1687821069/PixelAI/8-midjourney-v4-v0-774tqcg0fz5a1_ngbk53.webp',
        active: false
    },
]

export const getActiveFalse = () => {
    return modelList.map(model => ({ ...model, active: false }));
}