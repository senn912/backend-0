// Import module HTTP có sẵn trong Node.js
const http = require("http");

// Khai báo địa chỉ và cổng cho server
const hostname = "localhost"; // tương đương với localhost
const port = 3002;

// Tạo server và xử lý request
const server = http.createServer((req, res) => {
    res.statusCode = 200; // Trạng thái OK
    res.setHeader("Content-Type", "text/plain"); // Nội dung dạng text
    res.end("Hello World\n Sang banh dang hoc nodejs"); // Trả về nội dung
});

// Server lắng nghe trên port đã chọn
server.listen(port, hostname, () => {
    console.log(` địa chỉ http://${hostname}:${port}/`);
});
