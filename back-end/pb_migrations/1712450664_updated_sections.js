/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hhtsvqn06gsdxtz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "81qpmdpw",
    "name": "related_series",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vh730zmi6xvdqrm",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hhtsvqn06gsdxtz")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "81qpmdpw",
    "name": "related_series",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vh730zmi6xvdqrm",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
