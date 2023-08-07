"use client";
import MovieList from "@/app/components/movie-list/movie-list";
import CustomPagination from "@/app/components/pagination/pagination";
import SearchBar from "@/app/components/search-bar/search-bar";
import { searchMoviesByTitle } from "@/app/services/movieService";
import {
  localStorageClear,
  localStorageGetKey,
  localStorageSaveKey,
} from "@/app/utils/local-storage";
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
  const [page, setPage] = React.useState<number>(1);

  const handleSearch = async (query: string, page?: number) => {
    try {
      const localData = localStorageGetKey(`${query}-${page || 1}`);
      if (localData === null) {
        const response = await searchMoviesByTitle(query, page);
        localStorageSaveKey(`${query}-${page || 1}`, response);
        setSearchResults(response);
      } else {
        setSearchResults(localData);
      }
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
    setPage(value);
    handleSearch(querySearch, value);
  };

  const handleClearSearch = (wipeLocalTorage?: boolean) => {
    setQuerySearch("");
    setSearchResults({
      Search: [],
      totalResults: "0",
      Response: "True",
    });
    if (wipeLocalTorage) localStorageClear();
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
    <div className="search-container">
      <SearchBar
        querySearch={querySearch}
        handleSearch={handleSearch}
        setQuerySearch={handleSearchBarInputChange}
        currentPage={page}
      />
      <MovieList
        movies={movies}
        totalResults={totalResults}
        Response={searchResults.Response}
      />
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
