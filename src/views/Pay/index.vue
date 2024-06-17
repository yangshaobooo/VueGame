<script setup>
import { ref,onMounted  } from 'vue';
// 设置选项
const options = ref([
    { label: '年度会员', value: 'year', price: '29.9' },
    { label: '一个月会员', value: 'month', price: '9.9' },
    { label: '三个月会员', value: 'season', price: '19.9' },
    { label: '永久会员', value: 'lifetime', price: '69.9' },
]);

const selectedOption = ref('');
const selectPrice = ref('');
const selectedButton = ref('');
// btn选择响应函数
const selectButton = (button) => {
    selectedButton.value = button;
};
// 套餐选择响应函数
const selectOption = (value, price) => {
    selectedOption.value = value;
    selectPrice.value = price;
};
// 初始化函数
onMounted(() => {
  selectedButton.value = 'alipay';
  selectedOption.value = 'year';
  selectPrice.value = '29.9'
});
</script>


<template>
    <div class="game-pay-page">
        <!-- 套餐选择区域 -->
        <div class="select-state">
            <div class="title">会员套餐选择 :</div>
            <div class="pay-select">
                <!-- 选择界面 -->
                <div v-for="option in options" :key="option.value"
                    :class="{ 'selected': selectedOption === option.value }"
                    @click="selectOption(option.value, option.price)" class="option">
                    {{ option.label }}
                    <div class="price">¥{{ option.price }}</div>
                </div>
                <!-- 显示付款金额 -->
                <div class="amount">
                    <span>扫码支付：</span>
                    <span>¥{{ selectPrice }}</span>
                </div>
                <!-- 显示付款二维码 -->
                <img src="@/assets/images/qrcode.jpg" alt="">
                <!-- 付款方式 -->
                <div class="pay-type">
                    <div class="btn alipay" :class="{ selected: selectedButton === 'alipay' }"
                        @click="selectButton('alipay')"></div>
                    <div class="btn wx" :class="{ selected: selectedButton === 'wx' }" @click="selectButton('wx')">
                    </div>
                </div>
            </div>
        </div>
        <!-- 会员权益 -->
        <div class="power">
            <div class="title">会员权益 ：</div>
            <div><p>1、所有会员都享有免费下载所有游戏。</p></div>
            <div><p>2、会员期间持续更新游戏内容。</p></div>
            <div><p>3、会员可以留言自己想要的游戏，我们尽全力为您呈上。</p></div>
            <div><p>4、会员具有无限次下载次数。</p></div>
            <div><p>5、承诺绝无二次收费</p></div>
        </div>
    </div>
    
</template>

<style scoped lang="scss">
.game-pay-page {
    width: 1240px;
    margin: 0 auto;
    position: relative;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}
.power {
    background: #fff;
    display: flex;
    flex-direction: column;
    height: 200px;
    padding: 0 20px;
    margin-top: 20px;
    .title {
        font-size: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
        color: #c10e0e;
    }
}

.select-state {
    background: #fff;
    display: flex;
    flex-direction: column;
    height: 180px;
    padding: 0 20px;

    .title {
        margin-top: 10px;
        margin-bottom: 10px;
        color: #999;
    }
    p{
        font-size: 12px;
    }
}

.pay-select {
    background: #fff;
    display: flex;
    align-items: center;

    .option {
        height: 80px;
        width: 110px;
        margin-right: 20px;
        border-radius: 10px;
        padding: 10px;
        border: 2px solid #ccc;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .price {
        margin-top: 8px;
        font-size: 16px;
        font-style: italic;
        color: red
    }

    .option.selected {
        background-color: rgb(145, 194, 148);
        color: rgb(255, 255, 255);
    }

    .amount {
        margin-right: 10px;
        span {
            &:first-child {
                font-size: 16px;
                color: #999;
            }
            &:last-child {
                color: $priceColor;
                font-size: 20px;
            }
        }
    }

    img {
        height: 120px;
    }
}

.pay-type {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    .btn {
        width: 120px;
        height: 40px;
        border: 3px solid #e4e4e4;
        cursor: pointer;
        margin-bottom: 10px;
    }

    .btn.selected {
        border-color: rgb(15, 228, 65);
    }
}

.alipay {
    background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b6b02396368c9314528c0bbd85a2e06.png) no-repeat center / contain;
}

.wx {
    background: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c66f98cff8649bd5ba722c2e8067c6ca.jpg) no-repeat center / contain;
}

</style>