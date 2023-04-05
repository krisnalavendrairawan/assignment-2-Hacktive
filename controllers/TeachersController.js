const fs = require('fs');
class TeachersController {
    //ambil data json
    static getAllTeachers(req, res) {
        fs.readFile('./data/teachers.json', 'utf8', (err, data) => {
            if (err) {
                res.status(500).json({
                    message: err.message
                })
                console.log(err);
            } else {
                res.status(200).json({
                    message: 'success',
                    data: JSON.parse(data)
                })
            }
        })
    }
    

}

module.exports = {
    TeachersController
}