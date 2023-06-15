import './news.css';
import {NewsPick} from '../../../types/index'

class News {
    public draw(data: NewsPick[]): void {
        const news = data.length >= 10 ? data.filter((_item: NewsPick, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

        news.forEach((item: NewsPick, idx: number): void => {
            const newsClone = <Element>newsItemTemp.content.cloneNode(true);

            if (idx % 2)
                newsClone.querySelector('.news__item')?.classList.add('alt');

            const newsMetaPhoto = <HTMLElement>newsClone.querySelector('.news__meta-photo');
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder'})`;
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
        });

        document.querySelector('.news')!.innerHTML = '';
        document.querySelector('.news')!.appendChild(fragment);
    }
}

export default News;
