import axios from 'axios'

const baseURL = 'https://fakestoreapi.com/products'

const getAllProducts = () => {
    return async (dispatch) => {
        axios
            .get(`${baseURL}`)
            .then((response) => {
                const data = response.data

                return dispatch({
                    type: 'allProducts',
                    payload: data,
                })
            })
            .catch((error) => {
                console.log(`Error: ${error}`)
            })
    }
}

const getFlashSaleProducts = () => {
    return async (dispatch) => {
        axios
            .get(baseURL)
            .then((response) => {
                const data = response.data
                data.sort((a, b) => {
                    return a.rating.rate - b.rating.rate
                })
                data.splice(4, 15)

                return dispatch({
                    type: 'flashSaleProducts',
                    payload: data,
                })
            })
            .catch((error) => {
                console.log(`Error: ${error}`)
            })
    }
}

const getPopularProducts = () => {
    return async (dispatch) => {
        axios
            .get(baseURL)
            .then((response) => {
                const data = response.data
                data.sort((a, b) => {
                    return b.rating.count - a.rating.count
                })
                data.splice(4, 15)

                return dispatch({
                    type: 'popularProducts',
                    payload: data,
                })
            })
            .catch((error) => {
                console.log(`Error: ${error}`)
            })
    }
}

const getDetailProduct = (id) => {
    return async (dispatch) => {
        axios
            .get(`${baseURL}/${id}`)
            .then((response) => {
                const data = response.data

                return dispatch({
                    type: 'detailProduct',
                    payload: data,
                })
            })
            .catch((error) => {
                console.log(`Error: ${error}`)
            })
    }
}

export { getAllProducts, getDetailProduct, getFlashSaleProducts, getPopularProducts }
