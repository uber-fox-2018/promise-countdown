let sqlite3 = require('sqlite3')
let db = new sqlite3.Database('./database.db')
let query = `CREATE TABLE test (id INTEGER name TEXT)`
db.run(query,()=>{})
