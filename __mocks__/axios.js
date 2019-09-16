"use strict";

export const getMenuListMock = (url) => {
    return Promise.resolve([
            {
                id: 0,
                name: 'Entrées',
                img: 'https://via.placeholder.com/100',
            },
            {
                id: 1,
                name: 'Plats principal',
                img: 'https://via.placeholder.com/100',
            },
            {
                id: 2,
                name: 'Desserts',
                img: 'https://via.placeholder.com/100',
            },
            {
                id: 3,
                name: 'Menus',
                img: 'https://via.placeholder.com/100',
            },
            {
                id: 4,
                name: 'Spécialités',
                img: 'https://via.placeholder.com/100',
            },
            {
                id: 6,
                name: 'Plats du jour',
                img: 'https://via.placeholder.com/100',
            }
        ]
    );
};
