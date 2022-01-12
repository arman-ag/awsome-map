import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Toolbar,
} from "@mui/material";
import * as React from "react";
const Header = () => {
  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "#4b6584", marginBottom: 50 }}
      >
        <Toolbar>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={8}>
              <Paper>
                <TextField
                  fullWidth
                  placeholder="search..."
                  InputProps={{
                    type: "search",
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
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
