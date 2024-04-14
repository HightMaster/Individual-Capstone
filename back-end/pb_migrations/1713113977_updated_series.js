/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vh730zmi6xvdqrm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lochk1ms",
    "name": "latest_position",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 20,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lrkcv0s6",
    "name": "genre",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vh730zmi6xvdqrm")

  // remove
  collection.schema.removeField("lochk1ms")

  // remove
  collection.schema.removeField("lrkcv0s6")

  return dao.saveCollection(collection)
})
