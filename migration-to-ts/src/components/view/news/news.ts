import './news.css';
import {NewsPick} from '../../../types/index'
import placeholder from "./placeholder-news.jpg"

class News {
    public draw(data: NewsPick[]): void {
        const news = data.length >= 10 ? data.filter((_item: NewsPick, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');

        news.forEach((item: NewsPick, idx: number): void => {
            if (newsItemTemp instanceof HTMLTemplateElement) {
                const newsClone = newsItemTemp.content.cloneNode(true) as Element;
                    if (idx % 2 && newsClone instanceof Element)
                newsClone.querySelector('.news__item')?.classList.add('alt');

            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo');

            if (newsMetaPhoto instanceof HTMLElement) {
                newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || placeholder})`;
                newsClone.querySelector('.news__meta-author')!.textContent = item.author || item.name;
                newsClone.querySelector('.news__meta-date')!.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

                newsClone.querySelector('.news__description-title')!.textContent = item.title;
                newsClone.querySelector('.news__description-source')!.textContent = item.name;
                newsClone.querySelector('.news__description-content')!.textContent = item.description;
                newsClone.querySelector('.news__read-more a')!.setAttribute('href', item.url);

                fragment.append(newsClone);
            }
            }

        });

        document.querySelector('.news')!.innerHTML = '';
        document.querySelector('.news')!.appendChild(fragment);
    }
}

export default News;
