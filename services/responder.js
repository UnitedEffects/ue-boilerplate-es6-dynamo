/**
 * Created by bmotlagh on 10/19/17.
 */
const respond = {
    send(res, output) {
        let status;
        if (!output.code || output.code === null)status = 200;
        else status = output.code;
        const resp = {
            code: output.code,
            type: output.type,
            data: output.data,
            message: output.message
        };
        res.status(status).json(resp);
    },
    send200(res, message, type) {
        res.json({ type, data: message || 'success' });
    }
};

export default respond;
