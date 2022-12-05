# Vue 3 + TypeScript + Vite

## How to run?

Download
```
git clone git@github.com:Im087/neo.git
```

Install
```
npm install
```

Run
```
npm run dev
```

## Decisions
First, I decided what components the application should have. After creating the components, I wanted to implement the floor selecting, room adding/editing/deleting and filtering functionalities. The data must be changeable. APIMOCHA seems too simple. It doesn't allow me to send request to get modified data(after adding/editing/deleting). Therefore, I decided to use a mock json file, vuex and localStorage to provide data, do data operations and communications and store data locally.

## Difficulties
1. APIMOCHA doesn't allow me to send request to get modified data(after adding/editing/deleting). I give up using it.
2. Some bugs found in coding phase because of Typescript's type check.
3. When clicking on delet button, a wrong room is deleted because of a logic mistake on .splice() method.
4. The data communications and logic for filtering rooms are a little complicated.
