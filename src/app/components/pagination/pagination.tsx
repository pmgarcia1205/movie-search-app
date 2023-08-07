import * as React from "react";
import { Pagination, PaginationItem, Stack } from "@mui/material";
import { useMediaQuery } from "usehooks-ts";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { isSmallDevice } from "@/app/hooks/media-query";

interface CustomPaginationProps {
  count: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = (
  props: CustomPaginationProps
) => {
  return (
    <Stack spacing={2} style={{ display: "flex", alignItems: "center" }}>
      <Pagination
        count={props.count}
        color="primary"
        size={isSmallDevice() ? "small" : "large"}
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
