import { defineComponent } from "vue";
import Sku from "./components/sku/Sku";

export default defineComponent({
  name: "App",
  data() {
    return {
      sku: {
        price: "1.00",
        stock_num: 227,
        none_sku: false,
        hide_stock: false,
        collection_id: 2261,
        tree: [
          {
            k: "颜色",
            k_s: "s1",
            k_id: "1",
            v: [
              {
                id: "1",
                name: "粉色",
                imgUrl: "https://b.yzcdn.cn/vant/sku/shoes-1.png",
              },
              {
                id: "2",
                name: "黄色",
                imgUrl: "https://b.yzcdn.cn/vant/sku/shoes-2.png",
              },
              {
                id: "3",
                name: "蓝色",
                imgUrl: "https://b.yzcdn.cn/vant/sku/shoes-3.png",
              },
            ],
          },
          {
            k: "尺寸",
            k_s: "s2",
            k_id: "2",
            v: [
              {
                id: "1",
                name: "大",
              },
              {
                id: "2",
                name: "小",
              },
            ],
          },
        ],
        list: [
          {
            id: 2259,
            s1: "2",
            s2: "1",
            price: 100,
            discount: 100,
            stock_num: 110,
          },
          {
            id: 2260,
            s1: "3",
            s2: "1",
            price: 100,
            discount: 100,
            stock_num: 99,
          },
          {
            id: 2257,
            s1: "1",
            s2: "1",
            price: 100,
            discount: 100,
            stock_num: 111,
          },
          {
            id: 2258,
            s1: "1",
            s2: "2",
            price: 100,
            discount: 100,
            stock_num: 6,
          },
        ],
        messages: [
          {
            datetime: "0",
            disable: false,
            multiple: "0",
            name: "留言1",
            type: "text",
            required: "1",
          },
          {
            datetime: "0",
            disable: false,
            multiple: "0",
            name: "留言2",
            type: "id_no",
            required: "0",
          },
          {
            datetime: "0",
            disable: false,
            multiple: "0",
            name: "留言3",
            type: "image",
            required: "0",
          },
          {
            datetime: "0",
            disable: false,
            multiple: "1",
            name: "留言4",
            type: "text",
            required: "0",
          },
          {
            datetime: "0",
            disable: false,
            name: "数字",
            multiple: "0",
            type: "tel",
            required: "0",
          },
          {
            datetime: "0",
            disable: false,
            name: "邮件",
            multiple: "0",
            type: "email",
            required: "0",
          },
          {
            datetime: "0",
            disable: false,
            name: "日期",
            multiple: "0",
            type: "date",
            required: "0",
          },
          {
            datetime: "0",
            disable: false,
            name: "时间",
            multiple: "0",
            type: "time",
            required: "0",
          },
        ],
      },
      selectedSku: {},
    };
  },
  render() {
    const { sku, selectedSku } = this;
    return (
      <>
        <Sku>123</Sku>
      </>
    );
  },
});
