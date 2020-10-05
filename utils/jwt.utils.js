require('dotenv').config()
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const secret = 'JWT_SECRET'

module.exports = {
    generateTokenForUser(userData) {
        return jwt.sign(
            {
                userId: userData.id
            },
            secret,
            {
                expiresIn: '1h'
            }
        );
    },
    parseAuthorization(authorization) {
        return (authorization !== null) ? authorization.replace('Bearer ', "") : null
    },
    verifyTokenAndGetUserId(tokenParse) {
        let userId = -1
        const token = module.exports.parseAuthorization(tokenParse)
        if (token !== null) {
            try {
                const jwtToken = jwt.verify(token, secret)
                if (jwtToken !== null) {
                    userId = jwtToken.userId
                }
            } catch (err) {
                console.error('err', err)
            }
        }
        return userId
    },
    isAuthenticated(req, res, next) {
        let userId = -1
        let {Access_token} = req.query
        Access_token = Access_token.slice(1, -1)
        res.setHeader('Authorization', "Bearer " + Access_token);
        userId = module.exports.verifyTokenAndGetUserId(Access_token)
        if (userId < 0) {
            return res.status(401).json({msg: "wrong token"})
        }
        req.isAuthenticated = userId
        next();
    },
};
