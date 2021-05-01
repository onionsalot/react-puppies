const Puppy = require('../../models/puppy');


module.exports= {
index,
create,
show
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
async function show(req, res, next) {
    const puppy = await Puppy.findById(req.params.id);
    res.status(200).json(puppy);
}