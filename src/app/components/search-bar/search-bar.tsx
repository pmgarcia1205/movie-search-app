"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  querySearch: string;
  handleSearch: (query: string) => void;
  setQuerySearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setQuerySearch(event.target.value);
  };

  return (
    <Paper
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        minWidth: "300px",
        maxWidth: "1000px",
        margin: "10px 10px",
      }}
      variant="elevation"
      elevation={5}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        fullWidth
        placeholder="Search movies by title"
        inputProps={{ "aria-label": "search movies by title" }}
        onChange={handleInputChange}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            props.handleSearch(props.querySearch);
          }
        }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={() => props.handleSearch(props.querySearch)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
