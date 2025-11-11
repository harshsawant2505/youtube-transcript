
const express = require('express');
const app = express();
const PORT = 5000;





app.use(express.json())


app.get('/', async (req, res) => {
const { fetchTranscript } = require('youtube-transcript-plus');

async function getTranscript(videoId) {
  const transcript = await fetchTranscript(videoId);
  console.log(transcript);
  return transcript;
}

const transcript = await getTranscript('fmC2Fv4Ggfo');
res.json({ message: 'Transcript fetched, check console for output.', "transcript": transcript });



});




 app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
 });

