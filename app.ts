const arr: number[]=[1,2,3,4,5,6];

function reversedArr(arr: number[]): number[]{

        for (let j: number = 0, i=arr.length-1; j < arr.length / 2; j++, i--){
            const tempValue=arr[j];
            arr[j]=arr[i];
            arr[i] = tempValue;
        }

return arr;
}
const reservedArr = reversedArr(arr);
console.log(reservedArr===arr);