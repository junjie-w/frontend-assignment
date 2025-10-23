import { FunctionComponent } from "react";
import './List.scss';

// Components
import Item from "./Item";
import { ItemData } from "../types";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */

interface ListProps {
  items: ItemData[]
  searchQuery?: string
  noSearchResultsMessage?: string
}

const List: FunctionComponent<ListProps> = ({
  items,
  searchQuery = '',
  noSearchResultsMessage = 'No results found'
}) => {
   if (items.length === 0 && searchQuery) {
    return (
      <div className="search-results">
        <div className="no-results">
          <p>{noSearchResultsMessage} {searchQuery && `for "${searchQuery}"`}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="search-results">
      <div className="results-header">
        <span className="results-count">
          {items.length} item{items.length !== 1 ? 's' : ''}
          {searchQuery && ` found for "${searchQuery}"`}
        </span>
      </div>
      <ul className="search-list">
        {items.map((item) => (
          <Item
            key={item.id}
            text={item.text || ''}
            searchQuery={searchQuery}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
