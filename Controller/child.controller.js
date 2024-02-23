const Child= require("../Models/childSchema")


exports.getAllChilren=(req,res,next)=>{
    
    Child.find().then((children)=>{
        res.status(200).json(children)
    }).catch((error)=>{
        next(error)
    })
    
}

exports.getChildById=(req,res,next)=>{
    const id = req.params.id;
    Child.findById({ _id: id }) //returns a promise
    .then((child) => {
    if (!child) throw new Error("Id does not exist"); //this will be caught by catch block
    res.status(200).json(child);
    })
    .catch((error) => {
    next(error); //this will be caught by the error middleware
    });
}

exports.insertChild=(req,res,next)=>{
    const child=new Child (req.body);
    child.save()
        .then((child)=>{
            res.status(201).json({
                message:"child added successfuly",
                child
            })
        }).catch((error)=>{
            next(error);
        })
}

exports.updateChild = (req, res, next) => {
    const id = req.params.id;
    const updatedData = req.body;
    Child.updateOne({ _id: id }, updatedData)
        .then(() => {
            res.status(200).json({ message: "Child data updated successfully" });
        })
        .catch((error) => {
            next(error);
        });
}


exports.deleteChild = (req, res, next) => {
    const id = req.params.id;
    Child.deleteOne({ _id: id })
        .then(() => {
            res.status(200).json({ message: "Child deleted successfully" });
        })
        .catch((error) => {
            next(error);
        });
}
