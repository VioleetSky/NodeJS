
function averageArray(array:number[]):number{
    if(array.length===0){
        throw new Error("array is empty");
    }
    return array.reduce((a,b)=> a+b)/array.length;
}

console.log(averageArray([2,2]));