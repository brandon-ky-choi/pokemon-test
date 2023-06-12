import { ChangeEvent } from 'react';

export interface SearchViewPropType {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onCancel: () => void;
  keyword: string;
}
