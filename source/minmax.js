'use strict';



const minmax = (array) => {
    const regexp_of_number = /[-+]?\d*\.?\d+(e?\-?\d*)/g ;
    const regexp_of_infinity = /-?\Infinity/g;
    let array_of_numbers = array.match(regexp_of_number);
    const array_of_infinity = array.match(regexp_of_infinity);
    if (array_of_infinity){
        if (array_of_numbers) {
            array_of_numbers = array_of_numbers.concat(array_of_infinity, array_of_numbers)
        }else {
            array_of_numbers = array_of_infinity
        }
    }
    if (!array_of_numbers) {
        return [undefined, undefined];
    }
    array_of_numbers.sort((a, b) => a - b );
    return [Number(array_of_numbers[0]), Number(array_of_numbers[array_of_numbers.length - 1])];
};
