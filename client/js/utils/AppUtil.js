'use strict';

module.exports = {
  request: function (requestParams) {
    requestParams = requestParams || {};

    $.ajax({
      url: requestParams.url,
      type: requestParams.method || 'GET',
      dataType: requestParams.dataType || 'json',
      data: requestParams.body || {},
      success: function (res) {
        requestParams.callback(null, res);
      },
      error: function (err) {
        err = (err && err.responseText) || 'Server Error';
        requestParams.callback(err, null);
      }
    });
  }
};
