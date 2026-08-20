#!/usr/bin/env bash

set -Eeuxo pipefail

args="$*"

restart_server() {
    echo "Terminate existing server..."
    pkill -f "yarn.js dev" || true
    echo "Terminate existing server..."
    pkill -f "yarn.js dev" || true

    echo "Starting development server..."
    source /run/secrets/environment && export GSAP_NPM_TOKEN GITHUB_TOKEN FONT_AWESOME_NPM_TOKEN
    yarn dev
    disown
}

configure_watches() {
    echo "Configuring watches..."
    echo "Configuring watches..."

    watchman watch-project /app
    for j in scripts/watchman/*.json; do
        echo "Setting watch $j"
        watchman -j <"$j"
    done
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
    echo "Logging watchman..."
    configure_watches
    tail -f /usr/local/var/run/watchman/root-state/log
}

yarn_install() {
    pkill -f "yarn install" || true
    echo "Running yarn install..."
    source /run/secrets/environment && export FONT_AWESOME_NPM_TOKEN GITHUB_TOKEN GSAP_NPM_TOKEN
    yarn install
}

case $args in
serve)
    restart_server
    ;;
    restart_server
    ;;

watch)
    watch_watchman
    ;;
    watch_watchman
    ;;

watches)
    configure_watches
    ;;
    configure_watches
    ;;

yarn)
    yarn_install
    restart_server
    ;;
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
    echo "Unknown command: $args"
    ;;
esac
