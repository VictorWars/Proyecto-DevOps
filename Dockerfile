FROM node:16.4.2

# Create app directory
WORKDIR /usr/src/app

# install filebeat
RUN wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | apt-key add -
RUN apt-get install apt-transport-https
RUN echo "deb https://artifacts.elastic.co/packages/8.x/apt stable main" | tee -a /etc/apt/sources.list.d/elastic-8.x.list
RUN apt-get update && apt-get install filebeat
COPY ./filebeat/filebeat.yml /etc/filebeat
COPY ./filebeat/filebeat.yml /usr/share/filebeat
RUN update-rc.d filebeat defaults 95 10

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

ENV JWT_SECRET="SECRET_JWT"
ENV EXPIRATION_TIME=100000000

# If you are building your code for production
RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 3000
ENTRYPOINT service filebeat start & \
    node server.js
