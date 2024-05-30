
const useFetch = async (url) => {
 
    const response = await fetch(url);
    const info = await response.json();
    const data =info.results;
    
    return {data};

}

export default useFetch