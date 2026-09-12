import type { ICard } from '../types/card';

interface IStackProps {
  stack: ICard[];
  onRemove: (card: ICard) => void;
  onRemoveAll: () => void;
}

const Stack = ({ stack, onRemove, onRemoveAll }: IStackProps) => {
  return (
    <aside className="w-full lg:w-64 shrink-0 rounded-2xl border border-neutral-200 bg-white p-5 h-fit lg:sticky lg:top-24">
      <div className="mb-4">
        <h3 className="text-[15px] font-semibold text-neutral-900">Your Stack</h3>
        <span className="text-xs text-neutral-400">
          {stack.length} Technology{stack.length === 1 ? '' : 'ies'} Selected
        </span>
      </div>

      {/* conditional rendering: empty vs list */}
      {stack.length === 0 ? (
        <p className="py-4 text-center text-[13px] text-neutral-400">
          No technologies selected yet.
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {stack.map((card) => (
            <div
              key={card.id}
              className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2"
            >
              <img src={card.icon} alt={card.name} className="h-[18px] w-[18px]" />
              <div className="min-w-0 flex-grow">
                <p className="truncate text-[13px] font-medium text-neutral-900">{card.name}</p>
                <span className="text-[11px] text-neutral-400">{card.category}</span>
              </div>
              <button
                onClick={() => onRemove(card)}
                aria-label={`Remove ${card.name}`}
                className="text-lg leading-none text-neutral-400 hover:text-red-500"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-4 w-full rounded-lg border border-red-400 py-2 text-[13px] font-medium text-red-500 hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
};

export default Stack;