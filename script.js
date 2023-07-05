// async await
const loadAi = async() => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    console.log(url)
    // add error and async await
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayPhonesDetails(data)
    }
    catch(error){
        console.log('Error:- ', error)
    }
};