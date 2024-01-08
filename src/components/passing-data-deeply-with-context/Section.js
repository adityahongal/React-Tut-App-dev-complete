// export default function Section({ children }) {
//     return (
//       <section className="section">
//         {children}
//       </section>
//     );
//   }
  
// NEW CODE

import { LevelContext } from './LevelContext.js';

export default function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
