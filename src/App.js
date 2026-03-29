import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import ProjectDetailPage from "./containers/projectDetail/ProjectDetailPage";
import {StyleProvider} from "./contexts/StyleContext";
import {useLocalStorage} from "./hooks/useLocalStorage";

function App() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const changeTheme = () => setIsDark(!isDark);

  return (
    <HashRouter>
      <div className={isDark ? "dark-mode" : null}>
        <StyleProvider value={{isDark, changeTheme}}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/project/:slug" component={ProjectDetailPage} />
          </Switch>
        </StyleProvider>
      </div>
    </HashRouter>
  );
}

export default App;
