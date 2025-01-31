import React, { useState } from "react";
import {
  Container,
  Header,
  Navbar,
  NavItemType,
  Content,
  Main,
  Asider,
} from "./components/layout";
import { initialNavItems } from "./constant/component-items";
import { AsiderTask, MainTask } from "./pages";
import "./App.css";

function App() {
  const [navItems, setNavItems] = useState<NavItemType[]>(initialNavItems);
  const handleNavClick = (key: string) => {
    const navs = navItems.map((item) => {
      if (item.name === key) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    });
    setNavItems(navs);
  };

  return (
    <Container>
      <Header />
      <Content>
        <Navbar items={navItems} setActive={handleNavClick} />
        <Main>
          <MainTask />
        </Main>
        <Asider>
          <AsiderTask />
        </Asider>
      </Content>
    </Container>
  );
}

export default App;
