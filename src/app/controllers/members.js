const { age,date } = require('../../lib/utils')

module.exports = {
    index(req, res) {
        const members = data.members.map(function (member) {
            return {
                ...member,
                services: member.services.split(",")
            }

        })

        return res.render("members/index", {
            members
        })
    },
    create(req, res) {
        return res.render("members/create")

    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fields!")
            }
        }

        return
    },
    show(req, res) {
        return
    },
    edit(req, res) {
        return
    },
    put(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fields!")
            }
        }
        return
    },
    delete(req, res) {
        return
    },
}