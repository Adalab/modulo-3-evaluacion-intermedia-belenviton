import PropTypes from 'prop-types';

function Item({ quote, name }) {
  return (
    <p>
      {quote}
      <span className="nameCharacter">- {name}</span>
    </p>
  );
}

Item.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Item;
