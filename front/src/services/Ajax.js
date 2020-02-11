class Ajax {

    call(options) {
        let fetchOptions = {
            method: options.method,
            headers: new Headers({})
        };

        fetchOptions.headers.append('Accept', 'application/json');

        if (typeof options.json === 'object') {
            fetchOptions.headers.append('Content-Type', 'application/json');
            fetchOptions.body = JSON.stringify(options.json);
        }

        return fetch(options.url, fetchOptions).then(response => {
            return response;
        }, err => {
            throw err;
        });
    }
}

export default new Ajax();
