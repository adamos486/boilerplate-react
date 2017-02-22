var express = require('express');
// import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

//Create our app
var app = express();

app.use(express.static('public'));

app.listen(8080, function() {
  console.log('Express server is up on port 8080');
});