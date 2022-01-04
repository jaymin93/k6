import http from 'k6/http';
import { check } from 'k6';
import { jUnit, textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export const options = {
    stages: [
      { duration: '10s', target: 15 },
      { duration: '20s', target: 15 },
      { duration: '10s', target: 0 },
    ],
    thresholds: {
      http_req_duration: ['p(95)<250'],
    },
  };

export default function () {
  let res = http.get('https://k6httploadtesr.azurewebsites.net/api/Function1?code=f6F06agGFO7yp2K1GEkOjD4ZbR27QayHv2Acopy/b6g9VDha9NPJ6w==');
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
