import React, { useState } from "react";
import "antd/dist/antd.css";
import { Carousel, Row, Col, Slider, Image, Card } from "antd";
//Carousel images will be in API (temp)
import picOne from "../../img/BDayCake.png";
import picTwo from "../../img/DemonSlayer.png";
import picThree from "../../img/DripCake.png";
import picFour from "../../img/cocoCake.png";


//Cards
const { Meta } = Card;

//Carousel
export const CarouselImgs = () => {
  let renderPics = (img) => {
    let imageCode;

    switch (img) {
      case "firstImg":
        imageCode = picOne;
        break;
      case "secondImg":
        imageCode = picTwo;
        break;
      case "thirdImg":
        imageCode = picThree;
        break;
      case "fourthImg":
        imageCode = picFour;
        break;
    }
    return <Image src={imageCode} alt={img} width={200} height={385} />;
  };
  const contentStyle = {
    maxWidth:'90%',
    height: "160px",
    color: "#CD5C5C",
    lineHeight: "160px",
    textAlign: "center",
    background: "#fff",
  };
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle, {paddingBottom:'1%'}}>{renderPics("firstImg")}</h3>{" "}
          {/*Will need to add images from the API (These images should be adjustable by Owner)*/}
        </div>
        <div>
          <h3 style={contentStyle, {paddingBottom:'1%'}}>{renderPics("secondImg")}</h3>
        </div>
        <div>
          <h3 style={contentStyle, {paddingBottom:'1%'}}>{renderPics("thirdImg")}</h3>
        </div>
        <div>
          <h3 style={contentStyle, {paddingBottom:'1%'}}>{renderPics("fourthImg")}</h3>
        </div>
      </Carousel>
    </div>
  );
};

export const Cards = (img, ) => {
  return (
    <Card
      hoverable
      style = {{ 
        width: 200 ,
        position: "relative", left:'23%', top:'50%',
      }}
      cover= {<img alt="image name" src = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
    >
      <Meta title="List Image" description="card patry type" />
    </Card>
  );
};
