const { generateToken } = require('../helpers/jwt');
const fs = require('fs');
class UsersController {
    static login (req, res) {
        fs.readFile('./data/users.json', 'utf8', (err, data) => {
            if (err) {
                res.status(500).json({
                    message: err.message
                })
                console.log(err);
            } else {
                let users = JSON.parse(data);
                let user = users.find(user => user.username === req.body.username);
                if (user) {
                    if (user.password === req.body.password) {
                        let token = generateToken({
                            id: user.id,
                            username: user.username,
                            password: user.password
                        })

                        res.status(200).json({
                            message: 'success',
                            token
                        })
                    } else {
                        res.status(400).json({
                            message: 'wrong password'
                        })
                    }
                } else {
                    res.status(400).json({
                        message: 'wrong username'
                    })
                }
            }
        })
    }
}

module.exports = {
    UsersController
}