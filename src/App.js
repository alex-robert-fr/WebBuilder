import { Editor, Frame, Element } from "@craftjs/core"
import { Typography, Grid, Paper } from "@material-ui/core"
import { SettingsPanel } from "./components/SettingsPanel";
import { Toolbox } from "./components/Toolbox";
import Button from "./components/user/Button";
import { Card } from "./components/user/Card";
import Container from "./components/user/Container"
import Text from "./components/user/Text"

function App() {
  return (
    <div style={{ margin: '0 auto', width: '800px' }}>
      <Typography style={{ margin: '20px 0' }} variant="h5" align="center">
        RecipePro Editor
      </Typography>
      <Editor resolver={{ Text, Container, Button, Card }}>
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={15} background="#fff" canvas>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}

export default App;
