# pull official base image
FROM node:15.11.0

RUN mkdir /client

COPY ./client ./client/ 

# set working directory
WORKDIR /client

# add `/client/node_modules/.bin` to $PATH
ENV PATH /client/node_modules/.bin:$PATH

# install app dependencies
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --silent
# RUN npm install react-scripts@4.0.3 -g --silent
RUN npm install

# add client
COPY . ./

# start app
CMD ["npm", "start"]