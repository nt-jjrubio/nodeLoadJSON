# nodeLoadJSON
Node script to load JSON into url REST API

## Installing
Install npm dependencies
```
npm install
```
## Config
Edit loadJSON.js 
* API Username
* API Password
* Request token url 
* File to load --> var jsonFile = JSON.parse(fs.readFileSync(' **atletas.json** ', 'utf8')); 
* API endpoint --> url: '**http://127.0.0.1:3000/api/athlete**',

## How to use?

```
node loadJSON.js
```
