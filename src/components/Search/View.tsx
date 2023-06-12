import { SearchViewPropType } from './type';

function SearchView({ onSubmit, onChange, onCancel, keyword }: SearchViewPropType) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="Keyword">Search pokemon name</label>
      <input id="Keyword" type="text" name="keyword" value={keyword} onChange={onChange} />
      <button type="submit">Search</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default SearchView;
