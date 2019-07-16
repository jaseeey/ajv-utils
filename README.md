# AJV Utils

A utility package for [ajv](https://github.com/epoberezkin/ajv) which provides additional keywords for usage within your schema.

This was created for a specific purpose and does not necessarily follow any schema specifications, but solely to meet my
 requirements. If you have any issues or suggestions, contributions are always welcome.

This package was created with guidance from [ajv-keywords](https://github.com/epoberezkin/ajv-keywords).

## Install

```bash
npm install @jaseeey/ajv-utils
```

or

```bash
yarn add @jaseeey/ajv-utils
```

## Usage

```javascript
const Ajv = require('ajv');
const ajv = new Ajv();

require('@jaseeey/ajv-utils')(ajv);
```

## Keywords

### Keywords for objects

##### `renameKeys`

This keyword renames properties within an object to the desired name. It's primary use is to validate a payload received
from an upstream system and transform the object property names as required in the local system.

The `renameKeys` property in the schema is represented as an `Object` where the key is the origin property name and the 
value is the desired property name.

```javascript
const schema = {
  type: 'object',
  properties: {
    id: {
      type: 'number'
    },
    name: {
      type: 'string'
    }
  },
  renameKeys: {
    name: 'firstName'
  }
};

const data = {
    id: 123,
    name: 'John'
};

ajv.compile(schema)(data);

// Result object:
// data = {
//     id: 123,
//     firstName: 'John'
// }
```

## License

[MIT](https://github.com/epoberezkin/ajv/blob/master/LICENSE)
