import { FunctionComponent } from "react";
import './List.scss';

// Components
import Item from "./Item";
import { ItemData } from "../2/types";

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
  onToggle?: (id: string) => void
  onDelete?: (id: string) => void
  emptyListMessage?: string
  noSearchResultsMessage?: string
}

const List: FunctionComponent<ListProps> = ({
  items,
  searchQuery = '',
  onToggle,
  onDelete,
  emptyListMessage = 'No items',
  noSearchResultsMessage = 'No results found',
}) => {
  if (items.length === 0 && searchQuery) {
    return (
      <div className="search-results">
        <div className="no-results">
          <p>{noSearchResultsMessage} {searchQuery && `for "${searchQuery}"`}</p>
        </div>
      </div>
    );
  }
  
  if (items.length === 0) {
    return (
      <div className="search-results">
        <div className="empty-list">
          <p>{emptyListMessage}</p>
        </div>
      </div>
    );
  }

  const completedCount = onToggle ? items.filter(i => i?.completed)?.length : 0;

  return (
    <div className="search-results">
      <div className="results-header">
        <span className="results-count">
          {items.length} item{items.length !== 1 ? 's' : ''}
          {searchQuery && ` found for "${searchQuery}"`}
          {completedCount > 0 && ` (${completedCount} completed)`}
        </span>
      </div>
      <ul className="search-list">
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            text={item.text || ''}
            completed={item?.completed}
            searchQuery={searchQuery}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
