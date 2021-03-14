import React from "react";

import { youtube } from "../../services/";
import { BioStore } from "../../store";
import {
  Menu,
  SocialBar,
  ProfilePhoto,
  Button,
  YoutubeVideo,
} from "../../components";
import Photo from "../../assets/profile.jpg";

import "./styles.sass";

const Bio = () => {
  const channelId = "UC6aFeI2AerS0Y0OHGKeStCg";

  const youtube_last_video = BioStore.useState(
    (state) => state.youtube_last_video
  );

  youtube
    .get(`/search`, {
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        part: "id,snippet",
        channelId,
        maxResults: 1,
        order: "date",
      },
    })
    .then(({ data }) => {
      BioStore.update((state) => {
        state.youtube_last_video = data.items[0];
      });
    })
    .catch(() => {});

  return (
    <div className="bio">
      <Menu />
      <ProfilePhoto src={Photo} />
      <YoutubeVideo video={youtube_last_video} />
      <Button>
        <a
          href={`https://youtube.com/watch?v=${youtube_last_video?.id.videoId}`}
        >
          📹 Último vídeo
        </a>
      </Button>
      <Button>
        <a href={`https://youtube.com/channel/${channelId}`}>
          📲 Acesse o meu canal
        </a>
      </Button>
      <Button>
        <a href="/">👨🏻‍💻 Veja meu site</a>
      </Button>
      <Button>
        <a href="mailto:hello@victorodrigues.dev">📧 Entrar em contato</a>
      </Button>
      <SocialBar />
    </div>
  );
};

export default Bio;
