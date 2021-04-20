import React from "react";
import AlbumList from "./components/AlbumList";

AlbumFeatures.propTypes = {};

function AlbumFeatures(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhac ABC",
      imgUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/7/4/5/f7452c4bab07a4cfd39c388e73a13922.jpg",
    },
    {
      id: 2,
      name: "Nhac ABC",
      imgUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/7/4/5/f7452c4bab07a4cfd39c388e73a13922.jpg",
    },
    {
      id: 3,
      name: "Nhac ABC",
      imgUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/7/4/5/f7452c4bab07a4cfd39c388e73a13922.jpg",
    },
    {
      id: 4,
      name: "Nhac ABC",
      imgUrl:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/7/4/5/f7452c4bab07a4cfd39c388e73a13922.jpg",
    },
  ];
  return (
    <div>
      <h2>Có thể bạn sẽ thích</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeatures;
