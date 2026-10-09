import mongoose from "mongoose";


mongoose
    .connect(process.env.DATABASE)
    .then(() => {
        console.log("Conectado exitosamente a MongoDB Atlas");
    })
    .catch((error) => {
        console.error("Error de conexion:", error.message);
    });


