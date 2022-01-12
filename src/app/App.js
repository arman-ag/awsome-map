import { Button, Container, Input } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import Map from "../components/map";
import { locationActions } from "../contexts/actions";
import "./app.css";
function App() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState("none");
  const readUploadFile = (e) => {
    e.preventDefault();

    if (e.target.files) {
      dispatch(locationActions.convertXlsx(e));
      setDisplay("block");
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
          <div
            style={{
              border: "4px solid #4b6584",
              padding: 1,
              borderRadius: 10,
            }}
          >
            <Map />
          </div>
        </Container>
      </Layout>
    </>
  );
}

export default App;
