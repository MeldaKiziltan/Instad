// server/index.js
var zmq = require("zeromq");

const path = require('path');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);

const cohere = require('cohere-ai');
cohere.init('LjR1iCSazFdxxYWpG8wEZV2NIlSMHM76NdezG51G');

app.get("/api", async (req, res) => {
  const prompt = `This is a product slogan generation tool. It generates advertisement slogans related to a given topic.\n--\nProduct: Monitor\nKeywords: curved, gaming\nSlogan: Curve up your Game.\n--\nProduct: Surfboard\nKeywords: refreshing, sporty\nSlogan: Matte. Sleek. Speedy.\n--\nProduct: Headphones\nKeywords: vibrant sound, lightweight\nSlogan: Move freely and stay in the zone.\n--\nProduct: Waterbottle\nKeywords: durable, large volume\nSlogan: Exercise in heavy-duty, with heavy-duty.\n--\nProduct: Shaver\nKeywords: cheap, efficient\nSlogan: Shave Time. Shave Money.\n--\nProduct: Skittles\nKeywords: tasty, colourful\nSlogan: Taste the rainbow. Feel the rainbow.\n--\nProduct: Burger\nKeywords: customizable, tasty\nSlogan: Have it your way, its tasty anyway.\n--\nProduct: Necklace\nKeywords: shiny, elegant\nSlogan: The elegence within its brilliance.\n--\nProduct: Coffee\nKeywords: smooth, hot\nSlogan: Kickstart your morning.\n--\nProduct: Chair\nKeywords: comfortable, portable\nSlogan: Go anywhere but sit anywhere.\n--\nProduct: Sunglasses\nKeywords: aesthtic, clear\nSlogan: Look great and see great.\n--\nProduct: Beer\nKeywords: happy, quality\nSlogan: Drink what you like, like what you drink.\n--\nProduct: Pen\nKeywords: ergonomic, smooth\nSlogan: Your writing, your pen, your style.\n--\nProduct: Knife\nKeywords: sharp, precise\nSlogan: Cut your work in half.\n--\nProduct: ${req.query.product}\nKeywords: ${req.query.keyword}\nSlogan:` ||''
  const response = await cohere.generate({
    model: 'large',
    prompt,
    max_tokens: 20,
    temperature: 0.8,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ["--"],
    return_likelihoods: 'NONE'
  });
  console.log(response.body.generations[0]);
  response.body.prompt = prompt
  res.json(response.body.generations[0].text);
});


});