import React from "react";
import { connect } from "frontity";
import Image from "@frontity/components/image";

const Thumbnal_Img = ({ state, id, ...restProps }) => {
  const data = state.source.get(state.router.link);
  const media = state.source.attachment[id];

  if (!media) return;

  return data.isReady ? (
    <Image
      {...restProps}
      component="img"
      src={media.media_details.sizes.full.source_url}
      alt={media.title.rendered}
    />
  ) : (
    <h2 className="align-content-center"> Loading... </h2>
  );
};
export default connect(Thumbnal_Img);
