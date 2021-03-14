import { Store } from "pullstate";

import { TextInverse } from "../components/Face/face";

export const FaceStore = new Store({
  mode: 0,
  text: TextInverse,
});
