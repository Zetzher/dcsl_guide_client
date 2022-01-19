import React, { useState } from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import { Catalog } from './pages/index';
import { Switch } from './components/index';
import { PlusCircleFilled } from '@ant-design/icons';
import color from './color-palette';


const App = () => {

  const { light, dark, lightComplementary, darkComplementary, lightThemeBorder, darkThemeBorder } = color;

  const [webTheme, setWebTheme] = useState(light);
  const [webThemeComplementary, setWebThemeComplementary] = useState(lightComplementary);
  const [webThemeBorder, setWebThemeBorder] = useState(lightThemeBorder);

  const [visibleAdd, setVisibleAdd] = useState(false);

  const [loaded, setLoaded] = useState(false)

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
      <div style={{ position: 'fixed', right: 25, zIndex: 10, top: 60 }}>
        <Switch logic={onChange} trueChild="Light" falseChild="Dark" initialState={true} />
      </div>
      {
        loaded &&
        <div style={{ position: 'fixed', right: 25, zIndex: 10, bottom: 60 }}>
          <PlusCircleFilled data-cy='add-phone-drawer-button' onClick={() => setVisibleAdd(true)} style={{ fontSize: 30, color: webThemeBorder }} />
        </div>
      }
      <Routes>
        <Route path="/" element={<Catalog webTheme={webTheme} webThemeComplementary={webThemeComplementary} webThemeBorder={webThemeBorder} visibleAdd={visibleAdd} setVisibleAdd={setVisibleAdd} status={setLoaded} />} />
      </Routes>
    </>
  );
}
export default App;