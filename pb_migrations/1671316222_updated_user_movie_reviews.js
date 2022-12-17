migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pfzk3xdnx6xo396")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pfzk3xdnx6xo396")

  collection.listRule = null

  return dao.saveCollection(collection)
})
