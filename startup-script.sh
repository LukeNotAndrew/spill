#!/bin/bash
# Make directory for this stuff
mkdir /app
cd /app

# Update and install stuff
sudo apt-get update
sudo apt install git nodejs npm -y

# Get discbro
git clone https://github.com/LukeNotAndrew/spill
cd /app/spill

# Install packages, run
npm i
sudo node .
