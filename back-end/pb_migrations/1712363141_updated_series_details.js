/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jl0f14u6f1rmlwf")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_heYQ2eK` ON `series_details` (\n  `details`,\n  `goodreads_link`,\n  `rotten_tomatoes_link`,\n  `youtube_link`,\n  `imdb_link`,\n  `created`,\n  `updated`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jl0f14u6f1rmlwf")

  collection.indexes = []

  return dao.saveCollection(collection)
})
