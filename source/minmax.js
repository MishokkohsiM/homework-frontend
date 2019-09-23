'use strict';


const minmax = (array) => {
    const rmTrashRegex =/\s+?,?;?:?\s*/;
    const tagList = array.split(rmTrashRegex);
    let arrayOfNumbers = tagList.filter((element) => {
        if (!isNaN(element) ){
            return element;
        }
    });
    if (!arrayOfNumbers.length) {
        return [undefined, undefined];
    }
    return [Math.min(... arrayOfNumbers), Math.max(... arrayOfNumbers)];
};

