exports.getAllClasses=(req,res,next)=>{
    console.log("all classses");
    res.status(200).json({data:[{},{}]})
}
exports.insertClass=(req,res,next)=>{
    console.log("insert class");
    res.status(201).json({data:"added"})
}
exports.updateClass=(req,res,next)=>{
    console.log("updating class");
    res.status(200).json({data:{id:req.params.id}})
}
exports.deleteClass=(req,res,next)=>{
    console.log("deleting class");
    res.status(200).json({data:{id:req.params.id}})
}
exports.classChildren=(req,res,next)=>{
    console.log("getting class childern");
    res.status(200).json({data:{id:req.params.id}})
}
exports.classSupervisor=(req,res,next)=>{
    console.log("getting class supervisor");
    res.status(200).json({data:"supervisor"})
}
exports.getClassById=(req,res,next)=>{
    console.log("class by id");
    res.status(200).json({data:{id:req.params.id}})
}