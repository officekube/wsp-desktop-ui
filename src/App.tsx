import React, {useState} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Asider, Container, Content, Header, Main, Navbar, NavItemType,} from "./components/layout";
import {initialNavItems, ROUTES} from "./constant/component-items";
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
    navigate(`/${route}`);
  };

  return (
    <Container>
      <Header />
      <Content>
        <Navbar items={navItems} setActive={handleNavClick} />
        <Main>
          <Routes>
            <Route path="/" element={<ROUTES.HOME.Main />} />
            {Object.values(ROUTES).map(({ Path, Main: MainComponent }) => (
              <Route
                key={Path}
                path={Path}
                element={<MainComponent />}
              />
            ))}
          </Routes>
        </Main>
        <Asider>
          <Routes>
            <Route path="/" element={<ROUTES.HOME.Aside />} />
            {Object.values(ROUTES).map(({ Path, Aside: AsideComponent }) => (
              <Route
                key={Path}
                path={Path}
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