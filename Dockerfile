FROM mhart/alpine-node:9
WORKDIR /usr/src
COPY yarn.lock package.json ./
RUN yarn
COPY . .
ENV REACT_APP_API_URL https://my-music-api.dremora.com
RUN yarn build && mv build /public
