#!/bin/sh

get_git_branch() {
  # shellcheck disable=SC2005
  echo "$(git symbolic-ref --short -q HEAD 2>/dev/null)"
}

branch="$(get_git_branch)"

git fetch origin
reset="git reset --hard origin/"
reset_branch="$reset$branch"
eval "${reset_branch}"
