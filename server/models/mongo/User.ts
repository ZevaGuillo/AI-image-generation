import { model, Schema } from "mongoose"

const UsuarioSchema = new Schema({
    username:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    }
})

export default model('User', UsuarioSchema)
