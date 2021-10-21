const Auth = require('../../modul/auth.js')


module.exports = {
    READ: async (_,res) => {
        res.json(await Auth.find())
    },
    CREATE: async ({body: {username, password, email}}, res) => {
        const result = await Auth.insertMany({
            username,
            password,
            email
        })
        return res.status(201).send('you are register')
    },
    UPDATE: async ({body: {_id, username}, res}) => {
        const result = await Auth.updateOne(
            {
                _id
            },
            {
                username
            }
        )
        return res.send('username updated')
    },
    DELETE: async ({body: {_id}, res}) => {
        await Auth.deleteOne({
            _id
        })
        return res.send('users deleted')
    },
}