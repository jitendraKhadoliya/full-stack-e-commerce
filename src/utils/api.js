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
        // const {data} = await axios.get(process.env.REACT_APP_DEV_URL + url, params);
        // const {data} = await axios.get(process.env.REACT_APP_DEV_URL + url, params);
        // const {data} = await axios.get(process.env.REACT_API_BASE_URL + url, params);
        const {data} = await axios.get(process.env.REACT_API_BASE_URL + url, params);
        // const {data} = await axios.get(process.env.REACT_APP_BASE_URL + url, params);
        // const {data} = await axios.get(process.env.REACT_APP_BASEE_URL + url, params);
        return data;
    }catch(err){
        console.error(err);
        console.log(err)
        return err;
    }
}
// http://localhost:1337
// export default fetchDataFromApi;

// import axios from "axios";

// const params = {
//     headers: {
//         Authorization: "bearer " + process.env.REACT_APP_STRAPI_APP_KEY,
//     },
// }

// export const fetchDataFromApi = async (url)=>{
//     try {
//         const {data} = await axios.get(process.env.REACT_APP_DEV_URL + url, params);
//         return data;
//     } catch (error) {
//         console.log(error)
//         return error;
//     }
// }