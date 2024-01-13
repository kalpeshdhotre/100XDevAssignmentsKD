// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  // it converts entries into array and returns
  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  // it check if property mention is exist in object or not
  let hasProp = obj.hasOwnProperty("key3");
  console.log("After hasOwnProperty():", hasProp);

  // if {} empty not use it will modify original object also
  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
