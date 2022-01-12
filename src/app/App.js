import { Button, Container, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import Map from "../components/map";
import { locationActions } from "../contexts/actions";
import "./app.css";
import useStyles from "./appStyle";
function App() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const readUploadFile = (e) => {
    e.preventDefault();

    if (e.target.files) {
      dispatch(locationActions.convertXlsx(e));
    }
  };
  return (
    <>
      <Layout>
        <Container>
          <Box
            display="flex"
            justifyContent="space-around"
            flexDirection="column"
            alignItems="center"
            className={classes.mainBox}
          >
            <Typography variant="h5" className={classes.mainHeading}>
              upload yor Excel file to mark the locations on map{" "}
            </Typography>
            <div>
              <label htmlFor="upload-button">
                <Input
                  onChange={(e) => readUploadFile(e)}
                  style={{ display: "none" }}
                  accept="image/*"
                  id="upload-button"
                  multiple
                  type="file"
                />
                <Button variant="contained" component="span" size="large">
                  Upload
                </Button>
              </label>
            </div>
          </Box>

          <div className={classes.mapBox}>
            <Map />
          </div>
        </Container>
      </Layout>
    </>
  );
}

export default App;
