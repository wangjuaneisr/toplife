import {createApi} from 'Public/util'

const APIS = {
    //查询购物车所有商品
    CART_ALL: '/cart/1/do',
    //查询购物车用户推荐-最近浏览(浏览历史)
    CART_FOOTMARK:'/footmark',
    //查询所有商品信息
    SKU_DETAIL_ALL: '/sku/app/all',
    //商品编辑状态时
    //修改商品属性  修改规格后确定时
    CHANGE_ATTR:'/cart/8/do',
    // 修改购物车商品数量  数量加减操作完成后调用
    CART_CHANGE_NUM:'/cart/3/do',
    //删除购物车SKU商品  确认删除商品时调用
    DEL_CART:'/cart/4/do',
    //获取购物车商品数量 结算时
    CART_NUM:'/cart/9/do',
    //加车
    //ADD_CART:'/cart/2/do',
    //选中商品   勾选商品时
    CHECK_CART:'/cart/5/do',
    //反选商品  取消勾选时
    INVERT_CHECK_CART:'/cart/6/do',
    //显示购物车优惠券
    GET_COUPON_LIST:'/cart/coupon_list',
    // 批量库存
    STOCK_INFO: '/stock/gets',
    // 24小时限购批量查询
    BATCH_CHECK: '/buyrule/batchCheck',
    // 选中满赠赠品
    CHECK_GIFT:'/cart/12/do',
    // 反选满赠赠品
    INVERT_CHECK_GIFT:'/cart/13/do',
    // 修改促销类型
    CHANGE_PROMO: '/cart/14/do',
};

export default createApi(APIS);
