#!/usr/bin/env bash

set -Eeuxo pipefail

args="$*"

configure_watches() {
  echo "Configuring watches..."

  watchman watch-project "$PWD"
  for j in scripts/watchman/*.json; do
    echo "Setting watch $j"
    watchman -j <"$j"
  done
}

link_yarn_cache() {
  echo "Linking yarn cache..."
  mkdir -p "$PWD/.devcontainer/caches"
  ln -fFs "$PWD/.yarn/cache" "$PWD/.devcontainer/caches/yarn"
}

restart_server() {
  echo "Starting development server..."
  pkill -fi "app.cjs" || true

  yarn start:dev & disown
}

watch_watchman() {
  watchman --logfile=- --log-level=debug --foreground watch-project "$PWD"
}

yarn_install() {
  echo "Running yarn install..."
  yarn install
}

case $args in
link_caches)
  link_yarn_cache
  ;;

serve)
  restart_server
  ;;

watch)
  yarn_install
  restart_server
  watch_watchman
  ;;

watches)
  configure_watches
  ;;

yarn)
  yarn_install
  restart_server
  ;;

*)
  echo "Unknown command: $args"
  ;;
esac
