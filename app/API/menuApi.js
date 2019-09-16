import axios from 'axios';

export const getMenumMain = () => {
    return axios
        .get(`${apiUrl}/menucontent`)
};

export const getDishesList = (id) =>  {
    return axios
        .get(`${apiUrl}/dishesList/${id}`)
}
