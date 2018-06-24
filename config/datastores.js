/**
 * Datastores
 * (sails.config.datastores)
 *
 * A set of datastore configurations which tell Sails where to fetch or save
 * data when you execute built-in model methods like `.find()` and `.create()`.
 *
 *  > This file is mainly useful for configuring your development database,
 *  > as well as any additional one-off databases used by individual models.
 *  > Ready to go live?  Head towards `config/env/production.js`.
 *
 * For more information on configuring datastores, check out:
 * https://sailsjs.com/config/datastores
 */

module.exports.datastores = {


  /***************************************************************************
  *                                                                          *
  * Your app's default datastore.                                            *
  *                                                                          *
  * Sails apps read and write to local disk by default, using a built-in     *
  * database adapter called `sails-disk`.  This feature is purely for        *
  * convenience during development; since `sails-disk` is not designed for   *
  * use in a production environment.                                         *
  *                                                                          *
  * To use a different db _in development_, follow the directions below.     *
  * Otherwise, just leave the default datastore as-is, with no `adapter`.    *
  *                                                                          *
  * (For production configuration, see `config/env/production.js`.)          *
  *                                                                          *
  ***************************************************************************/

  // appUrl: process.env.APP_URL,
  // port: process.env.PORT,
  // environment : process.env.NODE_ENV,
  // mongodb: {
  //   adapter: 'sails-mongo',
  //   url: process.env.MONGO_URL
  // },

  // email: {
  //   username: process.env.EMAIL_USERNAME,
  //   password: process.env.EMAIL_PASSWORD,
  //   host: process.env.EMAIL_HOST,
  //   port: process.env.EMAIL_PORT,
  //   secure: process.env.EMAIL_SECURE
  // },

  // twilio: {
  //   accountSid: process.env.TWILIO_ACCOUNT_SID,
  //   authToken: process.env.TWILIO_AUTH_TOKEN
  // }

  mongodb: {
    adapter: 'sails-mongo',
    url: 'mongodb://shubhambtps:yugioh41@ds129811.mlab.com:29811/medico-111'
  }

};
