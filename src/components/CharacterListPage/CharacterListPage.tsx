import React, { useState } from "react";
import { useGetAllCharacters } from "../../api/api";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import {
  NextPage,
  PaginationWrapper,
  PreviousPage,
} from "./CharacterListPage.styled";

function CharacterListPage() {
  const [page, setPage] = useState(1);

  const { characters, isLoading } = useGetAllCharacters(page);

  if (isLoading || !characters) {
    return <LoadingSpinner />;
  }

  const canGoBack = !!characters.info.prev;
  const maxPages = characters.info.pages;

  return (
    <div className="App">
      {characters.results.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}

      <PaginationWrapper>
        {canGoBack && (
          <PreviousPage
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Indietro
          </PreviousPage>
        )}

        {page < maxPages && (
          <NextPage
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Pagina successiva
          </NextPage>
        )}
      </PaginationWrapper>
    </div>
  );
}

export default CharacterListPage;
