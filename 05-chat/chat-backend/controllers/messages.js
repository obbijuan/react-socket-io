const Mensaje = require('../models/message');

const getChat = async( req, res ) => {

    const miId = req.uid;
    const mensajesDe = req.params.de;

    // Obtiene los ultimos 30 mensajes
    const last30 = await Mensaje.find({
        $or: [
            { de: miId, para: mensajesDe },
            { de: mensajesDe, para: miId },
        ]
    })
    .sort({ createdAt: 'desc' })
    .limit(30);


    res.json({
        ok: true,
        mensajes: last30
    });

}

module.exports = {
    getChat
}