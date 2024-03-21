function createInfospot(site, url, imagePath) {
  const infospot = new PANOLENS.Infospot();
  infospot.position.set(site.x, site.y, site.z);
  infospot.addHoverText(site.name);

  // 클릭 이벤트에 대한 콜백 함수
  function clickCallback() {
    window.location.href = url;
  }

  infospot.addEventListener("click", clickCallback); // 클릭 이벤트에 콜백 함수 등록

  // 이미지 경로가 제공된 경우 이미지를 변경합니다.
  if (imagePath) {
    const texture = new THREE.TextureLoader().load(imagePath);
    infospot.material.map = texture;
  }

  panorama.add(infospot);
}

// 사용 예시
const naver = {
  x: 2304,
  y: 1867,
  z: -5000,
  name: "네이버"
};
const naverUrl = "https://naver.com";
const naverImagePath = "path/to/naver_image.jpg";

createInfospot(naver, naverUrl, naverImagePath);
