# expense-tracker

A full stack web app with Flask and React

1. install virtual environment and packages

start virtual environment - `pipenv shell`

install packages:
`pipenv install flask flask-sqlalchemy psycopg2 python-dotenv flask-cors`

2. setup database, user and verify in pgAdmin
open new tab, spin v env, then start db server `brew services start postgresql@14`
create db prompt `psql postgres`

one time only:
```
CREATE DATABASE expense_tracker
CREATE USER expense_user WITH PASSWORD 'passwrd'
CREATE ROLE
GRANT ALL PRIVILEDGES ON DATABASE expense_tracker TO expense_user
```

to see tables `\l`

3. create simple route and verify
app.py create route
.flaskenv
run in venv with `flask run`

4. DB connectivity and table with columns
create model in app.py, created tables in python shell



