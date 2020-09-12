require('dotenv').config()
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

module.exports = {
    generateTokenForUser(userData) {
        return jwt.sign(
            {
                userId: userData.id,
                //username: userData.username,
            },
            process.env.JWT_SIGN_SECRET,

            {
                expiresIn: '1h',
            },
        );
    },
    parseAuthorization(authorization) {
        return (authorization !== null) ? authorization.replace('Bearer ', "") : null
    },
    getUserId(authorization) {
        let userId = -1
        const token = module.exports.parseAuthorization(authorization)
        console.log("token", token)
        if (token !== null) {
            try {
                const jwtToken = jwt.verify(token, process.env.JWT_SIGN_SECRET)
                if (jwtToken !== null) {
                    userId = jwtToken.userId
                    console.log("userId", userId)
                }
            } catch (err) {
                console.error('err', err)
            }
        }
        return userId
    },
    isAuthenticated(req, res, next) {
        console.log('dans le midleware')
        let userId = -1
        let {Access_token}= req.query
        Access_token = Access_token.slice(1, -1)
        res.setHeader('Authorization', "Bearer " + Access_token);
        userId = module.exports.getUserId(Access_token)
        if (userId < 0) {
            return res.status(401).json({'error': "wrong token", userId})
        }
        req.isAuthenticated = userId
        next();
    },

};
