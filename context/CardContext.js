// context/CardContext.js
import { createContext, useContext, useState } from 'react';

const CardContext = createContext();

export function CardProvider({ children }) {
  const [cardsSalvos, setCardsSalvos] = useState([]);

  const adicionarCard = (novoTitulo, novaDescricao) => {
   const novoCard = {
      titulo: novoTitulo,
      descricao: novaDescricao,
      id: (Date.now()) //depois puxar da senha do usuário? sei lá.
    };
    setCardsSalvos([...cardsSalvos,novoCard])
  };
  const removerCard = (id) =>{
    setCardsSalvos(cardsSalvos.filter(card => card.id !== id));

  }

  return (
    <CardContext.Provider value={{cardsSalvos,adicionarCard,removerCard }}>
      {children}
    </CardContext.Provider>
  );
}

export function useCard() {
  return useContext(CardContext);
}