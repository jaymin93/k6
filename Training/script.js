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
  const res = http.get('https://k6ldtst.azurewebsites.net/WeatherForecast');
  sleep(1);
}
