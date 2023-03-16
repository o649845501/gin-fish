<template>
  <view class="container">
    <swiper class="swiper" indicator-dots="true" autoplay="true">
      <swiper-item class="swiper-item" v-for="(item, index) in swiperList" :key="index">
        <image class="swiper-image" :src="item.image_url" mode="aspectFit"></image>
      </swiper-item>
    </swiper>
    <view class="goods">
      <view class="title">热门商品</view>
      <view class="goods-list">
        <view class="goods-item" v-for="(item, index) in goodsList" :key="index">
          <image class="goods-image" :src="item.image_url"></image>
          <view class="goods-name">{{ item.name }}</view>
          <view class="goods-price">￥{{ item.price }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      swiperList: [
        { image_url: 'https://dummyimage.com/600x400/000/fff' },
        { image_url: 'https://dummyimage.com/600x400/111/fff' },
        { image_url: 'https://dummyimage.com/600x400/222/fff' },
      ],
      goodsList: [
        { name: '商品1', price: '50', image_url: 'https://dummyimage.com/200x200/000/fff' },
        { name: '商品2', price: '80', image_url: 'https://dummyimage.com/200x200/111/fff' },
        { name: '商品3', price: '120', image_url: 'https://dummyimage.com/200x200/222/fff' },
        { name: '商品4', price: '150', image_url: 'https://dummyimage.com/200x200/333/fff' },
        { name: '商品5', price: '200', image_url: 'https://dummyimage.com/200x200/444/fff' },
        { name: '商品6', price: '250', image_url: 'https://dummyimage.com/200x200/555/fff' },
      ]
    }
  },
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

.swiper {
  width: 100%;
  height: 200px;
}

.swiper-item {
  height: 200px;
}

.swiper-image {
  width: 100%;
  height: 100%;
}

.goods {
  width: 100%;
  padding: 20px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 10px;
}

.goods-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
}

.goods-item {
  width: calc(50% - 10px);
  margin-right: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}
.goods-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.goods-name {
  font-size: 16px;
  margin: 10px;
}

.goods-price {
  font-size: 18px;
  font-weight: bold;
  margin: 10px;
  color: #f00;
}
</style>
