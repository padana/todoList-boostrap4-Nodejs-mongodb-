const todoModel = require('../models/Todo')

const getEdit = (req, res) => {
    const nom = 'editer'
    const { id } = req.params
    todoModel.findById(id, (err, todo) =>{
     console.log(todo);
     if(err) console.log(err);
     
     res.render('edit', {title: nom, todo: todo})
    })

}
const putEdit = (req, res) => {
   console.log("test: ", req.params.id);
   const { id } = req.params
   const {nom} = req.body
  todoModel.findOneAndUpdate(id, {nom: nom}, (err)=>{
     if(err) console.log(err)
     res.redirect('/')
   })
}

module.exports = {
    getEdit: getEdit,
    putEdit: putEdit
}