'use strict';


const minmax = (array) => {
    if (!array){
        return [void 0, void 0];
    }
    const rmTrashRegex =/\s+?,?;?:?\s*/;
    const tagList = array.split(rmTrashRegex);
    const arrayOfNumbers = tagList.filter((element) => !isNaN(element));
    if (!arrayOfNumbers.length) {
        return [void 0, void 0];
    }
    return [Math.min(... arrayOfNumbers), Math.max(... arrayOfNumbers)];
};

