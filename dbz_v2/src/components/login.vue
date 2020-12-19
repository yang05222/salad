<template>
    <div>
        <div id="demo">
            <h1>抗击疫情，人人有责</h1>
        </div>
         <div id="container">
      <!-- <img src="../assets/timg.jpg" alt=""> -->
            <div id="d1">
                <h1>用户登录</h1>
                <div>
                    <p><span style="width:100px; display: inline-block; text-align:right;">用户名：</span><input type="text" v-model="username"  placeholder="请输入用户名" @blur.capture="checkUsername" state="usernameState"></p> 
                </div>
                <div>
                    <p><span style="width:100px; display: inline-block; text-align:right;">密码：</span><input type="password" v-model="password"  placeholder="请输入密码" @blur.capture="checkPassword" state="passwordState"></p>
                </div>
                <h-button class="h-btn h-btn-primary h-btn-l" @click="login">登录</h-button>
                <h-button class="h-btn h-btn-primary h-btn-l" @click="toback">取消</h-button>
            </div>
    </div>
    </div>
  
</template>
<style>
#demo{
    margin:30px 50px;
    margin-bottom:0px;
    color:#fff;
}
#container{
    color:#fff;
    margin:0px 50px;
    margin-bottom:0px;
    width:1430px;
    height:600px;
    text-align: right;
    background: url(../assets/timg.jpg) no-repeat 50%;
    position: relative;
}
p{
    margin-top:30px;
}
#d1{
    width:300px;
    height:400px;
    padding-top:60px;
    text-align:center;
    background: rgba(65, 181, 226, 0.4);
    margin-left:750px;
    margin-top:160px;
    position: absolute;
    font-size:18px;
}
</style>
<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods:{
      toback(){
        this.$router.push("/")
      },
      checkUsername(){
          let usernameRegExp = /^[0-9A-Za-z]{6,12}$/;
          if(usernameRegExp.test(this.username)){
              this.usernameState = "success";
              return true;
          }else{
             this.$Message({
                text: `用户名信息错误`
            });
             this.usernameState = "error";
             return false;
          }
      },
      checkPassword() {
      let passwordRegExp = /^[0-9A-Za-z]{8,16}$/;
      if (passwordRegExp.test(this.password)) {
        this.passwordState = "success";
        return true;
      } else {
        this.$Message({
                text: `密码错误`
            });
        this.passwordState = "error";
        return false;
      }
    },
    login() {
      //调用之前的检测用户名、密码及两次密码是否一致函数
      //需要注意的是:此时会引发短路求值的现象
      //A.在逻辑或运算时,第一个表达式的结果为true会造成短路
      //B.在逻辑与运算时,第一个表达式的结果为false会造成短路
      if(this.checkUsername() && this.checkPassword()){
        //此时需要将用户名、密码等信息的提交到WEB服务器
        this.axios.post('/register','username=' + this.username  + '&password='  + this.password).then(res=>{
            //注册失败
            if(res.data.code == 201){
              // 显示模态对话框(类似于window.alert()方法)
                this.$Message({
                    text: `该用户已存在`
                });
            }
            //注册成功
            if(res.data.code == 200){
              this.$router.push('/');
            }
        });
      }
    },
  }
};
</script>