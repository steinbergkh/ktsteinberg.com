'use strict';

var api = require('./controllers/api'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.route('/api/awesomeThings')
    .get(api.awesomeThings);


  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });
    app.route('/google6b0201a211ea9ed3.html')
        .get(function(req, res) {
            res.render('google6b0201a211ea9ed3');
        });
//    app.route('/resume/KatieSteinbergResume.pdf')
//        .get(function(req, res) {
//            res.render('KatieSteinbergResume.pdf');
//        });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/pillsy')
  .get(function(req, res){
    res.redirect('http://pillsy.com?rfsn=593100.d3cdc');
  })
  app.route('/*')
    .get( index.index);
};
