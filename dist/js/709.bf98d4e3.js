"use strict";(self["webpackChunkprojetwebmagnus"]=self["webpackChunkprojetwebmagnus"]||[]).push([[709],{9709:function(r,e,n){n.r(e),n.d(e,{default:function(){return p}});var s=n(6252),u=n(3577);const t={class:"container"},l={class:"jumbotron"},o=(0,s.Uk)(" Profile "),c=(0,s._)("strong",null,"Token:",-1),a=(0,s._)("strong",null,"Id:",-1),i=(0,s._)("strong",null,"Email:",-1),g=(0,s._)("strong",null,"Authorities:",-1);function k(r,e,n,k,w,U){return(0,s.wg)(),(0,s.iD)("div",t,[(0,s._)("header",l,[(0,s._)("h3",null,[(0,s._)("strong",null,(0,u.zw)(U.currentUser.username),1),o])]),(0,s._)("p",null,[c,(0,s.Uk)(" "+(0,u.zw)(U.currentUser.accessToken.substring(0,20))+" ... "+(0,u.zw)(U.currentUser.accessToken.substr(U.currentUser.accessToken.length-20)),1)]),(0,s._)("p",null,[a,(0,s.Uk)(" "+(0,u.zw)(U.currentUser.id),1)]),(0,s._)("p",null,[i,(0,s.Uk)(" "+(0,u.zw)(U.currentUser.email),1)]),g,(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(U.currentUser.roles,(r=>((0,s.wg)(),(0,s.iD)("li",{key:r},(0,u.zw)(r),1)))),128))])])}var w={name:"global-profile",computed:{currentUser(){return this.$store.state.auth.user}},mounted(){this.currentUser||this.$router.push("/login")}},U=n(3744);const h=(0,U.Z)(w,[["render",k]]);var p=h}}]);
//# sourceMappingURL=709.bf98d4e3.js.map