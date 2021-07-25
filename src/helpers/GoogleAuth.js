const {OAuth2Client} = require('google-auth-library');

module.exports = class GoogleAuth {
    constructor(token) {
        this.token = token;
        this.clientId = process.env.CLIENT_ID;
        this.client = new OAuth2Client(this.clientId);
    }

    async verify () {
        const ticket = await this.client.verifyIdToken({
            idToken: this.token,
            audience: this.clientId
        });
        const payload = ticket.getPayload();
        return payload;
    }

}
