import { Button, Container } from "@mui/material";
import Layout from "./components/Layout";
import Map from "./components/map";

function App() {
  return (
    <>
      <Layout>
        <Container>
          <div style={{ width: "100%", height: 100, backgroundColor: "red" }}>
            <Button />
          </div>

          <Map />
        </Container>
      </Layout>
    </>
  );
}

export default App;
