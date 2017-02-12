FROM node:7.5.0

RUN mkdir -p /home/kancolle-battle-api
WORKDIR /home/kancolle-battle-api

COPY . /home/kancolle-battle-api
RUN npm install
RUN npm run build

EXPOSE 8080

ENV NODE_ENV production
ENV NODE_PORT 8080

CMD [ "npm", "run", "start-service"]