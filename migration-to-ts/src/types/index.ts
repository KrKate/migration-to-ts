type NewsType = {
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


interface NewsInterface {
  status: string;
  totalResults: number;
  articles: Array<NewsType>;
}

interface SourcesInterface {
  status?: string;
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
  options?: GSources<T>;
}

type NewsPick = Pick<NewsType, 'title' | 'description' | 'url' | 'urlToImage' | 'author' | 'name' | 'publishedAt'>;

enum Endpoint {
  Sources = 'sources',
  everything = 'everything'
}

enum ErrorStatus {
  Unauthorized = 401,
  NotFound = 404
}

export {NewsType, NewsInterface, SourcesInterface, LoaderEndpoint, LoaderErrorHandler, GCallback, GSources, NewsPick, Endpoint, ErrorStatus}
