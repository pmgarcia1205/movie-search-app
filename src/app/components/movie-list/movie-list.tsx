/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  Typography,
} from "@mui/material";
import { Image } from "mui-image";

interface MovieListProps {
  movies: ShortMovieData[];
  totalResults: number;
  Response: string;
}

const MovieList: React.FC<MovieListProps> = (props: MovieListProps) => {
  return props.movies.length > 0 ? (
    <List sx={{ width: "100%", maxWidth: 1000, minWidth: 300 }}>
      {props.movies.map((movie, index) => (
        <>
          <ListItem alignItems="flex-start" key={movie.imdbID}>
            <div>
              <Image
                src={movie.Poster}
                alt={movie.Title}
                width={164}
                height={164}
                fit="cover"
                showLoading
                style={{ paddingRight: "20px" }}
              />
            </div>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="h5"
                    color="text.primary"
                  >
                    {movie.Title}
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "block" }}
                    component="span"
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    {`Year: ${movie.Year}`}
                  </Typography>
                  <Typography
                    sx={{ display: "block" }}
                    component="span"
                    variant="subtitle1"
                    color="text.secondary"
                  >
                    {`Type: ${movie.Type}`}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          {index !== props.movies.length - 1 && (
            <Divider variant="fullWidth" component="li" key={index} />
          )}
        </>
      ))}
    </List>
  ) : (
    <div>
      {props.Response === "False" && (
        <h1 style={{ color: "black" }}>Sorry, no results found!</h1>
      )}
    </div>
  );
};

export default MovieList;
