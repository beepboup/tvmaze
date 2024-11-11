// OUVRIR AU FORMAT IPHONE 12

import { useState, useEffect } from "react";
import useFetch from "./hook/useFetch";

export default function App() {
  const [apiUrl, setApiUrl] = useState('https://api.tvmaze.com/shows'); 
  const [query, setQuery] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);
  
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && query) {
      setApiUrl(`https://api.tvmaze.com/search/shows?q=${query}`);
      setSelectedShow(null); 
    }
  };

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const {
    data: showData,
    isLoading: isLoadingShow,
    error: showError,
  } = useFetch(apiUrl);

  return (
    <>
      <div className="text-foreground font-dmSans bg-background">
        {/* Barre de recherche */}
        <div className="absolute z-20 top-5 left-10 justify-center">
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            onKeyPress={handleKeyPress} 
            placeholder="Rechercher"
            className="w-80 p-1 border text-black rounded-lg"
          />
        </div>

        {selectedShow ? (
          // Affichage du film sélectionné
          <div className="bg-black h-screen w-screen">
            <div className="relative h-[300px] overflow-hidden">
              <img className="w-full" src={selectedShow.image?.original} alt={selectedShow.name} />
            </div>
            <div className="absolute top-0 bg-gradient-to-t from-background to-transparent h-[300px] w-full flex items-start flex-col justify-end p-5 z-10">
              <h1 className="font-bebasNeue text-5xl">{selectedShow.name}</h1>
              <h2 className="text-xl">{selectedShow.averageRuntime} min | {selectedShow.rating?.average}</h2>
            </div>
            <div className="text-l p-5">
              <p className="text-l">{selectedShow.genres.join(", ")}</p>
              <p className="text-xs" dangerouslySetInnerHTML={{ __html: selectedShow.summary }} />
            </div>
            <div className="flex justify-center"> <button onClick={() => setSelectedShow(null)} className="text-white font-bebasNeue mt-4 py-1 px-5 rounded-full bg-gray-800">
              Revenir à la liste des films
            </button> </div>
            
          </div>
        ) : (

          // Affichage de la liste des films
          <div className="py-20 px-5">
            {isLoadingShow ? (
              <p>Chargement...</p>
            ) : showError ? (
              <p>Erreur lors du chargement des données</p>
            ) : showData.length > 0 ? (
              <div className="grid grid-cols-3 gap-2">
                {/* Affichage de chaque film */}
                {showData.map((item, index) => {
                  const show = item.show || item;
                  return (
                    <div key={index} onClick={() => setSelectedShow(show)} className="w-full cursor-pointer">
                      <img
                        className="object-cover h-36 rounded"
                        src={show.image?.original}
                        alt={show.name}
                      />
                      <div className="flex pt-2">
                        <h3 className="font-bebasNeue text-l">{show.name}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>Aucune série trouvée.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
