import React, { Fragment } from 'react';

import { Field } from 'react-final-form';

import Input from '../../components/Input';
import Select from '../../components/Select';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

import { Hr } from './styles';
import { parseMbid } from './utils';
import { formatInteger, parseInteger, parseOptionalString } from '../utils';
import { Location, Format } from '../../types/graphql';

const locations: { id: Location; label: string }[] = [
  { id: Location.APPLE_MUSIC, label: 'Apple Music' },
  { id: Location.GOOGLE_MUSIC, label: 'Google Music' },
  { id: Location.SPOTIFY, label: 'Spotify' },
  { id: Location.FOOBAR2000, label: 'foobar2000' }
];

const formats: { id: Format; label: string }[] = [
  { id: Format.MP3, label: 'Lossy (MP3)' },
  { id: Format.MPC, label: 'Lossy (MPC)' },
  { id: Format.WMA, label: 'Lossy (WMA)' },
  { id: Format.TAK, label: 'Lossless (TAK)' },
  { id: Format.OFT, label: 'Lossless (OptimFROG)' },
  { id: Format.APE, label: 'Lossless (APE)' },
  { id: Format.FLAC, label: 'Lossless (FLAC)' },
  { id: Format.MIXED, label: 'Mixed' }
];

export default ({ disabled, name, onRemove }) => (
  <Fragment>
    <Hr />
    <FormField label="Location">
      <Field name={`${name}.location`}>
        {({ input }) => (
          <Select disabled={disabled} {...input}>
            {locations.map(location => (
              <option value={location.id} key={location.id}>
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
        <Fragment>
          {location !== 'SPOTIFY' && (
            <FormField label="Tag issues">
              <Field name={`${name}.tagIssues`} parse={parseOptionalString}>
                {({ input }) => <Input disabled={disabled} {...input} />}
              </Field>
            </FormField>
          )}
          {location === 'FOOBAR2000' && (
            <Fragment>
              <FormField label="Accurate rip">
                <Field name={`${name}.accurateRip`} parse={parseOptionalString}>
                  {({ input }) => <Input disabled={disabled} {...input} />}
                </Field>
              </FormField>
              <FormField label="Cue issues">
                <Field name={`${name}.cueIssues`} parse={parseOptionalString}>
                  {({ input }) => <Input disabled={disabled} {...input} />}
                </Field>
              </FormField>
              <FormField label="Discs">
                <Field format={formatInteger} name={`${name}.discs`} parse={parseInteger}>
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
                <Field
                  name={`${name}.format`}
                  render={({ input }) => (
                    <Select disabled={disabled} {...input}>
                      {formats.map(format => (
                        <option value={format.id} key={format.id}>
                          {format.label}
                        </option>
                      ))}
                    </Select>
                  )}
                />
              </FormField>
            </Fragment>
          )}
        </Fragment>
      )}
    </Field>
    <div>
      <Button onClick={onRemove}>x</Button>
    </div>
  </Fragment>
);
