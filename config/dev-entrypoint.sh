#!/usr/bin/env bash

yarn install --non-interactive

watchman watch-project /app

for j in /app/config/watchman/*.json; do
  watchman --json-command < "$j"
done

exec yarn develop
