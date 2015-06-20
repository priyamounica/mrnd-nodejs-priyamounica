
exports.Sum = function(num1, num2){
return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
 var index, sumOfNums = 0;
    for(index=0; index<arrayOfNums.length; index++)
        sumOfNums  += arrayOfNums[index];
    return sumOfNums;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
 temp = arrayOfNums.filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    })
    var ind, sumOfNums = 0;
    for(ind=0; ind<temp.length; ind++)
        sumOfNums  += temp[ind];
    return sumOfNums;

}

exports.ReverseString = function(str){
return str.split('').reverse().join('');

}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
    return arrayOfStrings,reverse();
}