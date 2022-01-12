import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Autocomplete,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import useStyles from "./LayoutStyle";
const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "#4b6584", marginBottom: 50 }}
      >
        <Toolbar>
          <Box className={classes.imdbBox}>
            <Typography variant="h5" className={classes.heading}>
              IMDb
            </Typography>
          </Box>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={8}>
              <Paper>
                <Autocomplete
                  freeSolo
                  disableClearable
                  // options={result?.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField
                      placeholder="search..."
                      {...params}
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Paper>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
