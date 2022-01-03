import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '50s', target: 15 },
    { duration: '60s', target: 15 },
    { duration: '100s', target: 30 },
  ],
};

export default function () {
  const res = http.get('https://k6httploadtesr.azurewebsites.net/api/Function1?code=f6F06agGFO7yp2K1GEkOjD4ZbR27QayHv2Acopy/b6g9VDha9NPJ6w==');
  sleep(1);
}
