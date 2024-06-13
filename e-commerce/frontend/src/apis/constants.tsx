const baseApiUrl = "http://localhost:9000/";

interface Link {
  home: {
    products: string;
    featured_products: string;
    new_arrivals: string;
    productByCategory: string;
    productByFilter: string;
    singleProduct: string;
    search: string;
  };
  admin_products: {
    addProduct: string;
    getProduct: string;
    singleProduct: string;
    deleteProduct: string;
    updateProduct: string;
    login: string;
  };
  user_auth: {
    generateOTP: string;
    checkPincode: string;
    verifyOTP: string;
    getUserAddress: string;
    createAddress: string;
    deleteAddress: string;
    editAddress: string;
    logout: string;
    getUser: string;
    updateUser: string;
  };
  admin_auth: {
    login: string;
    logout: string;
  };
  admin_orders: {
    getOrders: string;
    getOrderById: string;
    updateOrderByStatus: string;
  };
  cart: {
    getCart: string;
    addItem: string;
    deleteItem: string;
    increaseItem: string;
    decreaseItem: string;
  };
  order: {
    createOrder: string;
    getAllOrder: string;
    cancelOrder: string;
    getKey: string;
    paymentCheckout: string;
    paymentVerification: string;
  };
}

const ALL_API_CONST: Link = {
  home: {
    products: baseApiUrl + "main/product/all-product?page=",
    productByCategory: baseApiUrl + "main/product/product-category?",
    featured_products: baseApiUrl + "main/product/featured-product?page=",
    new_arrivals: baseApiUrl + "main/product/new-arrival-product?page=",
    productByFilter: baseApiUrl + "main/product/filter-product",
    search: baseApiUrl + "main/product/search-product?",
    singleProduct: baseApiUrl + "main/product/product-details/",
  },
  admin_products: {
    addProduct: baseApiUrl + "admin/product/add-product",
    getProduct: baseApiUrl + "admin/product/get-all-product ",
    singleProduct: baseApiUrl + "admin/product/get-product-details/",
    updateProduct: baseApiUrl + "admin/product/update-product/",
    deleteProduct: baseApiUrl + "admin/product/delete-product/",
    login: baseApiUrl + "admin/admin/admin-login",
  },
  admin_auth: {
    login: baseApiUrl + "admin/admin/admin-login",
    logout: baseApiUrl + "admin/admin/logout-admin",
  },
  admin_orders: {
    getOrders: baseApiUrl + "admin/order/get-all-order",
    getOrderById: baseApiUrl + "admin/order/order-details/",
    updateOrderByStatus: baseApiUrl + "admin/order/update-order-status/",
  },
  user_auth: {
    generateOTP: baseApiUrl + "user/send-otp",
    checkPincode: baseApiUrl + "main/pincode/check-pincode",
    verifyOTP: baseApiUrl + "user/verify-otp ",
    logout: baseApiUrl + "user/logout-user",
    getUserAddress: baseApiUrl + "main/address/get-address/",
    createAddress: baseApiUrl + "main/address/create-address",
    deleteAddress: baseApiUrl + "main/address/delete-address/",
    editAddress: baseApiUrl + "main/address/update-address/",
    getUser: baseApiUrl + "user/user-profile/",
    updateUser: baseApiUrl + "user/update-profile/",
  },
  cart: {
    getCart: baseApiUrl + "main/cart/get-cart-details/",
    addItem: baseApiUrl + "main/cart/add-item/",
    deleteItem: baseApiUrl + "main/cart/remove-item/",
    increaseItem: baseApiUrl + "main/cart/inc-item/",
    decreaseItem: baseApiUrl + "main/cart/dec-item/",
  },
  order: {
    createOrder: baseApiUrl + "main/order/create-order",
    getAllOrder: baseApiUrl + "main/order/user-orders/",
    cancelOrder: baseApiUrl + "main/order/cancel-order/",
    getKey: baseApiUrl + "main/order/get-key ",
    paymentCheckout: baseApiUrl + "main/order/payment-checkout",
    paymentVerification: baseApiUrl + "main/order/payment-verification",
  },
};

export default ALL_API_CONST;
