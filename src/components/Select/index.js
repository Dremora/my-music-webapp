import React from 'react';
import StyledSelect from './styles';

const Select = ({ value, form, ...props }) => <StyledSelect type="text" value={value || ''} {...props} />;

export default Select;
