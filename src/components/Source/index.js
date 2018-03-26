import React, { Fragment } from 'react';

import { Field } from 'formik';

import Input from '../../components/Input';
import Select from '../../components/Select';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

const locations = [
  { id: 'APPLE_MUSIC', label: 'Apple Music' },
  { id: 'GOOGLE_MUSIC', label: 'Google Music' },
  { id: 'SPOTIFY', label: 'Spotify' },
  { id: 'FOOBAR2000', label: 'foobar2000' }
];

const formats = [
  { id: 'MP3', label: 'Lossy (MP3)' },
  { id: 'MPC', label: 'Lossy (MPC)' },
  { id: 'TAK', label: 'Lossless (TAK)' },
  { id: 'APE', label: 'Lossless (APE)' },
  { id: 'FLAC', label: 'Lossless (FLAC)' },
  { id: 'Mixed', label: 'Mixed' }
];

export default ({ source, i, onRemove }) => (
  <Fragment>
    <FormField label="Location">
      <Field
        name={`sources.${i}.location`}
        render={({ field }) => (
          <Select {...field} placeholder="Location">
            {locations.map(location => (
              <option value={location.id} key={location.id}>
                {location.label}
              </option>
            ))}
          </Select>
        )}
      />
    </FormField>
    <FormField label="MBID">
      <Field name={`sources.${i}.mbid`} render={({ field }) => <Input {...field} placeholder="MBID" />} />
    </FormField>
    <FormField label="Comments">
      <Field
        name={`sources.${i}.comments`}
        render={({ field }) => <Input multiline {...field} placeholder="Comments" />}
      />
    </FormField>
    {source.location !== 'SPOTIFY' && (
      <FormField label="Tag issues">
        <Field name={`sources.${i}.tagIssues`} render={({ field }) => <Input {...field} placeholder="Tag issues" />} />
      </FormField>
    )}
    {source.location === 'FOOBAR2000' && (
      <Fragment>
        <FormField label="Accurate rip">
          <Field
            name={`sources.${i}.accurateRip`}
            render={({ field }) => <Input {...field} placeholder="Accurate rip" />}
          />
        </FormField>
        <FormField label="Cue issues">
          <Field
            name={`sources.${i}.cueIssues`}
            render={({ field }) => <Input {...field} />}
            placeholder="Cue issues"
          />
        </FormField>
        <FormField label="Discs">
          <Field name={`sources.${i}.discs`} render={({ field }) => <Input {...field} placeholder="Discs" />} />
        </FormField>
        <FormField label="Download">
          <Field name={`sources.${i}.download`} render={({ field }) => <Input {...field} placeholder="Download" />} />
        </FormField>
        <FormField label="Edition">
          <Field name={`sources.${i}.edition`} render={({ field }) => <Input {...field} placeholder="Edition" />} />
        </FormField>
        <FormField label="Format">
          <Field
            name={`sources.${i}.format`}
            render={({ field }) => (
              <Select {...field} placeholder="Format">
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
    <div>
      <Button onClick={() => onRemove(i)}>x</Button>
    </div>
  </Fragment>
);
