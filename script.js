const  currencyFirst = document.querySelector("#currency-first");
const  worthFirst = document.querySelector("#worth-first");
const  currencySecond = document.querySelector("#currency-second");
const  worthSecond = document.querySelector("#worth-second");
const  exchangeRate = document.querySelector("#exchange-rate");



function updateRate(){
    fetch( `https://v6.exchangerate-api.com/v6/c57d58a695f782ea2e07f0e4/latest/${currencyFirst.value}` )
    .then((res)=>res.json())
    .then((data)=>{
        const rate = data.conversion_rates[currencySecond.value];
        exchangeRate.innerText = `1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`;
        worthSecond.value = (rate * worthFirst.value).toFixed(4);              
    })
}

currencyFirst.addEventListener("change" , updateRate);
currencySecond.addEventListener("change", updateRate);
worthFirst.addEventListener(  "input"  ,  updateRate);
worthSecond.addEventListener(  "input" ,  updateRate );