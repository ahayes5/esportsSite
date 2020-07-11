# Stage 1: build - compile angular code
FROM node:alpine AS builder
RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD [ "npm", "run", "ng", "build", "--", "--prod", "--deploy-url=/"]

# Stage 2: nginx run
FROM nginx:alpine AS nginxtest

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
RUN  rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/esportsSite /usr/share/nginx/html
EXPOSE 4200 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]