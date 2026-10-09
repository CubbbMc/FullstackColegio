import { Schema, model, set } from "mongoose";

const esquemaMaestro = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    materia: {
        type: String,
        required: true,
        trim: true
    },
    experiencia: {
        type: Number,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        trim: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/, "email invalido"]
    },
    contraseña: {
        type: String,
        required: true,
        match: [/^(?=.*[a-zA-Z0-9!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`])\S+$/, 'password invalido']
    },
    rol:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
        set: v => {
            const rolesValidos = ['user', 'admin'];
            if (!v || typeof v !== 'string' || v.trim()=== '' || !rolesValidos.includes(v)) 
                {
                    return 'user';
                }
        return v;
    }
    }
});
export default model('maestro', esquemaMaestro);