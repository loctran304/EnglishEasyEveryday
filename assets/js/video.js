const video = document.getElementById("myVideo");
const btnPause = document.getElementById("btnPause");
const btnBackward = document.getElementById("btnBackward");
const btnForward = document.getElementById("btnForward");
const seekBar = document.getElementById("seekBar");
const btnFullscreen = document.getElementById("btnFullscreen");
const currentTimeSpan = document.getElementById("currentTime");
const durationSpan = document.getElementById("duration");
const videoControls = document.querySelector(".video-controls");
let timeoutId;
// Xác định trạng thái video khi trang web được tải lên
document.addEventListener("DOMContentLoaded", function () {
    updatePausePlayIcon(); // Gọi hàm cập nhật biểu tượng Pause/Play
  });
  
  // Bắt sự kiện "play" của video
  video.addEventListener("play", function () {
    btnPause.dataset.status = "pause";
    updatePausePlayIcon(); // Gọi hàm cập nhật biểu tượng Pause/Play
  });
  
  // Bắt sự kiện "pause" của video
  video.addEventListener("pause", function () {
    btnPause.dataset.status = "play";
    updatePausePlayIcon(); // Gọi hàm cập nhật biểu tượng Pause/Play
  });
  
  // Bắt sự kiện "ended" của video (khi video kết thúc phát)
  video.addEventListener("ended", function () {
    btnPause.dataset.status = "play";
    updatePausePlayIcon(); // Gọi hàm cập nhật biểu tượng Pause/Play
  });
  
  btnPause.addEventListener("click", function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
  
  function updatePausePlayIcon() {
    // Lấy thuộc tính data-status để xác định trạng thái của nút (play hay pause)
    const status = btnPause.dataset.status;
    const path = btnPause.querySelector("path");
  
    if (status === "play") {
      // Nếu trạng thái là "play", thay đổi d (hình dạng) của path thành mã d cho biểu tượng Play
      path.setAttribute(
        "d",
        "M22.2852 10.4833L5.09766 0.322165C3.70117 -0.50303 1.5625 0.297751 1.5625 2.33877V22.6562C1.5625 24.4872 3.5498 25.5907 5.09766 24.6728L22.2852 14.5165C23.8184 13.6132 23.8232 11.3866 22.2852 10.4833Z"
      );
    } else if (status === "pause") {
      // Nếu trạng thái là "pause", thay đổi d (hình dạng) của path thành mã d cho biểu tượng Pause
      path.setAttribute(
        "d",
        "M6 19h4V6H6v13zm7-13v13h4V6h-4z"
      );
    }
  }
btnBackward.addEventListener("click", function () {
    video.currentTime -= 10;
    updateSeekBar(); 
    showControls();
});
btnForward.addEventListener("click", function () {
    video.currentTime += 10;
    updateSeekBar(); 
    showControls();
});
video.addEventListener("timeupdate", function () {
    updateSeekBar();
    updateTimeInfo();
    showControls();
});
seekBar.addEventListener("input", function () {
    const time = (seekBar.value * video.duration) / 100;
    video.currentTime = time;
});
btnFullscreen.addEventListener("click", function () {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
});
function updateSeekBar() {
    const percent = (video.currentTime / video.duration) * 100;
    seekBar.value = percent;
}
function updateTimeInfo() {
    const currentMinutes = Math.floor(video.currentTime / 60);
    const currentSeconds = Math.floor(video.currentTime % 60);
    const durationMinutes = Math.floor(video.duration / 60);
    const durationSeconds = Math.floor(video.duration % 60);
    const currentTimeString = `${String(currentMinutes).padStart(2, "0")}:${String(currentSeconds).padStart(2, "0")}`;
    const durationString = `${String(durationMinutes).padStart(2, "0")}:${String(durationSeconds).padStart(2, "0")}`;
    currentTimeSpan.textContent = currentTimeString;
    durationSpan.textContent = durationString;
}
function hideControls() {
    videoControls.style.opacity = "0";
}
function showControls() {
    videoControls.style.opacity = "1";
    clearTimeout(timeoutId);
    timeoutId = setTimeout(hideControls, 3000);
}
document.addEventListener("mousemove", showControls);