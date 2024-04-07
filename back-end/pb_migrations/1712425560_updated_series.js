/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vh730zmi6xvdqrm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qsjw0dej",
    "name": "section_count",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vh730zmi6xvdqrm")

  // remove
  collection.schema.removeField("qsjw0dej")

  return dao.saveCollection(collection)
})
