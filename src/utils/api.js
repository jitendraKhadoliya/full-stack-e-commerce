// // here I will create api request using axios

import axios from "axios";

// // here i creating param for get request

const params = { 
    headers : {
        Authorization: "bearer " + process.env.REACT_APP_STRAPI_APP_KEY,
    },
};


export const fetchDataFromApi = async (url)=>{
    try{
        const {data} = await axios.get(process.env.REACT_APP_DEV_URL + url, params);
        return data;
    }catch(err){
        console.error(err);
        console.log(err)
        return err;
    }
}
