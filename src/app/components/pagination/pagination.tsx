import * as React from "react";
import { Pagination, PaginationItem, Stack } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface CustomPaginationProps {
  count: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = (
  props: CustomPaginationProps
) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={props.count}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
        onChange={(event, page) => props.handlePageChange(event, page)}
      />
    </Stack>
  );
};

export default CustomPagination;
