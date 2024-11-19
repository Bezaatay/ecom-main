import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { useLoaderStore } from '../store/loaderStore';

const BASE_URL = 'https://api.escuelajs.co/api/v1';

type Option = {
    hideLoading?: boolean;
    endPoint: string;
    method: Method;
    body?: Object;
    query?: Map<string, string>
}

const setUpInterceptor = (instance: AxiosInstance, option: Option) => {
    instance.interceptors.request.use(function (config) {
        if (!option.hideLoading) {
            useLoaderStore.getState().setIsLoading(true)
        }
        return config;
    }, function (error) {
        console.log("istek atılırken hata meydana geldi")

        return Promise.reject(error);
    });

    instance.interceptors.response.use(function (response) {
        useLoaderStore.getState().setIsLoading(false)

        return response;
    }, function (error) {
        console.log("servis hata verdi")

        return Promise.reject(error);
    });
}

const generateURL = (option: Option) => {
    let URL = BASE_URL + option.endPoint

    if (option.query) {
        URL = URL + "/?"
        const list: String[] = []
        option.query.forEach((key, value) => {
            list.push(key + "=" + value)

        })
        URL = URL + list.join("&")
    }
    console.log(URL)
    return URL
}

const callAPI = (option: Option): Promise<AxiosResponse> => {
    const instance = axios.create();

    setUpInterceptor(instance, option)

    const config: AxiosRequestConfig = {
        url: generateURL(option),
        method: option.method,
        data: option.method === "GET" ? undefined : option.body
    }

    return instance.request(config)
}
export { callAPI }