import './sources.css';
import {SourcesType} from '../../../types/index'

class Sources {
    public draw(data: SourcesType[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item: SourcesType): void => {
            const sourceClone = <HTMLTemplateElement>sourceItemTemp!.content.cloneNode(true);
            sourceClone.querySelector('.source__item-name')!.textContent = item.name;
            sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
