FROM node:latest

WORKDIR /home/node/app

COPY . .

RUN sed -i 's/^ENVIRONNEMENT=.*/ENVIRONNEMENT=prod/' .env

COPY worker.txt /shared/worker.txt

RUN npm install

CMD [ "node", "web.js" ]
