
<template>
  <div class="index">
    <div class="header">
      <div class="header_top">
        <div class="header_left header_top1">
          温馨提示：<span>勤消毒，勤洗手</span>
        </div>
        <div class="header_cen header_top1">
          <router-link to="/login">登录</router-link>
          &nbsp;&nbsp;&nbsp;
          <router-link to="/register">注册</router-link>
        </div>
        <div class="header_right header_top1">
          <DropdownMenu :datas="param" @click="trigger" className="custom-dropdown-11">
            <span class="spyu">预约检测</span>
          </DropdownMenu>
        </div>
      </div>
    </div>
    <div class="titpic">
      <div class="top_left">
        <p>新型冠状病毒</p>
        <p>疫情实时大数据报告</p>
        <p>共{{ gkrs }}人次已经观看</p>
      </div>
      <div class="content">
        <div class="top">
          <div class="top_1">
            <label :class="{ xz: xz == 'gn' }"
              ><input type="radio" v-model="xz" value="gn" />国内疫情</label
            >
            <label :class="{ xz: xz == 'gw' }"
              ><input type="radio" v-model="xz" value="gw" />国外疫情</label
            >
          </div>
          <div v-show="xz == 'gn'" class="ty">
            <div class="gn_1">
              <div class="gn_top">国内疫情</div>
              <div class="gn_bottom">
                <span>数据更新至{{ time }}</span>
              </div>
            </div>
            <div>
              <Row>
                <Cell v-for="(n, i) in sj" :key="i" width="8">
                  <div class="gn_number bg-gray2-color">
                    <span>{{ n.name }}</span>
                    <div class="number">{{ n.lj }}</div>
                    <div class="day">昨日+{{ n.xz }}</div>
                  </div>
                </Cell>
              </Row>
            </div>
          </div>
          <div v-show="xz == 'gw'" class="ty">
            <div class="gn_1">
              <div class="gn_top">国外疫情</div>
              <div class="gn_bottom">
                <span>数据更新至{{ time }}</span>
              </div>
            </div>
            <div>
              <Row>
                <Cell v-for="n in 1" :key="n" width="6">
                  <div class="gn_number bg-gray2-color">
                    <span>现有重症</span>
                    <div class="number">1111</div>
                    <div class="day">昨日+12</div>
                  </div>
                </Cell>
              </Row>
            </div>
          </div>
        </div>
        <china v-if="zt" :yqsj="yqsj"></china>
        <shujubiao></shujubiao>
      </div>
    </div>

    <my-table v-if="zt" :yqsj="yqsj"></my-table>
        <footers></footers>
  </div>
