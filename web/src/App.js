import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './config/Firebase';
import LivroForm from './components/LivroForm';

function App() {
  const [livros, setLivros] = useState([]);
  const [editando, setEditando] = useState(null);

  const livrosRef = collection(db, 'livros');

  const listarLivros = async () => {
    const snapshot = await getDocs(livrosRef);
    const lista = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setLivros(lista);
  };

  useEffect(() => {
    listarLivros();
  }, []);

  const adicionarLivro = async (livro) => {
    await addDoc(livrosRef, livro);
    listarLivros();
  };

  const atualizarLivro = async (id, dados) => {
    const livroRef = doc(db, 'livros', id);
    await updateDoc(livroRef, dados);
    setEditando(null);
    listarLivros();
  };

  const excluirLivro = async (id) => {
    const livroRef = doc(db, 'livros', id);
    await deleteDoc(livroRef);
    listarLivros();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Biblioteca - Cadastro de Livros</h1>
      <LivroForm
        onSalvar={editando ? (dados) => atualizarLivro(editando.id, dados) : adicionarLivro}
        livroAtual={editando}
        onCancelar={() => setEditando(null)}
      />
      <h2 className="mt-4">Lista de Livros</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Ano</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {livros.length > 0 ? (
              livros.map((livro) => (
                <tr key={livro.id}>
                  <td>{livro.titulo}</td>
                  <td>{livro.autor}</td>
                  <td>{livro.ano}</td>
                  <td>{livro.categoria}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => setEditando(livro)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => excluirLivro(livro.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  Nenhum livro cadastrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
