import React, { useState } from "react";
import { Character } from "../../models/models";
import { Link } from "react-router-dom";

import {
  CharacterAvatar,
  CharacterCardEl,
  CharacterCardLabel,
  CharacterContentWrapper,
  CharacterHeader,
  EpisodesWrapper,
} from "./CharacterCard.styled";
import StatusIndicator from "../StatusIndicator/StatusIndicator";
import { useGetLocation } from "../../api/api";
import { Episode } from "../Episode/Episode";

interface ICharacterCardProps {
  character: Character;
}

export function CharacterCard(props: ICharacterCardProps) {
  const { character } = props;
  const [showMoreEpisode, setShowMoreEpisode] = useState(false);

  const locationUrl = character.location.url.split("/location/");
  const locationId = locationUrl.length ? locationUrl[1] : null;

  const originUrl = character.origin.url.split("/location/");
  const originId = originUrl.length ? originUrl[1] : undefined;

  const { location } = useGetLocation(originId);

  const episodes = showMoreEpisode
    ? character.episode
    : character.episode.slice(0, 4);

  return (
    <CharacterCardEl key={character.id} className="character-card">
      <CharacterAvatar src={character.image} />
      <CharacterContentWrapper>
        <CharacterHeader>
          <h2>{character.name}</h2>
          <StatusIndicator status={character.status} />
        </CharacterHeader>

        <span>
          <CharacterCardLabel>Genere:</CharacterCardLabel> {character.gender}
        </span>
        <span>
          <CharacterCardLabel>Specie:</CharacterCardLabel> {character.species}
        </span>
        <span>
          <CharacterCardLabel>Ultima posizione: </CharacterCardLabel>
          <Link to={`/location/${locationId}`}>{character.location.name}</Link>
        </span>
        <span>
          <CharacterCardLabel>Pianeta di origine:</CharacterCardLabel>
          <Link to={`/location/${originId}`}>{character.origin.name}</Link>
        </span>
        {location ? (
          <>
            <span>
              <CharacterCardLabel>
                Abitanti del pianeta di origine:
              </CharacterCardLabel>{" "}
              {location.residents.length}
            </span>
            <span>
              <CharacterCardLabel>
                Dimensione del pianeta di origine:
              </CharacterCardLabel>{" "}
              {location.dimension}
            </span>
          </>
        ) : null}
        {episodes.length >= 0 && (
          <EpisodesWrapper>
            <CharacterCardLabel>Episodi dove compare</CharacterCardLabel>
            <ul>
              {episodes.map((ep) => (
                <Episode key={ep} url={ep} />
              ))}
            </ul>
            {character.episode.length > 4 && !showMoreEpisode && (
              <span
                className="load-more"
                onClick={() => {
                  setShowMoreEpisode(true);
                }}
              >
                Mostra altri...
              </span>
            )}
          </EpisodesWrapper>
        )}
      </CharacterContentWrapper>
    </CharacterCardEl>
  );
}
