
var state={
  route:"home",mode:"teams",selectedRecruit:1,selectedCandidate:11,tab:"all",
  loggedIn:true,verified:true,profileComplete:true,total:20,committed:8,reserved:0,joined:false,
  blocked:{},
  ownStatus:"active",
  relationships:[
    {id:201,type:"application",title:"挑战杯 · 数据分析岗",party:"星火队",role:"数据分析",status:"communication",time:"今天 00:42",contact:true},
    {id:202,type:"invitation",title:"正大杯 · 市场调研岗",party:"许辰",role:"市场调研",status:"pending",time:"2 小时前",contact:false},
    {id:203,type:"application",title:"互联网+ · 前端开发",party:"陈屿",role:"前端开发",status:"ended",time:"昨天",reason:"对方已暂停并结束本次请求"}
  ]
};

var recruits=[
  {id:1,comp:"挑战杯 · 大挑",title:"寻找数据分析 / 商业分析队友",school:"广东工业大学",campus:"龙洞校区",leader:"顾闻",status:"active",target:"冲省奖",period:"10/06 - 12/20",deadline:"10/18 23:59",team:"现有 3 人",progress:"已完成初步选题与访谈框架",collab:"每周至少同步 1 次；关键节点无法按时完成时提前说明。",hard:false,reasons:["有相关调研经历","时间满足要求"],role:{name:"数据分析",capacity:2,formal:1,reserved:0,hours:8,task:"问卷数据清洗、统计分析、可视化与需求结论提炼",skills:["Excel","数据分析","可视化"]}},
  {id:2,comp:"正大杯",title:"招募市场调研与访谈同学",school:"广东工业大学",campus:"大学城校区",leader:"许辰",status:"active",target:"完整参赛并争取省赛",period:"10/10 - 12/10",deadline:"10/20 20:00",team:"现有 4 人",progress:"正在设计正式问卷",collab:"线上协作为主，每周一次集中同步。",hard:false,reasons:["有访谈经验","目标一致"],role:{name:"市场调研",capacity:1,formal:0,reserved:1,hours:6,task:"访谈提纲、用户访谈、问卷设计与洞察整理",skills:["用户访谈","问卷设计","报告写作"]}},
  {id:3,comp:"互联网+",title:"寻找前端开发同学",school:"广东工业大学",campus:"龙洞校区",leader:"陈屿",status:"paused",target:"冲校赛金奖",period:"10/01 - 11/25",deadline:"10/22 18:00",team:"现有 3 人",progress:"产品方向已确定",collab:"每两天线上同步开发进度。",hard:true,reasons:["技能高度匹配"],role:{name:"前端开发",capacity:2,formal:1,reserved:0,hours:10,task:"实现产品 Demo、核心交互和路演展示页面",skills:["JavaScript","React","HTML/CSS"]}},
  {id:4,comp:"数学建模竞赛",title:"建模队补一名编程队友",school:"广东工业大学",campus:"龙洞校区",leader:"林深",status:"full",target:"稳定完赛",period:"11/01 - 12/01",deadline:"10/12 22:00",team:"现有 3 人",progress:"已完成组队",collab:"赛前每周训练，比赛期间集中协作。",hard:false,reasons:["跨专业互补"],role:{name:"编程 / 建模",capacity:1,formal:1,reserved:0,hours:12,task:"Python 求解、模型验证、结果整理",skills:["Python","数学建模"]}}
];

var candidates=[
  {id:11,name:"林清禾",campus:"大学城校区",grade:"大二",major:"数据科学与大数据技术",roles:["数据分析","数学建模"],skills:["Python","SPSS","数据可视化"],hours:10,target:"冲省奖",exp:"正大杯校赛二等奖 · 负责数据清洗、统计检验和结果可视化",reasons:["任务高度匹配","时间满足要求"],risk:""},
  {id:12,name:"陈予安",campus:"大学城校区",grade:"大二",major:"计算机科学与技术",roles:["前端开发","数据处理"],skills:["React","JavaScript","Python"],hours:8,target:"完整参赛",exp:"互联网+校赛项目 · 负责前端页面与数据接口",reasons:["有可验证项目产出","技能匹配"],risk:"当前仅能投入 8h / 周，低于示例前端岗位 10h / 周"},
  {id:13,name:"周言",campus:"龙洞校区",grade:"大二",major:"工商管理",roles:["商业分析","用户调研"],skills:["访谈","Excel","报告写作"],hours:6,target:"冲奖",exp:"行业经济分析大赛 · 负责访谈、资料分析与报告",reasons:["同校区","有用户调研经历"],risk:""},
  {id:14,name:"宋禾",campus:"龙洞校区",grade:"大一",major:"工业设计",roles:["视觉设计"],skills:["Figma","PPT","PS"],hours:5,target:"积累经验",exp:"社团招新视觉 · 负责海报与展示物料设计",reasons:["具体任务相关"],risk:"每周可投入 5h，低于视觉岗位 6h / 周"}
];

