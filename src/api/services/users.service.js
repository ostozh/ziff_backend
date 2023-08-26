const gun = require('../../../app')
const user = require('../../../app')

class UserService {
    createUser(username, password, email, role) {
        let result = user.create(username, password, (ack) => {
            return ack
        }, email, role)

        return result
        
    }

    authUser(username, password) {
        let result = user.auth(username, password, (ack) => {
            return ack
        })

        return result

    }

    updateUser(username, password, newPassword) {
        let result = user.auth(username, password, (ack) => {
            return ack
        }, {change: newPassword})

        return result

    }

    deleteUser(username, password) {
        let result = user.delete(username, password, (ack) => {
            return ack

        })

        return result

    }

    leaveUser(){
        let result = user.leave((ack) => {
            return ack
        })

        return result

    }

}

module.exports = new UserService()