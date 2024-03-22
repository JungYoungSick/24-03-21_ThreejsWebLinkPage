function createInfospot(site, url, imagePath) {
  const infospot = new PANOLENS.Infospot();
  infospot.position.set(site.x, site.y, site.z);
  infospot.addHoverText(site.name);

  // 클릭 이벤트에 대한 콜백 함수
  function clickCallback() {
    window.location.href = url;
  }

  // 클릭 이벤트에 콜백 함수 등록
  infospot.addEventListener("click", clickCallback);

  // 이미지 경로가 제공된 경우 이미지를 변경합니다.
  if (imagePath) {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(imagePath, function (texture) {
      infospot.material.map = texture;
      // Material이 변경되었음을 Three.js에 알립니다.
      infospot.material.needsUpdate = true;
    });
  }

  panorama.add(infospot);
}

// 사용 예시
const naver = {
  x: 2800,
  y: 55,
  z: -5000,
  name: "네이버 바로가기"
};
const Url = "https://naver.com";
const ImagePath = "image/Logo/naver.jpeg";

createInfospot(naver, Url, ImagePath);