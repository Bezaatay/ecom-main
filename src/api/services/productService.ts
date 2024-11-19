import { ApiURLs } from '../apiURLs';
import { callAPI } from '../core';
import { Product } from '../models/ProductModel';

const fetchProducts = async (): Promise<Product[]> => {

    return callAPI({
        endPoint: ApiURLs.products,
        method: 'GET'
    }).then(
        (response) => {
            return Promise.resolve(response.data)
        }
    )
};

export const getProductsByTitle = async (query: string): Promise<Product[]> => {
    return callAPI({
        endPoint: ApiURLs.products,
        method: "GET",
        query: new Map([[query, "title"]]),
    }).then((response) => {
        return Promise.resolve(response.data);
    });
};

export const getProductById = async (id: number): Promise<Product> => {
    return callAPI({
        endPoint: `${ApiURLs.products}/${id}`,
        method: "GET",
    }).then((response) => {
        return Promise.resolve(response.data);
    });
};

export const getProductsByPriceFilter = async (min: string, max: string): Promise<Product[]> => {
    return callAPI({
        endPoint: ApiURLs.products,
        method: "GET",
        query: new Map([[min, "price_min"], [max, "price_max"]]),
    }).then((response) => {
        return Promise.resolve(response.data)
    })
};


export { fetchProducts }