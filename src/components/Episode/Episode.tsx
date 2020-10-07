import React from "react";
import { useGetEpisode } from "../../api/api";

interface IEpisodeProps {
  url: string;
}

export function Episode(props: IEpisodeProps) {
  const episodeUrl = props.url.split("/episode/");
  const episodeId = episodeUrl.length ? episodeUrl[1] : undefined;

  const { episode } = useGetEpisode(episodeId);

  return <li title={episode?.air_date}>{episode?.name}</li>;
}
