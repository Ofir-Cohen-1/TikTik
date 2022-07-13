import React from "react";
import { Video } from "../types";
import { NextPage } from "Next";

interface IProps {
  post: Video;
}

const VideoCard: NextPage<IProps> = ({ post }) => {
  return <div>VideoCard</div>;
};

export default VideoCard;
