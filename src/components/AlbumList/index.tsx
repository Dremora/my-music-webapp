import Album from "components/Album";
import { FindAlbumsQuery } from "generated/graphql";

type Props = {
  albums: FindAlbumsQuery["albums"];
};

const AlbumList = ({ albums }: Props) => (
  <div>
    {albums.map((album) => (
      <Album album={album} key={album.id} />
    ))}
  </div>
);

export default AlbumList;
