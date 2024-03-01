FROM node:20-alpine

WORKDIR /home/node/app

COPY . .

RUN sed -i 's/^ENVIRONNEMENT=.*/ENVIRONNEMENT=prod/' .env

RUN npm install

CMD [ "node", "index.js" ]