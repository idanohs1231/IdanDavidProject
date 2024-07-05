let likedCountries = [];


const getData =()=>{
    let data = localStorage.getItem("countries");
    if(!data){
        localStorage.setItem("countries",JSON.stringify(likedCountries));
        data = localStorage.getItem("countries");
    }
    likedCountries = JSON.parse(data);
}



const update = (countryName)=>{
if(likedCountries.includes(countryName)){
    let filterd = likedCountries.filter((country)=>{
        return country != countryName;
    });

    likedCountries  =filterd;
} else{
    likedCountries.push(countryName);
}

localStorage.setItem("countries" ,JSON.stringify(likedCountries))
}

export{likedCountries,getData,update}