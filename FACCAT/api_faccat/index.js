const app = require('./app');

const PORT = process.env.PORT || 5000; //Porta

// Inicia o servidor
app.listen(PORT, () => console.log(`Sever Listening on port ${PORT}`));
