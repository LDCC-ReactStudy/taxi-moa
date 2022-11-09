import React, { useEffect } from "react";
import KakaoMapScript from "./KakaoMapScript";
import { Card } from "react-bootstrap";

export default function Map(props) {
  const { user, changeLocation } = props;  
  useEffect(() => {
    KakaoMapScript({user, changeLocation});
  }, [user]);

  return (
    <Card>
      <div>
        <div style={{ fontSize: "13px" }}><br></br></div>
        <div id="map" style={{ width: "100%", height: "200px" }}></div>
      </div>
    </Card>
  );
}