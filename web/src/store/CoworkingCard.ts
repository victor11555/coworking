import { makeAutoObservable } from 'mobx';

type ICoworkingListItem = {
    id: number;
    coworkingName: string;
    description: string;
    images: string[];
    metro: string;
    rating: number;
}

interface ICoworkingCard {
    coworkingList: ICoworkingListItem[]
}

class CoworkingCard implements ICoworkingCard {

    coworkingList: ICoworkingListItem[] = [
        {
            id: 1,
            coworkingName: 'Первый коворгинг',
            description: 'Какое-то краткое описание коворкинга, которое будем брать из поля, которое заполнит менеджер коворкинга.',
            images: ['https://www.kovorkingi.ru/data/files/img/std/1000000/1000/307-resepshn-377330e65012.jpg', 'https://www.kovorkingi.ru/data/files/img/std/1000000/1000/239-rabochie-mesta-1fe1583985b1.jpg', 'https://www.kovorkingi.ru/data/files/img/std/1000000/1000/258-kovorking-zal1-de9920af189c.jpg'],
            metro: 'Невский проспект',
            rating: 4,
        },
        {
            id: 2,
            coworkingName: 'Второй коворгинг',
            description: 'Какое-то краткое описание коворкинга, которое будем брать из поля, которое заполнит менеджер коворкинга.',
            images: ['https://www.kovorkingi.ru/data/files/img/std/1000000/1000/307-resepshn-377330e65012.jpg', 'https://www.kovorkingi.ru/data/files/img/std/1000000/1000/239-rabochie-mesta-1fe1583985b1.jpg', 'https://www.kovorkingi.ru/data/files/img/std/1000000/1000/258-kovorking-zal1-de9920af189c.jpg'],
            metro: 'Чернышевская',
            rating: 3,
        },
        {
            id: 3,
            coworkingName: 'Третий коворгинг',
            description: 'Какое-то краткое описание коворкинга, которое будем брать из поля, которое заполнит менеджер коворкинга.',
            images: ['https://www.kovorkingi.ru/data/files/img/std/1000000/1000/307-resepshn-377330e65012.jpg', 'https://www.kovorkingi.ru/data/files/img/std/1000000/1000/239-rabochie-mesta-1fe1583985b1.jpg', 'https://www.kovorkingi.ru/data/files/img/std/1000000/1000/258-kovorking-zal1-de9920af189c.jpg'],
            metro: 'Международная',
            rating: 4,
        },
        {
            id: 4,
            coworkingName: 'Четвертый коворгинг',
            description: 'Какое-то краткое описание коворкинга, которое будем брать из поля, которое заполнит менеджер коворкинга.',
            images: ['https://www.kovorkingi.ru/data/files/img/std/1000000/1000/307-resepshn-377330e65012.jpg', 'https://www.kovorkingi.ru/data/files/img/std/1000000/1000/239-rabochie-mesta-1fe1583985b1.jpg', 'https://www.kovorkingi.ru/data/files/img/std/1000000/1000/258-kovorking-zal1-de9920af189c.jpg'],
            metro: 'Гостиный двор',
            rating: 2,
        },
        {
            id: 5,
            coworkingName: 'Пятый коворгинг',
            description: 'Какое-то краткое описание коворкинга, которое будем брать из поля, которое заполнит менеджер коворкинга.',
            images: ['https://www.kovorkingi.ru/data/files/img/std/1000000/1000/307-resepshn-377330e65012.jpg', 'https://www.kovorkingi.ru/data/files/img/std/1000000/1000/239-rabochie-mesta-1fe1583985b1.jpg', 'https://www.kovorkingi.ru/data/files/img/std/1000000/1000/258-kovorking-zal1-de9920af189c.jpg'],
            metro: 'Маяковская',
            rating: 5,
        },
    ];

    constructor() {
        makeAutoObservable(this)
    }

    // fetch для получения карточек коворкингов
    fetchGetCoworkingList() {
        fetch('http://www.site.com/')
            .then(res => res.json())
            .then(data => {
                this.coworkingList = [...this.coworkingList, ...data]
            })
    }

}

export default new CoworkingCard();