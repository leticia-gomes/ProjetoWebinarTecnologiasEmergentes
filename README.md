# 📚 CRUD de Biblioteca — React.js + Firebase + Bootstrap

Este projeto é uma aplicação de cadastro de livros com interface web desenvolvida em **React.js**, banco de dados em **Firebase Firestore** e estilização com **Bootstrap 5**.

---

## 🎯 Funcionalidades

- ✅ Adicionar livros
- ✏️ Editar livros
- ❌ Excluir livros
- 📖 Listar livros em uma tabela responsiva
- 🔄 Integração em tempo real com Firestore
- 🖼️ Estilização com Bootstrap 5

---

## 🛠️ Tecnologias Utilizadas

- [React.js](https://reactjs.org/)
- [Firebase Firestore](https://firebase.google.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🗂️ Estrutura do Projeto

```
web/
├── src/
│ ├── components/
│ │ └── LivroForm.js
│ ├── config/
│ │ └── Firebase.js
│ ├── App.js
│ └── index.js
├── public/
│ └── index.html
├── package.json
```

---

## ⚙️ Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/leticia-gomes/ProjetoWebinarTecnologiasEmergentes.git
cd ProjetoWebinarTecnologiasEmergentes/web
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o Firebase

Crie o arquivo src/config/Firebase.js com as configurações do seu projeto Firebase:

```bash
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_BUCKET.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
```

### 4. Execute a aplicação

```bash
npm start
```

Acesse em: [http://localhost:3000](http://localhost:3000)

---

## 🖼️ Campos por Livro

- **Título**
- **Autor**
- **Ano**
- **Categoria**

---

## 📱 Versão Mobile (em breve)

O projeto também contará com uma versão mobile feita com **React Native + Expo** usando os mesmos dados do Firestore.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Você pode abrir uma **issue** ou um **pull request** com melhorias, correções ou sugestões.

---

## 📄 Licença

MIT License © Letícia Gomes Ribeiro

---

## 🙋‍♂️ Autor

**Seu Nome**  
🔗 [GitHub](https://github.com/leticia-gomes)  
🔗 [LinkedIn](https://linkedin.com/in/leticia-gomes-ribeiro)