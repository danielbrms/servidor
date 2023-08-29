const express = require('express');
const app = express();
const port = 3000;

// Analisa o corpo da requisição como JSON
app.use(express.json());

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.post('/receberLeitura', (req, res) => {
// Captura o valor do campo "valor" do corpo da requisição
const valorRecebido = req.body.valor;
  
// Imprime o valor recebido com 2 casas decimais
console.log(`Valor de tensão recebido: ${valorRecebido.toFixed(2)}`);


// Resposta para o ESP32
res.send('Dados recebidos pelo servidor');
});

