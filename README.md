# 🌦 Backend do WebWeather App  

API REST que consome dados meteorológicos da **OpenWeatherMap API** através de uma chave de acesso e armazena as informações no **MongoDB**.  

## 🚀 Tecnologias Utilizadas  

- **Node.js**  
- **Express.js**  
- **Cors**  
- **Mongoose**  
- **MongoDB**  
- **Dotenv**  
- **OpenWeatherMap API**  

## 🛠 Configuração  

1. Clone o repositório:  
   ```bash
   git clone https://github.com/sabsfreitas/webweather-server.git
   cd webweather-server
   ```

2. Instale as dependências:  
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` e adicione suas credenciais:  
   ```env
   MONGO_URI=sua_conexao_mongodb
   OPENWEATHER_API_KEY=sua_chave_api
   PORT=5000
   ```

4. Inicie o servidor:  
   ```bash
   npm start
   ```

## 🔗 Rotas  

### 🛠 Verificação de saúde  
```http
GET /health
```
Verifica o status do servidor.  

### 🌤 Obter dados meteorológicos  
```http
GET /weather
```
Retorna os dados meteorológicos armazenados.  

### 📥 Armazenar dados meteorológicos  
```http
POST /weather
```
Envia dados meteorológicos para serem armazenados no banco de dados.  
