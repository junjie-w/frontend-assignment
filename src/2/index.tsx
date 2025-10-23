import { FunctionComponent, useMemo, useState } from "react";

// Components
import Input from "../components/Input";
import List from "../components/List";
import { mockData } from "./data/mockData";

const Task2: FunctionComponent = () => {
  const placeholder = "Search beers..."
  const noSearchResultsMessage = "No results found"

  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return mockData
    }

    const query = searchQuery.toLowerCase().trim()
    
    return mockData?.filter(item =>
      item?.text.toLowerCase().includes(query)
    )

  }, [searchQuery])
  
  return (
    <div>
      <Input
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder={placeholder}
        icon="🔍"
      />
      <br />
      <List 
        items={filteredItems}
        searchQuery={searchQuery}
        noSearchResultsMessage={noSearchResultsMessage}
      />
    </div>
  );
};

export default Task2;
