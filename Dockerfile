FROM node:lts
WORKDIR /workdir
COPY . .
RUN npm install --global vercel