#!/usr/bin/env bash

if [[ $# == 0 ]]; then
    exit 0
fi

while [[ $# -gt 0 ]]; do
    case "${1}" in
        hello)
            echo -e "\e[1;34mWelcome to the EcoSystem SSO Project Repository! 🚀🚀🚀\e[0m"
            ;;
        up)
            echo -e "\e[1;34mStarting EcoSystem on local machine 🚀🚀🚀\e[0m"
            docker compose -p ecosystem-sso -f "${CWD}/backend/docker-compose.yml" up
            ;;

    esac

    shift
done