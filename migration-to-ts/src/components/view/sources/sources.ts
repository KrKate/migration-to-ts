import './sources.css';

type NewsItem = {
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


class Sources {
    draw(data: NewsItem[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;;

        data.forEach((item: NewsItem): void => {
            const sourceClone = sourceItemTemp!.content.cloneNode(true) as HTMLTemplateElement;
            sourceClone.querySelector('.source__item-name')!.textContent = item.name;
            sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;

/* Отрисовывает кнопки с темами новостей на странице
Принимает данные в виде массива объектов, где каждый объект источник новости
#sourceItemTemp это шаблон вида 'фото...контент' для создания news_item
Добавляет созданные news_item в фрагмент документа и вставляет его в контейнер ".sources" на странице 
data - массив/объект с данными где всё string??? */