import React, { Fragment } from 'react';

import { Field } from 'react-final-form';

import Input from '../../components/Input';
import Select from '../../components/Select';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

import { Hr } from './styles';
import { parseMbid } from './utils';
import { formatInteger, parseInteger } from '../utils';

const locations = [
  { id: 'APPLE_MUSIC', label: 'Apple Music' },
  { id: 'GOOGLE_MUSIC', label: 'Google Music' },
  { id: 'SPOTIFY', label: 'Spotify' },
  { id: 'FOOBAR2000', label: 'foobar2000' }
];

const formats = [
  { id: 'MP3', label: 'Lossy (MP3)' },
  { id: 'MPC', label: 'Lossy (MPC)' },
  { id: 'WMA', label: 'Lossy (WMA)' },
  { id: 'TAK', label: 'Lossless (TAK)' },
  { id: 'OFT', label: 'Lossless (OptimFROG)' },
  { id: 'APE', label: 'Lossless (APE)' },
  { id: 'FLAC', label: 'Lossless (FLAC)' },
  { id: 'MIXED', label: 'Mixed' }
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
      <Field name={`${name}.comments`} parse={null}>
        {({ input }) => <Input disabled={disabled} multiline {...input} />}
      </Field>
    </FormField>
    <Field name={`${name}.location`}>
      {({ input: { value: location } }) => (
        <Fragment>
          {location !== 'SPOTIFY' && (
            <FormField label="Tag issues">
              <Field name={`${name}.tagIssues`} parse={null}>
                {({ input }) => <Input disabled={disabled} {...input} />}
              </Field>
            </FormField>
          )}
          {location === 'FOOBAR2000' && (
            <Fragment>
              <FormField label="Accurate rip">
                <Field name={`${name}.accurateRip`} parse={null}>
                  {({ input }) => <Input disabled={disabled} {...input} />}
                </Field>
              </FormField>
              <FormField label="Cue issues">
                <Field name={`${name}.cueIssues`} parse={null}>
                  {({ input }) => <Input disabled={disabled} {...input} />}
                </Field>
              </FormField>
              <FormField label="Discs">
                <Field format={formatInteger} name={`${name}.discs`} parse={parseInteger}>
                  {({ input }) => <Input disabled={disabled} {...input} />}
                </Field>
              </FormField>
              <FormField label="Download" parse={null}>
                <Field name={`${name}.download`}>{({ input }) => <Input disabled={disabled} {...input} />}</Field>
              </FormField>
              <FormField label="Edition" parse={null}>
                <Field name={`${name}.edition`}>{({ input }) => <Input disabled={disabled} {...input} />}</Field>
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
