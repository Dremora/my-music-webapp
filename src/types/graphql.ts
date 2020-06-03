/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Format {
  APE = "APE",
  FLAC = "FLAC",
  MIXED = "MIXED",
  MP3 = "MP3",
  MPC = "MPC",
  OFT = "OFT",
  TAK = "TAK",
  WMA = "WMA",
}

export enum Location {
  APPLE_MUSIC = "APPLE_MUSIC",
  FOOBAR2000 = "FOOBAR2000",
  GOOGLE_MUSIC = "GOOGLE_MUSIC",
  SPOTIFY = "SPOTIFY",
}

export interface AlbumFilterInput {
  readonly query?: string | null;
  readonly year?: number | null;
}

export interface FirstPlayedInput {
  readonly day?: number | null;
  readonly month?: number | null;
  readonly timestamp?: number | null;
  readonly year?: number | null;
}

export interface NewSourceInput {
  readonly accurateRip?: string | null;
  readonly comments?: string | null;
  readonly cueIssues?: string | null;
  readonly discs?: number | null;
  readonly download?: string | null;
  readonly edition?: string | null;
  readonly format?: string | null;
  readonly location: Location;
  readonly mbid?: any | null;
  readonly tagIssues?: string | null;
}

export interface SourceInput {
  readonly accurateRip?: string | null;
  readonly comments?: string | null;
  readonly cueIssues?: string | null;
  readonly discs?: number | null;
  readonly download?: string | null;
  readonly edition?: string | null;
  readonly format?: string | null;
  readonly id?: string | null;
  readonly location: Location;
  readonly mbid?: any | null;
  readonly tagIssues?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
