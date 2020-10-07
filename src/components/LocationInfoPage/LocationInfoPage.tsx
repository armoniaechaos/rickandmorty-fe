import React from "react";
import { useGetCharacters, useGetLocation } from "../../api/api";
import { Link, useParams } from "react-router-dom";
import { CharacterListPageEl } from "./LocationInfoPage.styled";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { CharacterCard } from "../CharacterCard/CharacterCard";

function LocationInfoPage() {
  const { locationId } = useParams();

  const { location, isError } = useGetLocation(locationId);

  const charactersIds =
    location && location.residents
      ? location.residents.map((resident) => {
          const resindetUrlSplitted = resident.split("character/");
          return resindetUrlSplitted[1];
        })
      : [];

  const { characters } = useGetCharacters(charactersIds);

  if (isError || location?.error) {
    return (
      <CharacterListPageEl>
        <Link to="/">
          <span>{"<-"} Torna alla lista dei personaggi</span>
        </Link>
        <h1>Qualcosa è andato storto</h1>
      </CharacterListPageEl>
    );
  }
  if (!characters && location && location.residents.length) {
    return <LoadingSpinner />;
  }

  return (
    <CharacterListPageEl>
      <Link to="/">
        <span>{"<-"} Torna alla lista dei personaggi</span>
      </Link>
      <h1>{location?.name}</h1>
      <p>Tipo: {location?.type}</p>
      <p>Dimension: {location?.dimension}</p>
      <p>Abitanti del pianeta: </p>
      {characters?.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </CharacterListPageEl>
  );
}

export default React.memo(LocationInfoPage);
