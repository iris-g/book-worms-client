import React, { useState } from "react";
import Autocomplete from "react-autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  searchQuery: {
    marginLeft: 26,
  },
  topScreen:{
    marginTop:26,
  }
});
function Book() {
  const [options, setOptions] = useState([]);
  const [searchType, setSearchType] = useState("ISBN");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search using searchType and searchQuery
  };

  const classes = useStyles();

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    if (searchQuery.length > 2) {
      fetch(`https://openlibrary.org/search.json?author=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          const bookOptions = data.docs.map((book) => ({
            title: book.title,
            author: book.author_name ? book.author_name[0] : "Unknown",
            isbn: book.isbn ? book.isbn[0] : "Unknown",
          }));
          setOptions(bookOptions);
        });
    }
  };

  return (
    <div class="App">
      <form onSubmit={handleSearchSubmit}>
        <FormControl>
          <InputLabel>Search by</InputLabel>
          <Select value={searchType} onChange={handleSearchTypeChange}>
            <MenuItem value="ISBN">ISBN</MenuItem>
            <MenuItem value="Book Name">Book Name</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type="text"
          value={searchQuery}
          className={classes.searchQuery}
          onChange={handleSearchQueryChange}
          placeholder="Enter search query"
        />
        <img src="book-cover-image.jpg" alt="Book Cover Image"></img>
        <p>Image source: <a href="https://www.amazon.com/path/to/book">Amazon</a></p>
        <Button type="submit" variant="contained" color="primary"  className={classes.searchQuery}>
          Search
        </Button>
      </form>
    </div>
  );
}

export default Book; // <-- Make sure to export the component
