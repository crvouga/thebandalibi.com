import { Link, AppIcon, Button, UniformGrid } from "@components/generic";
import { IPlatformLink } from "@data-access";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { createMailToUrl } from "@utility";
import { EmailListForm } from "../../email-list";
import { ThemeModeSelectForm } from "../theme";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import { TOP_LEVEL_LINKS } from "@config";

export const PageFooter = ({
  platformLinks,
  adminUrl,
  websiteAuthor,
  contactEmailAddress,
}: {
  platformLinks: IPlatformLink[];
  adminUrl: string;
  contactEmailAddress: string;
  websiteAuthor: {
    name: string;
    url: string;
  };
}) => {
  return (
    <>
      <Box
        sx={{
          paddingBottom: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            marginY: 4,
          },
        }}
      >
        <Container>
          <Typography align="center" variant="h3" gutterBottom>
            Follow Us
          </Typography>

          <UniformGrid
            ContainerProps={{ justifyContent: "center" }}
            ItemProps={{ xs: 3, sm: 1, md: 1 }}
          >
            {platformLinks.map((platformLink) => (
              <Box key={platformLink.url} margin="auto" maxWidth="144px" p={1}>
                <AppIcon
                  src={platformLink.platform.appIconUrl}
                  href={platformLink.url}
                  alt={platformLink.platform.name}
                />
              </Box>
            ))}
          </UniformGrid>
        </Container>

        <Container maxWidth="xs">
          <Typography align="center" variant="h3">
            Subscribe
          </Typography>

          <Typography align="center" color="textSecondary">
            Subscribe to our newsletter so you never miss an update.
          </Typography>

          <EmailListForm />
        </Container>

        <Container maxWidth="xs">
          <Typography align="center" variant="h3">
            Contact Us
          </Typography>

          <Typography align="center" color="textSecondary">
            Want to get in touch? Send us an email.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            href={createMailToUrl({ emailAddress: contactEmailAddress })}
            sx={{ marginY: 1 }}
          >
            Send Email
          </Button>
        </Container>

        <Container maxWidth="xs">
          <ThemeModeSelectForm />
        </Container>

        <Container maxWidth="sm">
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h4" align="center">
                Navigation
              </Typography>
              <List>
                {TOP_LEVEL_LINKS.map((link) => (
                  <Link href={link.href} key={link.href}>
                    <ListItem button>
                      <ListItemText
                        primaryTypographyProps={{
                          variant: "button",
                          fontWeight: "bold",
                          align: "center",
                        }}
                        primary={link.label}
                      />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h4" align="center">
                Legal
              </Typography>
              <List>
                {["Shipping Policy", "Cookie Policy", "Privacy Policy"].map(
                  (link) => (
                    <ListItem button key={link}>
                      <ListItemText
                        primaryTypographyProps={{
                          variant: "button",
                          fontWeight: "bold",
                          align: "center",
                        }}
                        primary={link}
                      />
                    </ListItem>
                  )
                )}
              </List>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h4" align="center">
                Website
              </Typography>
              <List>
                {[
                  {
                    href: adminUrl,
                    label: "Content",
                  },
                  {
                    href: websiteAuthor.url,
                    label: websiteAuthor.name,
                  },
                ].map((link) => (
                  <Link key={link.href} href={link.href}>
                    <ListItem button>
                      <ListItemText
                        primaryTypographyProps={{
                          variant: "button",
                          fontWeight: "bold",
                          align: "center",
                        }}
                        primary={link.label}
                      />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>

        <Typography variant="subtitle2" color="text.secondary">
          Alibi {new Date().getFullYear().toString()}
        </Typography>
      </Box>
    </>
  );
};
