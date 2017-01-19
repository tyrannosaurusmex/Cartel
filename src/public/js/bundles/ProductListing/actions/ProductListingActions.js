export function fetchProductListings() {
    let url = 'http://localhost:3001/Cartel/products';

    let jsonRequest = new XMLHttpRequest;
    jsonRequest.responseType = 'json';
    jsonRequest.open('GET', url, true);

    jsonRequest.send().then((data) => {
        const productData = [1, 2];
    });

    return {
        type: "FETCH_PRODUCT_LISTINGS",
        payload: {
            products: productData
        } 
    }
}