export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(`
    <Response>
      <Play>https://twilio-audio.vercel.app/mensagem.mp3</Play>
    </Response>
  `);
}
