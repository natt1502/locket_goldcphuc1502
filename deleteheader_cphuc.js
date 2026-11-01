function setHeaderValue(headers, name, value) {
    var lowerName = name.toLowerCase();
    if (lowerName in headers) {
        headers[lowerName] = value;
    } else {
        headers[name] = value;
    }
}

var modifiedHeaders = $request && $request.headers ? $request.headers : {};

setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");
setHeaderValue(modifiedHeaders, "X-Revenuecat-ETag", "");
setHeaderValue(modifiedHeaders, "If-None-match", ""); // Viết thường chữ m
setHeaderValue(modifiedHeaders, "If-none-match", "");

delete modifiedHeaders["X-RevenueCat-ETag"];
delete modifiedHeaders["X-Revenuecat-ETag"];
delete modifiedHeaders["If-None-match"]; // Viết thường chữ m
delete modifiedHeaders["If-none-match"];

$done({ headers: modifiedHeaders });