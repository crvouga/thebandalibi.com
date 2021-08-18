import { OpenCartIconButton } from "@components/commerce";
import { TOP_LEVEL_LINKS } from "@config";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { NavLinks } from "../nav-links";
import { NavBarDesktop } from "./nav-bar-desktop";
import { NavBarMobile } from "./nav-bar-mobile";
import { OpenNavDrawerButton } from "./nav-drawer";
import { OpenAuthButton } from "../../users";

export const NavBar = ({
  logo,
  breadcrumbs,
}: {
  logo: ReactNode;
  breadcrumbs?: ReactNode;
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
              <OpenAuthButton />
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
              <OpenCartIconButton />
              <OpenAuthButton />
            </>
          }
        />
      </Hidden>

      <Box sx={{ width: "100vw", height: "52px" }} />

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
