//formatting function goes here
const formatOne = (arrayOfObjects, callback) => {
  var features = [];
  var copyObj = Object.assign({}, arrayOfObjects[0]);
  for (var i = 0; i < arrayOfObjects.length; i++) {
    var innerObj = {};
    if (arrayOfObjects[i]["feature"] === null || arrayOfObjects[i]["value"]=== null) {
      continue;
    } else {
      innerObj.feature = arrayOfObjects[i]["feature"];
      innerObj.value = arrayOfObjects[i]["value"];
      features.push(innerObj);
    }
  }
  copyObj.features = features;
  delete copyObj.feature_id;
  delete copyObj.feature;
  delete copyObj.value;
  delete copyObj.product_id;
   callback(copyObj);
}


const formatStyles = (arrayOfObjects, callback) => {
  //i: arrayOfObjects
  //o: one formatted object
  var formatted = {};
  var photos = [];
  var skusObj ={};
  var results = [];
  formatted.product_id = arrayOfObjects[0]['product_id'];
     var styleObj = {};
   for (var i =0; i < arrayOfObjects.length; i++) {
    const current = arrayOfObjects[i];
    if (styleObj[current['style_id']] === undefined) {
      var inner = {};
      var skusObj = {}
      inner.photos = [];
      inner.skus = skusObj;
      inner.style_id = current['style_id'];
      inner.name = current['name'];
      inner.original_price = current['original_price'];
      inner.sale_price = current['sale_price'];
      inner.default = Boolean(current['default_style']);
       styleObj[current['style_id']] = inner;
    }
    //add photos
  var currentPhotosArray = styleObj[current['style_id']]['photos'];
    if (currentPhotosArray[i] === undefined) {
      var stylePhotos = {}
      stylePhotos.url = current['url']
      stylePhotos.thumbnail_url = current['thumbnail_url'];
      currentPhotosArray.push(stylePhotos);
    }
   //add skus to skus objects
  var currentSkus = current['skus_id'];
  var updatedSkus = styleObj[current['style_id']]['skus'][`${currentSkus}`] = {size: '', quantity: ''};
    if (updatedSkus.size === '' || updatedSkus.quantity === '' ) {
      updatedSkus.size = current['size'];
      updatedSkus.quantity = current['quantity'];
    }
  //pull values from populated objects
  var valuesOnly = Object.values(styleObj);
  formatted.results = valuesOnly;
  console.log(formatted);
   }
  callback(formatted);
  }


  const formatRelated = (arrayOfObjects, callback) => {
      var relatedArray = [];
      for (var i = 0; i < arrayOfObjects.length; i++) {
          relatedArray.push(arrayOfObjects[i]['related_product_id']);
      }
      callback(relatedArray);
      }

module.exports = { formatOne, formatStyles, formatRelated }