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

export {NewsType, SourcesType, NewsInterface, SourcesInterface}