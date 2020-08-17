const todoModel = require('../models/Todo')

const getIndex = ((req, res) =>{
    const titre = 'TODO'
    todoModel.find((err, todoModel) =>{
        if(err){
         return console.log(err);
        } else{
            //console.log(todoModel);
            
        }
      const TODOS = todoModel
        res.render('index', {title: titre, TODOS: TODOS})
    })
 
})

const postIndex = ((req, res)=>{
    const TODO = new todoModel({
        nom: req.body.nom
    })

    TODO.save((err, TODO) =>{
        if(err){
            console.log('error');
        } else{
           //
        }
        res.redirect('/')
    })
   
})


const postDelete = (req, res)=>{
   // console.log(req.params.id);
    const { id } = req.params;
    todoModel.findOneAndDelete(id, (error) =>{
        if(error) console.log('error');
        res.redirect('/')
    })

}

module.exports = {
    getIndex: getIndex,
    postIndex: postIndex,
    postDelete: postDelete
}