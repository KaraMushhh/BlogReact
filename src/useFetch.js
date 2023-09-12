import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const [name,setName] = useState('mario');
    const [error, setError] = useState(null);

    useEffect(() => { 
        const abortCont = new AbortController();

        //console.log("use effect run");
        //console.log(name);
       setTimeout(() => {
        fetch(url, { signal : abortCont.signal})
            .then(res => {
                if(!res.ok)
                {
                    throw Error('could not fetch the data for that resource');
                }
                    return res.json();
            })
                      
            .then(data => {
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
        })
        .catch(err => {
            if (err.name === 'abortError')
            {
                console.log ('fetch aborted')
            }
            else {
                setIsPending(false);
                setError(err.message);
            }
        }) 
       } , 500);

       return () => abortCont.abort();
    }, [url]);
    //let name ="mario";
     
     //const [age, setAge] =useState(25);
    //const handleClick = () => {
       // setName("luigi"); //this value is reactive, rerender the component.
        //setAge(30);
    //}

    //const clickMeAgain = (name, e) => {
        //console.log('hello' + name, e.target);
    //}
    return {data ,isPending, error}
}

export default useFetch;