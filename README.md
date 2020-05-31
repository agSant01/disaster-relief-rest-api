# Disaster Relief REST API 
#### by Team RESTing

## How to Run

There are two ways of runnning this application. One is running your services locally in your machine and the other is via Docker (https://www.docker.com/get-started).

The steps are below.

### Local (on your machine)
------------------------

To run this services locally you will need NodeJS (nodejs.com) and PostgresSQL (https://www.postgresql.org) installed in your machine.

Go to the directory where the code is located and first run `npm install` to install all the required packages for running the API. This should generate a `node_modules/` folder with all the dependencies installed.

After having all the dependencies you can run `npm start` and this will run the REST API. 

To test that the service is working correctly go to your browser of preference and navigate to the url `http://localhost:3000/api` this should answer with a response like:

```json
{
    "msg": "Disaster relief API."
}
```
<br>

Do another request to the url `http://localhost:3000/api/dbtest`. The response shoulr be something like this:
```json
{
    "error": "Error: connect EHOSTUNREACH 172.16.238.10:5432"
}
```

This means that our database server is not running or that the `config.js` file does not has the credentials to access the database.

Create a file `config.js` in the root directory of the project and add the following:

```js
module.exports = {
    DATABASE_URL: 'postgresql://<user>:<password>@<host-ipaddress>:5432/database-name>',
};

```

This should contain the appropiate credentials for the postgres database. This variable can be overridden with NODE environment variables at runtime if desired, but must be named `DATABASE_URL`.

<br>

The database schema and population scripts are found in `/schema/` directory.

To create run them in the postgresql database server, go to the root folder the project and access the `psql` **CLI**, after accessing go to the database in the **psql CLI** run the following commands:

```
database_name=> \i schema/schema_definition.sql
database_name=> \i schema/schema_populate.sql
```

These commands will create the database schema and populate the database with data.

After the server is running, schema is created and the database is populated if you do a GET to the url `http://localhost:3000/api/dbtest` you would get the following response:
```json
{
    "db_connection_test": {
        "current_time": "2020-05-31T18:18:42.488Z"
    }
}
```

If this is the case the server is operating as expected.

### Docker

To run the services with Docker you must know that the database configuration lies in the  `docker-compose.yml` file.  

The environment variables of the `db` service that name the database and access credentials are:
```yml
db:
    ...
    environment:
        POSTGRES_PASSWORD: "dev_pass"
        POSTGRES_USER: "dev_user"
        POSTGRES_DB: "disaster_relief_db"
```

This credentials must match the environment of the `api` service
```yml
api:
    ...
    environment:
      DATABASE_URL: "postgresql://dev_user:dev_pass@172.16.238.10:5432/disaster_relief_db"
```

The IPv4 address of the database is specified as `172.16.238.10`.

As long as those two services share the same credentials they will be able to connect to each other.

To run the serivices go to the root directory and run the command `docker-compose up`. This command would create the docker images if they do not exist, spin up the containers and map the port 3000 of the api container to your localhost ip.


To test that the service is working correctly go to your browser of preference and navigate to the url `http://localhost:3000/api`  this should answer with a response like:

```json
{
    "msg": "Disaster relief API."
}
```

To test the database connection navigate to url `http://localhost:3000/api/dbtest` and you should get the following response:
```json
{
    "db_connection_test": {
        "current_time": "2020-05-31T18:18:42.488Z"
    }
}
```

The services are running properly.

## Testing

If you have Visual Studio Code (https://code.visualstudio.com) installed, then you can take advantage of the `.http` files that were made to test the routes. WIth the package **REST Client** (https://marketplace.visualstudio.com/items?itemName=humao.rest-client) made for VS Code.

After installing the package if you open the `.http` files that are in the `routes/` directory you will be able to generate GET and POST requests for the api.

In the first to lines of this files you will see
```
@localhost = http://localhost:3000

@heroku = https://evening-tor-08768.herokuapp.com

@url = {{localhost}}
```
This is the syntax for creating variable in `.http` file format and are the reference the url are send to.

The `@heroku` variable points to our heroku deployment. To point the requests to it just change

```
@url = {{localhost}}
``` 

to

```
@url = {{heroku}}
```

## Contributors
| <img src="https://firebasestorage.googleapis.com/v0/b/iapconfapp.appspot.com/o/WebPhotos%2Fgab%20image.png?alt=media&token=f4458c23-6a0d-4e6a-852d-bf8656ffb34d" width="150" height="200"> <br> [Gabriel Santiago Guzman][gab_git] | <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEDK6HK17VNUA/profile-displayphoto-shrink_800_800/0?e=1596672000&v=beta&t=8zOTJma3osFIsIuXSP8vYyn2yhbYJepN07AUVhrIRv0" width="150" height="150"> <br> [Luis Romero Sevilla][luis_git] <br> | <img src="https://avatars1.githubusercontent.com/u/33661901" width="150" height="150"> <br> [Valerie Otero Echevarria][valerie_git] <br> |
|:---: | :---: | :---: |

[gab_git]: https://github.com/agSant01 'GitHub'
[luis_git]: https://github.com/oremorsiul15 'GitHub'
[valerie_git]: https://github.com/valerieotero 'GitHub'
