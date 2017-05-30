class Requests {
    static getData(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => resolve(response.json()), err => reject(err));
        })
    }

    static postData(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST", headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => resolve(response.text(), err => reject(err)))
        })
    }

    static putData(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT", headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => resolve(response.text(), err => reject(err)))
        })
    }

    static deleteData(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE", headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
                .then(response => resolve(response.text(), err => reject(err)))
        })
    }
}

export { Requests };