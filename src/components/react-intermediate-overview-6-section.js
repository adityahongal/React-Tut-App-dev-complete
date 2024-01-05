import { useContext } from 'react';
import { LevelContext } from './react-intermediate-overview-6-LevelContext';

export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
