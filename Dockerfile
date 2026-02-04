FROM node:20-alpine

WORKDIR /app

COPY . /app

COPY package.json ./

ENV PORT=5000

RUN npm install

COPY . .

RUN npm install pm2 -g

EXPOSE $PORT

CMD ["pm2-runtime", "ecosystem.config.cjs", "--env", "production"]