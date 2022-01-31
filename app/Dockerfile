FROM node:16

WORKDIR /usr/src/app

COPY package*.json .

EXPOSE 3000

RUN yarn install

COPY . .

CMD ["yarn", "start"]