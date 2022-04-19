# choose a basic image to start from
FROM 17-alpine3.14

RUN apt-get update

# install bash
RUN apk add --no-cache --upgrade bash

RUN npm i -g typescript nodemon ts-node

WORKDIR /app

# ENTRYPOINT nodemon src/index.ts
ENTRYPOINT [ "bash" ]

#  see run.sh in order to run build and run