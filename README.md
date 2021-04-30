# auth-api

# LAB - Class 08

## Project: Acces Control

### Author: Nicholas Cerillo

### Links and Resources

- [ci/cd](https://github.com/nacerillo/auth-api/tree/main/auth-server/src)
- [Actions](https://github.com/nacerillo/auth-api/pulls)
- [Heroku](https://auth-and-api-prod.herokuapp.com/) 

### Setup

#### `.env` requirements

- `PORT` - 3001
- `MONGODB_URI` - `mongodb://localhost:27017/auth`

#### How to initialize/run your application

- e.g. `nodemon`

#### Tests

Auth Router
admin users

- can create one
- can signin with basic
- can signin with bearer
  bad logins
  - basic fails with known user and wrong password
  - basic fails with unknown user
  - bearer fails with an invalid token
  - basic fails with known user and wrong password
  - basic fails with unknown user
  - bearer fails with an invalid token
  - basic fails with known user and wrong password
  - basic fails with unknown user

#### UML / Application Wiring Diagram
