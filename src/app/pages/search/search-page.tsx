"use client";
import CustomList from "@/app/components/movie-list/movie-list";
import CustomPagination from "@/app/components/pagination/pagination";
import SearchBar from "@/app/components/search-bar/search-bar";
import { searchMoviesByTitle } from "@/app/services/movieService";
import React, { useEffect } from "react";

const SearchPage: React.FC = () => {
  const [searchResults, setSearchResults] =
    React.useState<ShortOMDBSearchResponse>({
      Search: [],
      totalResults: "0",
      Response: "True",
    });
  const [querySearch, setQuerySearch] = React.useState<string>("");
  const [movies, setMovies] = React.useState<ShortMovieData[]>([]);
  const [totalResults, setTotalResults] = React.useState<number>(0);

  const handleSearch = async (query: string, page?: number) => {
    try {
      const response = await searchMoviesByTitle(query, page);
      setSearchResults(response);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleSearchBarInputChange = (query: string) => {
    setQuerySearch(query);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    handleSearch(querySearch, value);
  };

  useEffect(() => {
    if (searchResults.Response === "True") {
      setMovies(searchResults.Search);
      setTotalResults(Number.parseInt(searchResults.totalResults));
    } else {
      setMovies([]);
      setTotalResults(0);
    }
  }, [searchResults]);

  return (
    <div>
      <SearchBar
        querySearch={querySearch}
        handleSearch={handleSearch}
        setQuerySearch={handleSearchBarInputChange}
      />
      <CustomList movies={movies} totalResults={totalResults} />
      {totalResults > 0 && (
        <CustomPagination
          count={Math.floor(totalResults / 10)}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default SearchPage;
