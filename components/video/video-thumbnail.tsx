import { VideoPlayPauseIcon } from "./video-play-pause-icon";
import { makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import clsx from "clsx";
import Image from "next/image";
import { IVideo } from "../../lib/data-access";
import { toYouTubeThumbnailUrl } from "../../lib/utility/youtube";
import { AspectRatio } from "../shared/aspect-ratio";
import Box from "@material-ui/core/Box";

const ASPECT_RATIO = 1.75;

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
  },
}));

export const VideoThumbnail = ({
  video,
  ratio,
  className,
}: {
  video?: IVideo;
  ratio?: number;
  className?: string;
}) => {
  const classes = useStyles();
  return (
    <Box position="relative" width="100%" height="100%">
      <AspectRatio
        className={clsx(classes.root, className)}
        ratio={ratio ?? ASPECT_RATIO}
      >
        <Image
          objectFit="cover"
          layout="fill"
          src={toYouTubeThumbnailUrl(video?.url ?? "")}
          alt={video?.name}
        />
      </AspectRatio>
      {video && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <VideoPlayPauseIcon video={video} size="52px" />
        </Box>
      )}
    </Box>
  );
};

export const VideoThumbnailSkeleton = () => {
  return (
    <AspectRatio ratio={ASPECT_RATIO}>
      <Skeleton variant="rect" width="100%" height="100%" />
    </AspectRatio>
  );
};
