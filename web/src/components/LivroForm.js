import React, { useEffect, useState } from 'react';

function LivroForm({ onSalvar, livroAtual, onCancelar }) {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    if (livroAtual) {
      setTitulo(livroAtual.titulo);
      setAutor(livroAtual.autor);
      setAno(livroAtual.ano);
      setCategoria(livroAtual.categoria);
    } else {
      setTitulo('');
      setAutor('');
      setAno('');
      setCategoria('');
    }
  }, [livroAtual]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSalvar({ titulo, autor, ano, categoria });
    setTitulo('');
    setAutor('');
    setAno('');
    setCategoria('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ex: Dom Casmurro"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        <div className="col">
          <label className="form-label">Autor</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ex: Machado de Assis"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col">
          <label className="form-label">Ano</label>
          <input
            type="number"
            className="form-control"
            placeholder="Ex: 1899"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            required
          />
        </div>

        <div className="col">
          <label className="form-label">Categoria</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ex: Romance"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary">
          {livroAtual ? 'Atualizar' : 'Adicionar'}
        </button>
        {livroAtual && (
          <button type="button" onClick={onCancelar} className="btn btn-secondary">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default LivroForm;