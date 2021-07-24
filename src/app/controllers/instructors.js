const {
    age,
    date
} = require('../../lib/utils')

module.exports = {
    index(req, res) {
        const instructors = data.instructors.map(function (instructor) {
            return {
                ...instructor,
                services: instructor.services.split(",")
            }

        })

        return res.render("instructors/index", {
            instructors
        })
    },
    create(req, res) {
        return res.render("instructors/create")

    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send("Please, fill all fields!")
            }
        }

        // let {
        //     avatar_url,
        //     birth,
        //     name,
        //     services,
        //     gender
        // } = req.body

        const query = `
            INSERT INTRO instructors (
                name,
                avatar_url,
                gender,
                services,
                birth,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `

        const values = [
            req.body.name,
            req.body.avatar_url,
            req.body.gender,
            req.body.services,
            date(req.body.birth).iso,
            date(Date.now()).iso,
        ]

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