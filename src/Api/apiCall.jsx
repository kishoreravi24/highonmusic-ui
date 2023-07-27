import {useState, useEffect} from 'react';

const Apiprovider = () => {
    const [data,SetData] = useState([]);
    const ApiUrl = "http://localhost:5000/users/getTest";

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() => {
        const response = await fetch(ApiUrl);
        if(!response.ok){
            console.log("Network failure");
        }else{
            const jsonData = await response.json();
            console.log(jsonData);
        }
    }
}

export default Apiprovider;