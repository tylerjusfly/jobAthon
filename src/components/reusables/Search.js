import { SearchField } from '@aws-amplify/ui-react';

export const DefaultSearchField = ({ value, onChange }) => (
  <SearchField label="search" value={value} onChange={onChange} />
);
