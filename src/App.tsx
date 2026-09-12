import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Card from './components/Card';
import Stack from './components/Stack';
import Footer from './components/Footer';

import type { ICard } from './types/card';

const App = () => {
  const [stack, setStack] = useState<ICard[]>([]);

  const handleAdd = (card: ICard) => {
    const alreadyIn = stack.find((c) => c.id === card.id);
    if (alreadyIn) {
      toast.warning(`${card.name} is already in your stack!`);
      return;
    }
    setStack((prev) => [...prev, card]);
    toast.success(`${card.name} added to your stack.`);
  };

  const handleRemove = (card: ICard) => {
    setStack((prev) => prev.filter((c) => c.id !== card.id));
    toast.info(`${card.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info('All technologies removed from your stack.');
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Banner />

      <section id="explore" className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <Card selectedIds={stack.map((c) => c.id)} onAdd={handleAdd} />
          <Stack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
        </div>
      </section>

      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
};

export default App;