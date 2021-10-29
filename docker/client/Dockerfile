# pull official base image
FROM node:15.11.0

RUN mkdir /client

COPY ./client ./client/ 

# set working directory
WORKDIR /client

# add `/client/node_modules/.bin` to $PATH
ENV PATH /client/node_modules/.bin:$PATH

# install app dependencies
RUN npm install



# start app
CMD ["npm", "start"]