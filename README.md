# E-Portfolio

## Overview
This is my **E-Portfolio** that represents my journey with **42 Abu Dhabi**, highlighting my experiences, skills, and projects. The template was originally created by **bolt.new**, and I have adjusted the code to personalize it and add my portfolio content.

**Live site:** [https://mariame42.github.io/](https://mariame42.github.io/)

## Features
- About Me
- Qualifications
- Skills
- Work Experience
- Projects
- Achievements
- Reflections
- Resume / CV (A4 preview + PDF download)
- Links to GitHub, LinkedIn, etc.

## Makefile commands

| Command | What it does |
| --- | --- |
| `make install` | Install npm dependencies |
| `make run` | Start the local dev server |
| `make build` | Build the production site into `dist/` |
| `make deploy` | Build and publish to GitHub Pages (`gh-pages` branch) |
| `make clean` | Remove `node_modules` and `dist` |

## Running locally
The easiest way to get going is with `nvm`, which keeps Node.js/npm in an isolated environment.

1. Open a terminal and clone or download this repo, then `cd` into it.
2. Install and load `nvm` (skip if already installed):
   ```sh
   curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
   ```
3. Create/use the LTS Node environment:
   ```sh
   nvm install --lts
   nvm use --lts
   ```
4. Install dependencies and start the dev server:
   ```sh
   make install
   make run
   ```
5. Open the local URL shown in the terminal (e.g. `http://localhost:5173/`).

## Deploy to GitHub Pages

Pushing to `main` updates the source code only. To update the live site:

```sh
make deploy
```

This runs `npm run deploy`, which:
1. Builds the production site
2. Publishes the `dist/` folder to the `gh-pages` branch

Then wait 1–2 minutes and refresh [https://mariame42.github.io/](https://mariame42.github.io/).

> Prefer to work inside a Python-style virtual environment? Feel free to create one (`python3 -m venv .venv && source .venv/bin/activate`) before running the commands above; the steps stay the same inside that shell.
