'use strict';

const isLocal = process.env.NODE_ENV === 'local' ? true : false;

const moment =  require('moment');
const {Response} = isLocal ?
  require('./models/nodejs/Response') :
  require('/opt/nodejs/Response');

module.exports.hello = async (event) => {
  return Response.success({
    time: moment().format(),
  });
};

