'use strict';


const minmax = (array) => {
    const array_Of_Numbers = [];
    const regexp =/\s+?,?;?:?\s*/;
    const tag_List = array.split(regexp);
    tag_List.forEach(function (element) {
        if (isFinite(element) && element !== ''){
            array_Of_Numbers.push(element);
        }
        if (element ==="-Infinity" || element === "Infinity"){
            array_Of_Numbers.push(Number(element))
        }
    });
    if (array_Of_Numbers.length === 0) {
        return [undefined, undefined];
    }
    return [Math.min(... array_Of_Numbers), Math.max(... array_Of_Numbers)];
};

