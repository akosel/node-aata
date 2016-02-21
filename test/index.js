import test from 'blue-tape';
import AATA from '../src/';

const aata = new AATA();

test('aata stops on all routes', (t) => {
  return aata.getStopsOnRoute().then((res) => {
    t.equal(typeof(res), 'object');
    t.ok(Array.isArray(res), 'stops are array');
  })
  .catch((err) => {
    t.error(err);
  });
});

test('aata stops on route 1', (t) => {
  return aata.getStopsOnRoute('1').then((res) => {
    t.equal(typeof(res), 'object');
    t.ok(Array.isArray(res), 'stops are array');
  })
  .catch((err) => {
    t.error(err);
  });
});

test('aata stop timepoints', (t) => {
  return aata.getStopTimepoints().then((res) => {
    t.equal(typeof(res), 'object');
    t.ok(Array.isArray(res), 'stops are array');
  })
  .catch((err) => {
    t.error(err);
  });
});

test('aata route names', (t) => {
  return aata.getRouteNames().then((res) => {
    t.equal(typeof(res), 'object');
    t.ok(Array.isArray(res), 'stops are array');
  })
  .catch((err) => {
    t.error(err);
  });
});

test('aata route 4 name', (t) => {
  return aata.getRouteNames('4').then((res) => {
    t.equal(typeof res, 'object');
    t.equal(typeof res.routeAbbr, 'string');
  })
  .catch((err) => {
    t.error(err);
  });
});

test('aata bus locations', (t) => {
  return aata.getBusLocations().then((res) => {
    t.equal(typeof(res), 'object');
    t.ok(Array.isArray(res), 'stops are array');
  })
  .catch((err) => {
    t.error(err);
  });
});

test('aata bus locations on route 8', (t) => {
  return aata.getBusLocations('8').then((res) => {
    t.equal(typeof(res), 'object');
    t.ok(Array.isArray(res), 'stops are array');
  })
  .catch((err) => {
    t.error(err);
  });
});

test('aata bus - callback', (t) => {
  t.plan(3);
  aata.getBusLocations('8', (err, res) => {
    t.error(err);
    t.equal(typeof(res), 'object');
    t.ok(Array.isArray(res), 'stops are array');
  });
});
