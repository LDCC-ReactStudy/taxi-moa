import React, { useState, useEffect } from "react";
const { kakao } = window;

export default function KakaoMapScript(user) {

  var mid_location = null;
  var departure_location_result = "출발지";
  var arrival_location_result = "도착지";

  
  var tmp = (getDistance(user.user.departure_location[0], user.user.departure_location[1]
      ,user.user.arrival_location[0], user.user.arrival_location[1])*90).toFixed();
  var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(
        (user.user.departure_location[0] + user.user.arrival_location[0])/2,
        (user.user.departure_location[1] + user.user.arrival_location[1])/2
      ), // 지도의 중심좌표
      level: 10, // 지도의 확대 레벨
    };

  // 지도를 생성합니다
  const map = new kakao.maps.Map(mapContainer, mapOption);

  const geocoder = new kakao.maps.services.Geocoder();

  searchDetailAddrFromCoords(
    new kakao.maps.LatLng(
      user.user.departure_location[0],
      user.user.departure_location[1]
    ),
    function (result, status) {
      searchDetailAddrFromCoords(
        new kakao.maps.LatLng(
          user.user.arrival_location[0],
          user.user.arrival_location[1]
        ),
        function (result2, status2) {
          var positions = [
            {
              title: result[0].address.address_name,
              latlng: new kakao.maps.LatLng(user.user.departure_location[0], user.user.departure_location[1]),
              text: '출발지'
            },
            {
              title: result2[0].address.address_name, 
              latlng: new kakao.maps.LatLng(user.user.arrival_location[0], user.user.arrival_location[1]),
              text: '도착지'
            }
          ];
          user.changeLocation({
            ['departure']: result[0].address.region_3depth_name,
            ['arrival']: result2[0].address.region_3depth_name
          });

          
          for (var i = 0; i < positions.length; i ++) {
            var imageSrc = (i == 0) ? "img/map_taxi.png" : "img/map_destination2.png"; 
            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new kakao.maps.Size(55, 55); 
              
            // 마커 이미지를 생성합니다    
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
              
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage // 마커 이미지 
            });
    
          }

    
        });
    });
  
  function searchDetailAddrFromCoords(coords, callback) {
    // 좌표로 법정동 상세 주소 정보를 요청합니다
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
  }

  function getDistance( ax, ay, zx, zy ){
    var dis_x = ax - zx;
    var dix_y = ay - zy;
    var dist = Math.sqrt( Math.abs( dis_x * dis_x ) + Math.abs( dix_y * dix_y ) );
    return dist;
  }

 
  
}