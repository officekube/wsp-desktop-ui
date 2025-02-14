import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  Navbar,
  NavItemType,
  Content,
  Main,
  Asider,
} from "./components/layout";
import { initialNavItems, ROUTES } from "./constant/component-items";
import "./App.css";

function App() {
  const [navItems, setNavItems] = useState<NavItemType[]>(initialNavItems);
  const navigate = useNavigate();

  const handleNavClick = (key: string) => {
    const navs = navItems.map((item) => ({
      ...item,
      active: item.name === key
    }));
    setNavItems(navs);

    const route = key.toLowerCase();
    // Remove the hash from navigate since HashRouter handles it
    navigate(`/${route}`);
  };

  return (
    <Container>
      <Header />
      <Content>
        <Navbar items={navItems} setActive={handleNavClick} />
        <Main>
          <Routes>
            <Route path="/" element={<ROUTES.HOME.main />} />
            {Object.values(ROUTES).map(({ path, main: MainComponent }) => (
              <Route
                key={path}
                path={path}
                element={<MainComponent />}
              />
            ))}
          </Routes>
        </Main>
        <Asider>
          <Routes>
            <Route path="/" element={<ROUTES.HOME.aside />} />
            {Object.values(ROUTES).map(({ path, aside: AsideComponent }) => (
              <Route
                key={path}
                path={path}
                element={<AsideComponent />}
              />
            ))}
          </Routes>
        </Asider>
      </Content>
    </Container>
  );
}

export default App;