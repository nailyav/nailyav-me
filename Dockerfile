FROM node:25 AS build
WORKDIR /src
COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build
FROM nginx:alpine
COPY --from=build /src/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]