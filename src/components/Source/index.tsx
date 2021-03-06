import React, { memo, useCallback } from "react";
import { Field } from "react-final-form";

import Button from "components/Button";
import FormField from "components/FormField";
import Input from "components/Input";
import Select from "components/Select";
import Text from "components/Text";
import { Format, Location } from "types/graphql";
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
  { id: Format.OFT, label: "Lossless (OptimFROG)" },
  { id: Format.APE, label: "Lossless (APE)" },
  { id: Format.FLAC, label: "Lossless (FLAC)" },
  { id: Format.MIXED, label: "Mixed" },
];

interface Props {
  disabled: boolean;
  index: number;
  name: string;
  onRemove: (index: number) => void;
}

const Source = ({ disabled, index, name, onRemove }: Props) => {
  const remove = useCallback(() => onRemove(index), [index, onRemove]);

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
        <Field name={`${name}.location`}>
          {({ input }) => (
            <Select disabled={disabled} {...input}>
              {locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.label}
                </option>
              ))}
            </Select>
          )}
        </Field>
      </FormField>
      <FormField label="MBID">
        <Field name={`${name}.mbid`} parse={parseMbid}>
          {({ input }) => <Input disabled={disabled} {...input} />}
        </Field>
      </FormField>
      <FormField label="Comments">
        <Field name={`${name}.comments`} parse={parseOptionalString}>
          {({ input }) => <Input disabled={disabled} multiline {...input} />}
        </Field>
      </FormField>
      <Field name={`${name}.location`}>
        {({ input: { value: location } }) => (
          <>
            {location !== "SPOTIFY" && (
              <FormField label="Tag issues">
                <Field name={`${name}.tagIssues`} parse={parseOptionalString}>
                  {({ input }) => <Input disabled={disabled} {...input} />}
                </Field>
              </FormField>
            )}
            {location === "FOOBAR2000" && (
              <>
                <FormField label="Accurate rip">
                  <Field
                    name={`${name}.accurateRip`}
                    parse={parseOptionalString}
                  >
                    {({ input }) => <Input disabled={disabled} {...input} />}
                  </Field>
                </FormField>
                <FormField label="Cue issues">
                  <Field name={`${name}.cueIssues`} parse={parseOptionalString}>
                    {({ input }) => <Input disabled={disabled} {...input} />}
                  </Field>
                </FormField>
                <FormField label="Discs">
                  <Field
                    format={formatInteger}
                    name={`${name}.discs`}
                    parse={parseInteger}
                  >
                    {({ input }) => <Input disabled={disabled} {...input} />}
                  </Field>
                </FormField>
                <FormField label="Download">
                  <Field name={`${name}.download`} parse={parseOptionalString}>
                    {({ input }) => <Input disabled={disabled} {...input} />}
                  </Field>
                </FormField>
                <FormField label="Edition">
                  <Field name={`${name}.edition`} parse={parseOptionalString}>
                    {({ input }) => <Input disabled={disabled} {...input} />}
                  </Field>
                </FormField>
                <FormField label="Format">
                  <Field name={`${name}.format`}>
                    {({ input }) => (
                      <Select disabled={disabled} {...input}>
                        {formats.map((format) => (
                          <option key={format.id} value={format.id}>
                            {format.label}
                          </option>
                        ))}
                      </Select>
                    )}
                  </Field>
                </FormField>
              </>
            )}
          </>
        )}
      </Field>
    </>
  );
};

export default memo(Source);
