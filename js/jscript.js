"use strict"
var arr = [1 , "apple", -3, 'orange', 0.5];
var newArray=[];

function numbersOnly(arr){
    var newarray = [];
    for (var i=0; i<arr.length; i++)
        {
            if (typeof(arr[i])==='number'){
                newarray.push(arr[i]);
            }
        }
    return newarray;
}
//newArray = numbersOnly(arr);
console.log(numbersOnly(arr) + "just the function");
console.log(newArray);
