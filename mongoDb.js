// const mongoose = require('mongoose');

// //DATABASE

// mongoose.connect('', (err)=>{
//   if(err) {
//     console.log(err);
//     return;
//   }
//   console.log('connected to mongo')
// });

const AtelierSchema = new mongoose.Schema({
  product_id: {type: Number, trim: true},
  product_name: { type: String, trim: true, default: '' },
  product_desc: { type: String, trim: true, default: '' },
  product_category: { type: String, trim: true, default: '' },
  product_features: [{
    feature_id: {type: Number, trim: true},
    feature_main: { type: String, trim: true, default: '' },
    feature_value: { type: String, trim: true, default: '' },
  }],
  product_styles: [{
    style_id: {type: Number, trim: true},
    style_name: { type: String, trim: true, default: '' },
    style_original_price: {type: Number, trim: true},
    style_sale_price: {type: Number, trim: true},
    style_default: { type: Boolean, trim: true, default: '' },
    style_photos: [{
      photo_id: { type: String, trim: true, default: '' },
      photo_thumbnail: { type: String, trim: true, default: '' },
      photo_url: { type: String, trim: true, default: '' },
    }],
    style_skus: [{
      skus_id: {type: Number, trim: true},
      skus_quantity: {type: Number, trim: true},
      skus_size: { type: String, trim: true, default: '' },
    }]
  }],
})

// const Atelier = mongoose.model('Atelier', AtelierSchema);

// module.exports = Atelier;