import http from 'k6/http';
import { check } from 'k6';
import { jUnit, textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';
export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '20s' },
    { duration: '10s', target: 5},
  ],
  thresholds: {
    http_req_duration: ['p(95)<250'],
  },
};
export default function () {
  let res = http.get(`https://k6ldtst.azurewebsites.net/Product/GetAllProducts`);
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
export function handleSummary(data) {
  let filepath = `./result.xml`;
    return {
        'stdout': textSummary(data, { indent: ' ', enableColors: true}), 
        './results.xml': jUnit(data), 
    }
}
////import http from 'k6/http';
////import { sleep } from 'k6';

////export default function () {
////    const res = http.get('https://test.k6.io');
////    sleep(1);
////}
////import http from 'k6/http';
////import { check } from 'k6';
////import { jUnit, textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';
////export const options = {
////    stages: [
////        { duration: '10s', target: 10 },
////        { duration: '20s' },
////        { duration: '10s', target: 5 },
////    ],
////    thresholds: {
////        http_req_duration: ['p(95)<250'],
////    },
////};
////export default function () {
////    let res = http.get(`${__ENV.API_PROTOCOL}://${__ENV.API_BASEURL}/Product/GetAllProducts`);
////    check(res, {
////        'is status 200': (r) => r.status === 200,
////    });
////}
////export function handleSummary(data) {
////    let filepath = `./${__ENV.TESTRESULT_FILENAME}-result.xml`;
////    return {
////        'stdout': textSummary(data, { indent: ' ', enableColors: true }),
////        './loadtest-results.xml': jUnit(data),
////    }
////}
