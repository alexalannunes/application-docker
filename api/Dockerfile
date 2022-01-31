FROM node:16

WORKDIR /usr/src/api

COPY package*.json .

EXPOSE 3333

RUN yarn install

COPY . .

CMD ["yarn", "dev"]