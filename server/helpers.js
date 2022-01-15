//formatting function goes here
const formatOne = (arrayOfObjects, callback) => {
  var features = [];
  var copyObj = Object.assign({}, arrayOfObjects[0]);
  for (var i = 0; i < arrayOfObjects.length; i++) {
    var innerObj = {};
    if (arrayOfObjects[i]["feature"] === null || arrayOfObjects[i]["value"]=== null) {
      constinue;
    } else {
      innerObj.feature = arrayOfObjects[i]["feature"];
      innerObj.value = arrayOfObjects[i]["value"];
      features.push(innerObj);
    }

  }
  copyObj.features = features;
  delete copyObj.feature;
  delete copyObj.value;
  delete copyObj.product_id;
   callback(copyObj);
}

const formatStyles = (arrayOfObjects, callback) => {
  console.log(arrayOfObjects);
}

module.exports = { formatOne }