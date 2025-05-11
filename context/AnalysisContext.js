import React, { createContext, useState, useContext } from 'react';

export const AnalysisContext = createContext();

export const AnalysisProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  const addAnalysis = (entry) => {
    setEntries((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: entry.title,
        type: entry.type,
        date: new Date().toLocaleDateString(),
        image: entry.image || null,
      },
    ]);
  };

  return (
    <AnalysisContext.Provider value={{ entries, addAnalysis }}>
      {children}
    </AnalysisContext.Provider>
  );
};

export const useAnalysis = () => useContext(AnalysisContext);
