function factorial(num){
    if(num==1){
        return num;
    }
    return num*factorial(num-1);
}
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
