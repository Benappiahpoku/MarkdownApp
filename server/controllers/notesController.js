const Note = require("../models/Note");
const marked = require("marked");

const notesController = {
  getAll: async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
  },

  create: async (req, res) => {
    const note = await Note.create(req.body);
    res.json(note);
  },

getById: async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    // Convert Markdown to HTML
    const htmlContent = marked(note.content);

    // Add the HTML content to the note object
    note.htmlContent = htmlContent;

    res.json(note);
  },
  update: async (req, res) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(note);
  },

  delete: async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
  },
};

module.exports = notesController;
