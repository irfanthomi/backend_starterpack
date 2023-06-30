module.exports = function(promise) {
    return promise.then(data => {
        return [undefined, data];
    })
        .catch(err => {
            return [err];
        });
};
