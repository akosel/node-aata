nodejs module for accessing the AATA MicroAPI.

[![Build Status](https://travis-ci.org/akosel/node-aata.svg?branch=master)](https://travis-ci.org/akosel/node-aata)
[![npm version](https://badge.fury.io/js/aata.svg)](https://badge.fury.io/js/aata)

# Install
```
npm install --save aata
```

# Usage
Please accept [AATA terms of use](http://www.theride.org/AboutUs/DeveloperResources/TermsofUse)
```javascript
var AATA = require('aata');

var aata = new AATA();

// Thin wrapper on top of existing AATA MicroAPI: http://www.theride.org/AboutUs/Developer-Resources/Developer-Files
// Note: All methods accept a route id, which as expected, will return data for only that route.

// Get schedule documents. See example payload: https://github.com/akosel/node-aata/wiki#get-schedule-documents
aata.getScheduleDocuments()
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

// Get all stops in the system. See example payload: https://github.com/akosel/node-aata/wiki#get-stops-on-route
aata.getStopsOnRoute()
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

// Get timepoints for stops in the system. See example payload: https://github.com/akosel/node-aata/wiki#get-stop-timepoints
aata.getStopTimepoints()
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

// Get names and IDs for all AATA routes. See example payload: https://github.com/akosel/node-aata/wiki#get-route-names
aata.getRouteNames()
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

// Get names and IDs for all AATA routes.  See example payload: https://github.com/akosel/node-aata/wiki#get-bus-locations
aata.getBusLocations()
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

// You can use callbacks rather than promises too.
aata.getRouteNames(null, function(err, data) {
  if (err) return console.error(error);
  console.log(data);
});
```

Please see [the wiki](https://github.com/akosel/node-aata/wiki) for more information, such as response payloads.

# Test
```
npm test
```

# TODO
1. Add Python API wrapper (in a separate repository, obviously).
2. Normalize response schema (for example, instead of using lat, longitude, and lattitude, use the standard lat, lng combo. Also parse lat/lng strings to floating point values).

# License
MIT: https://opensource.org/licenses/MIT
