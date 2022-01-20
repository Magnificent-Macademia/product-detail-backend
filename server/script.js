import http from 'k6/http';
import { sleep, check} from 'k6';

//generate random id function
const getRandomId = (max) => {
  var random = Math.floor(Math.random() * max);
  //id starts at 1
  if (random === 0) {
    random += 1;
  }
  return random;
};

//100 250 500 over 1 minute
export const options = {
    vus: 50,
    duration: '60s',
  };

export default function () {

  var id = getRandomId(1000011);

  http.get(`http://localhost:3000/products`);
    sleep(1);
    
  http.get(`http://localhost:3000/products/product/${id}`);
  // check(res, {
  //   'is status 200': (r) => r.status === 200
  // });
  sleep(1);

  http.get(`http://localhost:3000/products/styles/${id}`);
  sleep(1);

  http.get(`http://localhost:3000/products/related/${id}`);
  sleep(1);
}


//run in k6 terminal:
// k6 run --vus 100 --duration 60s server/script.js
// k6 run --vus 250 --duration 60s server/script.js
// k6 run --vus 500 --duration 60s server/script.js

