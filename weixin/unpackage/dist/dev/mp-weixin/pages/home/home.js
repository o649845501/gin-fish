"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      swiperList: [
        { image_url: "https://dummyimage.com/600x400/000/fff" },
        { image_url: "https://dummyimage.com/600x400/111/fff" },
        { image_url: "https://dummyimage.com/600x400/222/fff" }
      ],
      goodsList: [
        { name: "商品1", price: "50", image_url: "https://dummyimage.com/200x200/000/fff" },
        { name: "商品2", price: "80", image_url: "https://dummyimage.com/200x200/111/fff" },
        { name: "商品3", price: "120", image_url: "https://dummyimage.com/200x200/222/fff" },
        { name: "商品4", price: "150", image_url: "https://dummyimage.com/200x200/333/fff" },
        { name: "商品5", price: "200", image_url: "https://dummyimage.com/200x200/444/fff" },
        { name: "商品6", price: "250", image_url: "https://dummyimage.com/200x200/555/fff" }
      ]
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swiperList, (item, index, i0) => {
      return {
        a: item.image_url,
        b: index
      };
    }),
    b: common_vendor.f($data.goodsList, (item, index, i0) => {
      return {
        a: item.image_url,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.price),
        d: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Goproject/fish/weixin/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
