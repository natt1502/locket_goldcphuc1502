// ============================================================
// Locket Delete Header (Bản làm sạch)
// Nhiệm vụ: Xóa các header ETag để ép RevenueCat kiểm tra lại
// ============================================================

function setHeaderValue(headers, name, value) {
    var lowerName = name.toLowerCase();
    if (lowerName in headers) {
        headers[lowerName] = value;
    } else {
        headers[name] = value;
    }
}

var modifiedHeaders = $request && $request.headers ? $request.headers : {};

// 1. Gán giá trị rỗng cho các header (đề phòng lỗi case-sensitive)
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");
setHeaderValue(modifiedHeaders, "X-Revenuecat-ETag", "");
setHeaderValue(modifiedHeaders, "If-None-Match", "");
setHeaderValue(modifiedHeaders, "If-none-match", "");

// 2. Xóa hẳn các header này khỏi request
delete modifiedHeaders["X-RevenueCat-ETag"];
delete modifiedHeaders["X-Revenuecat-ETag"];
delete modifiedHeaders["If-None-Match"];
delete modifiedHeaders["If-none-match"];

// 3. Gửi lại request đã được làm sạch
$done({ headers: modifiedHeaders });