</template>
<style>
body {
  background: #10aeb5;
}
.index{
  padding-bottom: 50px;
}
.index .header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  background: #f5f6f7;
}
.index .header_top {
  width: 780px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  color: #999;
  justify-content: space-between;
  /* background:pink; */
}
.index .header_top {
  height: 50px;
  line-height: 50px;
}
.index .header_cen {
  margin-left: 220px;
}
.index .header_cen > a {
  color: #999;
}
.index .header_cen > a:hover {
  color: #10aeb5 !important;
}
.index .header_right .custom-dropdown-11 {
  color: #999;
}
.index .header_right .custom-dropdown-11:hover {
  color: #10aeb5;
}
.h-dropdown-inner .h-dropdowncustom-group {
  background: #10aeb5;
  color: #fff;
  border-radius: 10px;
}
.h-dropdownmenu-item:hover {
  background: #fff;
  color: #10aeb5;
}
.index .titpic {
  width: 780px;
  /* height: 190px; */
  margin: 0 auto;
}
.index .titpic p:first-child {
  color: #c4faff;
  font-family: "宋体";
  letter-spacing: 3px;
  font-size: 0.875rem;
  margin-top: 67px;
}
.index .titpic p:nth-child(2) {
  margin-top: 10px;
  font-weight: bold;
  font-size: 2rem;
  height: 2rem;
  line-height: 2rem;
  color: #fff;
  margin-bottom: 15px;
}
.index .top_left p:nth-child(3) {
  display: inline-block;
  margin-top: 15px;
  margin-left: 7px;
  height: 1.4375rem;
  line-height: 1.4375rem;
  background-color: rgba(9, 148, 167, 0.5);
  border-radius: 0.71875rem;
  font-size: 0.6875rem;
  color: #fff;
}
.index .content {
  background: #fff;
  width: 780px;
  margin: 0 auto;
  /* height: 1600px; */
  border-radius: 0.625rem;
  margin-top: 30px;
}
.index .top .top_1 {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #f5f6f7;
}
.index .top .top_1 input[type="radio"] {
  display: none;
}
.index .top .top_1 label {
  font-size: 1rem;
  font-weight: bold;
  width: 50%;
  text-align: center;
}
.index .top .top_1 div .top .top_1 a {
  color: #000;
  font-weight: 700;
}
.index .top .top_1 a {
  color: #10aeb5;
  border-bottom: 3px solid #10aeb5;
}
.index .top {
  line-height: 30px;
}
.index .xz {
  color: #10aeb5;
  border-bottom: 3px solid #10aeb5;
}
.index .gn_top {
  font-size: 1rem;
  height: 1rem;
  line-height: 1rem;
  font-weight: 700;
  vertical-align: middle;
  margin: 40px 10px 5px;
}
.index .gn_bottom {
  font-size: 0.8125rem;
  height: 0.8125rem;
  line-height: 0.8125rem;
  margin: 15px 10px 30px;
  color: #999;
}
.index .h-row > div > div {
  margin-right: 8px;
  color: #000;
  border-radius: 3px;
  text-align: center;
  margin-bottom: 10px;
}
.index .gn_number > span {
  font-size: 15px;
}
.index .gn_number .number {
  font-size: 18px;
  color: #f00;
}
.index .gn_number .day {
  font-size: 10px;
  color: rgb(153, 153, 153);
}
.index .spyu{
  cursor: pointer;
}
.index .titpic p:nth-child(2){
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  background-image:-webkit-linear-gradient(top,#fff,#afdade,rgba(0,0,255,0));
  -webkit-background-clip:text;
  background-clip: text;
  -webkit-text-fill-color:transparent;
}
</style>
<script>
import china from "../components/china";
import Footers from "../components/footer"
import myTable from "../components/my-Table";
import shujubiao from "../components/shujubiao";
export default {
  data() {
    return {
      param: [{title:"立即预约",key:'test1'},{title:"我的预约",key:'test2'},{title:"相关问题",key:'test3'},],
      gkrs: 0,
      activeName: "first",
      xz: "gn",
      time: new Date().toLocaleString(),
      yqsj: [],
      sj: [],
      zt: false,
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    trigger(a){
        if(a=='test1'){
          this.$router.push('/yuyue')
        }else if(a=='test2'){
          this.$router.push('/')
        }else if(a=='test3'){
          this.$router.push('/question')
        }
    }
  },
  mounted() {
    // console.log(this.axios)
    this.axios
      .get("http://api.tianapi.com/txapi/ncovcity/index", {
        params: {
          key: "273e2e09196aa8f14ce544f8fa6c1fd6",
        },
      })
      .then((r) => {
        this.yqsj = r.data.newslist;
        this.zt = true;
      });
    this.axios
      .get("http://api.tianapi.com/txapi/ncov/index", {
        params: {
          key: "273e2e09196aa8f14ce544f8fa6c1fd6",
        },
      })
      .then((r) => {
        class yy {
          constructor(name, lj, xz) {
            this.name = name;
            this.lj = lj;
            this.xz = xz;
          }
        }
        this.sj.push(
          new yy(
            "现存确诊人数",
            r.data.newslist[0].desc.currentConfirmedCount,
            r.data.newslist[0].desc.currentConfirmedIncr
          )
        );
        this.sj.push(
          new yy(
            "累计确诊人数",
            r.data.newslist[0].desc.confirmedCount,
            r.data.newslist[0].desc.confirmedIncr
          )
        );
        this.sj.push(
          new yy(
            "累计境外输入人数",
            r.data.newslist[0].desc.suspectedCount,
            r.data.newslist[0].desc.suspectedIncr
          )
        );
        this.sj.push(
          new yy(
            "累计治愈人数",
            r.data.newslist[0].desc.curedCount,
            r.data.newslist[0].desc.curedIncr
          )
        );
        this.sj.push(
          new yy(
            "累计死亡人数",
            r.data.newslist[0].desc.deadCount,
            r.data.newslist[0].desc.deadIncr
          )
        );
        this.sj.push(
          new yy(
            "现存无症状人数",
            r.data.newslist[0].desc.seriousCount,
            r.data.newslist[0].desc.seriousIncr
          )
        );
        console.log(this.sj);
      });
  },
  components: { china, shujubiao, myTable, Footers },
};
</script>
