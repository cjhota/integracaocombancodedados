
const { age, date } = require("../../lib/utils")
// const Instructor =  require("../models/Instructor")
const db = require("../../config/db")

module.exports = {
    index(req, res) {
    
        // Instructor.all(function(instructors) {
        //     return res.render("instructors/index", { instructors })
        // })

        return res.render("instructors/index")

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

        const query = `
            INSERT INTO instructors (
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
            date(Date.now()).iso
        ]

        db.query(query, values, function(err, results) {
            // console.log(err)
            // console.log(results)
            if(err) return res.send("Database Error")

            return res.redirect(`/instructors/${results.rows[0].id}`)
        })

        // Instructor.create(req.body, function(instructor) {
        //     return res.redirect(`/instructors/${instructor.id}`)
        // })
       
    },
    show(req, res) {
        Instructor.find(req.params.id, function(instructor) {
            if(!instructor) return res.send("Instructor not found!")

            instructor.age = age(instructor.birth)
            instructor.services = instructor.services.split(",")

            // instructor.created_at = date(instructor.created_at).format

            return res.render("instructors/show", { instructors })

        })
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