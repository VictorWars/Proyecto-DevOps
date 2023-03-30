FROM node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Set variables
ENV DB_HOST=host.docker.internal
ENV DB_USER=root
ENV DB_PASSWORD=password
ENV DB_PORT=3306

ENV JWT_SECRET="SECRET_JWT"
ENV EXPIRATION_TIME=100000000

# If you are building your code for production
RUN npm ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]