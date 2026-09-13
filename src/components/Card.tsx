import { useEffect, useState } from 'react';
import type { ICard } from '../types/card';
import AvailableCard from './AvailableCard';

interface ICardprops {
  selectedIds: string[];
  onAdd: (card: ICard) => void;
}

const Card = ({ selectedIds, onAdd }: ICardprops) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch('/data.json');
        const data: ICard[] = await res.json();
        setCards(data);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="flex-grow">
      {loading ? (
        <p className="text-neutral-400 py-10 text-center">Loading technologies...</p>
      ) : (
        <AvailableCard cards={cards} selectedIds={selectedIds} onAdd={onAdd} />
      )}
    </div>
  );
};

export default Card;