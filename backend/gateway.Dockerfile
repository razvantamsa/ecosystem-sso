FROM node:latest
WORKDIR /usr/src/
COPY package.json package-lock.json tsconfig.json ./
RUN npm install
COPY ./gateway ./gateway
COPY ./db ./db
EXPOSE 4000
CMD ["npm", "run", "gateway"]