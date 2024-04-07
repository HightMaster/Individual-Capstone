/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jl0f14u6f1rmlwf");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "jl0f14u6f1rmlwf",
    "created": "2024-04-06 00:25:15.136Z",
    "updated": "2024-04-06 00:25:41.524Z",
    "name": "series_details",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0ed40xvs",
        "name": "details",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xilejauw",
        "name": "goodreads_link",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "y1h0insq",
        "name": "youtube_link",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "vajjmxmx",
        "name": "imdb_link",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "xansmh3e",
        "name": "rotten_tomatoes_link",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_heYQ2eK` ON `series_details` (\n  `details`,\n  `goodreads_link`,\n  `rotten_tomatoes_link`,\n  `youtube_link`,\n  `imdb_link`,\n  `created`,\n  `updated`\n)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
