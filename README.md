# E-Portfolio

## Overview
This is my **E-Portfolio** that represents my journey with **42 Abu Dhabi**, highlighting my experiences, skills, and projects. The template was originally created by **bolt.new**, and I have adjusted the code to personalize it and add my portfolio content.

## Features
- About Me
- Qualifications
- Skills
- Work Experience
- Projects
- Achievements
- Reflections
- Resume / CV
- Links to GitHub, LinkedIn, etc.

## Running the Project
The easiest way to get going is with `nvm`, which keeps Node.js/npm in an isolated environment (similar to using a Python virtual environment).

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
   npm install
   npm run dev
   ```
5. Copy the local dev URL shown in the terminal (e.g., `http://localhost:5175/mariame42.github.io/`) and open it in your browser.

> Prefer to work inside a Python-style virtual environment? Feel free to create one (`python3 -m venv .venv && source .venv/bin/activate`) before running the commands above; the steps stay the same inside that shell.
