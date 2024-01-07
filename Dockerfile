FROM node:20.10.0-alpine3.19

RUN apk add --no-cache bash

WORKDIR /app/backend

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

ENV PATH /app/backend/node_modules/.bin:$PATH

COPY package.json ./

RUN npm install

COPY . ./

RUN chmod +x ./.docker/entrypoint.sh