function e(s){return String(s==null?"":s).replace(/[&<>"']/g,function(m){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]})}
function remaining(){return state.total-state.committed-state.reserved}
function byId(id){return document.getElementById(id)}
function toast(msg){var t=byId("toast");t.textContent=msg;t.classList.add("show");setTimeout(function(){t.classList.remove("show")},1800)}
function modal(html){byId("modalRoot").innerHTML='<div class="modalBg" id="modalBg"><div class="modal">'+html+'</div></div>';byId("modalBg").onclick=function(x){if(x.target.id==="modalBg")closeModal()}}
function closeModal(){byId("modalRoot").innerHTML=""}
function navIcon(r){return {home:"⌂",teams:"◇",people:"⌕",requests:"◫",team:"◎",profile:"○"}[r]||"•"}
function title(){return {home:"首页",teams:"找队伍",people:"找队友",detail:"招募详情",candidate:"候选人详情",requests:"申请 / 邀请",team:"我的队伍",profile:"个人档案",profileEdit:"编辑个人档案",publish:"发布 / 编辑招募",auth:"学校身份认证"}[state.route]||"竞旅 CompMate"}
function activeRoute(){if(state.route==="detail"||state.route==="candidate"||state.route==="teams"||state.route==="people")return"find";if(state.route==="profileEdit")return"profile";return state.route}
function navButton(r,label,count){
  var on=activeRoute()===r;
  return '<button class="navBtn '+(on?"active":"")+'" onclick="navTo(\''+r+'\')"><span class="navIcon">'+navIcon(r)+'</span><span>'+label+'</span>'+(count?'<span class="navCount">'+count+'</span>':'')+'</button>'
}
function mNav(r,label){
  var on=activeRoute()===r;
  return '<button class="mNav '+(on?"active":"")+'" onclick="navTo(\''+r+'\')"><b>'+navIcon(r)+'</b><span>'+label+'</span></button>'
}
function shell(){
  var ar=activeRoute();
  byId("app").innerHTML=
  '<div class="shell"><aside class="sidebar">'+
    '<div class="brand"><div class="brandMark">C</div><div><div class="brandName">竞旅 CompMate</div><div class="brandSub">大学生竞赛组队平台</div></div></div>'+
    '<nav class="nav">'+
      navButton("home","首页")+
      '<button class="navBtn '+(ar==="find"?"active":"")+'" onclick="goFind()"><span class="navIcon">⌕</span><span>寻找</span></button>'+
      navButton("requests","申请 / 邀请",2)+
      navButton("team","我的队伍")+
      navButton("profile","个人档案")+
    '</nav>'+
    '<div class="sideBottom"><div class="identity"><span class="dot"></span>'+(state.verified?"广东工业大学 · 已认证":"学校身份未认证")+'<br><span style="color:#8f96a1">联系方式按沟通关系授权</span></div><button class="sideGhost" onclick="demoShare()">演示：外部分享进入</button></div>'+
  '</aside><main class="main"><header class="topbar"><div><div class="eyebrow">Alpha Demo · PRD V1.6</div><h1 class="pageTitle">'+title()+'</h1></div><div class="topActions"><div class="timePill"><span>当前可投入</span><b>'+Math.max(0,remaining())+'h</b></div><button class="btn primary" onclick="go(\'publish\')">+ 发布招募</button></div></header><div id="page"></div></main></div>'+
  '<nav class="mobileNav">'+
    mNav("home","首页")+
    '<button class="mNav '+(ar==="find"?"active":"")+'" onclick="goFind()"><b>⌕</b><span>寻找</span></button>'+
    mNav("requests","申请")+
    mNav("team","队伍")+
    mNav("profile","我的")+
  '</nav>';
}
function goFind(){
  if(state.route!=="home"){state.route="home";render()}
  setTimeout(function(){var el=byId("findSection");if(el)el.scrollIntoView({behavior:"smooth",block:"start"})},60);
}
function demoBar(){return '<div class="demoBar"><div><b>面试演示路径</b><br><small>主路径：发现 → 判断 → 沟通 → 正式确认 → 组队</small></div><div class="demoSteps"><button class="demoStep" onclick="go(\'teams\')">1 找队伍</button><button class="demoStep" onclick="openRecruit(1)">2 看详情</button><button class="demoStep" onclick="go(\'requests\')">3 沟通/确认</button><button class="demoStep" onclick="go(\'team\')">4 队伍页</button></div></div>'}
function navTo(r){state.route=r;if(r==="teams")state.mode="teams";if(r==="people")state.mode="people";render()}
function go(r){state.route=r;if(r==="teams")state.mode="teams";if(r==="people")state.mode="people";render();window.scrollTo(0,0)}
function render(){shell();var p=byId("page");if(state.route==="home")hall(p);else if(state.route==="teams")teamsPage(p);else if(state.route==="people")peoplePage(p);else if(state.route==="detail")detail(p);else if(state.route==="candidate")candidate(p);else if(state.route==="requests")requests(p);else if(state.route==="team")team(p);else if(state.route==="profile")profile(p);else if(state.route==="profileEdit")profileEdit(p);else if(state.route==="publish")publish(p);else if(state.route==="auth")auth(p)}
function status(s){return {active:["招募中","green"],paused:["暂停接收","warn"],full:["已招满","blue"],ended:["已结束",""]}[s]||["未知",""]}
function empty(a,b){return '<div class="panel empty"><h3>'+e(a)+'</h3><p>'+e(b)+'</p></div>'}
function badges(arr){return arr.map(function(x){return '<span class="badge">'+e(x)+'</span>'}).join("")}

function hall(p){
  var pending=state.relationships.filter(function(x){return x.status==="pending"}).length;
  var communicating=state.relationships.filter(function(x){return x.status==="communication"}).length;
  var confirming=state.relationships.filter(function(x){return x.status==="confirming"}).length;
  var recommended=recruits.filter(function(r){return r.status==="active"}).slice(0,3);

  p.innerHTML=
  '<section class="brandBanner"><div class="brandBannerMark">C</div><div class="brandBannerCopy"><b>竞旅 CompMate</b><span>让每一次竞赛，更快遇见合适的队友。</span></div><div class="brandBannerTrust">GDUT Alpha · 双向选择 · 隐私联系方式</div></section>'+

  '<section class="smartHomeGrid">'+
    '<div class="smartRecommendPanel">'+
      '<div class="smartPanelHead"><div><span>SMART RECOMMEND</span><h2>平台智能推荐</h2><p>根据你的任务经历、时间和参赛目标，优先推荐值得进一步了解的队伍。</p></div><button class="btn text" onclick="go(\'teams\')">查看全部 →</button></div>'+
      '<div class="smartRecommendList">'+recommended.map(smartRecommendRow).join("")+'</div>'+
      '<div class="recommendFoot"><span>推荐不等于自动组队</span><small>只展示可解释的匹配点与风险，最终由你自己决定。</small></div>'+
    '</div>'+
    '<aside class="competitionReminder">'+
      '<div class="smartPanelHead compact"><div><span>COMPETITION CALENDAR</span><h2>竞赛时间提醒</h2><p>只保留与你当前组队相关的近期节点。</p></div></div>'+
      '<div class="reminderTimeline">'+
        reminderRow("10/18","挑战杯","组队截止","3 条相关招募","hot")+
        reminderRow("10/20","正大杯","组队节点","市场调研岗活跃","")+
        reminderRow("10/28","我的招募","招募截止","CompMate 项目","")+
        reminderRow("11 月","互联网+","项目推进","可提前补齐技术角色","future")+
      '</div>'+
      '<button class="reminderAction" onclick="go(\'requests\')"><span><b>2 件组队事项待处理</b><small>1 条邀请 · 1 条待沟通</small></span><em>→</em></button>'+
    '</aside>'+
  '</section>'+

  '<section class="findSection" id="findSection">'+
    '<div class="findSectionHead"><div><span>FIND</span><h2>寻找</h2><p>根据你现在的需求，选择“加入一支队伍”或“为自己的队伍补齐成员”。</p></div></div>'+
    '<div class="findChoiceGrid">'+
      '<article class="findChoice teamChoice" onclick="go(\'teams\')"><div class="findChoiceIcon">◇</div><div class="findChoiceBody"><span>我要加入队伍</span><h3>找队伍</h3><p>浏览正在招募的队伍，先看具体任务，再判断时间、目标和团队状态。</p><div><i>竞赛筛选</i><i>具体任务</i><i>时间可行</i></div></div><em>进入找队伍 →</em></article>'+
      '<article class="findChoice peopleChoice" onclick="go(\'people\')"><div class="findChoiceIcon">⌕</div><div class="findChoiceBody"><span>我的队伍还缺人</span><h3>找队友</h3><p>围绕一个明确的招募缺口，看候选人的任务能力、真实产出、时间与目标。</p><div><i>技能 / 任务</i><i>经历产出</i><i>风险提示</i></div></div><em>进入找队友 →</em></article>'+
    '</div>'+
  '</section>'+

  '<section class="utilityRow">'+
    '<button class="utilityCard" onclick="go(\'publish\')"><span class="utilityIcon">＋</span><div><b>发布招募</b><small>明确角色、任务、人数和投入</small></div><em>→</em></button>'+
    '<button class="utilityCard" onclick="go(\'requests\')"><span class="utilityIcon">◫</span><div><b>申请 / 邀请</b><small>'+pending+' 待处理 · '+communicating+' 待沟通 · '+confirming+' 确认中</small></div><em>→</em></button>'+
    '<button class="utilityCard" onclick="go(\'team\')"><span class="utilityIcon">◎</span><div><b>我的队伍</b><small>查看成员、角色和当前缺口</small></div><em>→</em></button>'+
    '<button class="utilityCard" onclick="go(\'profile\')"><span class="utilityIcon">○</span><div><b>个人档案</b><small>当前还能投入 '+Math.max(0,remaining())+'h / 周</small></div><em>→</em></button>'+
  '</section>'+

  '<section class="exploreSection"><div class="cleanSectionHead"><div><span>EXPLORE</span><h3>按竞赛方向快速进入</h3></div></div><div class="exploreGrid">'+
    exploreCard("创新创业","挑战杯 · 互联网+","产品 / 商业 / 技术")+
    exploreCard("市场调研","正大杯 · 行业分析","访谈 / 数据 / 报告")+
    exploreCard("科技科研","电子设计 · 科研项目","开发 / 实验 / 论文")+
    exploreCard("数学建模","建模 · 数据竞赛","建模 / 编程 / 写作")+
  '</div></section>';
}
function smartRecommendRow(r){
  var ro=r.role,free=Math.max(0,ro.capacity-ro.formal-ro.reserved);
  return '<article class="smartRecommendRow" onclick="openRecruit('+r.id+')">'+
    '<div class="smartRecMain"><div class="smartRecMeta">'+e(r.comp)+' · '+e(r.campus)+'</div><b>'+e(r.title)+'</b><p>'+e(ro.task)+'</p><div class="smartRecTags"><span>'+e(ro.name)+'</span><span>'+ro.hours+'h / 周</span><span>'+e(r.target)+'</span></div></div>'+
    '<div class="smartRecReason"><span>推荐理由</span><b>'+r.reasons.join(" · ")+'</b><small>剩余 '+free+' 个可用名额</small></div>'+
    '<span class="smartRecArrow">→</span>'+
  '</article>';
}
function reminderRow(date,comp,label,sub,tone){
  return '<div class="reminderRow '+(tone||"")+'"><div class="reminderDate">'+date+'</div><div class="reminderLine"><span></span></div><div class="reminderContent"><b>'+comp+'</b><strong>'+label+'</strong><small>'+sub+'</small></div></div>';
}
function teamsPage(p){
  state.mode="teams";
  p.innerHTML=
  '<section class="listPageIntro"><div><span class="pageKicker">FIND A TEAM</span><h2>找到现在真正缺人的队伍</h2><p>先看“加入后要做什么”，再判断时间、目标和团队状态。</p></div><button class="btn primary" onclick="go(\'publish\')">我来发布招募</button></section>'+
  '<section class="filterPanel"><div class="filterSearch"><span>⌕</span><input id="searchBox" placeholder="搜索竞赛、角色、任务或技能" oninput="filterHall(this.value)"></div><div class="filterChips"><button onclick="filterToggle(this)">同校 / 同校区</button><button onclick="filterToggle(this)">时间可行</button><button onclick="filterToggle(this)">仅看招募中</button><button onclick="filterToggle(this)">冲奖目标</button></div></section>'+
  '<div class="resultsHead"><div><b>全部招募</b><span>'+recruits.length+' 条 Demo 结果</span></div><span>推荐理由与风险分开展示</span></div>'+
  '<div id="hallList" class="teamResultList">'+recruits.map(teamResultRow).join("")+'</div>';
}
function peoplePage(p){
  state.mode="people";
  var visible=candidates.filter(function(c){return !state.blocked[c.id]});
  p.innerHTML=
  '<section class="listPageIntro peopleIntro"><div><span class="pageKicker">FIND A TEAMMATE</span><h2>围绕一个明确缺口找队友</h2><p>不做“人才总榜”。先选你的招募岗位，再看候选人的具体任务能力和产出。</p></div><button class="btn secondary" onclick="go(\'publish\')">管理招募</button></section>'+
  '<section class="roleContext"><div class="roleContextMain"><span>当前招募岗位</span><b>挑战杯 · 数据分析</b><small>问卷清洗、统计分析、可视化 · 最低 8h / 周</small></div><div class="roleRequirement"><span>必需技能</span><b>Excel · 数据分析</b></div><button class="btn secondary" onclick="toast(\'Demo：可切换到其他招募缺口\')">切换岗位</button></section>'+
  '<section class="filterPanel"><div class="filterSearch"><span>⌕</span><input id="searchBox" placeholder="搜索技能、专业、经历或任务" oninput="filterHall(this.value)"></div><div class="filterChips"><button onclick="filterToggle(this)">时间满足</button><button onclick="filterToggle(this)">有相关产出</button><button onclick="filterToggle(this)">同校区</button><button onclick="filterToggle(this)">目标一致</button></div></section>'+
  '<div class="resultsHead"><div><b>候选人</b><span>'+visible.length+' 人</span></div><span>学校认证 ≠ 能力认证</span></div>'+
  '<div id="hallList" class="peopleResultList">'+visible.map(personResultRow).join("")+'</div>';
}
function cleanRecruitRow(r){
  var ro=r.role,st=status(r.status),free=Math.max(0,ro.capacity-ro.formal-ro.reserved);
  return '<article class="cleanRecruit" onclick="openRecruit('+r.id+')"><div class="cleanRecruitMain"><div class="miniComp">'+e(r.comp)+' · '+e(r.campus)+'</div><b>'+e(r.title)+'</b><p>'+e(ro.task)+'</p><div class="cleanTags"><span>'+e(ro.name)+'</span><span>'+ro.hours+'h / 周</span><span>'+e(r.target)+'</span></div></div><div class="cleanRecruitSide"><span class="status '+st[1]+'">'+st[0]+'</span><strong>余 '+free+' 名</strong><small>'+r.reasons.join(" · ")+'</small><em>查看详情 →</em></div></article>';
}
function teamResultRow(r){
  var ro=r.role,st=status(r.status),free=Math.max(0,ro.capacity-ro.formal-ro.reserved),risk=ro.hours>remaining();
  return '<article class="teamResult" onclick="openRecruit('+r.id+')"><div class="teamResultMain"><div class="resultTopline"><span>'+e(r.comp)+'</span><span>'+e(r.school)+' · '+e(r.campus)+'</span></div><h3>'+e(r.title)+'</h3><p>'+e(ro.task)+'</p><div class="resultTags"><span class="strong">'+e(ro.name)+'</span>'+ro.skills.slice(0,3).map(function(x){return '<span>'+e(x)+'</span>'}).join("")+'</div></div><div class="teamResultFacts"><div><span>时间</span><b>'+ro.hours+'h / 周</b></div><div><span>目标</span><b>'+e(r.target)+'</b></div><div><span>名额</span><b>'+free+' / '+ro.capacity+'</b></div></div><div class="teamResultDecision"><span class="status '+st[1]+'">'+st[0]+'</span><div class="matchBox"><b>为什么推荐</b><small>'+r.reasons.join(" · ")+'</small>'+(risk?'<small class="riskText">当前时间可能不足</small>':'')+'</div><button class="btn primary">查看详情</button></div></article>';
}
function personResultRow(c){
  return '<article class="personResult" onclick="openCandidate('+c.id+')"><div class="personIdentity"><div class="personAvatar">'+e(c.name.charAt(0))+'</div><div><h3>'+e(c.name)+'</h3><span>'+e(c.grade)+' · '+e(c.major)+'</span><small>'+e(c.campus)+' · 学校已认证</small></div></div><div class="personCapability"><span>可承担</span><b>'+e(c.roles.join(" / "))+'</b><div class="resultTags">'+c.skills.slice(0,4).map(function(x){return '<span>'+e(x)+'</span>'}).join("")+'</div><p>'+e(c.exp)+'</p></div><div class="personFit"><div><span>可投入</span><b>'+c.hours+'h / 周</b></div><div><span>目标</span><b>'+e(c.target)+'</b></div><div class="matchBox"><b>推荐理由</b><small>'+c.reasons.join(" · ")+'</small>'+(c.risk?'<small class="riskText">'+e(c.risk)+'</small>':'')+'</div><button class="btn primary" onclick="event.stopPropagation();invite('+c.id+')">邀请沟通</button></div></article>';
}
function simpleTime(date,title,sub,tone){return '<div class="simpleTime '+(tone||"")+'"><time>'+date+'</time><span></span><div><b>'+title+'</b><small>'+sub+'</small></div></div>'}
function exploreCard(title,examples,roles){return '<button class="exploreCard" onclick="go(\'teams\')"><b>'+title+'</b><span>'+examples+'</span><small>'+roles+'</small><em>进入 →</em></button>'}
function quickEntry(icon,title,sub,action,tone){
  return '<button class="quickEntry '+tone+'" onclick="'+action+'"><span class="quickIcon">'+icon+'</span><span><b>'+title+'</b><small>'+sub+'</small></span><em>→</em></button>';
}
function homeRecruitCompact(r){
  var st=status(r.status),free=Math.max(0,r.role.capacity-r.role.formal-r.role.reserved);
  return '<article class="homeRecruit" onclick="openRecruit('+r.id+')"><div class="homeRecruitTop"><div><span class="miniComp">'+e(r.comp)+'</span><b>'+e(r.title)+'</b></div><span class="status '+st[1]+'">'+st[0]+'</span></div><p>'+e(r.role.task)+'</p><div class="homeRecruitMeta"><span>'+e(r.role.name)+'</span><span>'+r.role.hours+'h / 周</span><span>余 '+free+' 名</span><span>'+e(r.campus)+'</span></div><div class="homeRecruitReason">推荐：'+r.reasons.join(" · ")+'</div></article>';
}
function homeCandidateCompact(c){
  return '<article class="homeCandidate" onclick="openCandidate('+c.id+')"><div class="homeCandidateHead"><div class="miniAvatar">'+e(c.name.charAt(0))+'</div><div><b>'+e(c.name)+'</b><span>'+e(c.major)+'</span></div><span class="verifiedMini">已认证</span></div><div class="miniSkillRow">'+c.skills.slice(0,3).map(function(x){return '<span>'+e(x)+'</span>'}).join("")+'</div><p>'+e(c.exp)+'</p><div class="homeCandidateFoot"><span>'+c.hours+'h / 周</span><button class="miniAction" onclick="event.stopPropagation();invite('+c.id+')">邀请沟通</button></div></article>';
}
function timelineRow(date,title,sub,tone){
  return '<div class="timelineRow '+(tone||"")+'"><div class="timelineDate">'+date+'</div><div class="timelineNode"></div><div><b>'+title+'</b><span>'+sub+'</span></div></div>';
}
function categoryCard(title,examples,roles){
  return '<button class="categoryCard" onclick="jumpToRecruitList()"><b>'+title+'</b><span>'+examples+'</span><small>'+roles+'</small><em>浏览 →</em></button>';
}
function guideStep(n,title,sub,done){
  return '<div class="guideStep '+(done?"done":"")+'"><span>'+n+'</span><div><b>'+title+'</b><small>'+sub+'</small></div>'+(done?'<i>✓</i>':'')+'</div>';
}
function activityRow(time,title,sub,tone){
  return '<div class="activityRow"><span class="activityDot '+(tone||"")+'"></span><div><b>'+title+'</b><small>'+sub+'</small></div><time>'+time+'</time></div>';
}
function jumpToRecruitList(){go("teams")}
function filterToggle(b){b.classList.toggle("on");b.classList.toggle("check");toast(b.textContent+(b.classList.contains("on")?" 已启用":" 已取消"))}
function filterHall(q){q=q.toLowerCase();var box=byId("hallList");if(state.route==="teams"){var x=recruits.filter(function(r){return JSON.stringify(r).toLowerCase().indexOf(q)>=0});box.innerHTML=x.map(teamResultRow).join("")||empty("没有严格匹配结果","可以放宽非核心条件；硬条件仍保留。")}else{var y=candidates.filter(function(c){return !state.blocked[c.id]&&JSON.stringify(c).toLowerCase().indexOf(q)>=0});box.innerHTML=y.map(personResultRow).join("")||empty("没有合适候选人","调整任务、技能或校区条件后再试。")}}
function recruitCard(r){
  var st=status(r.status),ro=r.role,risk=ro.hours>remaining();
  return '<article class="card clickable" onclick="openRecruit('+r.id+')"><div class="cardHead"><div><div class="meta">'+e(r.comp)+' · '+e(r.school)+' '+e(r.campus)+'</div><div class="title">'+e(r.title)+'</div></div><span class="status '+st[1]+'">'+st[0]+'</span></div>'+
  '<div class="badges"><span class="badge blue">'+e(ro.name)+'</span>'+badges(ro.skills.slice(0,3))+(r.hard?'<span class="badge purple">同校硬条件</span>':'')+'</div>'+
  '<div class="infoGrid"><div class="infoBox"><div class="infoLabel">具体任务</div><div class="infoValue">'+e(ro.task)+'</div></div><div class="infoBox"><div class="infoLabel">时间 / 目标</div><div class="infoValue">'+ro.hours+'h / 周 · '+e(r.target)+'</div></div></div>'+
  '<div class="reasons"><b>推荐理由：</b>'+r.reasons.join(" · ")+(risk?'<br><span style="color:#9a6500">风险：当前时间可能不足</span>':'')+'</div>'+
  '<div class="actions"><span class="meta">'+r.role.formal+'/'+r.role.capacity+' 已正式加入'+(r.role.reserved?' · '+r.role.reserved+' 个名额确认中':'')+'</span><button class="btn primary push" onclick="event.stopPropagation();openRecruit('+r.id+')">查看详情</button></div></article>'
}
function candidateCard(c){
  return '<article class="card clickable" onclick="openCandidate('+c.id+')"><div class="profileHero"><div class="avatar">'+e(c.name.charAt(0))+'</div><div><div class="title" style="margin:0">'+e(c.name)+'</div><div class="meta">'+e(c.grade)+' · '+e(c.major)+' · '+e(c.campus)+'</div></div><span class="verifiedTag">学校已认证</span></div>'+
  '<div class="badges">'+badges(c.skills)+'</div><div class="infoGrid"><div class="infoBox"><div class="infoLabel">希望承担</div><div class="infoValue">'+e(c.roles.join(" / "))+'</div></div><div class="infoBox"><div class="infoLabel">当前可投入</div><div class="infoValue">'+c.hours+'h / 周</div></div></div>'+
  '<div class="infoBox" style="margin-top:12px"><div class="infoLabel">相关经历 / 具体产出</div><div class="infoValue">'+e(c.exp)+'</div></div><div class="reasons"><b>推荐理由：</b>'+c.reasons.join(" · ")+(c.risk?'<br><span style="color:#9a6500">风险：'+e(c.risk)+'</span>':'')+'</div>'+
  '<div class="actions"><button class="btn secondary" onclick="event.stopPropagation();openCandidate('+c.id+')">查看资料</button><button class="btn primary push" onclick="event.stopPropagation();invite('+c.id+')">邀请沟通</button></div></article>'
}
function openRecruit(id){state.selectedRecruit=id;state.route="detail";render();window.scrollTo(0,0)}
function openCandidate(id){state.selectedCandidate=id;state.route="candidate";render();window.scrollTo(0,0)}
function detail(p){
  var r=recruits.filter(function(x){return x.id===state.selectedRecruit})[0]||recruits[0],ro=r.role,st=status(r.status),free=Math.max(0,ro.capacity-ro.formal-ro.reserved),can=r.status==="active"&&ro.formal<ro.capacity;
  p.innerHTML='<button class="btn text" onclick="go(\'teams\')">← 返回找队伍</button><div class="layout"><div class="panel">'+
  '<div class="between"><div><div class="meta">'+e(r.comp)+' · '+e(r.school)+' '+e(r.campus)+'</div><div class="bigTitle">'+e(r.title)+'</div></div><span class="status '+st[1]+'">'+st[0]+'</span></div>'+
  '<div class="badges"><span class="badge green">队长学校身份已认证</span><span class="badge">'+e(r.leader)+' · 队长</span><span class="badge">'+e(r.period)+'</span></div>'+
  '<div class="section"><h3 class="sectionTitle">队伍现状</h3><div class="kv" style="margin-top:12px"><div class="k">当前成员</div><div>'+e(r.team)+'</div><div class="k">当前进度</div><div>'+e(r.progress)+'</div><div class="k">参赛目标</div><div>'+e(r.target)+'</div><div class="k">项目周期</div><div>'+e(r.period)+'</div><div class="k">招募截止</div><div>'+e(r.deadline)+'</div></div></div>'+
  '<div class="section"><h3 class="sectionTitle">角色缺口</h3><div class="roleBox"><div class="between"><div><b>'+e(ro.name)+'</b><div class="meta" style="margin-top:4px">'+ro.formal+'/'+ro.capacity+' 已正式加入'+(ro.reserved?' · '+ro.reserved+' 个名额确认中':'')+'</div></div><span class="status '+(ro.reserved?"warn":"green")+'">'+(ro.reserved?"名额确认中":"可申请")+'</span></div><p class="subtitle">'+e(ro.task)+'</p><div class="badges">'+badges(ro.skills)+'<span class="badge blue">最低 '+ro.hours+'h / 周</span></div></div></div>'+
  '<div class="section"><h3 class="sectionTitle">协作预期</h3><p class="subtitle">'+e(r.collab)+'</p></div></div>'+
  '<aside class="panel sticky"><h3 class="sectionTitle">与你的匹配情况</h3><div class="reasons" style="margin-top:12px"><b>推荐理由</b><br>'+r.reasons.join(" · ")+'</div><div class="stats"><div class="stat"><b>'+Math.max(0,remaining())+'h</b><span>当前可投入</span></div><div class="stat"><b>'+ro.hours+'h</b><span>岗位最低投入</span></div><div class="stat"><b>'+free+'</b><span>可用名额</span></div></div>'+
  (ro.hours>remaining()?'<div class="notice warn" style="margin-top:12px">当前时间低于最低要求：可以先申请沟通，但正式组队前必须满足最新要求。</div>':'<div class="notice good" style="margin-top:12px">当前时间条件满足。申请仍只代表沟通意向。</div>')+
  (r.status==="paused"?'<div class="notice warn" style="margin-top:10px">队长已暂停接收新的加入申请；已有关系仍可继续。</div>':'')+
  '<div class="actions"><button class="btn secondary" onclick="shareRecruit('+r.id+')">分享招募</button><button class="btn primary push" '+(can?'':'disabled')+' onclick="applyRecruit('+r.id+')">'+(can?"申请加入":"当前不可申请")+'</button></div></aside></div>'
}
function applyRecruit(id){
  if(!state.loggedIn||!state.verified){state.selectedRecruit=id;go("auth");return}
  if(!state.profileComplete){go("profileEdit");toast("请先完成最小档案");return}
  var r=recruits.filter(function(x){return x.id===id})[0],ro=r.role,short=remaining()<ro.hours;
  modal('<h2>提交加入申请</h2><p class="subtitle">申请只代表愿意进一步沟通，不会直接加入队伍或占用正式名额。</p>'+
  (short?'<div class="notice warn">当前剩余 '+Math.max(0,remaining())+'h / 周，低于岗位 '+ro.hours+'h / 周。可以申请沟通，但正式组队前必须满足时间要求。</div>':'<div class="notice good">当前剩余 '+remaining()+'h / 周，岗位要求 '+ro.hours+'h / 周，时间条件满足。</div>')+
  '<div class="formGrid" style="margin-top:14px"><div class="field"><label>首选角色</label><input class="input" value="'+e(ro.name)+'"></div><div class="field"><label>可接受其他角色</label><input class="input" value="可协商"></div><div class="field full"><label>补充说明</label><textarea class="textarea">我有相关项目经历，希望进一步了解具体分工和时间安排。</textarea></div></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="submitApply('+id+')">提交申请</button></div>')
}
function submitApply(id){
  var r=recruits.filter(function(x){return x.id===id})[0];
  state.relationships.unshift({id:Date.now(),type:"application",title:r.comp+" · "+r.role.name,party:r.leader,role:r.role.name,status:"pending",time:"刚刚",contact:false});
  closeModal();toast("申请已提交，等待队长处理");go("requests")
}
function shareRecruit(id){
  var r=recruits.filter(function(x){return x.id===id})[0];
  modal('<h2>外部分享卡</h2><div class="panel" style="padding:15px;background:#f8f9fb"><div class="meta">'+e(r.comp)+'</div><div class="title">'+e(r.title)+'</div><p class="subtitle">'+e(r.role.task)+'</p><div class="badges"><span class="badge blue">'+e(r.role.name)+'</span><span class="badge">'+r.role.hours+'h / 周</span><span class="badge">'+e(r.target)+'</span></div><div class="meta">私人联系方式不会出现在分享内容中。</div></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal();toast(\'已复制结构化招募文本\')">复制分享文本</button><button class="btn primary" onclick="closeModal();demoShare('+id+')">模拟未登录用户打开</button></div>')
}
function demoShare(id){
  state.loggedIn=false;state.verified=false;if(id)state.selectedRecruit=id;state.route="detail";render();
  modal('<h2>外部分享访问</h2><p class="subtitle">当前模拟从微信群打开分享链接的未登录访客。访客可先查看完整公开招募，点击申请时再登录 / 学校认证。</p><div class="modalFoot"><button class="btn primary" onclick="closeModal()">查看招募</button></div>')
}

function candidate(p){
  var c=candidates.filter(function(x){return x.id===state.selectedCandidate})[0]||candidates[0];
  p.innerHTML='<button class="btn text" onclick="go(\'people\')">← 返回找队友</button><div class="layout"><div class="panel"><div class="profileHero"><div class="avatar">'+e(c.name.charAt(0))+'</div><div><div class="bigTitle" style="margin:0">'+e(c.name)+'</div><div class="meta">广东工业大学 · '+e(c.campus)+' · '+e(c.grade)+' · '+e(c.major)+'</div></div><span class="verifiedTag">学校已认证</span></div>'+
  '<div class="section"><h3 class="sectionTitle">可承担任务与技能</h3><div class="badges">'+c.roles.map(function(x){return '<span class="badge blue">'+e(x)+'</span>'}).join("")+badges(c.skills)+'</div></div>'+
  '<div class="section"><h3 class="sectionTitle">相关经历与具体产出</h3><div class="roleBox"><b>'+e(c.exp.split(" · ")[0])+'</b><p class="subtitle">'+e(c.exp.split(" · ").slice(1).join(" · "))+'</p></div></div>'+
  '<div class="section"><h3 class="sectionTitle">时间与目标</h3><div class="kv" style="margin-top:12px"><div class="k">当前可投入</div><div>'+c.hours+'h / 周</div><div class="k">参赛目标</div><div>'+e(c.target)+'</div><div class="k">联系方式</div><div>未解锁 · 双方同意沟通后按次展示</div></div></div></div>'+
  '<aside class="panel sticky"><h3 class="sectionTitle">针对具体缺口的判断</h3><div class="reasons" style="margin-top:12px"><b>推荐理由</b><br>'+c.reasons.join(" · ")+'</div>'+(c.risk?'<div class="notice warn" style="margin-top:10px">'+e(c.risk)+'</div>':'')+'<div class="actions"><button class="btn secondary" onclick="candidateMore('+c.id+')">更多</button><button class="btn primary push" onclick="invite('+c.id+')">邀请沟通</button></div></aside></div>'
}
function invite(id){
  var c=candidates.filter(function(x){return x.id===id})[0];
  modal('<h2>邀请 '+e(c.name)+' 沟通</h2><p class="subtitle">邀请必须绑定一条具体招募，不会直接形成正式组队。</p><div class="field"><label>关联招募</label><select class="select"><option>CompMate 项目招募 · 视觉设计</option><option>挑战杯 · 数据分析</option></select></div><div class="field" style="margin-top:10px"><label>邀请说明</label><textarea class="textarea">你的经历与当前任务比较匹配，希望进一步聊聊具体分工和时间安排。</textarea></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="closeModal();toast(\'邀请已发送，等待对方处理\')">发送邀请</button></div>')
}
function candidateMore(id){modal('<h2>更多操作</h2><p class="subtitle">平台不做公开能力评分；拉黑只影响未来新的搜索、推荐、申请与邀请。</p><div class="modalFoot"><button class="btn secondary" onclick="reportUser('+id+')">举报</button><button class="btn danger" onclick="blockUser('+id+')">拉黑</button></div>')}
function blockUser(id){state.blocked[id]=true;closeModal();toast("已拉黑，不再出现在新的推荐中");go("people")}
function reportUser(id){closeModal();modal('<h2>提交举报</h2><div class="field"><label>举报原因</label><select class="select"><option>虚假经历 / 招募</option><option>骚扰</option><option>站外支付诱导</option><option>其他</option></select></div><div class="field" style="margin-top:10px"><label>补充说明</label><textarea class="textarea"></textarea></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="closeModal();toast(\'举报已记录，等待处理\')">提交</button></div>')}

function requests(p){
  var tabs=[["all","全部"],["pending","待处理"],["communication","待沟通"],["confirming","正式确认中"],["joined","已组队"],["ended","已结束"]];
  var rs=state.relationships.filter(function(x){return state.tab==="all"||x.status===state.tab});
  p.innerHTML=demoBar()+'<div class="tabs">'+tabs.map(function(t){return '<button class="tab '+(state.tab===t[0]?"active":"")+'" onclick="state.tab=\''+t[0]+'\';render()">'+t[1]+'</button>'}).join("")+'</div><div class="list">'+(rs.map(requestCard).join("")||empty("当前没有该状态记录","切换其他状态查看。"))+'</div>'
}
function requestCard(x){
  var mp={pending:["请求待处理",""],communication:["待沟通","green"],confirming:["正式确认中","warn"],joined:["已组队","blue"],ended:["已结束",""]},st=mp[x.status],act="";
  if(x.status==="pending"&&x.type==="invitation")act='<button class="btn secondary" onclick="rejectReq('+x.id+')">拒绝</button><button class="btn primary" onclick="agreeReq('+x.id+')">同意沟通</button>';
  if(x.status==="pending"&&x.type==="application")act='<button class="btn secondary" onclick="cancelReq('+x.id+')">取消申请</button>';
  if(x.status==="communication")act='<button class="btn secondary" onclick="endComm('+x.id+')">中止沟通</button><button class="btn primary" onclick="startConfirm('+x.id+')">发起正式确认</button>';
  if(x.status==="confirming")act='<button class="btn secondary" onclick="rejectConfirm('+x.id+')">暂不加入</button><button class="btn primary" onclick="acceptConfirm('+x.id+')">确认加入</button>';
  if(x.status==="joined")act='<button class="btn primary" onclick="go(\'team\')">进入队伍页</button>';
  return '<div class="request"><div class="requestMain"><div class="between"><div class="requestTitle">'+e(x.title)+'</div><span class="status '+st[1]+'">'+st[0]+'</span></div><div class="requestSub">'+e(x.party)+' · '+e(x.role)+' · '+e(x.time)+'</div>'+(x.status==="communication"?'<div class="badges"><span class="badge green">微信已授权</span><span class="badge">尚未正式组队</span></div>':'')+(x.status==="confirming"?'<div class="notice warn" style="margin-top:8px">正式确认前会重新检查最新名额、时间和条件；队长发起时临时预留资源。</div>':'')+(x.status==="ended"?'<div class="requestSub">'+e(x.reason||"本次关系已结束")+'</div>':'')+'</div><div class="requestActions">'+act+'</div></div>'
}
function rel(id){return state.relationships.filter(function(x){return x.id===id})[0]}
function rejectReq(id){var x=rel(id);x.status="ended";x.reason="你已拒绝本次邀请";toast("已拒绝，不产生负面标签");render()}
function cancelReq(id){var x=rel(id);x.status="ended";x.reason="你已取消本次申请";toast("申请已取消");render()}
function agreeReq(id){modal('<h2>同意沟通</h2><p class="subtitle">进入待沟通前，双方都要至少授权一种联系方式；公开档案不会直接展示联系方式。</p><div class="notice">本次授权给对方：微信 · cm_demo_2026</div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="confirmAgree('+id+')">确认并开放</button></div>')}
function confirmAgree(id){var x=rel(id);x.status="communication";x.contact=true;closeModal();toast("已进入待沟通");render()}
function endComm(id){var x=rel(id);x.status="ended";x.reason="任一方中止沟通后，旧的正式确认不能继续";state.reserved=0;toast("本次沟通已结束");render()}
function startConfirm(id){
  var x=rel(id);
  modal('<h2>发起正式组队确认</h2><p class="subtitle">再次确认最新角色、任务、项目周期和每周投入。</p><div class="kv"><div class="k">角色</div><div>'+e(x.role)+'</div><div class="k">约定投入</div><div>8h / 周</div><div class="k">项目周期</div><div>10/06 - 12/20</div><div class="k">当前剩余</div><div>'+Math.max(0,remaining())+'h / 周</div></div><div class="notice" style="margin-top:12px">当前以候选人发起演示：不预留名额；队长最终确认时再检查最新资源。</div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">返回</button><button class="btn primary" onclick="confirmStart('+id+')">发送确认请求</button></div>')
}
function confirmStart(id){var x=rel(id);x.status="confirming";x.time="刚刚 · 候选人发起（未预留名额）";closeModal();toast("正式确认请求已发送");render()}
function captainConfirmDemo(id){var x=rel(id),h=8;if(remaining()<h){toast("剩余时间不足，不能创建预留");return}state.reserved=h;x.status="confirming";x.time="刚刚 · 队长发起 · 24h 内有效";toast("已临时预留名额与 8h / 周投入");render()}
function rejectConfirm(id){var x=rel(id);x.status="communication";state.reserved=0;toast("本次确认结束，待沟通关系保留");render()}
function acceptConfirm(id){
  var x=rel(id),need=8,available=remaining()+state.reserved;
  if(available<need){toast("最新可投入时间不足，确认失败");return}
  state.reserved=0;state.committed+=need;x.status="joined";x.time="刚刚";state.joined=true;toast("正式组队成功");render()
}

function team(p){
  if(!state.joined){p.innerHTML=demoBar()+'<div class="panel empty"><h3>还没有正式加入的队伍</h3><p>待沟通不等于正式组队。完成双向确认后才会形成正式成员关系。</p><div class="actions" style="justify-content:center"><button class="btn secondary" onclick="go(\'requests\')">查看待沟通</button><button class="btn primary" onclick="simulateTeam()">演示组队后页面</button></div></div>';return}
  p.innerHTML=demoBar()+'<div class="panel"><div class="between"><div><div class="meta">挑战杯 · 大挑</div><div class="bigTitle">星火队</div><div class="subtitle">只提供最小组队管理，不扩展为任务看板或项目管理工具。</div></div><span class="status green">已组队</span></div>'+
  '<div class="stats"><div class="stat"><b>4</b><span>正式成员</span></div><div class="stat"><b>1</b><span>剩余角色缺口</span></div><div class="stat"><b>8h</b><span>你的当前投入</span></div></div>'+
  '<div class="section"><div class="between"><h3 class="sectionTitle">成员与角色</h3><button class="btn secondary" onclick="editHours()">更新我的阶段投入</button></div><div class="list" style="margin-top:12px">'+member("顾闻","队长 / 产品","已确认分工",false)+member("林清禾","数据分析","当前投入 10h / 周",false)+member("陈予安","前端开发","当前投入 8h / 周",false)+member("你","商业分析","当前投入 8h / 周",true)+'</div></div>'+
  '<div class="section"><div class="between"><h3 class="sectionTitle">剩余角色缺口</h3><button class="btn primary" onclick="go(\'publish\')">重新开放招募</button></div><div class="roleBox"><div class="between"><b>视觉设计 · 1 人</b><span class="status warn">待处理缺口</span></div><p class="subtitle">成员退出 / 被移除后恢复名额，但历史申请不会自动重新生效。</p></div></div>'+
  '<div class="section"><h3 class="sectionTitle">入群说明</h3><p class="subtitle">仅正式成员可见：请联系队长顾闻加入微信项目群。Alpha 不上传群二维码，降低存储与审核成本。</p></div><div class="actions"><button class="btn danger" onclick="leaveTeam()">退出队伍</button><button class="btn secondary" onclick="toast(\'基础举报已记录\')">举报问题</button></div></div>'
}
function member(n,r,s,self){return '<div class="request"><div><div class="requestTitle">'+e(n)+' · '+e(r)+'</div><div class="requestSub">'+e(s)+'</div></div><div class="requestActions">'+(self?'<span class="status green">本人</span>':'<span class="status">正式成员</span><button class="btn text" onclick="toast(\'队长可移除成员\')">管理</button>')+'</div></div>'}
function simulateTeam(){state.joined=true;if(state.committed<8)state.committed=8;render()}
function editHours(){modal('<h2>更新当前阶段投入</h2><p class="subtitle">投入变化会立即影响后续时间判断，但不会自动把你踢出当前队伍。</p><div class="field"><label>当前阶段预计投入（h / 周）</label><input class="input" id="stageHours" type="number" min="0" value="8"></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="saveHours()">保存</button></div>')}
function saveHours(){var v=Math.max(0,Number(byId("stageHours").value)||0);state.committed=v;closeModal();toast(v<8?"已更新：低于原约定，需与队长协商":"阶段投入已更新");render()}
function leaveTeam(){modal('<h2>确认退出队伍？</h2><p class="subtitle">退出后，对应角色名额恢复，你在该项目中的正式投入不再计入时间占用；历史申请不会自动重新生效。</p><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn danger" onclick="confirmLeave()">确认退出</button></div>')}
function confirmLeave(){state.joined=false;state.committed=Math.max(0,state.committed-8);var x=state.relationships.filter(function(r){return r.status==="joined"})[0];if(x){x.status="ended";x.reason="你已退出队伍"}closeModal();toast("已退出，名额和时间已释放");render()}

function profile(p){
  p.innerHTML=demoBar()+'<div class="layout"><div class="panel"><div class="profileHero"><div class="avatar">黄</div><div><div class="bigTitle" style="margin:0">黄同学</div><div class="meta">广东工业大学 · 龙洞校区 · 大二 · 国际经济与贸易</div></div><span class="verifiedTag">'+(state.verified?"学校已认证":"未认证")+'</span></div>'+
  '<div class="section"><div class="between"><h3 class="sectionTitle">我能承担的任务与技能</h3><button class="btn secondary" onclick="go(\'profileEdit\')">编辑档案</button></div><div class="badges"><span class="badge blue">用户调研</span><span class="badge blue">商业分析</span><span class="badge">产品策划</span><span class="badge">Excel</span><span class="badge">报告写作</span></div></div>'+
  '<div class="section"><h3 class="sectionTitle">相关经历与具体产出</h3><div class="roleBox"><b>挑战杯 · 项目负责人</b><p class="subtitle">负责需求调研、方案设计、团队推进与成果整合。</p></div><div class="roleBox"><b>行业经济分析大赛</b><p class="subtitle">负责资料检索、分析框架与报告撰写。</p></div></div></div>'+
  '<aside class="panel sticky"><h3 class="sectionTitle">时间与目标</h3><div class="stats"><div class="stat"><b>'+state.total+'h</b><span>每周总可投入</span></div><div class="stat"><b>'+state.committed+'h</b><span>正式项目投入</span></div><div class="stat"><b>'+Math.max(0,remaining())+'h</b><span>剩余可投入</span></div></div><div class="section"><div class="kv"><div class="k">参赛目标</div><div>优先冲奖</div><div class="k">协作方式</div><div>关键节点提前同步</div><div class="k">联系方式</div><div>微信 · 独立隐私字段 · 按次授权</div></div></div><div class="notice">学校认证只证明属于该学校，不代表能力水平。</div></aside></div>'
}
function profileEdit(p){
  p.innerHTML='<div class="layout"><div class="panel"><h2 class="sectionTitle">最小可匹配档案</h2><p class="subtitle">经历和成果证明可后补；最小字段完整后才可主动申请并进入可被邀请候选列表。</p><div class="formGrid">'+
  '<div class="field"><label>显示名称 <span class="req">*</span></label><input class="input" value="黄同学"></div><div class="field"><label>学校 / 校区 <span class="req">*</span></label><input class="input" value="广东工业大学 / 龙洞校区"></div>'+
  '<div class="field"><label>年级 / 专业</label><input class="input" value="大二 / 国际经济与贸易"></div><div class="field"><label>每周总可投入 <span class="req">*</span></label><input class="input" id="totalHours" type="number" min="0" value="'+state.total+'"></div>'+
  '<div class="field full"><label>希望承担的任务 <span class="req">*</span></label><div class="checkRow"><button class="check on">用户调研</button><button class="check on">商业分析</button><button class="check">产品策划</button><button class="check">数据分析</button></div></div>'+
  '<div class="field full"><label>技能标签 <span class="req">*</span></label><input class="input" value="Excel、报告写作、用户访谈"></div><div class="field"><label>可参与日期 <span class="req">*</span></label><input class="input" value="2026/10/05 - 2026/12/31"></div><div class="field"><label>参赛目标 <span class="req">*</span></label><select class="select"><option>优先冲奖</option><option>完整参赛</option><option>积累经验</option></select></div>'+
  '<div class="field full"><label>协作方式 <span class="req">*</span></label><input class="input" value="关键节点提前同步，出现延误及时说明"></div><div class="field full"><label>联系方式（隐私字段）</label><input class="input" value="微信：cm_demo_2026"><div class="help">不会出现在公开档案，仅在双方同意沟通后按次开放。</div></div><div class="field full"><label>经历与具体产出（可选）</label><textarea class="textarea">挑战杯项目负责人：负责需求调研、方案设计、团队推进与成果整合。</textarea></div></div>'+
  '<div class="actions end"><button class="btn secondary" onclick="go(\'profile\')">取消</button><button class="btn primary" onclick="saveProfile()">保存档案</button></div></div><aside class="panel sticky"><h3 class="sectionTitle">档案规则</h3><div class="notice good">当前最小字段完整，可以主动申请并进入候选列表。</div><div class="section"><p class="subtitle">平台不公开能力评分、责任心评分、人才等级或排行榜。</p></div><div class="section"><button class="btn secondary" onclick="state.verified=false;go(\'auth\')">重新演示学校认证</button></div></aside></div>'
}
function saveProfile(){state.total=Math.max(0,Number(byId("totalHours").value)||0);state.profileComplete=true;toast("个人档案已保存");go("profile")}

function publish(p){
  var statusLabel=state.ownStatus==="active"?"招募中":state.ownStatus==="paused"?"暂停接收":"已结束";
  p.innerHTML='<div class="layout"><div class="panel"><div class="between"><div><h2 class="sectionTitle">结构化招募</h2><p class="subtitle">把“缺技术 / 缺商科”转化为角色、任务、人数、技能、时间和目标。</p></div><span class="status '+(state.ownStatus==="active"?"green":"warn")+'">'+statusLabel+'</span></div>'+
  '<div class="formGrid"><div class="field"><label>目标竞赛 <span class="req">*</span></label><input class="input" id="pubComp" value="挑战杯 · 大挑"><div class="help">未收录赛事可直接填写临时名称；P1 再做相似名称聚合。</div></div><div class="field"><label>学校 / 校区</label><input class="input" value="广东工业大学 / 龙洞校区"></div>'+
  '<div class="field"><label>缺口角色 <span class="req">*</span></label><input class="input" id="pubRole" value="视觉设计"></div><div class="field"><label>招募人数 <span class="req">*</span></label><input class="input" id="pubCap" type="number" min="1" value="1"></div>'+
  '<div class="field full"><label>具体任务 <span class="req">*</span></label><textarea class="textarea" id="pubTask">负责路演 PPT 视觉、海报与展示物料。</textarea></div><div class="field"><label>必需技能 <span class="req">*</span></label><input class="input" id="pubSkills" value="PPT、Figma"></div><div class="field"><label>最低每周投入 <span class="req">*</span></label><input class="input" id="pubHours" type="number" min="1" value="6"></div>'+
  '<div class="field"><label>项目周期 <span class="req">*</span></label><input class="input" value="10/05 - 12/20"></div><div class="field"><label>招募截止时间 <span class="req">*</span></label><input class="input" value="10/28 23:59"></div><div class="field"><label>参赛目标 <span class="req">*</span></label><input class="input" value="冲省奖"></div><div class="field"><label>学校 / 校区是否硬条件</label><select class="select"><option>否，可跨校区沟通</option><option>是，不满足不可申请</option></select></div></div>'+
  '<div class="actions"><button class="btn secondary" onclick="previewRecruit()">预览</button><button class="btn primary push" onclick="saveRecruit()">保存并发布</button></div></div>'+
  '<aside class="panel sticky"><h3 class="sectionTitle">招募生命周期</h3><div class="list" style="margin-top:12px"><button class="btn secondary" onclick="pauseRecruit()">'+(state.ownStatus==="paused"?"恢复接收申请":"暂停接收新申请")+'</button><button class="btn secondary" onclick="coreChange()">演示核心条件变更</button><button class="btn danger" onclick="endRecruit()">结束本轮招募</button></div><div class="section"><div class="notice">暂停仅停止新的加入申请；截止前队长仍可主动邀请。结束招募则收口尚未正式组队的关系。</div></div><div class="section"><div class="meta">已有正式成员 / 有效临时预留时，角色人数不能调低到当前已占用资源以下。</div></div></aside></div>'
}
function previewRecruit(){modal('<h2>招募预览</h2><div class="roleBox"><b>'+e(byId("pubRole").value)+' · '+e(byId("pubCap").value)+' 人</b><p class="subtitle">'+e(byId("pubTask").value)+'</p><div class="badges"><span class="badge">'+e(byId("pubSkills").value)+'</span><span class="badge blue">'+e(byId("pubHours").value)+'h / 周</span></div></div><div class="modalFoot"><button class="btn primary" onclick="closeModal()">返回编辑</button></div>')}
function saveRecruit(){var cap=Number(byId("pubCap").value),h=Number(byId("pubHours").value),task=byId("pubTask").value.trim();if(cap<1||h<1||!task){toast("请检查人数、时间和任务字段");return}state.ownStatus="active";toast("招募已保存并发布");render()}
function pauseRecruit(){if(state.ownStatus==="ended"){toast("主动结束的本轮招募不直接恢复，请新建或复制");return}state.ownStatus=state.ownStatus==="paused"?"active":"paused";toast(state.ownStatus==="paused"?"已暂停新的加入申请":"已恢复接收申请");render()}
function endRecruit(){state.ownStatus="ended";toast("本轮招募已结束，正式成员关系不受影响");render()}
function coreChange(){modal('<h2>修改核心条件</h2><p class="subtitle">任务、最低投入、项目周期、参赛目标等变化，需要通知待沟通候选人；若角色存在正式确认中关系，需先撤回 / 结束对应确认。</p><div class="notice warn">保存后，相关候选人会看到“招募条件已更新”。</div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="closeModal();toast(\'条件已更新并通知候选人\')">确认修改</button></div>')}

function auth(p){
  p.innerHTML='<div class="layout"><div class="panel"><h2 class="sectionTitle">学校身份认证</h2><p class="subtitle">认证只验证属于该学校，不代表能力水平。外部分享用户可先看招募，再在申请时认证。</p><div class="formGrid"><div class="field"><label>学校</label><input class="input" value="广东工业大学"></div><div class="field"><label>校区</label><select class="select"><option>龙洞校区</option><option>大学城校区</option></select></div><div class="field full"><label>认证方式（Alpha 示例）</label><select class="select"><option>校园邮箱验证码</option><option>运营白名单 / 人工核验</option></select></div><div class="field full"><label>校园邮箱</label><input class="input" value="demo@gdut.edu.cn"></div></div><div class="actions end"><button class="btn secondary" onclick="go(\'detail\')">暂不认证</button><button class="btn primary" onclick="completeAuth()">完成认证并继续申请</button></div></div><aside class="panel sticky"><div class="notice">产品逻辑只依赖已认证 / 未认证结果；具体实现可按工作室资源选择低成本方案。</div></aside></div>'
}
function completeAuth(){state.loggedIn=true;state.verified=true;toast("认证成功，已回到原招募");state.route="detail";render();setTimeout(function(){applyRecruit(state.selectedRecruit)},250)}

window.state=state;window.render=render;window.navTo=navTo;window.go=go;window.filterHall=filterHall;window.filterToggle=filterToggle;window.openRecruit=openRecruit;window.openCandidate=openCandidate;window.applyRecruit=applyRecruit;window.submitApply=submitApply;window.shareRecruit=shareRecruit;window.demoShare=demoShare;window.invite=invite;window.candidateMore=candidateMore;window.blockUser=blockUser;window.reportUser=reportUser;window.rejectReq=rejectReq;window.cancelReq=cancelReq;window.agreeReq=agreeReq;window.confirmAgree=confirmAgree;window.endComm=endComm;window.startConfirm=startConfirm;window.confirmStart=confirmStart;window.captainConfirmDemo=captainConfirmDemo;window.rejectConfirm=rejectConfirm;window.acceptConfirm=acceptConfirm;window.simulateTeam=simulateTeam;window.editHours=editHours;window.saveHours=saveHours;window.leaveTeam=leaveTeam;window.confirmLeave=confirmLeave;window.saveProfile=saveProfile;window.previewRecruit=previewRecruit;window.saveRecruit=saveRecruit;window.pauseRecruit=pauseRecruit;window.endRecruit=endRecruit;window.coreChange=coreChange;window.completeAuth=completeAuth;window.closeModal=closeModal;window.toast=toast;
render();
