# Base image 
FROM node:alpine3.15

# Create a directory to hold the application code inside the image
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
RUN npm install

# Bundle app source
COPY . .

#Espose port
EXPOSE 3000

#ENTRYPOINT ["tail", "-f", "/dev/null"]
CMD npm run start