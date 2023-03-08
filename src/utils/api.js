// here I will create api request using axios

import axios from "axios";

// here i creating param for get request

const params = { 
    headers : {
        Authorization: "bearer " + process.env.REACT_APP_STRAPI_APP_KEY,
    },
};

export const fetchDataFromApi = async (middleUrl)=>{
    try{
        const {data} = await axios.get(process.env.REACT_API_BASE_URL + middleUrl, params);
        return data;
    }catch(err){
        console.error(err);
        console.log(err)
        return err;
    }
}

// export default fetchDataFromApi;