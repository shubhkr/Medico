/**
 * IndexController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// module.exports = {
//   render: (req, res) => res.view('index')
// };

module.exports = {
  render: function (req, res) {

    var bundle;

    if (sails.config.environment === 'production') {
      bundle = require('../../assets.json').main.js;
    }

    return res.view('index', {
      bundle: bundle,
    });
  },
};
