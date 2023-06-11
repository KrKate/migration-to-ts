import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'cbf49a28782e49479384dbfa58b8a11b', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
