import type { ICard } from '../types/card';

interface IAvailableCardProps {
  cards: ICard[];
  selectedIds: string[];
  onAdd: (card: ICard) => void;
}

const badgeColors: Record<string, string> = {
  Popular: 'bg-purple-100 text-purple-600',
  Versatile: 'bg-green-100 text-green-600',
  Fast: 'bg-orange-100 text-orange-600',
  'SSR / Edge': 'bg-neutral-100 text-neutral-600',
  Standard: 'bg-violet-100 text-violet-600',
  Minimal: 'bg-neutral-100 text-neutral-600',
  'Top SQL': 'bg-blue-100 text-blue-600',
  Cache: 'bg-red-100 text-red-500',
  NoSQL: 'bg-green-100 text-green-700',
  Ubiquitous: 'bg-yellow-100 text-yellow-600',
  Essential: 'bg-blue-100 text-blue-600',
  Modern: 'bg-cyan-100 text-cyan-600',
  Containers: 'bg-blue-100 text-blue-600',
};

const AvailableCard = ({ cards, selectedIds, onAdd }: IAvailableCardProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {cards.map((card) => {
        const selected = selectedIds.includes(card.id);
        const badgeClass = badgeColors[card.badge] ?? 'bg-neutral-100 text-neutral-600';

        return (
          <div
            key={card.id}
            className="relative flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <span
              className={`absolute right-4 top-4 rounded-full px-2.5 py-0.5 text-[11px] font-medium ${badgeClass}`}
            >
              {card.badge}
            </span>

            <img src={card.icon} alt={card.name} className="h-7 w-7" />

            <h3 className="mt-1 text-[15px] font-semibold text-neutral-900">{card.name}</h3>
            <p className="flex-grow text-[13px] leading-relaxed text-neutral-500">
              {card.description}
            </p>

            <div className="flex items-center justify-between text-xs">
              <div className="flex gap-2">
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-neutral-600">
                  {card.category}
                </span>
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-neutral-600">
                  {card.difficulty}
                </span>
              </div>
              <span className="flex items-center gap-1 text-neutral-700 font-medium">
                <span className="text-amber-400">★</span> {card.rating}
              </span>
            </div>

            <button
              onClick={() => onAdd(card)}
              disabled={selected}
              className={`mt-2 w-full rounded-lg py-2.5 text-[13px] font-semibold transition ${
                selected
                  ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                  : 'bg-neutral-900 text-white hover:opacity-85'
              }`}
            >
              {selected ? '✓ Added to Stack' : 'Add to Stack'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AvailableCard;