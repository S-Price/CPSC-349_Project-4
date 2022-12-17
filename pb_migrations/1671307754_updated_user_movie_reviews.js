migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pfzk3xdnx6xo396")

  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pfzk3xdnx6xo396")

  collection.updateRule = null

  return dao.saveCollection(collection)
})
