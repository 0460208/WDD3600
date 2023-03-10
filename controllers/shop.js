/*
 * Author: Amanda Martel
 * Filname: shop.js
 * Class: WDD 3600 - Node Complete Guide
 * Date: 2/2/2023
*/

const res = require("express/lib/response");

const Product = require('../models/product');

const Cart = require('../models/cart')

//get products
exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(([rows]) => {
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'All Products',
      path: '/products'
    });
  })
  .catch(err => console.log(error));
}; 

//get product
exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId)
    .then(([product]) => {
      res.render('shop/product-detail', {
        product: product[0], 
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err => console.log(error));
};

//get index
exports.getIndex = (req, res, next) => {
    Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('shop/index', {
        prods: rows,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => console.log(error));
};  

//get cart 
exports.getCart = (req, res, next) => {
    Cart.getCart(cart => {
      Product.fetchAll(products => {
        const cartProducts = [];
        for (product of products) {
          const cartProductData = cart.products.find(
            prod => prod.id === product.id
          );
          if (cartProductData) {
            cartProducts.push({ productData: product, qty: cartProductData.qty });
          }
        }
        res.render('shop/cart', {
          path: '/cart',
          pageTitle: 'Your Cart',
          products: cartProducts
        });
      });
    });
  };
  
  

//post Cart
exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
      Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
  };
  
  exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
      Cart.deleteProduct(prodId, product.price);
      res.redirect('/cart');
    });
  };

//get orders

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Order'
    });
};

//get checkout 
exports.getCheckout = (req, resp, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};