# Base image 
FROM node:16

# Create a directory to hold the application code inside the image
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

#ENTRYPOINT ["tail", "-f", "/dev/null"]
CMD npm run start