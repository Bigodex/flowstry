require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Flowstry API funcionando 🔥');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
