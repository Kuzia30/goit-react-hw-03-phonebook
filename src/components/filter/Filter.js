const Filter = ({ handleChange, filter }) => {
  return (
    <label>
      Find contacts by name
      <input onChange={handleChange} type="text" name="filter" value={filter} />
    </label>
  );
};

export default Filter;
