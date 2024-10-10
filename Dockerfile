# Step 1: Build the Angular app
FROM node:20.11.1

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 4200

CMD [ "npm","run","start" ]