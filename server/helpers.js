const formatOne = (arrayOfObjects) => {
  var features = [];
  var copyObj = Object.assign({}, arrayOfObjects[0]);
  for (var i = 0; i < arrayOfObjects.length; i++) {
    var innerObj = {};
    if (arrayOfObjects[i]["feature"] === null || arrayOfObjects[i]["value"] === null) {
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
  console.log(copyObj);
  return copyObj;
};

const formatStyles =  (arrayOfObjects) => {
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
      inner.style_id = current['style_id'];
      inner.name = current['name'];
      inner.original_price = current['original_price'];
      inner.sale_price = current['sale_price'];
      inner.default = Boolean(current['default_style']);
      var skusObj = {}
      inner.photos = [];
      inner.photosObj = {}
      inner.skus = skusObj;
       styleObj[current['style_id']] = inner;
    }
    //add photos
    const currentPhotoId = current['photo_id'];
    var updatedPhotos = styleObj[current['style_id']]['photosObj'][`${currentPhotoId}`] = {url: '', thumbnail_url: ''}
    if (updatedPhotos.url === '' || updatedPhotos.thumbnail_url === '') {
      updatedPhotos.url = current['url'];
      updatedPhotos.thumbnail_url = current['thumbnail_url'];
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

   }
   //format photos 
   var formattedResults = formatted['results'];
    for (var i = 0; i< formattedResults.length; i++) {
      var uniquePhotosOnly = Object.values(formattedResults[i]['photosObj']);
       formattedResults[i]['photos'] = uniquePhotosOnly;
        delete formattedResults[i]['photosObj'];
    }

  return formatted;
  // callback(formatted);
  }


const formatRelated = (arrayOfObjects) => {
  var relatedArray = [];
  for (var i = 0; i < arrayOfObjects.length; i++) {
    relatedArray.push(arrayOfObjects[i]['related_product_id']);
  }
  return relatedArray;
}

module.exports = { formatOne, formatStyles, formatRelated }