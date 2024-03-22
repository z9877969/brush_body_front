import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { totalPrice, totalPriceDiscount } from 'modules/cart';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [
      {
        id: '45cf',
        images: {
          url: 'https://cdn11.bigcommerce.com/s-a8e5b/images/stencil/1280x1280/products/3322/3847/Edel_White_Ultrasoft_Flosser_Toothbrush_2_pack_swiss_made__66902.1616093153.jpg?c=2?imbypass=on',
        },
        title:
          'Відбілювальна зубна паста Curaprox Be You Candy Lover Toothpaste',
        price: 288.8,
        salePrice: 188.8,
        flavors: {
          flavor: 'Яблуко',
          colorMarker: 'green',
          quantity: 5,
        },
        volume: '50',
        amount: 1,
      },
      {
        id: '45dd',
        images: {
          url: 'https://cdn11.bigcommerce.com/s-a8e5b/images/stencil/1280x1280/products/3322/3847/Edel_White_Ultrasoft_Flosser_Toothbrush_2_pack_swiss_made__66902.1616093153.jpg?c=2?imbypass=on',
        },
        title: 'Зубна щітка СS 5460 Ultra Soft',
        price: 288.8,
        salePrice: 0,
        colors: {
          name: 'зелений',
          color: 'seagreen',
          quantity: 6,
        },
        amount: 1,
      },
    ],
    totalPrice: 0,
    promoCode: null,
    discount: 0,
    isSubmitForm: false,
  },
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
      const { id, flavor, volume, color } = action.payload;
      state.products = state.products.filter(
        (product) =>
          (product.id === id &&
            product.flavors?.flavor === flavor &&
            product.flavors?.volume === volume) ||
          product.colors?.color === color
      );
      state.totalPrice = totalPrice(state.products);
    },
    changeProductAmount(state, action) {
      const { id, quantity, flavor, volume, color, newCount } = action.payload;

      const productIndex = state.products.findIndex(
        (product) =>
          (product.id === id &&
            product.flavors?.flavor === flavor &&
            product.flavors?.volume === volume) ||
          product.colors?.color === color
      );

      if (productIndex !== -1) {
        state.products[productIndex].amount = newCount;
        state.products[productIndex].isDisabledIncrement =
          newCount === quantity;
      }
      state.totalPrice = totalPrice(state.products);
      if (state.promoCode !== null) {
        state.discount = totalPriceDiscount(state.totalPrice);
      }
    },
    addTotalPrice(state, action) {
      state.totalPrice = totalPrice(action.payload);
    },
    usedPromoCode(state, action) {
      const { values, total } = action.payload;
      const { promoCode } = values;
      state.promoCode = promoCode;
      state.discount = totalPriceDiscount(total);
    },
    notUsedPromoCode(state) {
      state.promoCode = null;
      state.discount = 0;
    },
    submitForm(state, action) {
      state.isSubmitForm = action.payload;
    },
  },

  extraReducers: (builder) => builder,
});

export const {
  addProduct,
  removeProduct,
  changeProductAmount,
  addTotalPrice,
  usedPromoCode,
  notUsedPromoCode,
  submitForm,
} = cartSlice.actions;

const cartPersistConfig = {
  key: 'cart',
  storage,
  // blacklist: ['products'],
  whitelist: ['products'],
};

export const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartSlice.reducer
);
