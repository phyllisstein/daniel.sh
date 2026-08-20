#!/usr/bin/env bash

set -Eeuxo pipefail

args="$*"

restart_server() {
    echo "Terminate existing server..."
    pkill -f "yarn.js dev" || true

    echo "Starting development server..."
    yarn dev
    disown
}

configure_watches() {
    echo "Configuring watches..."

    watchman watch-project /app
    for j in scripts/watchman/*.json; do
        echo "Setting watch $j"
        watchman -j <"$j"
    done
}

watch_watchman() {
    echo "Logging watchman..."
    configure_watches
    tail -f /usr/local/var/run/watchman/root-state/log
}

yarn_install() {
    pkill -f "yarn install" || true
    echo "Running yarn install..."
    yarn install
}

case $args in
serve)
    restart_server
    ;;

watch)
    watch_watchman
    ;;

watches)
    configure_watches
    ;;

yarn)
    yarn_install
    restart_server
    ;;

vinext-types)
    echo "Generating types..."
    yarn generate-types 1>/dev/null 2>/dev/null
    ;;

*)
    echo "Unknown command: $args"
    ;;
esac
