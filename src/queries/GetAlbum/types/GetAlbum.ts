/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Format, Location } from "./../../../types/graphql";

// ====================================================
// GraphQL query operation: GetAlbum
// ====================================================

export interface GetAlbum_album_firstPlayed_FirstPlayedTime {
  readonly __typename: "FirstPlayedTime";
  readonly timestamp: number;
}

export interface GetAlbum_album_firstPlayed_FirstPlayedDate {
  readonly __typename: "FirstPlayedDate";
  readonly year: number;
  readonly month: number | null;
  readonly day: number | null;
}

export type GetAlbum_album_firstPlayed =
  | GetAlbum_album_firstPlayed_FirstPlayedTime
  | GetAlbum_album_firstPlayed_FirstPlayedDate;

export interface GetAlbum_album_sources {
  readonly __typename: "Source";
  readonly id: string;
  readonly accurateRip: string | null;
  readonly comments: string | null;
  readonly cueIssues: string | null;
  readonly discs: number | null;
  readonly download: string | null;
  readonly edition: string | null;
  readonly format: Format | null;
  readonly location: Location;
  readonly mbid: any | null;
  readonly tagIssues: string | null;
}

export interface GetAlbum_album {
  readonly __typename: "Album";
  readonly id: any;
  readonly artist: string;
  readonly title: string;
  readonly comments: string | null;
  readonly year: number | null;
  readonly firstPlayed: GetAlbum_album_firstPlayed | null;
  readonly sources: ReadonlyArray<GetAlbum_album_sources>;
}

export interface GetAlbum {
  readonly album: GetAlbum_album;
}

export interface GetAlbumVariables {
  readonly id: any;
}
