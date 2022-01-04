import http from 'k6/http';
import { sleep } from 'k6';

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
  const res = http.get('https://k6httploadtesr.azurewebsites.net/api/Function1?code=f6F06agGFO7yp2K1GEkOjD4ZbR27QayHv2Acopy/b6g9VDha9NPJ6w==');
  sleep(1);
}

