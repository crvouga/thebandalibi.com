export type IShowcase = {
  title: string;
  image: string;
  action: {
    title: string;
    url: string;
  };
  backgroundVideo?: string;
};

export type IVideo = {
  id: string;
  name: string;
  url: string;
};

export type ISocialMedia = {
  name: string;
  url: string;
  image: string;
};

export type IGallery = {
  id: string;
  name: string;
  images: {
    url: string;
  }[];
};

export type ICMS = {
  getShowcases: () => Promise<IShowcase[]>;
  getVideos: () => Promise<IVideo[]>;
  getSocialMedia: () => Promise<ISocialMedia[]>;
  getGalleries: () => Promise<IGallery[]>;
};
