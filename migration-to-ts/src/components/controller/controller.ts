import AppLoader from './appLoader';
import { GCallback, SourcesInterface, NewsInterface } from '../../types'

enum Endpoint {
    Sources = 'sources',
    everything = 'everything'
}

class AppController extends AppLoader {
    getSources(callback: GCallback<SourcesInterface>) {
        super.getResp(
            {
                endpoint: Endpoint.Sources,
            },
            callback
        );
    }

    getNews(e: { target: HTMLElement | null } & { currentTarget: HTMLElement }, callback: GCallback<NewsInterface>): void {
        let {target} = e;
        const newsContainer: HTMLElement = e.currentTarget;

        while (target !== newsContainer) {
            if ((target as HTMLElement).classList.contains('source__item')) {
                const sourceId = target!.getAttribute('data-source-id') as string;
                if ((newsContainer).getAttribute('data-source') !== sourceId) {
                    (newsContainer).setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoint.everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target?.parentNode as HTMLElement | null;
        }
    }
}

export default AppController;
