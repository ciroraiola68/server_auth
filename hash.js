const bcrypt = require('bcrypt');
const { MD5 } = require('crypto-js');
const jwt = require('jsonwebtoken');

// bcrypt.genSalt(10, (err, salt) => {
//     // console.log(salt);
//     if (err) return next(err);

//     bcrypt.hash('pass123', salt, (err, hash) => {
//         if (err) return next(err);
//         console.log(hash);
//     });
// });

// const secret = 'mysecretpassword';
// const secretSalt = 'abcdefghilmno';

// const user = {
//     id: 1,
//     token: MD5('gamma1234').toString() + secretSalt
// }

// const receivedToken = '4458f988044022c3a0c6e959d1261274abcdefghilmno'
// if (receivedToken === user.token) {
//     console.log('move forward')
// }

// console.log(user)

const id = '1000';
const secret = 'supersecret';

const receivedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y';

const token = jwt.sign(id, secret);
const decodeToken = jwt.verify(receivedToken, secret);

console.log(decodeToken)