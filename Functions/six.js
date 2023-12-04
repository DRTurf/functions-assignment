function sum(a, b) {
    return a+b;
}

function curry(sum){
    return function(a){
        return function(b){
            return sum(a,b)
        }
    }
}


console.log(curry(sum)(4)(9));

