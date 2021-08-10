import { OpenCartFab, OpenCartIconButton } from "@components/commerce";
import { TOP_LEVEL_LINKS } from "@config";
import { useTheme } from "@material-ui/core";
import { Button } from "@components/generic";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import { useRouter } from "next/router";
import React, { FC, ReactNode } from "react";
import { NavLinks } from "../nav-links";
import { NavBarDesktop } from "./nav-bar-desktop";
import { NavBarMobile } from "./nav-bar-mobile";
import { OpenNavDrawerButton } from "./nav-drawer";

const gutter = <Box sx={{ width: "100vw", height: "52px" }} />;

export const NavBar: FC<{ logo: ReactNode; breadcrumbs?: ReactNode }> = ({
  logo,
  breadcrumbs,
}) => {
  const router = useRouter();

  return (
    <>
      <Hidden smDown implementation="css">
        <NavBarDesktop
          left={logo}
          center={
            <NavLinks
              selectedHref={router.pathname}
              ListProps={{ sx: { display: "flex", flexDirection: "row" } }}
              links={TOP_LEVEL_LINKS}
            />
          }
          right={
            <>
              <OpenCartIconButton />
              <Button>Sign Up</Button>
            </>
          }
        />
      </Hidden>

      <Hidden smUp implementation="css">
        <NavBarMobile
          left={<OpenNavDrawerButton />}
          center={logo}
          right={
            <>
              <Button size="small">Sign Up</Button>
            </>
          }
        />
        <OpenCartFab />
      </Hidden>

      {gutter}

      {breadcrumbs && (
        <Container
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {breadcrumbs}
        </Container>
      )}
    </>
  );
};
