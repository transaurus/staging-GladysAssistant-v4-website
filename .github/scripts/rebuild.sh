#!/usr/bin/env bash
set -euo pipefail

# Rebuild script for GladysAssistant/v4-website
# Runs on existing source tree (no clone). Installs deps, runs pre-build steps, builds.

# --- Node version ---
# CI uses Node 22, engines requires >=18. Docusaurus 3.9.x needs Node 20+.
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -f "$NVM_DIR/nvm.sh" ]; then
    . "$NVM_DIR/nvm.sh"
    nvm install 22
    nvm use 22
fi

# --- Package manager + dependencies ---
# Uses Yarn 1 classic (yarn.lock present, packageManager: yarn@1.22.22)
yarn install --frozen-lockfile

# --- Build ---
yarn build

echo "[DONE] Build complete."
