const POST = require('../../modul/post.js')


module.exports = {
    READ: async (_,res) => {
        res.json(await POST.find())
    },
    CREATE: async (req,res) => {
        const {title, post, userId} = req.body
        const image = 'http://localhost:5000/' + req.file.filename.replace(/\s/g, '')
        const result =  await POST.create({
            title,
            post,
            image,
            userId
        })
        return res.status(201).send('post uploads')
    },
    UPDATE: async ({body: {_id, title, post}, res}) => {
        const result = await POST.updateOne(
            {
                _id
            },
            {
                title,
                post
            }
        )
        return res.send('post updated')
    },
    DELETE: async ({body: {_id}, res}) => {
        await POST.deleteOne({
            _id
        })
        return res.send('post deleted')
    },
}