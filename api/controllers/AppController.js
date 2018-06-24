/**
 * AppController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: function(req, res) {
    var Model = sails.models.app
      , body = req.body || {}

		Model.create(body)
		.exec(function (err) {
		  if (err && err.code === 'E_UNIQUE') {
		    return res.sendStatus(409);
		  } else if (err && err.name === 'UsageError') {
		    return res.badRequest();
		  } else if (err) {
		    return res.serverError(err);
		  }

		  return res.ok();
		});
  }
};

