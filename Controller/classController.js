const Class=require("../Models/classSchema")

exports.getAllClasses=(req,res,next)=>{
    Class.find().then((classes)=>{
        res.status(200).json(classes)
    }).catch((error)=>{
        next(error)
    })
}
exports.getClassById=(req,res,next)=>{
    const id = req.params.id;
    Class.findById({ _id: id }) //returns a promise
    .then((classes) => {
    if (!classes) throw new Error("Id does not exist"); //this will be caught by catch block
    res.status(200).json(classes);
    })
    .catch((error) => {
    next(error); //this will be caught by the error middleware
    });
}
exports.insertClass=(req,res,next)=>{
    const c=new Class (req.body);
    c.save()
        .then((c)=>{
            res.status(201).json({
                message:"Class added successfuly",
                c
            })
        }).catch((error)=>{
            next(error);
        })
}
exports.updateClass=(req,res,next)=>{
    Class.findByIdAndUpdate(req.body._id, req.body, { new: true })
    .then((classs) => {
        res.status(200).json({
            message: "class updated successfully",
            classs
        });
    })
    .catch((error) => {
        next(error);
    });
}
exports.deleteClass=(req,res,next)=>{
    Class.findByIdAndDelete(req.body._id)
    .then((classs) => {
        res.status(200).json({
            message: "class deleted successfully",
            classs
        });
    })
    .catch((error) => {
        next(error);
    });
}
exports.classChildren=(req,res,next)=>{
    console.log("getting class childern");
    res.status(200).json({data:{id:req.params.id}})
}
exports.classSupervisor=(req,res,next)=>{
    console.log("getting class supervisor");
    res.status(200).json({data:"supervisor"})
}
