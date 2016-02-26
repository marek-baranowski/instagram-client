#INSTAGRAM-CLIENT#
Sample **React + Redux** app for searching Instagram tags and displaying relevant pictures.

It uses:

 - [react-router-redux][2] - for routing
 - [redux-actions][3] - for creating actions and handling them in reducers
 - [redux-multi][4] - middleware for dispatching multiple actions from one action creator

##Demo##

[https://instagram-client.firebaseapp.com][1]



###To run###

    npm install
    npm start

###To create dist package###

    npm run dist

    
###Noteworthy###

 - Instagram doesn't support NO-CORS requests, so I had to use proxy - **YQL** (Yahoo Query Language)


  [1]: https://instagram-client.firebaseapp.com
  [2]: https://github.com/reactjs/react-router-redux
  [3]: https://github.com/acdlite/redux-actions
  [4]: https://github.com/ashaffer/redux-multi
