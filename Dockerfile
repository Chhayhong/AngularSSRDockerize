FROM node:18-alpine AS build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM node:18-alpine
WORKDIR /usr/app
COPY --from=build /app/src/dist/ng-ssr ./
CMD ["node", "server/server.mjs"]
EXPOSE 4000

# docker build -t my-ng-ssr-app .
# docker run -p 4000:4000 my-ng-ssr-app