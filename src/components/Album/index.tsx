import Link from "next/link";
import React from "react";

import Text from "components/Text";
import { useLogin } from "data/login";
import { FirstPlayed as FirstPlayedType, formatFirstPlayed } from "utils";

import {
  anchorStyle,
  column1Style,
  column2Style,
  column3Style,
  firstPlayedStyle,
  rootStyle,
} from "./styles.css";

interface Props {
  album: {
    id: string;
    artist: string;
    year: number | null;
    title: string;
    firstPlayed: FirstPlayedType;
  };
}

const Album = ({ album }: Props) => {
  const { isLoggedIn } = useLogin();
  const firstPlayedFormatted = formatFirstPlayed(album.firstPlayed);

  const contents = (
    <>
      <div className={column1Style}>
        <Text color="lighterGrey" size="small">
          {album.year}
        </Text>
      </div>
      <div className={column2Style}>
        <Text color="grey" size="large" weight="bold">
          {album.title}
        </Text>

        <Text color="grey">{album.artist}</Text>
      </div>
      <div className={column3Style}>
        <div className={firstPlayedStyle}>
          <Text color="lighterGrey" size="small">
            {firstPlayedFormatted ? (
              <span>ADDED: {firstPlayedFormatted}</span>
            ) : null}
          </Text>
        </div>
      </div>
    </>
  );

  return isLoggedIn ? (
    <Link as={`/albums/${album.id}`} href="/albums/[id]">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={anchorStyle}>{contents}</a>
    </Link>
  ) : (
    <div className={rootStyle}>{contents}</div>
  );
};

export default Album;
