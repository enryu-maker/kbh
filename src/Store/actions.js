import { URLS } from "../Helper/Helper";
import axios from "axios";
export const getProducts = (setLoading) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axios.get(URLS.testing + `products/`);
            console.log(response.data)
            dispatch({
                type: 'PRODUCTS',
                payload: response.data,
            })
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
}

export const getGallery = (setLoading) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axios.get(URLS.testing + `gallery/`);
            console.log(response.data)
            dispatch({
                type: 'GALLERY',
                payload: response.data,
            })
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
}

export const getAbout = (setLoading) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axios.get(URLS.testing + `aboutus/`);
            console.log(response.data)
            dispatch({
                type: 'ABOUT',
                payload: response.data,
            })
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
}

export const getCompany = (setLoading) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axios.get(URLS.testing + `company/`);
            console.log(response.data)
            dispatch({
                type: 'COMPANY',
                payload: response.data,
            })
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
}

export const getBanner = (setLoading) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axios.get(URLS.testing + `banner/`);
            console.log(response.data)
            dispatch({
                type: 'BANNER',
                payload: response.data,
            })
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
}

export const getCommunity = (setLoading) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axios.get(URLS.testing + `person/desg/`);
            console.log(response.data)
            dispatch({
                type: 'COMMUNITY',
                payload: response.data,
            })
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
}