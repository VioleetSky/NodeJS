
function createTree(value: number): object{
    if(value<1){
        return {message: "Value must be positive"}
    }
if(value===1){
    return {value: value, child: null};
}
    return {value: value, child: createTree(value-1)};
}

console.log( createTree(0));
console.log( createTree(4));