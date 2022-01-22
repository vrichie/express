const express =require('express');
const router=express.Router();
const uuid=require('uuid');
const members=require('../../Members');




router.get('/',(req,res)=>{
    res.json(members);

});

//get single member
router.get('/:id',(req,res)=>{

    const found=members.some(member=>member.id===parseInt(req.params.id));

    found? 
        res.json(members.filter(member=>member.id===parseInt(req.params.id)))
        :
        res.status(400).json({msg:`no member with the id of ${req.params.id}`});

});


//create member
router.post('/',(req,res)=>{
    const newMember={
        id:req.body.id,
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
    }


    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg:'please enter your name and email'});
    }

    members.push(newMember);

    res.json(members)  
    
});




//update member


router.put('/:id',(req,res)=>{


    const found=members.some(member=>member.id===parseInt(req.params.id));

    if (found){
           const updMember=req.body ;
           members.forEach(member=>{
               if(member.id===parseInt(req.params.id)){
                   member.name=updMember.name?updMember.name: member.name;
                   member.email=updMember.email?updMember.email: member.email;

                   res.json({msg:'member updated',member});
               }
           });
    }else{

    res.status(400).json({msg:`no member with the id of ${req.params.id}`});
    }

    



    const newMember={
        id:req.body.id,
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
    }


    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg:'please enter your name and email'});
    }

    members.push(newMember);

    res.json(members)  
    
});




//delete single member
router.delete('/:id',(req,res)=>{

    const found=members.some(member=>member.id===parseInt(req.params.id));

    if(found){
        res.json({msg:'member deleted',member: members
        .filter(member=>member.id!==parseInt(req.params.id))})
    }else{
        res.status(400).json({msg:`no member with the id of ${req.params.id}`});
    }

});


module.exports=router;