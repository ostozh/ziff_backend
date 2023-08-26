require('gun/sea')
const Gun = require('gun')
const gun = new Gun()
const user = gun.user()

class UserService {
    async createUser(username, password, email, role) {
        let result = await user.create(username, password, (ack) => {
            return ack
        }, email, role)

        return result
        
    }

    async authUser(username, password) {
        let result = await user.auth(username, password, (ack) => {
            return ack
        })

        return result

    }

    async updateUser(username, password, newPassword) {
        let result = await user.auth(username, password, (ack) => {
            return ack
        }, {change: newPassword})

        return result

    }

    async deleteUser(username, password) {
        let result = await user.delete(username, password, (ack) => {
            return ack

        })

        return result

    }

    async leaveUser(){
        let result = await user.leave((ack) => {
            return ack
        })

        return result

    }

}

module.exports = new UserService()