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
  res.send("create new note ");
};
notesCtrl.renderNotes = async(req, res) => {
  const notes = await Note.find().lean();
  res.render('notes/all-notes',{notes});
};

notesCtrl.renderEditForm = (req, res) => {
  res.send("editar formulari");
};

notesCtrl.updateNote = (req, res) => {
  res.send("actualizar nota");
};

notesCtrl.deleteNote = (req, res) => {
  res.send("Borrando nota");
};
module.exports = notesCtrl;
