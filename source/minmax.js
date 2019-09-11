'use strict';

const minmax =  function (array) {
    let re_1 = /[-+]?\d*\.?\d+(e?\-?\d*)/g ;
    let re_2 = /-?\Infinity/g;
    let m;
    let array_of_numbers = [] ;
    while ((m = re_1.exec(array)) != null) {
        array_of_numbers.push(m[0]);
    }
    while ((m = re_2.exec(array)) != null) {
        array_of_numbers.push(m[0]);
    }
    if (!array_of_numbers.length ) {
        return [undefined, undefined];
    }
    let result = [array_of_numbers[0], array_of_numbers[0]];
    for (let number of array_of_numbers){
        if (Number(result[0]) > number){
            result[0] = number;
        }
        if (Number(result[1]) < number){
            result[1] = number;
        }
    }
    return [Number(result[0]), Number(result[1])];
};
