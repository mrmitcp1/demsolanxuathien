function findCount(number:number[],value:number) {
    let count = 0;
    number.forEach(item=>{
        if (item===value){
            count++
        }
    }

)
    return count
}

console.log(findCount([1,1,1,2,3,4],1))