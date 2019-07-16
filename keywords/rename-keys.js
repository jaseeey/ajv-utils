'use strict';

const renameKeysDefinition = {
    type: 'object',
    compile: renameMap => data => {
        for (const [k, v] of Object.entries(renameMap)) {
            data[v] = data[k];
            delete data[k];
        }
        return true;
    }
};

function defineRenameKeysKeyword(ajv) {
    ajv.addKeyword('renameKeys', renameKeysDefinition);
    return ajv;
}

module.exports = defineRenameKeysKeyword;
