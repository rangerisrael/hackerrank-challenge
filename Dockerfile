FROM node:18-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN yarn

COPY . .


CMD ["yarn", "dev","--debug"]
