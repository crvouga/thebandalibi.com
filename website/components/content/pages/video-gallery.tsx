import { Link, UniformGrid } from "@components/generic";
import { LABELS, ROUTES } from "@config";
import { ISettings, IVideoGallery } from "@data-access";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { PageWrapper } from "../../shared";
import { VideoGalleryCard } from "../cards/video-gallery-card";

export type IVideoGalleryProps = {
  settings: ISettings;
  videoGalleries: IVideoGallery[];
};

export const VideoGallery = (props: IVideoGalleryProps) => {
  const { videoGalleries, settings } = props;

  return (
    <PageWrapper pageTitle={[LABELS.videoGallery]} settings={settings}>
      <Container sx={{ paddingTop: 2 }}>
        <Breadcrumbs>
          <Link href={ROUTES.landing()}>{LABELS.landingPage}</Link>
          <Link color="text.primary">{LABELS.videoGallery}</Link>
        </Breadcrumbs>

        <Typography variant="h1" color="initial">
          {LABELS.videoGallery}
        </Typography>
      </Container>

      <Container disableGutters>
        <UniformGrid>
          {videoGalleries.map((videoGallery) => (
            <VideoGalleryCard
              key={videoGallery.slug}
              videoGallery={videoGallery}
            />
          ))}
        </UniformGrid>
      </Container>
    </PageWrapper>
  );
};
