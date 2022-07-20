# Base image 
FROM node:alpine3.15

LABEL maintainer="UniCourt" \
    git-repo="git@github.com:UniCourt/WebApp-Workshop1.git"
# Create a directory to hold the application code inside the image
WORKDIR /home/node_app

COPY package.json .
# Install app dependencies
RUN npm install

COPY . .

#Espose port
EXPOSE 3000

CMD npm run start