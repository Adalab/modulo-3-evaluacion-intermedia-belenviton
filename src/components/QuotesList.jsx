import PropTypes from 'prop-types';
import Item from './QuoteItem';

function List({ phrases }) {
  const liPhrases = phrases.map((phrase, idx) => (
    <li key={idx} className="list-friends">
      <Item quote={phrase.quote} name={phrase.character} />
    </li>
  ));
  return <ul className="characters-list">{liPhrases}</ul>;
}

List.propTypes = {
  phrases: PropTypes.array,
};

export default List;
