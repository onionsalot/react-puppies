const Puppy = require('../../models/puppy');


module.exports= {
index
}

async function index(req, res, next) {
    const puppies = await Puppy.find({});
    console.log('CONTROLLER=>', puppies)
    res.json(puppies)
}