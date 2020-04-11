import Link from "next/link";
import React from "react";

import Text from "components/Text";
import { useLogin } from "data/login";
import { FirstPlayed as FirstPlayedType, formatFirstPlayed } from "utils";

import { Anchor, Column1, Column2, Column3, FirstPlayed, Root } from "./styles";

interface Props {
  album: {
    id: string;
    artist: string;
    year: string;
    title: string;
    firstPlayed: FirstPlayedType;
  };
}

const Album = ({ album }: Props) => {
  const { isLoggedIn } = useLogin();
  const firstPlayedFormatted = formatFirstPlayed(album.firstPlayed);

  const contents = (
    <>
      <Column1>
        <Text color="lighterGrey" size="small">
          {album.year}
        </Text>
      </Column1>
      <Column2>
        <Text color="grey" size="large" weight="bold">
          {album.title}
        </Text>

        <Text color="grey">{album.artist}</Text>
      </Column2>
      <Column3>
        <FirstPlayed>
          <Text color="lighterGrey" size="small">
            {firstPlayedFormatted ? (
              <span>ADDED: {firstPlayedFormatted}</span>
            ) : null}
          </Text>
        </FirstPlayed>
      </Column3>
    </>
  );

  return isLoggedIn ? (
    <Link as={`/albums/${album.id}`} href="/albums/[id]">
      <Anchor>{contents}</Anchor>
    </Link>
  ) : (
    <Root>{contents}</Root>
  );
};

export default Album;
