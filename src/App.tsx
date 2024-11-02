import "./App.css";
import { Button } from "@varugasu/reproduction-lib/components/button";
import {
  AcUnitIcon,
  AccessibilityIcon,
} from "@varugasu/reproduction-lib/components/icons";
import { PrimaryButton } from "@varugasu/reproduction-lib/custom-components/button";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "@varugasu/reproduction-lib/constants";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button>Click me</Button>
      <AcUnitIcon />
      <AccessibilityIcon />
      <PrimaryButton>test</PrimaryButton>
      <p>{SCREEN_HEIGHT}</p>
      <p>{SCREEN_WIDTH}</p>
    </div>
  );
}

export default App;
