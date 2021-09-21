FROM node AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx AS stage
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx-docker-conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
