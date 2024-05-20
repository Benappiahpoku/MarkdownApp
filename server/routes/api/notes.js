const express = require("express"); // Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
const multer = require("multer"); // Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files.
const notesController = require("../../controllers/notesController"); // Import the notes controller
const grammarController = require("../../controllers/grammarController");// Import the grammar controller

const router = express.Router();

// Define API routes for notes

router.get("/", notesController.getAll);
router.post("/", notesController.create);
router.get("/:id", notesController.getById);
router.put("/:id", notesController.update);
router.delete("/:id", notesController.delete);

// Set up Multer
const upload = multer({ dest: 'uploads/' });

// Multer middleware for file upload
router.post('/', upload.single('file'), notesController.create);

// Grammar check route
router.get('/:id/grammar', grammarController.checkGrammar);

module.exports = router;
