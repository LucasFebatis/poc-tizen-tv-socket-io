# Tizen Client with ReackJs and Socket.IO

## Commands

### List a tizen project profiles ands templetes

`tizen list <option>`

`native-project`: Show native project template list

`web-project`: Show web project template list

`rootstrap`: Show rootstrap list tizen list

### List Devices and Emulators

`sdb devices`

### Create a tizen project

`tizen create <sub-command> [options]`

Sample: `tizen create web-project -n client -t BasicEmptyProject -p tv-samsung-5.0`

### Create a web project

https://createapp.dev/webpack

### Develop with Webpack

`webpack-dev-server --hot --mode development`

Server listen on: localhost:808x

### Build prod Webpack

`npm run build-prod`

output: ./dist

### Packaging a Tizen Application

`tizen package -t wgt`

### Install a tizen project on emulator

`tizen install -n <wgt_file> -- <build_output>`