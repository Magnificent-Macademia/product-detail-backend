
const productArr = [{
  "id": 2,
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": 140,
  "product_id": 1,
  "feature": "Buttons",
  "value": "Brass",

},
{
  "id": 2,
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": 140,
  "product_id": 1,
  "feature": "Material",
  "value": "FullControlSkin",
}]

//should result:
const resultProduct = {
  "id": "1",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": 140,
  "features": [
      {
          "feature": "Fabric",
          "value": "Canvas"
      },
      {
          "feature": "Buttons",
          "value": "Brass"
      }
  ]
}


const stylesArr = [
  {
    style_id: '343808',
    product_id: '175505',
    name: 'Black',
    sale_price: 'null',
    original_price: 145,
    default_style: 1,
    photo_id: '993475',
    url: 'https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    thumbnail_url: 'https://images.unsplash.com/photo-1465124982537-9f918f1e1aaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    skus_id: '1985728',
    size: 'One Size',
    quantity: 12
  },
  {
    style_id: '343808',
    product_id: '175505',
    name: 'Black',
    sale_price: 'null',
    original_price: 145,
    default_style: 1,
    photo_id: '993474',
    url: 'https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    thumbnail_url: 'https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    skus_id: '1985728',
    size: 'One Size',
    quantity: 12
  },
  {
    style_id: '343808',
    product_id: '175505',
    name: 'Black',
    sale_price: 'null',
    original_price: 145,
    default_style: 1,
    photo_id: '993473',
    url: 'https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    thumbnail_url: 'https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
    skus_id: '1985728',
    size: 'One Size',
    quantity: 12
  },
  {
    style_id: '343809',
    product_id: '175505',
    name: 'Orange',
    sale_price: 'null',
    original_price: 170,
    default_style: 0,
    photo_id: '993477',
    url: 'https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    thumbnail_url: 'https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    skus_id: '1985729',
    size: 'One Size',
    quantity: 51
  },
  {
    style_id: '343809',
    product_id: '175505',
    name: 'Orange',
    sale_price: 'null',
    original_price: 170,
    default_style: 0,
    photo_id: '993476',
    url: 'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    thumbnail_url: 'https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    skus_id: '1985729',
    size: 'One Size',
    quantity: 51
  }
];

//should result:
const resultStyle = {
  "product_id": "175505",
  "results": [
      {
          "style_id": "343808",
          "name": "Black",
          "original_price": 145,
          "sale_price": "null",
          "default": true,
          "photos": [
              {
                  "url": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
                  "thumbnail_url": "https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
              },
              {
                  "url": "https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                  "thumbnail_url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              },
              {
                  "url": "https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
                  "thumbnail_url": "https://images.unsplash.com/photo-1465124982537-9f918f1e1aaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              }
          ],
          "skus": {
              "1985728": {
                  "size": "One Size",
                  "quantity": 12
              }
          }
      },
      {
          "style_id": "343809",
          "name": "Orange",
          "original_price": 170,
          "sale_price": "null",
          "default": false,
          "photos": [
              {
                  "url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
                  "thumbnail_url": "https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              },
              {
                  "url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
                  "thumbnail_url": "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              }
          ],
          "skus": {
              "1985729": {
                  "size": "One Size",
                  "quantity": 51
              }
          }
      }
  ]
}

const relatedArr = [
  {
    id: 791300,
    current_product_id: '175519',
    related_product_id: '93595'
  },
  {
    id: 791301,
    current_product_id: '175519',
    related_product_id: '57850'
  },
  {
    id: 791302,
    current_product_id: '175519',
    related_product_id: '46148'
  },
  {
    id: 791303,
    current_product_id: '175519',
    related_product_id: '43126'
  },
  {
    id: 791304,
    current_product_id: '175519',
    related_product_id: '101811'
  }
];

const resultRelated = [
  "93595",
  "57850",
  "46148",
  "43126",
  "101811"
];

module.exports = {relatedArr, stylesArr, productArr, resultProduct, resultStyle, resultRelated }