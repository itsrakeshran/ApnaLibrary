const Librarian=require("../model/librarian")



// Get all librarian
getAllLibrarian=async(req,res)=>{
    try{
        const librarian=await Librarian.find({})
        res.status(200).json(librarian);
    }
    catch(error){
        // res.status(400).send(error);
        res.status(400).send(`Error\n, ${error}`);
    }    
}

// Get librarian by id
getLibrarianByid=async(req,res)=>{
    try {
        const response= await Librarian.findOne({EmpID: `${req.params.id}`}, {_id: 0, __v: 0});
        res.status(200).json(response)
    
    } catch (error) {
        res.status(400).send(`Error\n, ${error}`);
    }

}


//Add a librarian
addLibrarain=async(req,res)=>{
    const librarian=req.body;
    try{
        await Librarian.create(librarian)
        res.status(201).send(librarian)
    }
    catch(error){
        res.status(400).send(error)
    }
};

//Delete a librarian
deleteLibrarain=async(req,res)=>{
    try{
        const result = await Librarian.findOneAndDelete({EmpID:`${req.body.EmpID}`});
        if(!result){
            res.status(404).send()
        }        
        res.send(result);
    }
    catch(error){
        res.status(500).send(error)
    }
};




//Block a librarian
blockLibrarain=async(req,res)=>{
    const librarianId=req.body.id;
    try{
        let result= await Librarian.findById(librarianId)
        if(!result){
            res.status(404).send()
        } 
        result.IsBlocked=true;       
        await result.save();

    }catch(error){
        res.status(500).send(error)
    }
};


module.exports={getAllLibrarian,addLibrarain,deleteLibrarain,blockLibrarain,getLibrarianByid}