/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
  FirstPlayedInput,
  NewSourceInput,
  Format,
  Location,
} from "./../../../types/graphql";

// ====================================================
// GraphQL mutation operation: CreateAlbum
// ====================================================

export interface CreateAlbum_createAlbum_firstPlayed_FirstPlayedTime {
  readonly __typename: "FirstPlayedTime";
  readonly timestamp: number;
}

export interface CreateAlbum_createAlbum_firstPlayed_FirstPlayedDate {
  readonly __typename: "FirstPlayedDate";
  readonly year: number;
  readonly month: number | null;
  readonly day: number | null;
}

export type CreateAlbum_createAlbum_firstPlayed =
  | CreateAlbum_createAlbum_firstPlayed_FirstPlayedTime
  | CreateAlbum_createAlbum_firstPlayed_FirstPlayedDate;

export interface CreateAlbum_createAlbum_sources {
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

export interface CreateAlbum_createAlbum {
  readonly __typename: "Album";
  readonly id: any;
  readonly artist: string;
  readonly title: string;
  readonly comments: string | null;
  readonly year: number | null;
  readonly firstPlayed: CreateAlbum_createAlbum_firstPlayed | null;
  readonly sources: ReadonlyArray<CreateAlbum_createAlbum_sources>;
}

export interface CreateAlbum {
  readonly createAlbum: CreateAlbum_createAlbum;
}

export interface CreateAlbumVariables {
  readonly title: string;
  readonly artist: string;
  readonly comments?: string | null;
  readonly year?: number | null;
  readonly firstPlayed?: FirstPlayedInput | null;
  readonly sources: ReadonlyArray<NewSourceInput>;
}
