migrate((db) => {
  const collection = new Collection({
    "id": "ex0fe4zj0b8fnk8",
    "created": "2022-12-18 05:43:30.834Z",
    "updated": "2022-12-18 05:43:30.834Z",
    "name": "user_data",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dqxzl7f6",
        "name": "movie1",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "cjyhnfya",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ex0fe4zj0b8fnk8");

  return dao.deleteCollection(collection);
})
