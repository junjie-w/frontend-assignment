import { FunctionComponent } from "react";
import { TextWithHighlights } from "./TextWithHighlights";
import './Item.scss';

/*
 * The ItemProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ItemProps interface
 */

interface ItemProps {
  id?: string;
  text: string;
  searchQuery?: string;
  completed?: boolean;
  onToggle?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const Item: FunctionComponent<ItemProps> = ({ 
  id, 
  text, 
  searchQuery = '', 
  completed = false,
  onToggle,
  onDelete
}) => {
  const handleDelete = () => {
    if (id !== undefined && onDelete) {
      onDelete(id);
    }
  };

  const handleToggle = () => {
    if (id !== undefined && onToggle) {
      onToggle(id);
    }
  };

  const isInteractive = onToggle !== undefined || onDelete !== undefined;

  return (
    <li className={`search-item ${completed ? 'completed' : ''}`}>
      <div className="item-content">
        <div className="item-indicator"></div>
        <div className={`item-wrapper ${isInteractive ? 'todo-row' : ''}`}>
          {onToggle ? (
            <label className="item-checkbox-label">
              <input
                type="checkbox"
                checked={completed}
                onChange={handleToggle}
                className="item-checkbox"
                aria-label="Toggle todo item"
              />
              <h4 className="item-name">
                {searchQuery ? <TextWithHighlights text={text} query={searchQuery} /> : text}
              </h4>
            </label>
          ) : (
            <h4 className="item-name">
              {searchQuery ? <TextWithHighlights text={text} query={searchQuery} /> : text}
            </h4>
          )}
          
          {onDelete && (
            <button className="delete-btn" onClick={handleDelete} aria-label="Delete item">
              Delete
            </button>
          )}
        </div>
      </div>
    </li>
  )
};

export default Item;
