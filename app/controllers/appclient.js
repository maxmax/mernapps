'use strict';

/**
 * Module dependencies.
 */

//const mongoose = require('mongoose');
//const { wrap: async } = require('co');
//const only = require('only');
//const { respond, respondOrRedirect } = require('../utils');
//const Article = mongoose.model('Article');
//const assign = Object.assign;

//exports.index = function (req, res){
//  respond(res, 'appclient/index', {
//    title: "appClient"
//  });
//};

exports.index = function (req, res){
  res.render('appclient/index', {
    title: 'App client Test'
  });
};
