'use strict';


const minmax = (array) => {
    if (!array){
        return [undefined, undefined];
    }
    const rmTrashRegex =/\s+?,?;?:?\s*/;
    const tagList = array.split(rmTrashRegex);
    let arrayOfNumbers = tagList.filter((element) => !isNaN(element));
    if (!arrayOfNumbers.length) {
        return [undefined, undefined];
    }
    return [Math.min(... arrayOfNumbers), Math.max(... arrayOfNumbers)];
};

