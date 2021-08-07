---
title: "Postgres Cheat Sheet"
date: "2021-07-27"
category: "Software Engineering"
tags:
  - software-engineering
  - postgres
  - database-administration
  - cheatsheet
---

### Accessing Postgres from the command line

Assuming you've already got Postgres downloaded and installed, run `psql postgres` to enter the command line. If you're told that Postgres isn't running, run `brew services start postgresql` first. 

### Making a new user

```
# create a new user for your new database
CREATE ROLE someprojectadmin WITH LOGIN PASSWORD 'monkey';

# give them the appropriate roles
ALTER ROLE someprojectadmin CREATEDB;

# Quit psql terminal so you can log in as the new user
\quit

# Login again as the new user
psql postgres -U someprojectadmin
```

### Making a new database and table

```
CREATE DATABASE dbname;

\connect dbname

# make a new table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR (50) UNIQUE NOT NULL,
  email VARCHAR (50) UNIQUE NOT NULL,
  password_hash VARCHAR (60) NOT NULL
);
```

### Other helpful psql commands

| Command             | Purpose                         |
|:--------------------|:--------------------------------|
| `\list`             | lists all databases             |
| `\connect <dbname>` | connects to a specific database |
| `\dt`               | list all tables in current db   |
| `\?`                | list all possible commands      |

You can also run any SQL command directly from the psql command line, but be sure to end the command with a `;`