# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:20 AS build-stage

# Install Jungheinrich Zscaler certificate to enable TLS access through the proxy.
RUN apt-get update && apt-get install -y ca-certificates
COPY ./certificates/zscaler.crt /usr/local/share/ca-certificates/zscaler.crt
RUN chmod 644 /usr/local/share/ca-certificates/zscaler.crt && update-ca-certificates --fresh
RUN npm config set cafile /usr/local/share/ca-certificates/zscaler.crt

# Install Jungheinrich Zscaler certificate to enable TLS access through the proxy.
RUN apt-get update && apt-get install -y ca-certificates
COPY ./certificates/zscaler.crt /usr/local/share/ca-certificates/zscaler.crt
RUN chmod 644 /usr/local/share/ca-certificates/zscaler.crt && update-ca-certificates --fresh

WORKDIR /app

COPY package*.json /app/

RUN npm install --verbose

COPY ./ /app/

ARG VITE_API_URL=${VITE_API_URL}

RUN npm run build --verbose


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1

COPY --from=build-stage /app/dist/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./nginx-backend-not-found.conf /etc/nginx/extra-conf.d/backend-not-found.conf
