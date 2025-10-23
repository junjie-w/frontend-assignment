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
  text: string
  searchQuery?: string
}

const Item: FunctionComponent<ItemProps> = ({ text, searchQuery }) => {
  return (
    <li className="search-item">
      <div className="item-content">
        <div className="item-indicator"></div>
        <div className="item-wrapper">
          <h4 className="item-name">
            {searchQuery ? <TextWithHighlights text={text} query={searchQuery} /> : text}
          </h4>
        </div>
      </div>
    </li>
  )
};

export default Item;
