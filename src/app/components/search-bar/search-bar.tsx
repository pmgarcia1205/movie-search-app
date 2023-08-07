"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {
  isLargeDevice,
  isMediumDevice,
  isSmallDevice,
} from "@/app/hooks/media-query";

interface SearchBarProps {
  querySearch: string;
  currentPage?: number;
  handleSearch: (query: string, currentPage?: number) => void;
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
        margin: "10px 10px",
      }}
      className="search-bar"
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
            props.handleSearch(props.querySearch, props.currentPage);
          }
        }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={() => props.handleSearch(props.querySearch, props.currentPage)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
