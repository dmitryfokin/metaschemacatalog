'use strict';

const { SchemaKindDefinition } = require('metaschema');

class CatalogSchema extends SchemaKindDefinition {
  constructor() {
    this.kind = 'catalog';
  }
}

module.exports = { CatalogSchema }
