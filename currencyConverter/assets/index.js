let selects = document.querySelectorAll("select");
let btn = document.querySelector("button");
let msg = document.querySelector(".msg")
let fromCurr = document.querySelector(".FromCurr") 
let toCurr = document.querySelector(".ToCurr")

let baseUrl ="https://latest.currency-api.pages.dev/v1/currencies";
let inp = document.querySelector("input")
for (let select of selects){
    for (let key in countryList){
        let option  = document.createElement("option");
        option.value = key
        option.innerHTML = key;
        if(option.value=="USD" && select.name === "FromCurr"){
            option.selected = "selected";
        }
        if(option.value=="INR" && select.name === "ToCurr"){
            option.selected = "selected";
        }
        select.append(option);
    }
    select.addEventListener("change",(evt)=>{
        changeImg(evt.target);
    });
}

let changeImg = (evt)=>{
    let code = countryList[evt.value];
    let newSrc = `https://flagsapi.com/${code}/flat/64.png`;
    let img = evt.parentElement.querySelector("img");
    img.src = newSrc;
}
let getData = async ()=>{
    let fromData = fromCurr.value.toLowerCase();
    let toData = toCurr.value.toLowerCase();
    let url = `${baseUrl}/${fromData}.json`
    let res = await fetch(url);
    let data =await res.json();
    let rate = data[fromData][toData]
    let money = inp.value*rate;
    msg.innerHTML = `${inp.value}${fromCurr.value} = ${money}${toCurr.value}`
 }
 
 btn.addEventListener("click",(evt)=>{
   evt.preventDefault();
   getData();
 });

 window.addEventListener("load",getData);
 
 