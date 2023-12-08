function calculateTax(income){
    let rate;
    if(income>=0 && income<=250000){
       console.log("Income not taxable");
       return;
    }
    else if(income>250000 && income<=500000){
       rate=0.5;
    }
    else if(income>500000 && income<=750000){
       rate=0.1;
    }
    else if(income>750000 && income<=1000000){
       rate=0.15;
    }
    else if(income>1000000 && income<=1250000){
        rate=0.20;
    }
    else if(income>1250000 && income<=1500000){
        rate=0.25;
    }
    else if(income>1500000){
        rate=0.3;
    }
    return function(){
        return rate*income;
    }
}

console.log(`Your tax amount is ${calculateTax(300000)()}`);
console.log(`Your tax amount is ${calculateTax(1400000)()}`);
console.log(`Your tax amount is ${calculateTax(3090000)()}`);
console.log(`Your tax amount is ${calculateTax(11300000)()}`);
