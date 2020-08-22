const bcrypt = require('bcrypt');

// Crypt password for seed's data

function BpassGen(mdp){
    return bcrypt.hashSync(mdp, 5);
}

exports.BpassGen = BpassGen;

