import Config from '../../../Config.js';
import ajax from 'ajax-request';

export function fetchProductListings() {
    let url = Config.getConfigAPIUrl() + '/cartel/products';

    var productData;
    function ajaxshit() {
        let ajaxPromise = new Promise((resolve, reject) => 
            {
                ajax({
                    url: url,
                    method: 'GET',
                }, (err, res, body) => {
                    // Callback function
                    resolve(err);
                })
            });

        ajaxPromise.then((val) => {
            alert(val);
        }).catch((reason) => {
            alert(reason);
        });
    }

    ajaxshit();
    

    alert(productData);

    return {
        type: "FETCH_PRODUCT_LISTINGS",
        payload: {
            products: productData
        } 
    }
}