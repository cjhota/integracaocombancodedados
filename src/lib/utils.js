module.exports = {
    age(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()

        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() <= birthDate.getDate()) {
            age = age - 1
        }

        return age
    },
    date(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()  //yyyy
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)   //mm
        const day = `0${date.getUTCDate()}`.slice(-2)    //dd

        // return `${year}-${month}-${day}`   //return yyyy-mm-dd iso
        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay:`${day}/${month}`,
            format:`${day}/${month}/${year}`,
        }
    }
}