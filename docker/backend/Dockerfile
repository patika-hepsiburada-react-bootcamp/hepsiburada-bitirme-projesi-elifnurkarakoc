#Dockerfile
FROM node:15.11.0

RUN mkdir /backend

COPY ./backend /backend/

WORKDIR /backend


# add `/backend/node_modules/.bin` to $PATH
ENV PATH /backend/node_modules/.bin:$PATH

RUN npm install

CMD ["npm", "start"]