#! /usr/bin/env node

import inquirer from "inquirer"

let answer = await inquirer.prompt([{
    

    name:"from",
    message: "Select the currency you want to convert into another currency.",
    type:"list",
    choices:["USDT","PKR","EURO","POUNDS","DIRHAM","BTC"]

},


{    name:"amount",
    message:"\n select your amount",
    type:"list",
    choices:[100,500,1000,5000,10000,15000,20000,50000,100000,500000]

},    
   

{   name:"to",
    message:"\nWhich currency do you want to convert to?",
    type:"list",
    choices:["USDT","PKR","EURO","POUNDS","DIRHAM","BTC"]
  
}

])

let currency_Rates : any  = {
    USDT:1,             //  it means 1 usdt is equal to 279 pkr,0.9 euro,0.77 pounds ... 
    PKR:279.67,
    EURO:0.9,
    POUNDS:0.77,
    BTC:0.000017,
    DIRHAM:3.67

}

let base = answer.amount/currency_Rates[answer.from] 

let converted_currency : number = base * currency_Rates[answer.to]

console.log(`${converted_currency} ${answer.to}`);

console.log(`${answer.amount} ${answer.from} is equal to ${converted_currency} ${answer.to} only`);
