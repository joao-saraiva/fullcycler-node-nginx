FROM node:15

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.6.1

RUN echo "deb http://archive.debian.org/debian stretch main" > /etc/apt/sources.list

RUN apt-get update && apt-get install -y wget
RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin 
RUN apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "NODE", "index.js" ]
