/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vh730zmi6xvdqrm")

  // remove
  collection.schema.removeField("87yknfrx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sgkg1noq",
    "name": "img",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vh730zmi6xvdqrm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "87yknfrx",
    "name": "img",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // remove
  collection.schema.removeField("sgkg1noq")

  return dao.saveCollection(collection)
})
