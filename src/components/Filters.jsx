import PropTypes from 'prop-types';

function Filters({ handleFilterPhrase }) {
  const handleInput = (event) => {
    handleFilterPhrase(event.currentTarget.value);
  };
  return (
    <form>
      <label htmlFor="frase">
        Filtrar por frase
        <input
          className="filter"
          type="text"
          id="frase"
          onInput={handleInput}
        />
      </label>
      <label htmlFor="personaje">
        Filtrar por personaje
        <select className="filter-select" id="personaje">
          <option value="Todos">Todos</option>
          <option value="Ross">Ross</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Chandler">Chandler</option>
          <option value="Rachel">Rachel</option>
        </select>
      </label>
    </form>
  );
}
Filters.propTypes = {
  handleFilterPhrase: PropTypes.func.isRequired,
};

export default Filters;
