const Puppy = require('../../models/puppy');


module.exports= {
index,
create
}

async function index(req, res, next) {
    const puppies = await Puppy.find({});
    console.log('CONTROLLER=>', puppies)
    res.json(puppies)
}
async function create( req, res, next ) {
    const puppy = await Puppy.create(req.body);
    res.status(201).json(puppy);
}