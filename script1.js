// Question 1
var obj1 = { name: "Person 1", age: "5" };
var obj2 = { age: "5", name: "Person 1" };

// Convert objects to strings and sort the properties
var obj1String = JSON.stringify(obj1, Object.keys(obj1).sort());
var obj2String = JSON.stringify(obj2, Object.keys(obj2).sort());

// Compare the sorted strings
if (obj1String === obj2String) {
  console.log("The JSON objects are equal.");
} else {
  console.log("The JSON objects are not equal.");
}

