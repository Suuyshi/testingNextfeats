import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import styles from "@/components/Menu/styles.module.css";

const Menu = () => {
  return (
    <NavigationMenu.Root className={`${styles.NavigationMenuRoot}`}>
      <NavigationMenu.List className={`${styles.NavigationMenuList}`}>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={`${styles.NavigationMenuLink}`}
            href="/static-props"
          >
            getStaticPropsDemo
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className={`${styles.NavigationMenuLink}`}
            href="/server-props"
          >
            getServerPropsDemo
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator
          className={`${styles.NavigationMenuIndicator}`}
        >
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

export default Menu;
