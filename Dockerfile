FROM node:20 AS build-stage

WORKDIR /app
COPY . .

RUN npm install --legacy-peer-deps
RUN npm run build

FROM nginx:alpine AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8181

CMD ["nginx", "-g", "daemon off;"]
