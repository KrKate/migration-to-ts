import './sources.css';
import {NewsType} from '../../../types/index'

class Sources {
    public draw(data: NewsType[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        if (sourceItemTemp instanceof HTMLTemplateElement) {
            data.forEach((item: NewsType): void => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;
            sourceClone.querySelector('.source__item-name')!.textContent = item.name;
            sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')!.append(fragment);
    }
        }
}

export default Sources;
