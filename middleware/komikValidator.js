const Joi = require('joi');

function errorResponse(res, message, status, details = null) {
    return res.status(status).json({
        succes: false,
        message,
        data: null,
        error: details,
    });
}

