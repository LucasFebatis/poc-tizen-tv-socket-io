# Tizen Client with ReackJs and Socket.IO

## Commands

### List a tizen project profiles ands templetes

`tizen list <option>`

`native-project`: Show native project template list

`web-project`: Show web project template list

`rootstrap`: Show rootstrap list tizen list

### Create a tizen project

`tizen create <sub-command> [options]`

Sample: `tizen create web-project -n client -t BasicEmptyProject -p tv-samsung-5.0`

### Create a Gatsby project

`gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world`

### Develop with Gatsby

`gatsby develop`

Server listen on: localhost:8000

### Build prod Gatsby

`gatsby build`

output: ./public

### Packaging a Tizen Application

`tizen package -t wgt`

### Install a tizen project on emulator

`tizen install -n <wgt_file> -- <build_output>`