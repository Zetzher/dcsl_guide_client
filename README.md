<h1 align="center">Welcome to GDSL Guidesmith Phone List 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://gdslguidesmith.firebaseapp.com/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

> E-Commerce where you can buy, edit, delete and sell your device.

### 🏠 [Homepage]
Firebase:
(https://gdslguidesmith.firebaseapp.com/)

### ✨ [Demo](https://gdslguidesmith.firebaseapp.com/)

## Install

```sh
npm install
```

## Usage

```sh
npm start
```

## User Stories
- Switch which can change between light theme and dark theme.

- Pressing a picture, NOT a card, allow users to check phone's description, from this point, the user can edit and delete it.

- Buying a phone pressing on the button which is placed at every card's bottom.

- Add a new phone pressing on the button which the user will find at the right bottom corner, '+'.

## Run tests

```sh
npx cypress open
```

**¡Important**
Tests are muted, you should go to cypress/integration/home.spec.js.

Also, if you are gonna use this repo in local, you should change the order of env CORS setup has inside my server file => {
  process.env.PUBLIC_DOMAIN, process.env.FIREBASE_DOMAIN_BASE
}

.env => {
  development: REACT_APP_API_URI= http://localhost:4000
  production: REACT_APP_API_URI= https://gdsl-guidesmith-phone-list.herokuapp.com
}

## Author

👤 **Zetzher - Julián Abasolo**

* Website: https://github.com/Zetzher
* Github: [@zetzher](https://github.com/zetzher)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/julian-abasolo\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/julian-abasolo\/)
