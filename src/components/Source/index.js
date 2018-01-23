import React, { Fragment } from 'react';

import { Field } from 'formik';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
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
      <Field placeholder="Location" name={`sources.${i}.location`} component={Select}>
        {locations.map(location => (
          <option value={location.id} key={location.id}>
            {location.label}
          </option>
        ))}
      </Field>
    </FormField>
    <FormField label="MBID">
      <Field placeholder="MBID" name={`sources.${i}.mbid`} component={Input} />
    </FormField>
    <FormField label="Comments">
      <Field placeholder="Comments" name={`sources.${i}.comments`} component={Textarea} />
    </FormField>
    {source.location !== 'SPOTIFY' && (
      <FormField label="Tag issues">
        <Field placeholder="Tag issues" name={`sources.${i}.tagIssues`} component={Input} />
      </FormField>
    )}
    {source.location === 'FOOBAR2000' && (
      <Fragment>
        <FormField label="Accurate rip">
          <Field placeholder="Accurate rip" name={`sources.${i}.accurateRip`} component={Input} />
        </FormField>
        <FormField label="Cue issues">
          <Field placeholder="Cue issues" name={`sources.${i}.cueIssues`} component={Input} />
        </FormField>
        <FormField label="Discs">
          <Field placeholder="Discs" name={`sources.${i}.discs`} component={Input} />
        </FormField>
        <FormField label="Download">
          <Field placeholder="Download" name={`sources.${i}.download`} component={Input} />
        </FormField>
        <FormField label="Edition">
          <Field placeholder="Edition" name={`sources.${i}.edition`} component={Input} />
        </FormField>
        <FormField label="Format">
          <Field placeholder="Format" name={`sources.${i}.format`} component={Select}>
            {formats.map(format => (
              <option value={format.id} key={format.id}>
                {format.label}
              </option>
            ))}
          </Field>
        </FormField>
      </Fragment>
    )}
    <div>
      <Button onClick={() => onRemove(i)}>x</Button>
    </div>
  </Fragment>
);
