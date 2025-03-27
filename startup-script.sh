#!/bin/bash
sudo apt-get update
sudo apt install git nodejs npm -y
git clone https://github.com/LukeNotAndrew/spill
cd /home/alterra/spill
npm i
sudo node .
