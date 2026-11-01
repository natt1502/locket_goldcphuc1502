// ============================================================
// Locket RevenueCat Fake Gold (Bản của Lâm - Giải mã)
// ============================================================

// Ngày mua và ngày hết hạn
const purchaseDate = "2005-01-09T08:30:00Z";
const expiresDate = "9999-12-31T23:59:59Z";

var ua = $request && $request.headers ? ($request.headers["User-Agent"] || $request.headers["user-agent"] || "") : "";
var obj = {};

try {
    obj = JSON.parse($response.body);
} catch (e) {
    obj = {};
}

// Thông báo hiển thị trong app
obj.Attention = "Chào mừng bạn đã đến với Locket Gold của Lâm!";

// 1. Tạo thông tin gói đăng ký (Subscription)
var lamdev = {
    grace_period_expires_date: null,
    display_name: "locket_1600_1y",
    is_sandbox: false,
    ownership_type: "PURCHASED",
    billing_issues_detected_at: null,
    management_url: "https://apps.apple.com/account/subscriptions",
    period_type: "normal",
    price: {
        amount: 399000.0, 
        currency: "VND"
    },
    expires_date: expiresDate,
    grace_period_expires_date: null,
    refunded_at: null,
    unsubscribe_detected_at: null,
    original_purchase_date: purchaseDate,
    purchase_date: purchaseDate,
    store: "app_store",
    store_transaction_id: "2000001108724193"
};

// 2. Tạo thông tin quyền lợi (Entitlement)
var locketGold = {
    grace_period_expires_date: null,
    purchase_date: purchaseDate,
    product_identifier: "locket_1600_1y",
    expires_date: expiresDate,
    ownership_type: "PURCHASED"
};

// 3. Khởi tạo các object nếu chưa có
obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};

// 4. Gán dữ liệu giả vào
obj.subscriber.subscriptions["locket_1600_1y"] = lamdev;
obj.subscriber.entitlements["Gold"] = locketGold;
obj.subscriber.entitlements["locket_gold"] = locketGold;
obj.subscriber.entitlements["pro"] = locketGold;

// 5. Trả dữ liệu về cho app
$done({ body: JSON.stringify(obj) });
