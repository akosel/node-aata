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

// Get all stops in the system
aata.getStopsOnRoute()
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

// Get timepoints for stops in the system
aata.getStopTimepoints()
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

// Get names and IDs for all AATA routes
aata.getRouteNames()
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

// Get names and IDs for all AATA routes
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

# Test
```
npm test
```

# License
MIT: https://opensource.org/licenses/MIT
