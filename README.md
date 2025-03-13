# Backend do WebWeather APP.

API REST que consome dados meteorológioos da OpenWeatherMap API através de uma key e armazena os dados no MongoDB.

Tecnologias utilizadas:

- Node.js
- Express.js
- CORS
- Mongoose
- MongoDB
- OpenWeatherMap API

Rotas

GET /health - Verificação de saúde do servidor

GET /weather - Retorna os dados meteorológicos armazenados.

POST /weather - Envia dados meteorológicos para serem armazenados.

