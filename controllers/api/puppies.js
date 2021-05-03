const Puppy = require('../../models/puppy');


module.exports= {
index,
create,
show,
update,
delete: deleteOne
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
async function update(req, res, next) {
    console.log('Puppy ID chosen was',req.params.id)
    const updatedPuppy=await Puppy.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedPuppy);
}
async function deleteOne(req, res, next) {
    const deletedPuppy = await Puppy.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedPuppy)
}