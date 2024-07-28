import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function SearchBar({onSubmit}) {
const [query, setQuery] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    if(query.trim === "") {
        toast.error("Please enter a search query");
        return;
    }
    onSubmit(query);
};

    return (
<header>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
</header>

    )
}