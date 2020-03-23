export default class Application {
    constructor(url) {
        this.url = url;
        this.datas = null;
        // this.loadJson()
    }

    loadJson() {
        return new Promise((resolve,reject) => {
           fetch(this.url)
            .then(res => res.json())
            .then(res => {
                this.datas = res;
                resolve('ok c bon');
            })
            .catch(err => reject(err));
        });
    }

    getTitles() {
        return this.datas.reduce((prev, next) => `${prev}<li>${next.filename}</li>` ,"")
    }
}

// export default Application