import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
           apiKey: 'cbf49a28782e49479384dbfa58b8a11b', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
