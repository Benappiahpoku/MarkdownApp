const axios = require("axios");
const Note = require("../models/Note");

const grammarController = {
  checkGrammar: async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    try {
      const response = await axios({
        url: "https://api.cognitive.microsoft.com/bing/v7.0/spellcheck",
        method: "post",
        params: {
          text: note.content,
          mode: "proof",
          mkt: "en-US",
        },
        headers: {
          "Ocp-Apim-Subscription-Key": "your-bing-spellcheck-api-key",
        },
      });

      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: "Error checking grammar" });
    }
  },
};

module.exports = grammarController;
