import React, { createContext, useContext, useState } from 'react';

const AnalysisContext = createContext();

export const AnalysisProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: entry.title,
        type: entry.type,
        date: entry.date || new Date().toLocaleDateString(),
        image: entry.image || null
      }
    ]);
  };

  return (
    <AnalysisContext.Provider value={{ entries, addEntry }}>
      {children}
    </AnalysisContext.Provider>
  );
};

// Bu fonksiyonu import edip context'e erişiyoruz
export const useAnalysis = () => useContext(AnalysisContext);
