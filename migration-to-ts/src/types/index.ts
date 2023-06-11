type NewsType = {
    // source: { id: string, name: string };
    id: string,
    name: string
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  };

type SourcesType = {
    // source: { id: string, name: string };
    id: string;
    name: string
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

interface NewsInterface {
  status: string;
  totalResults: number;
  articles: Array<SourcesType>;
}

interface SourcesInterface {
  status: string;
  sources: Array<NewsType>
}


interface LoaderErrorHandler {
  ok: boolean;
  status: number,
  statusText: string;
  json(): void;
}

type GCallback<T> = (data?: T) => void;

type GSources<T> = {sources: T};

interface LoaderEndpoint<T> {
  endpoint: string;
  options: GSources<T>;
}


export {NewsType, SourcesType, NewsInterface, SourcesInterface, LoaderEndpoint, LoaderErrorHandler, GCallback, GSources}