
var activities = [
  { name: "写单元测试", good: "写单元测试将减少出错", bad: "写单元测试会降低你的开发效率" },
  { name: "洗澡", good: "你几天没洗澡了？", bad: "会把设计方面的灵感洗掉", weekend: true },
  { name: "锻炼一下身体", good: "强身健体", bad: "能量没消耗多少，吃得却更多", weekend: true },
  { name: "抽烟", good: "抽烟有利于提神，增加思维敏捷", bad: "除非你活够了，死得早点没关系", weekend: true },
  { name: "白天上线", good: "今天白天上线是安全的", bad: "可能导致灾难性后果" },
  { name: "重构", good: "代码质量得到提高", bad: "你很有可能会陷入泥潭" },
  { name: "使用%t", good: "你看起来更有品位", bad: "别人会觉得你在装逼" },
  { name: "跳槽", good: "该放手时就放手", bad: "鉴于当前，你的下一份工作未必比现在强" },
  { name: "招人", good: "你面前这位有成为牛人的潜质", bad: "这人会写程序吗？" },
  { name: "面试", good: "面试官今天心情很好", bad: "面试官不爽，会拿你出气" },
  { name: "提交辞职申请", good: "巴不得你赶快滚蛋", bad: "鉴于当前，你的下一份工作未必比现在强" },
  { name: "申请加薪", good: "老板今天心情很好", bad: "公司正在考虑裁员" },
  { name: "晚上加班", good: "晚上是程序员精神最好的时候", bad: "你白天已经筋疲力尽了", weekend: true },
  { name: "在妹子面前吹牛", good: "改善你矮穷挫的形象", bad: "会被识破", weekend: true },
  { name: "撸管", good: "避免缓冲区溢出", bad: "强撸灰飞烟灭", weekend: true },
  { name: "逛B站", good: "重拾对生活的信心", bad: "你会心神不宁", weekend: true },
  { name: "逛淘宝", good: "购物有助于心情愉悦", bad: "没钱了还买" },
  { name: "写超过%l行的方法", good: "你的代码组织的很好，长一点没关系", bad: "你的代码将混乱不堪，你自己都看不懂" },
  { name: "提交代码", good: "遇到冲突的几率是最低的", bad: "你遇到的一大堆冲突会让你觉得烦" },
  { name: "代码复审", good: "发现重要问题的几率大大增加", bad: "你什么问题都发现不了，白白浪费时间" },
  { name: "开会", good: "写代码之余放松一下打个盹，有益健康", bad: "小心被扣屎盆子背黑锅" },
  { name: "打DOTA", good: "你将有如神助", bad: "你会被虐的很惨", weekend: true },
  { name: "晚上上线", good: "晚上是程序员精神最好的时候", bad: "你白天已经筋疲力尽了" },
  { name: "修复BUG", good: "你今天对BUG的嗅觉大大提高", bad: "新产生的BUG将比修复的更多" },
  { name: "设计评审", good: "设计评审会议将变成头脑风暴", bad: "人人筋疲力尽，评审就这么过了" },
  { name: "需求评审", good: "", bad: "" },
  { name: "上微博", good: "今天发生的事不能错过", bad: "今天的微博充满负能量", weekend: true },
  { name: "上AB站", good: "还需要理由吗？", bad: "满屏兄贵亮瞎你的眼", weekend: true },
  { name: "玩FlappyBird", good: "今天破纪录的几率很高", bad: "除非你想玩到把手机砸了", weekend: true }
];
var tools = ["Eclipse写程序", "MSOffice写文档", "记事本写程序", "Windows8", "Linux", "MacOS", "IE", "Android设备", "iOS设备"];

var varNames = ["jieguo", "huodong", "pay", "expire", "zhangdan", "every", "free", "i1", "a", "virtual", "ad", "spider", "mima", "pass", "ui"];
var drinks = ["水", "茶", "红茶", "绿茶", "咖啡", "奶茶", "可乐", "鲜奶", "豆奶", "果汁", "果味汽水", "苏打水", "运动饮料", "酸奶", "酒"];
var directions = ["北方", "东北方", "东方", "东南方", "南方", "西南方", "西方", "西北方"];
module.exports = {
  activities: activities,
  tools: tools,
  varNames: varNames,
  drinks: drinks,
  directions: directions
}