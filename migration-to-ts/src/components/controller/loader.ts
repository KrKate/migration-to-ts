import {LoaderErrorHandler, LoaderEndpoint, GCallback, GSources } from '../../types'

enum ErrorStatus {
    Unauthorized = 401,
    NotFound = 404
}

class Loader {
    readonly baseLink: string;

    readonly options: { apiKey: string };

    constructor(baseLink: string, options: {readonly apiKey: string }) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<T>(
        { endpoint, options }: LoaderEndpoint<T>,
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

// ok, status, statusText=message  https://newsapi.org/docs/errors
    private errorHandler(res: LoaderErrorHandler): LoaderErrorHandler {
        if (!res.ok) {
            if (res.status === ErrorStatus.Unauthorized || res.status === ErrorStatus.NotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    private makeUrl<T>(options: GSources<T> | undefined, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.entries(urlOptions).forEach(([key, value]): void => {
            url += `${key}=${value ?? ''}&`;
        });

        return url.slice(0, -1);
    }

// json()
    private load<T>(method: string, endpoint: string, callback: GCallback<T>, options: GSources<T> | undefined) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data as T))
            .catch((err) => console.error(err));
    }
}

export default Loader;