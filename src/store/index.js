import { Store } from "pullstate";

export const MenuStore = new Store({
  is_open: false,
});

export const BioStore = new Store({
  youtube_last_video: null,
});
