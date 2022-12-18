migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ex0fe4zj0b8fnk8")

  collection.listRule = ""
  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ex0fe4zj0b8fnk8")

  collection.listRule = null
  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
