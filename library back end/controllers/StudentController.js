const Student = require('../model/student');

//Get all student
getAllStudents=async(req,res)=>{
    
    try {
            const response= await Student.find({});
            console.log(response);
        if(response != undefined && response != null){
        res.status(200).json(response);
        }
        else{
            console.log({msg:"Data Not Found"})
            res.status(204).json({msg:"Data Not Found"});
        }
    } catch (error) {
        res.status(400).send(`Error\n, ${error}`);
    }
    
}

// get student by id
getAllStudentsbyId=async(req,res)=>{
    try {
        const response= await Student.findOne({StudentID: `${req.params.id}`},{_id: 0, __v: 0});

        if(response){
            res.status(200).json(response);            
        }
        else{
            res.status(404).json({msg:"Studet Not Found"});
        }
        
    
    } catch (error) {
        res.status(400).send(`Error\n, ${error}`);
    }

}



// Add a student
addStudent = async (req, res) => {
    const student = req.body;

    try {
        await Student.create(student);
        res.status(201).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
};

//Delete a student
deleteStudent = async (req, res) => {
    try {
        const student = await Student.findOneAndDelete({StudentID:`${req.body.StudentID}`});
        // await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();

        if (!student) {
            return res.status(404).send();
        }

        res.send(student);
        
    } catch (error) {
        res.status(500).send();
    }
};

// Block a student
blockStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).send();
        }

        student.IsBlocked = true;
        await student.save();

        res.send(student);
    } catch (error) {
        res.status(500).send();
    }
};


module.exports={getAllStudents, blockStudent, deleteStudent, addStudent, getAllStudentsbyId}
