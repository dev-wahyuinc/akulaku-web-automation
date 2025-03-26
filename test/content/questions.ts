import { By, PageElement, PageElements } from '@serenity-js/web';

export const contentTitle = (text: string) =>
    PageElement.located(
        By.xpath('//div[contains(text(),"Literasi & Inklusi Keuangan")]'),
    ).describedAs('Page Title'); //div[contains(text(),'Pencarian tidak ditemukan')]

const contentSection = PageElement.located(
    By.css('div.pt-\\[40px\\].w-full'),
).describedAs('Content Section');

export const contentItems = PageElements.located(By.css('a[href]'))
    .describedAs('lists of content')
    .of(contentSection);

export const paginationSection = PageElement.located(
    By.css('nav[aria-label="Page navigation example"]'),
).describedAs('Pagination Section');

export const searchInput = PageElements.located(
    By.css('input[placeholder="Cari..."]'),
)
    .describedAs('Search Input')
    .first();

export const searchResultSection = PageElement.located(
    By.css('div.m-\\[10px\\]'),
).describedAs('Search Result');

export const searchResultItems = PageElements.located(By.css('div.flex'))
    .describedAs('Search Result Items')
    .of(searchResultSection);

export const loading = PageElement.located(
    By.xpath('//div[contains(text(),"Loading...")]'),
).describedAs('Loading');
