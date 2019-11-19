const whoami = require('./controller.js');

module.exports = (app) => {

    app.get('/api/whoami', whoami.whoami);

}