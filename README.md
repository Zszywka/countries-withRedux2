This project was bootstrapped with Create React App.
-> create-react-app <name_of_app>

You should install package:
-> npm install bootstrap react-redux react-router@3.0.5 redux --save
-> npm install --save uuid
-> npm install --save bootstrap@^4.0.0-alpha.6  react-bootstrap@^0.32.1
-> npm install --save react-bootstrap bootstrap@3
1. create index.js
2. write in the console:
-> npm start
(open your app at the address http://localhost:3000 )
--------------------------------------------------------------------------------
Add Redux:
you should:
1. creation of actions and possibly action creators
2. creation of a reducer
3. creation of a store
4. packaging of our reactor component with the Provider component

--------------------------------------------------------------------------------
If you want to use redux-devtools, you should:
1. write in the console:
-> npm i redux-devtools
-> npm i redux-devtools-dock-monitor
-> npm install --save-dev redux-devtools-log-monitor
2. add the file DevTools.js
3. and now you can change the file scr/store/index.js, scr/index.js
