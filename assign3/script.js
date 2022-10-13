const squareNumber =  (number)=>{
    return Promise.resolve(setTimeout(()=>{
        number **2
    },5000))
}
console.log(await squareNumber(10));