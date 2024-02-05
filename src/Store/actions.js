import { URLS } from "../Helper/Helper";
import axios from "axios";
export const getProducts = (setLoading) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axios.get(URLS.testing + `products/`);
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
export const getHeaderLogo = (setLoading) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axios.get(URLS.testing + `banner/logo/`);
            dispatch({
                type: 'LOGO',
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
export const getHomeProduct = (setLoading) => {
    return async dispatch => {
        setLoading(true);
        try {
            let response = await axios.get(URLS.testing + `products/getproductshome/`);
            dispatch({
                type: 'HOME',
                payload: response.data,
            })
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
}