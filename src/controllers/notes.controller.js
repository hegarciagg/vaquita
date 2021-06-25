const notesCtrl={};

notesCtrl.renderNoteForm =(req,res) => {
    res.render('notes/new-note');
};

notesCtrl.createNewNote =(req,res) => {
    console.log('req.body')
    res.send('create new note ')
};
notesCtrl.renderNotes= (req,res) => {
    res.send('render notes');
};

notesCtrl.renderEditForm = (req,res) => {
    res.send('editar formulari');
};

notesCtrl.updateNote = (req,res) => {
    res.send('actualizar nota');
};

notesCtrl.deleteNote=(req,res) => {
    res.send('Borrando nota');

};
module.exports=notesCtrl;