FROM node:16

RUN apt-get update

RUN npm i -g typescript nodemon ts-node

WORKDIR /app

# ENTRYPOINT nodemon src/index.ts
ENTRYPOINT [ "bash" ]

#  see run.sh in order to run build and run