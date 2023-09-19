// Function để lấy dữ liệu từ localStorage (nếu có) và hiển thị lên màn hình
function displayComments() {
    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = '';

    // Lấy dữ liệu từ localStorage nếu có
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Hiển thị từng comment
    comments.forEach((commentData) => {
        const commentElement = document.createElement('div');
        const { comment, timestamp } = commentData;
        const formattedTime = formatTime(timestamp); // Định dạng lại thời gian
        commentElement.innerHTML = `<strong>${formattedTime}</strong>: ${comment}`;
        commentsContainer.appendChild(commentElement);
    });

    // Đếm số lượng comment và hiển thị
    const commentCount = document.getElementById('commentCount');
    commentCount.textContent = comments.length;
}

// Function để định dạng lại thời gian (lấy số giờ và số phút)
function formatTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0'); // Đảm bảo luôn có 2 chữ số
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Đảm bảo luôn có 2 chữ số
    return `${hours}:${minutes}`;
}

// Function để thêm comment mới và lưu vào localStorage
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const newComment = commentInput.value.trim();

    if (newComment !== '') {
        // Lấy dữ liệu từ localStorage (nếu có)
        const comments = JSON.parse(localStorage.getItem('comments')) || [];

        // Thêm comment mới vào mảng comments với timestamp
        const timestamp = new Date().toISOString(); // Thời gian thực ngay lúc cmt
        comments.push({ comment: newComment, timestamp });

        // Lưu mảng comments mới vào localStorage
        localStorage.setItem('comments', JSON.stringify(comments));

        // Hiển thị lại danh sách comment
        displayComments();

        // Reset input field
        commentInput.value = '';

        // Cập nhật số lượng bình luận
        updateCommentCount();
    }
}

// Function để cập nhật số lượng bình luận sử dụng Server-Sent Events (SSE)
function updateCommentCount() {
    const commentCount = document.getElementById('commentCount');
    const eventSource = new EventSource('/commentCount');

    eventSource.onmessage = function (event) {
        const count = parseInt(event.data);
        commentCount.textContent = count;
    };
}

// Gọi hàm displayComments khi trang web tải xong
document.addEventListener('DOMContentLoaded', () => {
    displayComments();
    updateCommentCount();
});
