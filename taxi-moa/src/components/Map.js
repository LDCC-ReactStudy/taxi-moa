import React, { useEffect } from "react";
import KakaoMapScript from "./KakaoMapScript";
import { Card } from "react-bootstrap";

export default function Map(user) {
  useEffect(() => {
    KakaoMapScript(user);
  }, [user]);

  return (
    <Card>
      <div>
        <div style={{ fontSize: "13px" }}>[출발지점]</div>
        <div id="map" style={{ width: "100%", height: "200px" }}></div>
        <div style={{ height: "10px" }}></div>
        <div style={{ fontSize: "13px" }}>[도착지점]</div>
        <div id="map2" style={{ width: "100%", height: "200px" }}></div>
      </div>
    </Card>
  );
}
