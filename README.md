# Nature Remo API Client

Node.js client for Nature Remo.

## Installation

You can install by following command.

```
$ npm install --save nature-remo-api-client
```

## Usage

```javascript
import { NatureRemoApiClient } from 'nature-remo-api-client';

const client = new NatureRemoApiClient('TOKEN');

client.me().then((me) => console.log(me));
```

## Supported APIs

- GET `/1/users/me`
- GET `/1/devices`
- GET `/1/appliances`
- GET `/1/appliances/{appliance}/signals`

The full list of API can be found [here](http://swagger.nature.global/).