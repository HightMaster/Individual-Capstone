/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vh730zmi6xvdqrm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r0ifsqzi",
    "name": "series_details",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "frj2mdks",
    "name": "goodreads_link",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ykang5vf",
    "name": "rotten_tomatoes_link",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "88k0onsk",
    "name": "wiki_link",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "exipiody",
    "name": "imdb_link",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "whkrbv9p",
    "name": "flexible_link",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vh730zmi6xvdqrm")

  // remove
  collection.schema.removeField("r0ifsqzi")

  // remove
  collection.schema.removeField("frj2mdks")

  // remove
  collection.schema.removeField("ykang5vf")

  // remove
  collection.schema.removeField("88k0onsk")

  // remove
  collection.schema.removeField("exipiody")

  // remove
  collection.schema.removeField("whkrbv9p")

  return dao.saveCollection(collection)
})
