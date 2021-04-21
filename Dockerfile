FROM node:alpine
WORKDIR /app

COPY package*.json /app/
RUN npm i
COPY ./ /app/

EXPOSE 3001

CMD ["node", "index.js"]
