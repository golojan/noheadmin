export default function handler(req, res) {
  res.status(400).json({ error: 'Invalid API Link' })
}
