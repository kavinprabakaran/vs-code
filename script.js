function compareJSON(obj1, obj2) {
    const sortedStr1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    const sortedStr2 = JSON.stringify(obj2, Object.keys(obj2).sort());

    return sortedStr1 === sortedStr2;
}

const obj1 = { name: 'person1', age: 5 };
const obj2 = { age: 5, name: 'person1' };

const result = compareJSON(obj1, obj2);

if (result) {
    console.log("The JSON objects are equal.");
} else {
    console.log("The JSON objects are not equal.");
}
