/** 
 * 自定义组件参考文档
 * https://cn.vuejs.org/v2/guide/components-registration.html
*/
import Vue from 'vue'
import Test from './test/';

//图表组件
import Annular from './echart/annular';//环形图
import Picbar from './echart/picbar';//象形图
import Bsankey from './echart/bsankey';//桑基图
import Cumulate from './echart/cumulate';//堆叠柱状图
import Gradual from './echart/gradual';//渐变柱状图
import Ploygonal from './echart/ploygonal';//堆叠柱折图
import Gploygonal from './echart/gploygonal';//渐变柱折图
import Barline from './echart/barline';//柱折分离图1
import Linebar from './echart/linebar';//柱折分离图2
import Bline from './echart/bline';//折线图

//其他组件
import Sticky from './basic/sticky';//便签块
import Ringnotes from './basic/ringnotes';//空便签
import Steps from './basic/steps';//步骤条
import Btabs from './basic/btabs';//选项卡
import Bprogress from './basic/bprogress';//进度条
import Iconblock from './basic/iconblock';//图标块
import Roundblock from './basic/roundblock';//圆点块
import Roundtext from './basic/roundtext';//动态圆点块
import Times from './basic/times';//时间选择器
import Singletimes from './basic/singletimes';//单点时间选择器
import Search from './basic/search';//搜索框
import Ztable from './basic/ztable';//复杂表格
import Bgmodel from './basic/bgmodel';//背景块
import Ztext from './basic/ztext';//组合文本
import Datatext from './basic/datatext';//得值文本
import Column from './basic/column';//表格表头
import Bcolumn from './basic/bcolumn';//表格表头
import Bview from './basic/bview';//bview
import Newtable from './basic/newtable';//新表格
import Btext from './basic/btext';//文本框
import Bshow from './basic/bshow';//切换卡

const list = [
  Test
]

//自定义图表类组件
Vue.component(`avue-echart-annular`, Annular);
Vue.component(`avue-echart-picbar`, Picbar);
Vue.component(`avue-echart-bsankey`, Bsankey);
Vue.component(`avue-echart-cumulate`, Cumulate);
Vue.component(`avue-echart-gradual`, Gradual);
Vue.component(`avue-echart-ploygonal`, Ploygonal);
Vue.component(`avue-echart-gploygonal`, Gploygonal);
Vue.component(`avue-echart-barline`, Barline);
Vue.component(`avue-echart-linebar`, Linebar);
Vue.component(`avue-echart-bline`, Bline);

//自定义基础类组件
Vue.component(`avue-echart-sticky`, Sticky);
Vue.component(`avue-echart-ringnotes`, Ringnotes);
Vue.component(`avue-echart-steps`, Steps);
Vue.component(`avue-echart-btabs`, Btabs);
Vue.component(`avue-echart-bprogress`, Bprogress);
Vue.component(`avue-echart-iconblock`, Iconblock);
Vue.component(`avue-echart-roundblock`, Roundblock);
Vue.component(`avue-echart-roundtext`, Roundtext);
Vue.component(`avue-echart-times`, Times);
Vue.component(`avue-echart-singletimes`, Singletimes);
Vue.component(`avue-echart-search`, Search);
Vue.component(`avue-echart-ztable`, Ztable);
Vue.component(`avue-echart-bgmodel`, Bgmodel);
Vue.component(`avue-echart-ztext`, Ztext);
Vue.component(`avue-echart-datatext`, Datatext);
Vue.component(`avue-echart-column`, Column);
Vue.component(`avue-echart-bcolumn`, Bcolumn);
Vue.component(`avue-echart-bview`, Bview);
Vue.component(`avue-echart-newtable`, Newtable);
Vue.component(`avue-echart-btext`, Btext);
Vue.component(`avue-echart-bshow`, Bshow);

//循环注册组件
list.forEach(ele => {
  Vue.component(`avue-echart-${ele.name}`, ele)
})