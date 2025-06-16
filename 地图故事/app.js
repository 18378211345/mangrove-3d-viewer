// 设置Cesium Ion访问令牌
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0NGJhZjMzMS1lN2YyLTRhZjktOTA5OS05OTZmYmI0ZGMyNTAiLCJpZCI6Mjk2NzMwLCJpYXQiOjE3NDU0NTY5NzB9.MfPwNFX7Wmi3MXWVTh4FjYN_YbxWFphOxEKHIx4VAHU';

// 创建Cesium Viewer实例
const viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: Cesium.createWorldTerrain(),
  baseLayerPicker: false,
  geocoder: false,
  homeButton: false,
  sceneModePicker: false,
  navigationHelpButton: false,
  animation: false,
  timeline: false,
  fullscreenButton: false,
  infoBox: false
});

// 防城港市的经纬度坐标（中心点）
const fangchenggangPosition = Cesium.Cartesian3.fromDegrees(
  108.3547,  // 经度
  21.6869,   // 纬度
  5000       // 高度（米）
);

// 设置初始视图为中国区域
viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(105.0, 35.0, 10000000),
  orientation: {
    heading: Cesium.Math.toRadians(0),
    pitch: Cesium.Math.toRadians(-90),
    roll: 0.0
  }
});

// 飞往防城港市的函数
function flyToFangchenggang() {
  viewer.camera.flyTo({
    destination: fangchenggangPosition,
    orientation: {
      heading: Cesium.Math.toRadians(0),   // 朝向正北
      pitch: Cesium.Math.toRadians(-45),   // 俯视角度45度
      roll: 0.0                            // 无翻滚
    },
    duration: 5,                           // 飞行时间5秒
    complete: function() {
      console.log("已到达防城港市上空");
    }
  });
}

// 绑定按钮点击事件
document.getElementById('flyButton').addEventListener('click', flyToFangchenggang);