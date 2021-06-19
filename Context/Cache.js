import React, { useState, useEffect, useContext, createContext } from 'react';


const cacheContext = createContext();

export function CacheProvider({ children }) {
    const cache = useCache();
    return <cacheContext.Provider value={cache}>{children}</cacheContext.Provider>;
}

export const getCache = () => {
    return useContext(cacheContext);
};

function useCache() {
    const [currentNote, setCurrentNote] = useState(null);
    const [selectedKeywords, setSelectedKeywords] = useState([]);

    const [transcript, setResult] = useState([]);
    const [note, setNote] = useState([]);
    

    return {
        currentNote,
        setCurrentNote,
        selectedKeywords,
        setSelectedKeywords,
        setResult,
        transcript,
        setNote,
        note
    };
}