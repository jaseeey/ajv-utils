'use strict';

const Ajv = require('ajv');
const renameKeysKeyword = require('../keywords/rename-keys');

describe('renameKeys', () => {

    let ajv;

    beforeEach(() => {
        ajv = new Ajv();
        renameKeysKeyword(ajv);
    });

    test('renames a single specified key', () => {
        const schema = {
            type: 'object',
            properties: {
                id: true,
                name: true
            },
            renameKeys: {
                name: 'firstName'
            }
        };
        const data = {
            id: 1,
            name: 'John'
        };
        ajv.compile(schema)(data);
        expect(data).not.toHaveProperty('name');
        expect(data).toHaveProperty('firstName');
    });

    test('renames all specified keys', () => {
        const schema = {
            type: 'object',
            properties: {
                id: true,
                name: true
            },
            renameKeys: {
                id: 'identifier',
                name: 'firstName'
            }
        };
        const data = {
            id: 1,
            name: 'John'
        };
        ajv.compile(schema)(data);
        expect(data).not.toHaveProperty('id');
        expect(data).not.toHaveProperty('name');
        expect(data).toHaveProperty('identifier');
        expect(data).toHaveProperty('firstName');
    });
});
