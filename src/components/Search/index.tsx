import { ChangeEvent, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import SearchView from './View';

function Search() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const keyword = formData.get('keyword') as string;
    navigate(generatePath(`/search/:keyword`, { keyword }));
  };

  const handleCancel = () => {
    navigate('/');
  };

  return <SearchView onSubmit={handleSubmit} onChange={handleChange} onCancel={handleCancel} keyword={keyword} />;
}

export default Search;
