// Components
import { Typography } from "@mui/material";
import Slider from "./components/slider";
// Styles
import S from "./style";

function App() {
  return (
    <S.Container>
      <S.Content>
        <Slider />
      </S.Content>
      <Typography variant="body2" color="text.secondary" align="center">Drag to change image</Typography>
    </S.Container>
  );
}

export default App;
