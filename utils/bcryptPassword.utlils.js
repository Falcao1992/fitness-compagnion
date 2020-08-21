const bcrypt = require('bcrypt');

function BpassGen(mdp){
    return bcrypt.hashSync(mdp, 5);
}

exports.BpassGen = BpassGen;

