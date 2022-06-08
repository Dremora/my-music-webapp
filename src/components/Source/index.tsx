import React, { memo, useCallback } from "react";

import Button from "components/Button";
import FormField from "components/FormField";
import Input from "components/Input";
import Select from "components/Select";
import Text from "components/Text";
import { Format, Location, SourceInput } from "types/graphql";
import { formatInteger, parseInteger, parseOptionalString } from "utils";

import { Hr, Title } from "./styles";
import { parseMbid } from "./utils";

const locations: { id: Location; label: string }[] = [
  { id: Location.APPLE_MUSIC, label: "Apple Music" },
  { id: Location.GOOGLE_MUSIC, label: "Google Music" },
  { id: Location.SPOTIFY, label: "Spotify" },
  { id: Location.FOOBAR2000, label: "foobar2000" },
];

const formats: { id: Format; label: string }[] = [
  { id: Format.MP3, label: "Lossy (MP3)" },
  { id: Format.MPC, label: "Lossy (MPC)" },
  { id: Format.WMA, label: "Lossy (WMA)" },
  { id: Format.TAK, label: "Lossless (TAK)" },
  { id: Format.APE, label: "Lossless (APE)" },
  { id: Format.FLAC, label: "Lossless (FLAC)" },
  { id: Format.MIXED, label: "Mixed" },
];

interface Props {
  disabled: boolean;
  index: number;
  onRemove: (index: number) => void;
  onUpdate: (index: number, source: SourceInput) => void;
  source: SourceInput;
}

const Source = ({ disabled, index, onRemove, onUpdate, source }: Props) => {
  const remove = useCallback(() => onRemove(index), [index, onRemove]);

  const onLocationChange = useCallback(
    (value: Location) => {
      onUpdate(index, { ...source, location: value });
    },
    [index, onUpdate, source]
  );

  const onFormatChange = useCallback(
    (value: Format) => {
      onUpdate(index, { ...source, format: value });
    },
    [index, onUpdate, source]
  );

  const onEditionChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onUpdate(index, {
        ...source,
        edition: parseOptionalString(e.target.value),
      });
    },
    [index, onUpdate, source]
  );

  const onCommentsChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onUpdate(index, {
        ...source,
        comments: parseOptionalString(e.target.value),
      });
    },
    [index, onUpdate, source]
  );

  const onMbidChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onUpdate(index, {
        ...source,
        mbid: parseMbid(e.target.value),
      });
    },
    [index, onUpdate, source]
  );

  const onTagIssuesChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onUpdate(index, {
        ...source,
        tagIssues: parseOptionalString(e.target.value),
      });
    },
    [index, onUpdate, source]
  );

  const onAccurateRipChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onUpdate(index, {
        ...source,
        accurateRip: parseOptionalString(e.target.value),
      });
    },
    [index, onUpdate, source]
  );

  const onCueIssuesChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onUpdate(index, {
        ...source,
        cueIssues: parseOptionalString(e.target.value),
      });
    },
    [index, onUpdate, source]
  );

  const onDownloadChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onUpdate(index, {
        ...source,
        download: parseOptionalString(e.target.value),
      });
    },
    [index, onUpdate, source]
  );

  const onDiscsChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onUpdate(index, {
        ...source,
        discs: parseInteger(e.target.value),
      });
    },
    [index, onUpdate, source]
  );

  return (
    <>
      <Hr />
      <Title>
        <Text color="grey" size="medium" weight="bold">
          Source {index + 1}
        </Text>
        <Button onClick={remove} size="small">
          Delete source
        </Button>
      </Title>
      <FormField label="Location">
        <Select<Location>
          disabled={disabled}
          value={source.location}
          onChange={onLocationChange}
        >
          {locations.map((location) => (
            <option key={location.id} value={location.id}>
              {location.label}
            </option>
          ))}
        </Select>
      </FormField>
      <FormField label="MBID">
        <Input
          disabled={disabled}
          value={source.mbid}
          onChange={onMbidChange}
        />
      </FormField>
      <FormField label="Comments">
        <Input
          disabled={disabled}
          value={source.comments || ""}
          onChange={onCommentsChange}
        />
      </FormField>
      {source.location !== "SPOTIFY" && (
        <FormField label="Tag issues">
          <Input
            disabled={disabled}
            value={source.tagIssues || ""}
            onChange={onTagIssuesChange}
          />
        </FormField>
      )}
      {source.location === "FOOBAR2000" && (
        <>
          <FormField label="Accurate rip">
            <Input
              disabled={disabled}
              value={source.accurateRip ?? ""}
              onChange={onAccurateRipChange}
            />
          </FormField>
          <FormField label="Cue issues">
            <Input
              disabled={disabled}
              value={source.cueIssues ?? ""}
              onChange={onCueIssuesChange}
            />
          </FormField>
          <FormField label="Discs">
            <Input
              disabled={disabled}
              value={formatInteger(source.discs ?? null)}
              onChange={onDiscsChange}
            />
          </FormField>
          <FormField label="Download">
            <Input
              disabled={disabled}
              value={source.download ?? ""}
              onChange={onDownloadChange}
            />
          </FormField>
          <FormField label="Edition">
            <Input
              disabled={disabled}
              value={source.edition ?? ""}
              onChange={onEditionChange}
            />
          </FormField>
          <FormField label="Format">
            <Select
              disabled={disabled}
              value={source.format ?? null}
              onChange={onFormatChange}
            >
              {formats.map((format) => (
                <option key={format.id} value={format.id}>
                  {format.label}
                </option>
              ))}
            </Select>
          </FormField>
        </>
      )}
    </>
  );
};

export default memo(Source);
