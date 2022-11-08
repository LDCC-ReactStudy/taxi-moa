const { kakao } = window;

export default function KakaoMapScript() {
  /*
    const container = document.getElementById('myMap');
    const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    */

  const mapContainer = document.getElementById('map'); // 지도를 표시할 div
  const mapOption = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

  // 지도를 생성합니다
  const map = new kakao.maps.Map(mapContainer, mapOption);

  // 주소-좌표 변환 객체를 생성합니다
  const geocoder = new kakao.maps.services.Geocoder();

  // 주소로 좌표를 검색합니다
  searchDetailAddrFromCoords(
    new kakao.maps.LatLng(33.450701, 126.570667),
    function (result, status) {
      // 정상적으로 검색이 완료됐으면
      console.log(result);

      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(33.450701, 126.570667);

        // 결과값으로 받은 위치를 마커로 표시합니다
        const marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        const infowindow = new kakao.maps.InfoWindow({
          content:
            '<div style="width:150px;text-align:center;padding:6px 0;">' +
            result[0].road_address.address_name +
            '<br>' +
            result[0].address.region_3depth_name +
            '</div>',
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    }
  );
  function searchDetailAddrFromCoords(coords, callback) {
    // 좌표로 법정동 상세 주소 정보를 요청합니다
    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
  }
  /*
  const markers = [
    {
      position: new kakao.maps.LatLng(33.450001, 126.570467),
      text: '주소 이름', // text 옵션을 설정하면 마커 위에 텍스트를 함께 표시할 수 있습니다
    },
  ];

  const staticMapContainer = document.getElementById('myMap'), // 이미지 지도를 표시할 div
    staticMapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 이미지 지도의 중심좌표
      level: 3, // 이미지 지도의 확대 레벨
      marker: markers, // 이미지 지도에 표시할 마커
    };

  // 이미지 지도를 생성합니다
  const staticMap = new kakao.maps.StaticMap(
    staticMapContainer,
    staticMapOption
  );
  */
}
