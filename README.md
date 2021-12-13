# MongoDB NestJS Starter Template

This template provides a starting template for web services based on Typescript, NestJS and MongoDB. Some features include:
- Typescript configuration
- Basic REST API setup with NestJS
- NestJS/MongoDB configuration
- Basic Mongoose setup
- Docker setup for NodeJS and MongoDB

## Requirements

- [NodeJS](https://nodejs.org/en/)
- [NestJS](https://nestjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)

## Development

Run the project in Docker with:
```
docker-compose up
```

Then navigate to `http://localhost:3000/`

### Mongo Express

[Mongo Express](https://github.com/mongo-express/mongo-express) can be used for local development to 
inspect Mongo databases. To inspect tables run `docker-compose up` and navigate to `http://0.0.0.0:8081/`.
