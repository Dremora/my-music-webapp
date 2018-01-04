import React from 'react';

import { Field } from 'formik';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

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
  <div>
    <Field placeholder="Location" name={`sources.${i}.location`} component={Select}>
      {locations.map(location => (
        <option value={location.id} key={location.id}>
          {location.label}
        </option>
      ))}
    </Field>
    <Field placeholder="MBID" name={`sources.${i}.mbid`} component={Input} />
    <Field placeholder="Comments" name={`sources.${i}.comments`} component={Textarea} />
    {source.location !== 'SPOTIFY' && (
      <Field placeholder="Tag issues" name={`sources.${i}.tagIssues`} component={Input} />
    )}
    {source.location === 'FOOBAR2000' && (
      <Field placeholder="Accurate rip" name={`sources.${i}.accurateRip`} component={Input} />
    )}
    {source.location === 'FOOBAR2000' && (
      <Field placeholder="Cue issues" name={`sources.${i}.cueIssues`} component={Input} />
    )}
    {source.location === 'FOOBAR2000' && <Field placeholder="Discs" name={`sources.${i}.discs`} component={Input} />}
    {source.location === 'FOOBAR2000' && (
      <Field placeholder="Download" name={`sources.${i}.download`} component={Input} />
    )}
    {source.location === 'FOOBAR2000' && (
      <Field placeholder="Edition" name={`sources.${i}.edition`} component={Input} />
    )}
    {source.location === 'FOOBAR2000' && (
      <Field placeholder="Format" name={`sources.${i}.format`} component={Select}>
        {formats.map(format => (
          <option value={format.id} key={format.id}>
            {format.label}
          </option>
        ))}
      </Field>
    )}
    <button onClick={() => onRemove(i)}>x</button>
  </div>
);
