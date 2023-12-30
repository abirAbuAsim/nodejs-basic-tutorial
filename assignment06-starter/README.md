### Create a table with a interget PK.

```sql
CREATE TABLE entries (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    value FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
```

```sql
DROP TABLE entries;
```

### Create Entry

```sql
INSERT INTO entries (title, value, type) VALUES ('Groceries 1', 200.00, 'expense');
```

### database.js
 
```js
const { Pool } = require("pg");

const db = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432, // default Postgres port
  database: "budgetapp",
});

module.exports = db;
```