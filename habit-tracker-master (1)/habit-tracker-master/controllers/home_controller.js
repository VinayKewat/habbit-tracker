// improt models 
const Habit = require('../models/habits');

// main home page 
module.exports.home = function(req,res){
Habit.find({},function(err,habits){

//if err is come 
if(err){
Console.log('Error in fetching the habits');
return;
}

// home print 
return res.render('home',{
title:"Habbit - Tracker",
habit_list:habits
});
}) 
}

// ccreate habit 
module.exports.createHabit = function(req,res){
let days = {
    one:"none",
    two:"none",
    three:"none",
    four:"none",
    five:"none",
    six:"none",
    seven:"none",
}
Habit.create({
    habit : req.body.habit,
    end : req.body.end,
    description:req.body.description,
    frequency:req.body.frequency,
    date:Date(),
    time:req.body.time,
    days:days
    
},function(err,newHabit){
    if(err){
        console.log('Error in creating habit',err);
        return;
    }
    
    console.log(newHabit);
    return res.redirect('back');
});
}

// the controller is  delete  data from a habit
module.exports.deleteHabit = function(req,res){
    let id = req.query.id;
    Habit.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error in deleting Habit");
            return;
        }
        return res.redirect('back');

    });
}