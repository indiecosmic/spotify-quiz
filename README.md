# Spotify Quiz
WIP
## Setup
1. Build front-end
```
cd app
yarn
yarn dev

(use: 'yarn watch' for development build with watch, or 'yarn prod' for production build)
```
2. Run node server
```
cd ..
yarn start
```
## Deploy to Heroku
The app uses separate package.json files for back-end and front-end. When pushing to Heroku the __heroku-postbuild__ script will run automatically.
```javascript
"heroku-postbuild": "cd app && yarn && yarn prod"
```
