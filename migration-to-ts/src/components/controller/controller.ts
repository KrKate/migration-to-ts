import AppLoader from './appLoader';
import { GCallback, SourcesInterface, NewsInterface } from '../../types'
import { Endpoint } from '../../enums/enums'


class AppController extends AppLoader {
    public getSources(callback: GCallback<SourcesInterface>) {
        super.getResp(
            {
                endpoint: Endpoint.Sources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: GCallback<NewsInterface>): void {
        let target = e.target instanceof HTMLElement ? e.target : null;
        const currentTarget = e.currentTarget instanceof HTMLElement ? e.currentTarget : null;;
        const newsContainer: HTMLElement | null = currentTarget;

        while (target !== newsContainer) {
            if (target instanceof HTMLElement && target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if ((newsContainer)!.getAttribute('data-source') !== sourceId) {
                    (newsContainer)!.setAttribute('data-source', sourceId);
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
            target = target!.parentNode as HTMLElement | null;
        }
    }
}

export default AppController;
