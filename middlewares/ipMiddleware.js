
function ipMiddleware(request, response, next) {
    const {ip} = request;
    if (ip !== '::1') {
        return response.sendStatus(403);
    }
    next();
}

module.exports = {ipMiddleware};