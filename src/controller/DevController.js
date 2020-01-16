const axios = require('axios')
const Dev = require('../models/Dev')
const arrayAsStringAsArray = require('../utils/parseStringAsArray')
module.exports = {

    // GET dev index
    async index(request, response) {
        const devs = await Dev.find()

        return response.json(devs)
    },

    // POST dev index
    async store(request, response) {
        const {
            github_username,
            techs,
            longitude,
            latitude
        } = request.body

        let dev = await Dev.findOne({
            github_username
        })
        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
            const {
                name = login, avatar_url, bio
            } = apiResponse.data
            const techsArray = arrayAsStringAsArray(techs)
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
            console.log(name, avatar_url, bio, github_username, techs, location)
            dev = await Dev.create({
                github_username,
                avatar_url,
                name,
                bio,
                techs: techsArray,
                location
            })
        }
        return response.json(dev)
    }, 
    // UPDATE dev 
    async update() {
        const { id, name } = request.body
        console.log(id)
        const devs = await Dev.findOneAndUpdate({

        })

    },
    async destroy() {

    }
}