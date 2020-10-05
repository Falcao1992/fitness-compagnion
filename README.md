## Clone Fitness Companion Back

### Clone repositorie

clone project with `git clone https://github.com/Falcao1992/fitness-compagnion.git`

### `npm install`

install every dependencies

### New user in MySql

`CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';`  

`GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';`

### Create database

`CREATE DATABASE fitness_companion;`  


### `npx sequelize db:migrate `

generate table in database

### `npx sequelize db:seed:all`

for insert data in database

### `npx sequelize db:migrate:undo:all`

You can use ` npx sequelize db:migrate:undo`, this command will revert most recent migration.

With `db:migrate:undo:all command` you can revert back to initial state by undoing all migrations.
