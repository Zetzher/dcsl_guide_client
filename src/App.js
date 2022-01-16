import React, { useState } from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import { Catalog } from './pages/index';
import { Switch } from './components/index';
import color from './color-palette';


const App = () => {

  const { light, dark, lightComplementary, darkComplementary, lightThemeBorder, darkThemeBorder } = color;

  const [webTheme, setWebTheme] = useState(light);
  const [webThemeComplementary, setWebThemeComplementary] = useState(lightComplementary);
  const [webThemeBorder, setWebThemeBorder] = useState(lightThemeBorder);

  const onChange = (checked) => {
    if (checked) {
      setWebTheme(light);
      setWebThemeComplementary(lightComplementary);
      setWebThemeBorder(lightThemeBorder)
    } else {
      setWebTheme(dark);
      setWebThemeComplementary(darkComplementary);
      setWebThemeBorder(darkThemeBorder);
    }
  };

  return (
    <>
      <div style={{ position: 'fixed', right: 25, zIndex: 10, top: 50 }}>
        <Switch logic={onChange} trueChild="Light" falseChild="Dark" initialState={true} />
      </div>
      <Routes>
        <Route path="/" element={<Catalog webTheme={webTheme} webThemeComplementary={webThemeComplementary} webThemeBorder={webThemeBorder} />} />
      </Routes>
    </>
  );
}
export default App;