//location 
const geoCode = (address,callback)=>{
    setTimeout(()=>{
        const data = {
            latitude : "200",
            longituee : "300"
        }
        callback(data);
    },2000);
}

geoCode("Alappuzha",(data)=>{
    console.log(data);
});
