FROM node:boron

RUN mkdir -p /home/kancolle-battle-api

WORKDIR /home/kancolle-battle-api

COPY package.json /home/kancolle-battle-api

RUN npm install

COPY . /home/kancolle-battle-api

RUN npm run build

EXPOSE 8080

ENV NODE_ENV production
ENV PORT 8080
ENV DEBUG=kancolle-battle-api:server

CMD [ "npm", "start" ]