function calculateTax(income){
    if(income>=0 && income<=250000){
       return noTax()
    }
    if(income>250000 && income<=500000){
       return fivePercent()
    }
    if(income>500000 && income<=750000){
       return tenPercent()
    }
    if(income>750000 && income<=1000000){
       return fifteenPercent()
    }
    if(income>1000000 && income<=1250000){
       return twentyPercent()
    }
    if(income>1250000 && income<=1500000){
       return twentyFivePercent()
    }
    if(income>1500000){
       return thirtyPercent()
    }
    function noTax(){
        console.log("Income not taxable");
    }
    function fivePercent(){
        const result=(income*0.05);
        return result;
    }
    function tenPercent(){
        const result=(income*0.1);
        return result;
    }
    function fifteenPercent(){
        const result=(income*0.15);
        return result;
    }
    function twentyPercent(){
        const result=(income*0.2);
        return result;
    }
    function twentyFivePercent(){
        const result=(income*0.25);
        return result;
    }
    function thirtyPercent(){
        const result=(income*0.3);
        return result;
    }
}

console.log(`Your tax amount is ${calculateTax(3000000)}`);
console.log(`Your tax amount is ${calculateTax(1400000)}`);
console.log(`Your tax amount is ${calculateTax(3090000)}`);
console.log(`Your tax amount is ${calculateTax(11300000)}`);

