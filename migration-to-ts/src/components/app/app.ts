import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { SourcesInterface, NewsInterface } from '../../types'

class App {
    controller: AppController;

    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesElement = document.querySelector('.sources');
        if (sourcesElement) {
            sourcesElement.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data as NewsInterface)));
        }
        this.controller.getSources((data) => this.view.drawSources(data as SourcesInterface));
    }
}

export default App;
