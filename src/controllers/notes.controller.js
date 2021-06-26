const notesCtrl = {};
const Note = require("../models/Note");

notesCtrl.renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};

notesCtrl.createNewNote = async(req, res) => {
  const {
    cod_animales,
    nombre,
    nombre_padre,
    nombre_madre,
    procedencia_animal,
    fecha_nacimiento_animal,
    identificacion_animal,
    sexo_animal,
    detalle_animal,
    proposito_animal,
    raza_animal,
    estado_animal,
    color_animal,
    estado_rep_animal,
    descripcion,
  } = req.body;
  const newNote = new Note({
    cod_animales,
    nombre,
    nombre_padre,
    nombre_madre,
    procedencia_animal,
    fecha_nacimiento_animal,
    identificacion_animal,
    sexo_animal,
    detalle_animal,
    proposito_animal,
    raza_animal,
    estado_animal,
    color_animal,
    estado_rep_animal,
    descripcion,
  });
  await newNote.save();
  req.flash('success_msg','Creada exitosamente');
  res.redirect('/notes');
};
notesCtrl.renderNotes = async(req, res) => {
  const notes = await Note.find().lean();
  res.render('notes/all-notes',{notes});
};

notesCtrl.renderEditForm = async(req, res) => {
  const note = await Note.findById(req.params.id).lean();
  console.log(note);
  res.render('notes/edit-note',{note});
};

notesCtrl.updateNote = async (req, res) => {
  const {
    cod_animales,
    nombre,
    nombre_padre,
    nombre_madre,
    procedencia_animal,
    fecha_nacimiento_animal,
    identificacion_animal,
    sexo_animal,
    detalle_animal,
    proposito_animal,
    raza_animal,
    estado_animal,
    color_animal,
    estado_rep_animal,
    descripcion,
  } = req.body;
  
  console.log(req.body);
  await Note.findByIdAndUpdate(req.params.id,{cod_animales,
    nombre,
    nombre_padre,
    nombre_madre,
    procedencia_animal,
    fecha_nacimiento_animal,
    identificacion_animal,
    sexo_animal,
    detalle_animal,
    proposito_animal,
    raza_animal,
    estado_animal,
    color_animal,
    estado_rep_animal,
    descripcion,});
    req.flash('success_msg','Actualizada exitosamente');
    res.redirect('/notes');
  };

notesCtrl.deletenote = async(req, res) => {
  //console.log(req.params.id);
  //res.send('borrando nota');
  await Note.findByIdAndDelete(req.params.id);
  req.flash('success_msg','Eliminada exitosamente');
  res.redirect('/notes');
};
module.exports = notesCtrl;
