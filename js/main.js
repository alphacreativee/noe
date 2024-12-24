document.addEventListener("DOMContentLoaded", () => {
  const audioPlayer = document.getElementById("audioPlayer");

  // Phát âm thanh tự động khi trang tải xong
  audioPlayer
    .play()
    .then(() => {
      // Bật tiếng lại sau khi phát
      audioPlayer.muted = false;
    })
    .catch((error) => {
      console.error("Playback error: ", error);
    });
});
var boxgift = document.querySelector(".box-gift");
var Close = document.querySelector(".fa-xmark");
var boxContent = document.querySelector(".box-content");
var content = document.querySelector(".content");
const audioPlayer = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton");

// Bắt sự kiện click để phát âm thanh
// boxgift.addEventListener("click", () => {
//   audioPlayer
//     .play()
//     .then(() => {
//       console.log("Audio is playing");
//     })
//     .catch((error) => {
//       console.error("Playback error: ", error);
//     });
// });
boxgift.onclick = function () {
  boxgift.classList.toggle("active");
  boxContent.classList.add("active");
};
// content.onclick = function () {
//   boxContent.classList.add("active");
// };
Close.onclick = function () {
  boxContent.classList.remove("active");
  boxgift.classList.remove("active");
};
