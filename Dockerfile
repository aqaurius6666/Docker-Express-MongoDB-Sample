FROM node:16-alpine3.12

WORKDIR /app

COPY package*.json .

RUN npm install yarn nodemon && yarn install

COPY . .