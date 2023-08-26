const UserService = require('../services/users.service');

class UserController {
    async createUser(req, res) {
        let username = req.body.username
        let password = req.body.password
        let email = req.body.email
        let role = req.body.role

        if (username && password && email && role) {
            let result = await UserService.createUser(username, password, email, role)

            if (result) {
                return res.status(200).send(result)

            }

            else {
                return res.status(500).send(result)

            }

        }
        
        else {
            return res.result(400).send({
                "message": "Bad Request"

            })

        }

    }

    async authUser(req, res) {
        let username = req.body.username
        let password = req.body.password

        if (username && password) {
            let result = await UserService.authUser(username, password)

            if (result) {
                return res.status(200).send(result)

            }

            else {
                return res.status(500).send(result)

            }

        }
        
        else {
            return res.result(400).send({
                "message": "Bad Request"

            })

        }

    }

    async updateUser(req, res) {
        let username = req.body.username
        let password = req.body.password
        let newPassword = req.body.newPassword

        if (username && password && newPassword) {
            let result = await UserService.updateUser(username, password, newPassword)

            if (result) {
                return res.status(200).send(result)

            }

            else {
                return res.status(500).send(result)

            }

        }
        
        else {
            return res.result(400).send({
                "message": "Bad Request"

            })

        }

    }

    async deleteUser(req, res) {
        let username = req.body.username
        let password = req.body.password

        if (username && password) {
            let result = await UserService.deleteUser(username, password)

            if (result) {
                return res.status(200).send(result)

            }

            else {
                return res.status(500).send(result)

            }

        }
        
        else {
            return res.result(400).send({
                "message": "Bad Request"

            })

        }

    }

    async leaveUser(req, res) {
        let result = await UserService.leaveUser()

        if (result) {
            return res.status(200).send(result)

        }

        else {
            return res.status(500).send(result)

        }        

    }

}

module.exports = new UserController();