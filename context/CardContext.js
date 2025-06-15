import { createContext, useContext, useState } from 'react';
import { db } from '../src/firebaseConnection';
import { deleteDoc, doc } from 'firebase/firestore';

const CardContext = createContext();

export function CardProvider({ children }) {
  const [cardsSalvos, setCardsSalvos] = useState([]);

  const adicionarCard = (nomeAssinatura, valorMensal, dataRenovacao, categoria) => {
    const novoCard = {
      titulo: nomeAssinatura,
      valor: valorMensal,
      data: dataRenovacao,
      categoria: categoria,
    
      id: (Date.now())
    };
    setCardsSalvos([...cardsSalvos, novoCard])
  };
  const removerCard = async(id) => {
    setCardsSalvos(cardsSalvos.filter(card => card.id !== id));
    await deleteDoc(doc(db, 'assinaturas', id.toString()))
  }

  return (
    <CardContext.Provider value={{ cardsSalvos, adicionarCard, removerCard }}>
      {children}
    </CardContext.Provider>
  );
}

export function useCard() {
  return useContext(CardContext);
}