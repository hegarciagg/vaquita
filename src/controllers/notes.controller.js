const notesCtrl={};

notesCtrl.renderNoteForm =(req,res) => {
    res.send('note add');
};

notesCtrl.createNewNote =(req,res) => {
    res.send('create new note ');
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