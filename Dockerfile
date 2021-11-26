FROM node:12 

WORKDIR /app

COPY package*.json /app/

Run npm install  \
    npm install --only=dev --silent
    
COPY . /app

RUN npm run test

EXPOSE 3000