import { Button, Container, Input } from "@mui/material";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import Map from "../components/map";
import { locationActions } from "../contexts/actions";
function App() {
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
          <div style={{ width: "100%", height: 100 }}>
            <label htmlFor="upload-button">
              <Input
                onChange={(e) => readUploadFile(e)}
                style={{ display: "none" }}
                accept="image/*"
                id="upload-button"
                multiple
                type="file"
              />
              <Button variant="contained" component="span">
                Upload
              </Button>
            </label>
          </div>
          <Map />
        </Container>
      </Layout>
    </>
  );
}

export default App;
