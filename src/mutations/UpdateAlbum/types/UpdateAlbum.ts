/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
  FirstPlayedInput,
  SourceInput,
  Format,
  Location,
} from "./../../../types/graphql";

// ====================================================
// GraphQL mutation operation: UpdateAlbum
// ====================================================

export interface UpdateAlbum_updateAlbum_firstPlayed_FirstPlayedTime {
  readonly __typename: "FirstPlayedTime";
  readonly timestamp: number;
}

export interface UpdateAlbum_updateAlbum_firstPlayed_FirstPlayedDate {
  readonly __typename: "FirstPlayedDate";
  readonly year: number;
  readonly month: number | null;
  readonly day: number | null;
}

export type UpdateAlbum_updateAlbum_firstPlayed =
  | UpdateAlbum_updateAlbum_firstPlayed_FirstPlayedTime
  | UpdateAlbum_updateAlbum_firstPlayed_FirstPlayedDate;

export interface UpdateAlbum_updateAlbum_sources {
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

export interface UpdateAlbum_updateAlbum {
  readonly __typename: "Album";
  readonly id: any;
  readonly artist: string;
  readonly title: string;
  readonly comments: string | null;
  readonly year: number | null;
  readonly firstPlayed: UpdateAlbum_updateAlbum_firstPlayed | null;
  readonly sources: ReadonlyArray<UpdateAlbum_updateAlbum_sources>;
}

export interface UpdateAlbum {
  readonly updateAlbum: UpdateAlbum_updateAlbum;
}

export interface UpdateAlbumVariables {
  readonly id: any;
  readonly title: string;
  readonly artist: string;
  readonly comments?: string | null;
  readonly year?: number | null;
  readonly firstPlayed?: FirstPlayedInput | null;
  readonly sources: ReadonlyArray<SourceInput>;
}
