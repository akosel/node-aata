import http from 'http';

const BASE_URL = 'http://microapi.theride.org/';

class AATA {
  constructor() {}

  get(resource, cb) {
    const promise = new Promise((resolve, reject) => {
      const req = http.get(BASE_URL + resource, (res) => {
        let body = '';
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', () => {
          const data = JSON.parse(body);
          resolve(data);
        });
      });
      req.on('error', (e) => {
        reject(e);
      });
    });

    if (typeof cb === 'function') {
      promise
        .then((res) => cb(null, res))
        .catch(cb);
      return null;
    }
    return promise;
  }

  getScheduleDocuments(route, cb) {
    const resource = route ? 'scheduledocuments/' + route : 'scheduledocuments';
    return this.get(resource, cb);
  }

  getStopsOnRoute(route, cb) {
    const resource = route ? 'stopsonroute/' + route : 'stopsonroute';
    return this.get(resource, cb);
  }

  getStopTimepoints(route, cb) {
    const resource = route ? 'stopsonroute/' + route + '/timepoints' : 'stopsonroute/timepoints';
    return this.get(resource, cb);
  }

  getRouteNames(route, cb) {
    const resource = route ? 'routenames/' + route : 'routenames';
    return this.get(resource, cb);
  }

  getBusLocations(route, cb) {
    const resource = route ? 'location/' + route : 'location';
    return this.get(resource, cb);
  }
}

export default AATA;
