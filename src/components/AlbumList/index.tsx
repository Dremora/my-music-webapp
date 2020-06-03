import React from "react";

import Album from "components/Album";
import { FindAlbums } from "queries/FindAlbums/types/FindAlbums";

type Props = {
  albums: FindAlbums["albums"];
};

const AlbumList = ({ albums }: Props) => (
  <div>
    {albums.map((album) => (
      <Album album={album} key={album.id} />
    ))}
  </div>
);

export default AlbumList;
