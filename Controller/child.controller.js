exports.getAllChilren=(req,res,next)=>{
    console.log("getAllChildren");
    res.status(200).json({data:[{},{},{},{}]})
}

exports.getChildById=(req,res,next)=>{
    console.log("child by id");
    res.status(200).json({data:{id:req.params.id}})
}
exports.insertChild=(req,res,next)=>{
    console.log("update child");
    res.status(201).json({data:"child added-"})
}
exports.updateChild=(req,res,next)=>{
    console.log("updatingChild");
    res.status(200).json({data:{id:req.params.id}})
}
exports.deleteChild=(req,res,next)=>{
    console.log("deleting child");
    res.status(200).json({data:{id:req.params.id}})
}