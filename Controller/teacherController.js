exports.getAllTeachers=(req,res,next)=>{
    console.log("allTeachers");
    res.status(200).json({data:[{},{},{}]})
}

exports.getTeacherById=(req,res,next)=>{
    console.log("teacher by id");
    res.status(200).json({data:{id:req.params.id}})
}

exports.insertTeacher=(req,res,next)=>{
    console.log(req.body);
    res.status(201).json({data:"added"})
}

exports.updateTeacher=(req,res,next)=>{
    console.log("updated");
    res.status(200).json({data:{id:req.params.id}})
}

exports.deleteTeacherById=(req,res,next)=>{
    console.log("delete teacher");
    res.status(200).json({data:{id:req.params.id}})
}

exports.getSupervisors=(req,res,next)=>{
    console.log("supervisors");
    res.status(200).json({data:[{},{},{},{},{}]})
}