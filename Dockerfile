FROM node:12

WORKDIR /app/src

COPY ./package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 3000:3000

CMD [ "npm", "start" ]