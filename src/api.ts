import axios from "axios";

export const apiGet = (url: string) => {
    return axios.get(url)
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error
        });
};