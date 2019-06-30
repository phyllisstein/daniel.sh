# syntax=docker/dockerfile:experimental

FROM node:lts-alpine

WORKDIR /app

RUN apk add --no-cache tini yarn

COPY package.json yarn.lock /app/

RUN --mount=type=secret,id=npmrc,target=/app/.npmrc \
  --mount=type=cache,id=yarn,target=/var/cache/yarn \
  mkdir -p /var/cache/yarn \
  && yarn install --pure-lockfile --cache-folder=/var/cache/yarn --no-progress --non-interactive

COPY . /app/

ENV ENABLE_GATSBY_REFRESH_ENDPOINT=true \
  PATH="/app/node_modules/.bin:$PATH"

EXPOSE 8000

ENTRYPOINT ["/sbin/tini", "-g", "--"]

VOLUME ["/app/.cache", "/app/public"]

CMD ["gatsby", "develop", "--host=0.0.0.0"]
