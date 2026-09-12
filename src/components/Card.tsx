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

  // JSON file theke data load korar jonno useEffect - component mount howar por ekbar cholbe
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
      <h2 className="text-3xl font-extrabold text-neutral-900">
        Explore the <span className="brand-gradient-text">Technologies</span>
      </h2>
      <p className="mt-1 mb-6 text-neutral-500">
        Pick one technology per category to build your ideal stack.
      </p>

      {loading ? (
        <p className="text-neutral-400 py-10 text-center">Loading technologies...</p>
      ) : (
        <AvailableCard cards={cards} selectedIds={selectedIds} onAdd={onAdd} />
      )}
    </div>
  );
};

export default Card;