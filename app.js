var state={
  route:"home",
  mode:"teams",
  selectedRecruit:1,
  selectedCandidate:11,
  tab:"all",
  progressView:"relations",
  loggedIn:true,
  verified:true,
  profileComplete:true,
  total:20,
  committed:8,
  reserved:0,
  joined:false,
  joinedRecruitId:null,
  teamView:"managed",
  managedStageHours:8,
  joinedStageHours:0,
  blocked:{},
  blockedRecruitIds:{},
  ownStatus:"active",
  activeRoleRecruitId:901,
  authReturn:"",
  profileReturn:"",
  pendingApplyRecruitId:null,
  memberRemoved:false,
  managedCaptain:true,
  managedCaptainName:"你",
  frontendAgreedHours:8,
  frontendCurrentHours:6,
  userCampus:"龙洞校区",
  profileSkills:["Excel","报告写作","用户访谈","商业分析","数据分析","可视化"],
  userContact:"cm_demo_2026",
  contactUnlockEvents:[],
  reports:[],
  evidenceUrl:"https://example.com/compmate-output",
  teamFilters:{campus:false,time:false,active:false,award:false,category:""},
  peopleFilters:{time:false,output:false,campus:false,target:false,capability:""},
  relationships:[
    {id:201,type:"application",direction:"outgoing",recruitId:1,title:"挑战杯 · 数据分析岗",party:"星火队",role:"数据分析",status:"communication",time:"今天 00:42",contact:true,initiator:null,reserved:false,reservedHours:0,partyContact:"spark_team"},
    {id:202,type:"invitation",direction:"incoming",recruitId:2,title:"正大杯 · 市场调研岗",party:"许辰",role:"市场调研",status:"pending",time:"2 小时前",contact:false,initiator:null,reserved:false,reservedHours:0,partyContact:"xuchen_demo",expiresAt:Date.now()+6*24*60*60*1000},
    {id:203,type:"application",direction:"outgoing",recruitId:3,title:"互联网+ · 前端开发",party:"陈屿",role:"前端开发",status:"ended",time:"昨天",reason:"对方已暂停并结束本次请求",contact:false,initiator:null,reserved:false,reservedHours:0}
  ]
};

var recruits=[
  {id:1,category:"innovation",comp:"挑战杯 · 大挑",title:"寻找数据分析 / 商业分析队友",school:"广东工业大学",campus:"龙洞校区",leader:"顾闻",status:"active",target:"冲省奖",period:"10/06 - 12/20",deadline:"10/18 23:59",team:"现有 3 人",progress:"已完成初步选题与访谈框架",collab:"每周至少同步 1 次；关键节点无法按时完成时提前说明。",hard:false,reasons:["有相关调研经历","时间满足要求"],role:{name:"数据分析",capacity:2,formal:1,reserved:0,hours:8,task:"问卷数据清洗、统计分析、可视化与需求结论提炼",skills:["Excel","数据分析","可视化"]}},
  {id:2,category:"market",comp:"正大杯",title:"招募市场调研与访谈同学",school:"广东工业大学",campus:"大学城校区",leader:"许辰",status:"active",target:"完整参赛并争取省赛",period:"10/10 - 12/10",deadline:"10/20 20:00",team:"现有 4 人",progress:"正在设计正式问卷",collab:"线上协作为主，每周一次集中同步。",hard:false,reasons:["有访谈经验","目标一致"],role:{name:"市场调研",capacity:1,formal:0,reserved:1,hours:6,task:"访谈提纲、用户访谈、问卷设计与洞察整理",skills:["用户访谈","问卷设计","报告写作"]}},
  {id:3,category:"innovation",comp:"互联网+",title:"寻找前端开发同学",school:"广东工业大学",campus:"龙洞校区",leader:"陈屿",status:"paused",target:"冲校赛金奖",period:"10/01 - 11/25",deadline:"10/22 18:00",team:"现有 3 人",progress:"产品方向已确定",collab:"每两天线上同步开发进度。",hard:true,reasons:["技能高度匹配"],role:{name:"前端开发",capacity:2,formal:1,reserved:0,hours:10,task:"实现产品 Demo、核心交互和路演展示页面",skills:["JavaScript","React","HTML/CSS"]}},
  {id:4,category:"math",comp:"数学建模竞赛",title:"建模队补一名编程队友",school:"广东工业大学",campus:"龙洞校区",leader:"林深",status:"full",target:"稳定完赛",period:"11/01 - 12/01",deadline:"10/12 22:00",team:"现有 3 人",progress:"已完成组队",collab:"赛前每周训练，比赛期间集中协作。",hard:false,reasons:["跨专业互补"],role:{name:"编程 / 建模",capacity:1,formal:1,reserved:0,hours:14,task:"Python 求解、模型验证、结果整理",skills:["Python","数学建模"]}},
  {id:5,category:"market",comp:"行业经济分析大赛",title:"招募商业分析与报告撰写队友",school:"广东工业大学",campus:"龙洞校区",leader:"叶知",status:"active",target:"冲校奖",period:"10/08 - 11/30",deadline:"10/24 21:00",team:"现有 2 人",progress:"已完成资料框架",collab:"线上协作为主，周末集中讨论。",hard:false,reasons:["商业分析经历相关","同校区"],role:{name:"商业分析",capacity:2,formal:0,reserved:0,hours:6,task:"行业资料检索、分析框架搭建、核心结论与报告撰写",skills:["Excel","商业分析","报告写作"]}}
];

var managedRecruitments=[
  {id:901,category:"innovation",comp:"挑战杯 · 大挑",title:"CompMate 项目招募",school:"广东工业大学",campus:"龙洞校区",leader:"你",status:"active",target:"冲省奖",period:"10/05 - 12/20",deadline:"10/28 23:59",team:"现有 3 人",progress:"需求验证与 Demo 开发",collab:"每周同步两次，关键节点提前说明。",hard:false,reasons:[],role:{name:"视觉设计",capacity:1,formal:0,reserved:0,hours:6,task:"负责路演 PPT 视觉、海报与产品展示物料",skills:["PPT","Figma","视觉设计"]}},
  {id:902,category:"market",comp:"行业经济分析大赛",title:"商业分析岗位招募",school:"广东工业大学",campus:"龙洞校区",leader:"你",status:"active",target:"冲校奖",period:"10/08 - 11/30",deadline:"10/24 21:00",team:"现有 2 人",progress:"资料框架已完成",collab:"周末集中讨论，任务延误提前说明。",hard:false,reasons:[],role:{name:"商业分析",capacity:1,formal:0,reserved:0,hours:6,task:"行业资料检索、分析框架、报告撰写与汇报",skills:["Excel","商业分析","报告写作"]}}
];

var candidates=[
  {id:11,name:"林清禾",campus:"大学城校区",grade:"大二",major:"数据科学与大数据技术",roles:["数据分析","数学建模"],skills:["Python","SPSS","数据可视化","数据分析"],hours:10,target:"冲省奖",proof:true,contact:"lin_demo",exp:"正大杯校赛二等奖 · 负责数据清洗、统计检验和结果可视化"},
  {id:12,name:"陈予安",campus:"大学城校区",grade:"大二",major:"计算机科学与技术",roles:["前端开发","数据处理"],skills:["React","JavaScript","Python","HTML/CSS"],hours:8,target:"完整参赛",proof:true,contact:"chen_demo",exp:"互联网+校赛项目 · 负责前端页面与数据接口"},
  {id:13,name:"周言",campus:"龙洞校区",grade:"大二",major:"工商管理",roles:["商业分析","用户调研"],skills:["访谈","Excel","报告写作","商业分析"],hours:6,target:"冲奖",proof:true,contact:"zhou_demo",exp:"行业经济分析大赛 · 负责访谈、资料分析与报告"},
  {id:14,name:"宋禾",campus:"龙洞校区",grade:"大一",major:"工业设计",roles:["视觉设计"],skills:["Figma","PPT","PS","视觉设计"],hours:5,target:"积累经验",proof:false,contact:"song_demo",exp:"社团招新视觉 · 负责海报与展示物料设计"}
];

function e(s){return String(s==null?"":s).replace(/[&<>"']/g,function(m){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]})}
function byId(id){return document.getElementById(id)}
function remaining(){return state.total-state.committed-state.reserved}
function allRecruitments(){return recruits.concat(managedRecruitments)}
function findRecruit(id){return allRecruitments().filter(function(x){return x.id===Number(id)})[0]||null}
function activeManagedRecruit(){return findRecruit(state.activeRoleRecruitId)||managedRecruitments[0]}
function roleFree(r){return Math.max(0,r.role.capacity-r.role.formal-r.role.reserved)}
function isAwardGoal(t){return /冲|奖|省赛|金奖/.test(t||"")}
function goalAligned(a,b){if(isAwardGoal(a))return isAwardGoal(b);return true}
function hasUserContact(){return !!(state.userContact&&String(state.userContact).trim())}
function parseDeadline(r){
  var m=String(r.deadline||"").match(/(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{2})/);
  if(!m)return null;
  return new Date(2026,Number(m[1])-1,Number(m[2]),Number(m[3]),Number(m[4]));
}
function deadlinePassed(r){var d=parseDeadline(r);return d?Date.now()>d.getTime():false}
function userMeetsRecruitHardRules(r){
  if(!r)return {ok:false,reason:"招募不存在"};
  if(state.blockedRecruitIds[r.id])return {ok:false,reason:"你已拉黑该招募方"};
  if(r.status==="ended"||r.status==="full")return {ok:false,reason:r.status==="full"?"角色已招满":"招募已结束"};
  if(deadlinePassed(r))return {ok:false,reason:"招募已过截止时间"};
  if(r.hard&&r.campus!==state.userCampus)return {ok:false,reason:"该招募将校区设为不可放宽条件"};
  var missing=(r.role.skills||[]).filter(function(x){return state.profileSkills.indexOf(x)<0});
  if(missing.length)return {ok:false,reason:"缺少必需技能："+missing.join("、")};
  return {ok:true,reason:""};
}
function candidateMeetsHardRules(c,r){
  if(!c||!r)return {ok:false,reason:"候选人或招募不存在"};
  if(state.blocked[c.id])return {ok:false,reason:"你已拉黑该候选人"};
  if(r.status==="ended"||r.status==="full")return {ok:false,reason:r.status==="full"?"角色已招满":"招募已结束"};
  if(deadlinePassed(r))return {ok:false,reason:"招募已过截止时间"};
  if(r.hard&&c.campus!==r.campus)return {ok:false,reason:"该招募将校区设为不可放宽条件"};
  var pool=c.skills.concat(c.roles);
  var missing=(r.role.skills||[]).filter(function(x){return pool.indexOf(x)<0});
  if(missing.length)return {ok:false,reason:"候选人缺少必需技能："+missing.join("、")};
  return {ok:true,reason:""};
}
function formatExpiry(x){
  if(!x||!x.expiresAt)return "";
  var ms=x.expiresAt-Date.now();
  if(ms<=0)return "已超时";
  var h=Math.ceil(ms/3600000);
  return h>24?"剩余 "+Math.ceil(h/24)+" 天":"剩余约 "+h+" 小时";
}
function normalizeCompetitionName(v){return String(v||"").trim().replace(/\s+/g," ").replace(/[＋+]/g,"+")}
function unsafePublicText(v){return /(微信|vx|wechat|qq|手机号|1[3-9]\d{9}|加我|私聊付款|转账|代刷)/i.test(String(v||""))}
function registerContactUnlock(){
  var now=Date.now(),windowMs=10*60*1000;
  state.contactUnlockEvents=state.contactUnlockEvents.filter(function(t){return now-t<windowMs});
  if(state.contactUnlockEvents.length>=5)return false;
  state.contactUnlockEvents.push(now);return true;
}
function toast(msg){var t=byId("toast");if(!t)return;t.textContent=msg;t.classList.add("show");clearTimeout(state.toastTimer);state.toastTimer=setTimeout(function(){t.classList.remove("show")},1800)}
function modal(html){byId("modalRoot").innerHTML='<div class="modalBg" id="modalBg"><div class="modal">'+html+'</div></div>';byId("modalBg").onclick=function(x){if(x.target.id==="modalBg")closeModal()}}
function closeModal(){byId("modalRoot").innerHTML=""}
function status(s){return {active:["招募中","green"],paused:["暂停接收","warn"],full:["已招满","blue"],ended:["已结束",""]}[s]||["未知",""]}
function empty(a,b){return '<div class="panel empty"><h3>'+e(a)+'</h3><p>'+e(b)+'</p></div>'}
function badges(arr){return arr.map(function(x){return '<span class="badge">'+e(x)+'</span>'}).join("")}

function navIcon(r){return {home:"⌂",explore:"⌕",progress:"◎",profile:"○"}[r]||"•"}
function title(){return {home:"首页",explore:"寻找",detail:"招募详情",candidate:"候选人详情",progress:"组队 / 进度",profile:"我的",profileEdit:"编辑个人档案",publish:"发布 / 编辑招募",auth:"学校身份认证"}[state.route]||"竞旅 CompMate"}
function activeRoute(){
  if(state.route==="detail"||state.route==="candidate"||state.route==="explore")return"explore";
  if(state.route==="progress")return"progress";
  if(state.route==="profileEdit")return"profile";
  return state.route;
}
function navButton(r,label,count){
  var on=activeRoute()===r;
  return '<button class="navBtn '+(on?"active":"")+'" onclick="go(\''+r+'\')"><span class="navIcon">'+navIcon(r)+'</span><span>'+label+'</span>'+(count?'<span class="navCount">'+count+'</span>':'')+'</button>';
}
function mNav(r,label){
  var on=activeRoute()===r;
  return '<button class="mNav '+(on?"active":"")+'" onclick="go(\''+r+'\')"><b>'+navIcon(r)+'</b><span>'+label+'</span></button>';
}
function shell(){
  var pending=state.relationships.filter(function(x){return x.status==="pending"}).length;
  byId("app").innerHTML=
    '<div class="shell"><aside class="sidebar">'+
      '<div class="brand"><div class="brandMark">C</div><div><div class="brandName">竞旅 CompMate</div><div class="brandSub">大学生竞赛组队平台</div></div></div>'+
      '<nav class="nav">'+navButton("home","首页")+navButton("explore","寻找")+navButton("progress","组队 / 进度",pending)+navButton("profile","我的")+'</nav>'+
      '<div class="sideBottom"><div class="identity"><span class="dot"></span>'+(state.verified?"广东工业大学 · 已认证":"学校身份未认证")+'<br><span style="color:#8f96a1">联系方式按沟通关系授权</span></div><button class="sideGhost" onclick="demoShare()">演示：外部分享进入</button></div>'+
    '</aside><main class="main"><header class="topbar"><div><div class="eyebrow">竞旅 CompMate</div><h1 class="pageTitle">'+title()+'</h1></div><div class="topActions"><div class="timePill"><span>当前可投入</span><b>'+Math.max(0,remaining())+'h</b></div></div></header><div id="page"></div></main></div>'+
    (state.route!=="publish"?'<button class="fabPublish" onclick="beginPublish()"><span>＋</span><b>发布招募</b></button>':'')+
    '<nav class="mobileNav">'+mNav("home","首页")+mNav("explore","寻找")+mNav("progress","进度")+mNav("profile","我的")+'</nav>';
}
function demoBar(){
  return '<details class="demoGuide"><summary>演示指引</summary><div><span>建议路径：寻找 → 招募详情 → 申请 / 沟通 → 正式确认 → 组队</span><button onclick="go(\'explore\')">从“寻找”开始</button></div></details>';
}
function go(r){
  state.route=r;
  render();
  window.scrollTo(0,0);
}
function render(){
  shell();
  var p=byId("page");
  if(state.route==="home")renderHome(p);
  else if(state.route==="explore")renderExplore(p);
  else if(state.route==="detail")renderDetail(p);
  else if(state.route==="candidate")renderCandidate(p);
  else if(state.route==="progress")renderProgress(p);
  else if(state.route==="profile")renderProfile(p);
  else if(state.route==="profileEdit")renderProfileEdit(p);
  else if(state.route==="publish")renderPublish(p);
  else if(state.route==="auth")renderAuth(p);
}

/* HOME */
function renderHome(p){
  var pending=state.relationships.filter(function(x){return x.status==="pending"}).length;
  var communicating=state.relationships.filter(function(x){return x.status==="communication"}).length;
  var confirming=state.relationships.filter(function(x){return x.status==="confirming"}).length;
  var recommended=recruits.filter(function(r){return r.status==="active"&&roleFree(r)>0}).slice(0,3);
  var used=Math.max(0,state.committed+state.reserved);
  var pct=state.total?Math.min(100,Math.round(used/state.total*100)):0;
  var pendingAction=state.pendingApplyRecruitId?'<article class="todoBoard pendingResume" onclick="continuePendingApply()"><div class="statusBoardHead"><span>CONTINUE</span><h3>继续此前申请</h3></div><b>'+e(findRecruit(state.pendingApplyRecruitId)?findRecruit(state.pendingApplyRecruitId).title:"原招募")+'</b><p>认证曾中断，招募仍有效时可以继续。</p><em>继续申请 →</em></article>':
    '<article class="todoBoard" onclick="go(\'progress\')"><div class="statusBoardHead"><span>NEXT ACTION</span><h3>下一步</h3></div><b>处理 '+pending+' 条新邀请 / 申请</b><p>在沟通前先确认任务、时间和目标。</p><em>进入组队 / 进度 →</em></article>';

  p.innerHTML=
    '<section class="brandBanner compactBrand"><div class="brandBannerMark">C</div><div class="brandBannerCopy"><b>竞旅 CompMate</b><span>让每一次竞赛，更快遇见合适的队友。</span></div><div class="brandBannerTrust">GDUT 校园试点 · 双向选择 · 隐私联系方式</div></section>'+
      '<section class="homeCoreEntry"><button onclick="state.mode=\'teams\';go(\'explore\')"><span>找队伍</span><small>浏览正在招募的真实任务</small><em>→</em></button><button onclick="state.mode=\'people\';go(\'explore\')"><span>找队友</span><small>围绕具体缺口筛选候选人</small><em>→</em></button></section>'+
    '<section class="homeWorkbench">'+
      '<div class="smartRecommendPanel"><div class="smartPanelHead"><div><span>RECOMMEND</span><h2>可能适合你</h2><p>根据具体任务、当前可投入时间与参赛目标给出可解释推荐。</p></div><button class="btn text" onclick="go(\'explore\')">去寻找 →</button></div>'+
      '<div class="smartRecommendList">'+recommended.map(smartRecommendRow).join("")+'</div><div class="recommendFoot"><span>推荐仅辅助发现</span><small>不做综合匹配分，只展示可解释的匹配点与风险。</small></div></div>'+
      '<aside class="competitionReminder"><div class="smartPanelHead compact"><div><span>MY DEADLINES</span><h2>与你相关的竞赛节点</h2><p>只展示正在找队、已组队或已发布招募的近期节点。</p></div></div>'+
      '<div class="reminderTimeline">'+reminderRow("10/18","挑战杯","组队截止","你正在沟通 1 个岗位","hot")+reminderRow("10/20","正大杯","组队节点","你有 1 条待处理邀请","")+reminderRow("10/28","CompMate 项目","招募截止","你的视觉设计岗仍在招募","")+reminderRow("11 月","互联网+","项目推进","相关招募已暂停接收","future")+'</div></aside>'+
    '</section>'+
    '<section class="homeStatusGrid">'+
      '<article class="statusBoard"><div class="statusBoardHead"><span>MY STATUS</span><h3>我的组队状态</h3></div><div class="statusNumbers"><button onclick="go(\'progress\')"><b>'+pending+'</b><span>待处理</span></button><button onclick="go(\'progress\')"><b>'+communicating+'</b><span>待沟通</span></button><button onclick="go(\'progress\')"><b>'+confirming+'</b><span>确认中</span></button></div></article>'+
      '<article class="timeBoard"><div class="statusBoardHead"><span>TIME CAPACITY</span><h3>本周时间</h3></div><div class="timeBoardMain"><div><b>'+Math.max(0,remaining())+'h</b><span>仍可投入 / 总 '+state.total+'h</span></div><div class="miniTimeBar"><i style="width:'+pct+'%"></i></div><small>已占用 '+used+'h · 正式项目 '+state.committed+'h'+(state.reserved?' · 临时预留 '+state.reserved+'h':'')+'</small></div></article>'+
      pendingAction+
    '</section>';
}
function smartRecommendRow(r){
  var timeOk=remaining()>=r.role.hours;
  return '<article class="smartRecommendRow" onclick="openRecruit('+r.id+')"><div class="smartRecMain"><div class="smartRecMeta">'+e(r.comp)+' · '+e(r.campus)+'</div><b>'+e(r.title)+'</b><p>'+e(r.role.task)+'</p><div class="smartRecTags"><span>'+e(r.role.name)+'</span><span>'+r.role.hours+'h / 周</span><span>'+e(r.target)+'</span></div></div>'+
    '<div class="smartRecReason"><span>匹配维度</span><div class="matchDims"><i>任务契合</i><i class="'+(timeOk?"ok":"warn")+'">'+(timeOk?"时间满足":"时间风险")+'</i><i>目标可对齐</i></div><small>'+r.reasons.join(" · ")+' · 剩余 '+roleFree(r)+' 个名额</small></div><span class="smartRecArrow">→</span></article>';
}
function reminderRow(date,comp,label,sub,tone){
  return '<div class="reminderRow '+(tone||"")+'"><div class="reminderDate">'+date+'</div><div class="reminderLine"><span></span></div><div class="reminderContent"><b>'+e(comp)+'</b><strong>'+e(label)+'</strong><small>'+e(sub)+'</small></div></div>';
}

/* EXPLORE */
function renderExplore(p){
  var isTeams=state.mode!=="people";
  var r=activeManagedRecruit();
  p.innerHTML=
    '<section class="exploreHeader"><div><span class="pageKicker">EXPLORE</span><h2>寻找</h2><p>主动搜索与筛选是主路径；推荐只帮助你更快缩小范围。</p></div></section>'+
    '<div class="exploreSwitch"><button class="'+(isTeams?"active":"")+'" onclick="state.mode=\'teams\';render()"><b>找队伍</b><span>我要加入一支队伍</span></button><button class="'+(!isTeams?"active":"")+'" onclick="state.mode=\'people\';render()"><b>找队友</b><span>我的队伍还缺人</span></button></div>'+
    (isTeams?renderTeamSearch():renderPeopleSearch(r));
}
function renderTeamSearch(){
  var list=filteredTeams("");
  return '<section class="filterPanel"><div class="filterSearch"><span>⌕</span><input id="searchBox" placeholder="搜索竞赛、角色、任务或技能" oninput="applyExploreFilters()"></div><div class="filterChips">'+
    filterButton("team","campus","同校 / 同校区",state.teamFilters.campus)+filterButton("team","time","时间可行",state.teamFilters.time)+filterButton("team","active","仅看招募中",state.teamFilters.active)+filterButton("team","award","冲奖目标",state.teamFilters.award)+'</div></section>'+
    '<div class="categoryRibbon"><span>按方向：</span>'+categoryButton("team","innovation","创新创业")+categoryButton("team","market","市场调研")+categoryButton("team","tech","科技科研")+categoryButton("team","math","数学建模")+'</div>'+
    '<div class="resultsHead"><div><b>队伍招募</b><span id="resultCount">'+recruits.length+' 条结果</span></div><span>任务、时间和风险分开呈现</span></div>'+
    '<div id="hallList" class="teamResultList">'+list.map(teamResultRow).join("")+'</div>';
}
function renderPeopleSearch(r){
  var list=filteredCandidates("");
  return '<section class="roleContext"><div class="roleContextMain"><span>当前招募岗位</span><b>'+e(r.comp)+' · '+e(r.role.name)+'</b><small>'+e(r.role.task)+' · 最低 '+r.role.hours+'h / 周</small></div><div class="roleRequirement"><span>必需技能</span><b>'+e(r.role.skills.join(" · "))+'</b></div><button class="btn secondary" onclick="openRolePicker()">切换岗位</button></section>'+
    '<section class="filterPanel"><div class="filterSearch"><span>⌕</span><input id="searchBox" placeholder="搜索技能、专业、经历或任务" oninput="applyExploreFilters()"></div><div class="filterChips">'+
    filterButton("people","time","时间满足",state.peopleFilters.time)+filterButton("people","output","有相关产出",state.peopleFilters.output)+filterButton("people","campus","同校区",state.peopleFilters.campus)+filterButton("people","target","目标一致",state.peopleFilters.target)+'</div></section>'+
    '<div class="categoryRibbon"><span>按能力：</span>'+categoryButton("people","data","数据分析")+categoryButton("people","front","前端开发")+categoryButton("people","research","用户调研")+categoryButton("people","design","视觉设计")+'</div>'+
    '<div class="resultsHead"><div><b>候选人</b><span id="resultCount">'+list.length+' 人</span></div><span>学校认证 ≠ 能力认证</span></div>'+
    '<div id="hallList" class="peopleResultList">'+list.map(personResultRow).join("")+'</div>';
}
function filterButton(kind,key,label,on){
  return '<button class="'+(on?"on":"")+'" onclick="toggleFilter(\''+kind+'\',\''+key+'\',this)">'+e(label)+'</button>';
}
function categoryButton(kind,key,label){
  var current=kind==="team"?state.teamFilters.category:state.peopleFilters.capability;
  return '<button class="'+(current===key?"active":"")+'" onclick="setCategory(\''+kind+'\',\''+key+'\',this)">'+e(label)+'</button>';
}
function toggleFilter(kind,key,b){
  var target=kind==="team"?state.teamFilters:state.peopleFilters;
  target[key]=!target[key];
  b.classList.toggle("on",target[key]);
  applyExploreFilters();
}
function setCategory(kind,key,b){
  var target=kind==="team"?state.teamFilters:state.peopleFilters;
  var prop=kind==="team"?"category":"capability";
  target[prop]=target[prop]===key?"":key;
  var bar=b.parentNode;
  Array.prototype.forEach.call(bar.querySelectorAll("button"),function(x){x.classList.remove("active")});
  if(target[prop])b.classList.add("active");
  applyExploreFilters();
}
function teamCategory(r){
  if(r.category)return r.category;
  if(/建模/.test(r.comp))return"math";
  if(/正大|行业|市场/.test(r.comp))return"market";
  if(/挑战|互联网/.test(r.comp))return"innovation";
  return"tech";
}
function candidateCapability(c,key){
  var text=(c.roles.concat(c.skills).join(" ")).toLowerCase();
  if(key==="data")return /数据|python|spss|建模/.test(text);
  if(key==="front")return /前端|react|javascript|html/.test(text);
  if(key==="research")return /调研|访谈|报告|商业/.test(text);
  if(key==="design")return /视觉|figma|ppt|ps/.test(text);
  return true;
}
function filteredTeams(q){
  q=(q||"").toLowerCase();
  return recruits.filter(function(r){
    if(q&&JSON.stringify(r).toLowerCase().indexOf(q)<0)return false;
    if(state.teamFilters.campus&&r.campus!=="龙洞校区")return false;
    if(state.teamFilters.time&&remaining()<r.role.hours)return false;
    if(state.teamFilters.active&&!(r.status==="active"&&roleFree(r)>0))return false;
    if(state.teamFilters.award&&!isAwardGoal(r.target))return false;
    if(state.teamFilters.category&&teamCategory(r)!==state.teamFilters.category)return false;
    return true;
  });
}
function candidateFit(c,r){
  var overlap=c.skills.filter(function(s){return r.role.skills.indexOf(s)>=0});
  var roleText=c.roles.join(" ");
  var taskMatch=overlap.length>0||roleText.indexOf(r.role.name)>=0||
    (r.role.name.indexOf("视觉")>=0&&roleText.indexOf("视觉")>=0)||
    (r.role.name.indexOf("商业")>=0&&roleText.indexOf("商业")>=0)||
    (r.role.name.indexOf("数据")>=0&&/数据|建模/.test(roleText));
  var timeOk=c.hours>=r.role.hours;
  var campusOk=c.campus===r.campus;
  var targetOk=goalAligned(r.target,c.target);
  var dims=[];
  dims.push(taskMatch?"任务相关":"任务需确认");
  dims.push(timeOk?"时间满足":"时间不足");
  if(targetOk)dims.push("目标可对齐");
  if(campusOk)dims.push("同校区");
  return {taskMatch:taskMatch,timeOk:timeOk,campusOk:campusOk,targetOk:targetOk,overlap:overlap,dims:dims};
}
function filteredCandidates(q){
  q=(q||"").toLowerCase();
  var r=activeManagedRecruit();
  return candidates.filter(function(c){
    if(state.blocked[c.id])return false;
    if(q&&JSON.stringify(c).toLowerCase().indexOf(q)<0)return false;
    var fit=candidateFit(c,r);
    if(state.peopleFilters.time&&!fit.timeOk)return false;
    if(state.peopleFilters.output&&!c.proof)return false;
    if(state.peopleFilters.campus&&!fit.campusOk)return false;
    if(state.peopleFilters.target&&!fit.targetOk)return false;
    if(state.peopleFilters.capability&&!candidateCapability(c,state.peopleFilters.capability))return false;
    return true;
  });
}
function applyExploreFilters(){
  var q=byId("searchBox")?byId("searchBox").value:"";
  var box=byId("hallList");
  if(!box)return;
  if(state.mode==="people"){
    var people=filteredCandidates(q);
    box.innerHTML=people.map(personResultRow).join("")||empty("没有合适候选人","可以放宽非核心条件；时间与任务风险仍会单独展示。");
    if(byId("resultCount"))byId("resultCount").textContent=people.length+" 人";
  }else{
    var teams=filteredTeams(q);
    box.innerHTML=teams.map(teamResultRow).join("")||empty("没有严格匹配结果","可以放宽非核心条件；硬条件仍保留。");
    if(byId("resultCount"))byId("resultCount").textContent=teams.length+" 条结果";
  }
}
function openRolePicker(){
  var rows=managedRecruitments.filter(function(r){return r.status!=="ended"}).map(function(r){
    return '<button class="rolePick '+(r.id===state.activeRoleRecruitId?"active":"")+'" onclick="chooseRole('+r.id+')"><div><b>'+e(r.comp)+' · '+e(r.role.name)+'</b><span>'+e(r.role.task)+'</span></div><small>'+r.role.hours+'h / 周 · '+e(r.campus)+'</small></button>';
  }).join("");
  modal('<h2>切换招募岗位</h2><p class="subtitle">找队友必须绑定一个具体招募缺口。切换后候选人的时间、任务和推荐理由会重新计算。</p><div class="rolePicker">'+rows+'</div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">关闭</button></div>');
}
function chooseRole(id){
  state.activeRoleRecruitId=id;
  closeModal();
  toast("已切换招募岗位");
  render();
}
function teamResultRow(r){
  var st=status(r.status),free=roleFree(r),risk=r.role.hours>remaining();
  return '<article class="teamResult" onclick="openRecruit('+r.id+')"><div class="teamResultMain"><div class="resultTopline"><span>'+e(r.comp)+'</span><span>'+e(r.school)+' · '+e(r.campus)+'</span></div><h3>'+e(r.title)+'</h3><p>'+e(r.role.task)+'</p><div class="resultTags"><span class="strong">'+e(r.role.name)+'</span>'+r.role.skills.slice(0,3).map(function(x){return '<span>'+e(x)+'</span>'}).join("")+'</div></div><div class="teamResultFacts"><div><span>时间</span><b>'+r.role.hours+'h / 周</b></div><div><span>目标</span><b>'+e(r.target)+'</b></div><div><span>名额</span><b>'+free+' / '+r.role.capacity+'</b></div></div><div class="teamResultDecision"><span class="status '+st[1]+'">'+st[0]+'</span><div class="matchBox"><b>为什么推荐</b><small>'+r.reasons.join(" · ")+'</small>'+(risk?'<small class="riskText">当前时间可能不足</small>':'')+'</div><button class="btn primary">查看详情</button></div></article>';
}
function personResultRow(c){
  var r=activeManagedRecruit(),fit=candidateFit(c,r);
  return '<article class="personResult" onclick="openCandidate('+c.id+')"><div class="personIdentity"><div class="personAvatar">'+e(c.name.charAt(0))+'</div><div><h3>'+e(c.name)+'</h3><span>'+e(c.grade)+' · '+e(c.major)+'</span><small>'+e(c.campus)+' · 学校已认证</small></div></div><div class="personCapability"><span>可承担</span><b>'+e(c.roles.join(" / "))+'</b><div class="resultTags">'+c.skills.slice(0,4).map(function(x){return '<span>'+e(x)+'</span>'}).join("")+'</div><p>'+e(c.exp)+'</p></div><div class="personFit"><div><span>可投入</span><b>'+c.hours+'h / 周</b></div><div><span>目标</span><b>'+e(c.target)+'</b></div><div class="matchBox"><b>针对 '+e(r.role.name)+'</b><small>'+fit.dims.join(" · ")+'</small>'+(!fit.timeOk?'<small class="riskText">低于岗位要求 '+r.role.hours+'h / 周</small>':'')+'</div><button class="btn primary" onclick="event.stopPropagation();inviteCandidate('+c.id+')">邀请沟通</button></div></article>';
}

/* RECRUITMENT DETAIL / APPLY */
function openRecruit(id){state.selectedRecruit=id;state.route="detail";render();window.scrollTo(0,0)}
function activeCandidateRelationForRecruit(id){
  return state.relationships.filter(function(x){
    return x.recruitId===id&&x.status!=="ended"&&currentUserIsCandidate(x);
  })[0]||null;
}
function relationButtonLabel(x){
  if(!x)return"申请加入";
  return {pending:"查看申请进度",communication:"查看沟通进度",confirming:"查看确认进度",joined:"已正式组队"}[x.status]||"查看进度";
}
function renderDetail(p){
  var r=findRecruit(state.selectedRecruit)||recruits[0],ro=r.role,st=status(r.status),free=roleFree(r),existing=activeCandidateRelationForRecruit(r.id),hard=userMeetsRecruitHardRules(r);
  var canApply=r.status==="active"&&free>0&&remaining()>=0&&!existing&&hard.ok;
  var actionLabel=existing?relationButtonLabel(existing):(r.status==="paused"?"暂停接收申请":free<=0?(ro.formal>=ro.capacity?"已招满":"名额确认中"):remaining()<0?"当前时间不可申请":!hard.ok?hard.reason:"申请加入");
  var actionClick=existing?"go('progress')":"applyRecruit("+r.id+")";
  p.innerHTML='<button class="btn text" onclick="state.mode=\'teams\';go(\'explore\')">← 返回寻找 · 找队伍</button><div class="layout"><div class="panel">'+
    '<div class="between"><div><div class="meta">'+e(r.comp)+' · '+e(r.school)+' '+e(r.campus)+'</div><div class="bigTitle">'+e(r.title)+'</div></div><span class="status '+st[1]+'">'+st[0]+'</span></div>'+
    '<div class="badges"><span class="badge green">队长学校身份已认证</span><span class="badge">'+e(r.leader)+' · 队长</span><span class="badge">'+e(r.period)+'</span></div>'+
    '<div class="section"><h3 class="sectionTitle">队伍现状</h3><div class="kv" style="margin-top:12px"><div class="k">当前成员</div><div>'+e(r.team)+'</div><div class="k">当前进度</div><div>'+e(r.progress)+'</div><div class="k">参赛目标</div><div>'+e(r.target)+'</div><div class="k">项目周期</div><div>'+e(r.period)+'</div><div class="k">招募截止</div><div>'+e(r.deadline)+'</div></div></div>'+
    '<div class="section"><h3 class="sectionTitle">角色缺口</h3><div class="roleBox"><div class="between"><div><b>'+e(ro.name)+'</b><div class="meta" style="margin-top:4px">'+ro.formal+'/'+ro.capacity+' 已正式加入'+(ro.reserved?' · '+ro.reserved+' 个名额确认中':'')+'</div></div><span class="status '+(ro.reserved?"warn":"green")+'">'+(ro.formal>=ro.capacity?"已招满":ro.reserved?"名额确认中":"可申请")+'</span></div><p class="subtitle">'+e(ro.task)+'</p><div class="badges">'+badges(ro.skills)+'<span class="badge blue">最低 '+ro.hours+'h / 周</span></div></div></div>'+
    '<div class="section"><h3 class="sectionTitle">协作预期</h3><p class="subtitle">'+e(r.collab)+'</p></div></div>'+
    '<aside class="panel sticky"><h3 class="sectionTitle">与你的匹配情况</h3><div class="reasons" style="margin-top:12px"><b>推荐理由</b><br>'+r.reasons.join(" · ")+'</div><div class="stats"><div class="stat"><b>'+Math.max(0,remaining())+'h</b><span>当前可投入</span></div><div class="stat"><b>'+ro.hours+'h</b><span>岗位最低投入</span></div><div class="stat"><b>'+free+'</b><span>可用名额</span></div></div>'+
    (ro.hours>remaining()?'<div class="notice warn" style="margin-top:12px">当前时间低于最低要求：可以先沟通，但正式组队前必须满足最新要求。</div>':'<div class="notice good" style="margin-top:12px">当前时间条件满足。申请仍只代表沟通意向。</div>')+
    (r.status==="paused"?'<div class="notice warn" style="margin-top:10px">队长已暂停接收新的加入申请；已有关系仍可继续。</div>':'')+
    (!hard.ok&&!existing?'<div class="notice warn" style="margin-top:10px">'+e(hard.reason)+'。你仍可查看详情，但不能提交申请。</div>':'')+
    '<div class="actions"><button class="btn text" onclick="reportRecruit('+r.id+')">举报 / 反馈</button><button class="btn secondary" onclick="shareRecruit('+r.id+')">分享招募</button><button class="btn primary push" '+((canApply||existing)?'':'disabled')+' onclick="'+actionClick+'">'+actionLabel+'</button></div></aside></div>';
}
function applyRecruit(id){
  var r=findRecruit(id);
  if(!r)return;
  var existing=activeCandidateRelationForRecruit(id);
  if(existing){state.progressView="relations";go("progress");return}
  if(r.status!=="active"){toast("该招募当前不接收新的申请");return}
  if(deadlinePassed(r)){toast("该招募已过截止时间，不能新增申请");return}
  if(roleFree(r)<=0){toast(r.role.formal>=r.role.capacity?"角色已正式招满":"名额正在被其他候选人确认");return}
  var hard=userMeetsRecruitHardRules(r);if(!hard.ok){toast(hard.reason);return}
  if(remaining()<0){toast("当前承诺时间已超出声明总时间，请先调整");return}
  if(!state.loggedIn||!state.verified){
    state.selectedRecruit=id;state.pendingApplyRecruitId=id;state.authReturn="apply";go("auth");return;
  }
  if(!state.profileComplete){
    state.selectedRecruit=id;state.profileReturn="apply";go("profileEdit");toast("请先完成最小个人档案");return;
  }
  if(!hasUserContact()){state.selectedRecruit=id;state.profileReturn="apply";go("profileEdit");toast("发起申请前请至少填写并授权一种联系方式");return}
  var short=remaining()<r.role.hours;
  modal('<h2>提交加入申请</h2><p class="subtitle">申请只代表愿意进一步沟通，不会直接加入队伍或占用正式名额。</p>'+
    (short?'<div class="notice warn">当前剩余 '+Math.max(0,remaining())+'h / 周，低于岗位 '+r.role.hours+'h / 周。可以申请沟通，但正式组队前必须满足最新时间要求。</div>':'<div class="notice good">当前剩余 '+remaining()+'h / 周，岗位要求 '+r.role.hours+'h / 周，时间条件满足。</div>')+
    '<div class="formGrid" style="margin-top:14px"><div class="field"><label>首选角色</label><input class="input" value="'+e(r.role.name)+'"></div><div class="field"><label>可接受其他角色</label><input class="input" value="可协商"></div><div class="field full"><label>补充说明</label><textarea class="textarea">我有相关项目经历，希望进一步了解具体分工和时间安排。</textarea></div></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="submitApplication('+id+')">提交申请</button></div>');
}
function submitApplication(id){
  var r=findRecruit(id);
  if(!r)return;
  if(activeCandidateRelationForRecruit(id)){closeModal();toast("该招募已有进行中的关系");state.progressView="relations";go("progress");return}
  state.relationships.unshift({id:Date.now(),type:"application",direction:"outgoing",recruitId:r.id,title:r.comp+" · "+r.role.name,party:r.leader,role:r.role.name,status:"pending",time:"刚刚",contact:false,initiator:null,reserved:false,reservedHours:0,partyContact:"team_contact",expiresAt:Date.now()+7*24*60*60*1000});
  state.pendingApplyRecruitId=null;
  closeModal();toast("申请已提交，等待队长处理");state.progressView="relations";go("progress");
}

/* SHARE / AUTH CONTEXT */
function shareRecruit(id){
  var r=findRecruit(id);if(!r)return;
  modal('<h2>外部分享卡</h2><div class="panel" style="padding:15px;background:#f8f9fb"><div class="meta">'+e(r.comp)+'</div><div class="title">'+e(r.title)+'</div><p class="subtitle">'+e(r.role.task)+'</p><div class="badges"><span class="badge blue">'+e(r.role.name)+'</span><span class="badge">'+r.role.hours+'h / 周</span><span class="badge">'+e(r.target)+'</span></div><div class="meta">私人联系方式不会出现在分享内容中。</div></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal();toast(\'已复制结构化招募文本\')">复制文本</button><button class="btn secondary" onclick="demoExpiredShare()">演示失效链接</button><button class="btn primary" onclick="closeModal();demoShare('+id+')">模拟外部打开</button></div>');
}
function copyShareLink(id){closeModal();toast("分享链接已复制；私人联系方式不会包含在链接内容中")}
function demoShare(id){
  state.loggedIn=false;state.verified=false;if(id)state.selectedRecruit=id;state.pendingApplyRecruitId=null;state.route="detail";render();
  modal('<h2>外部分享访问</h2><p class="subtitle">当前模拟从微信群打开分享链接的未登录访客。访客可以先查看完整公开招募，点击申请时再登录 / 学校认证。</p><div class="modalFoot"><button class="btn primary" onclick="closeModal()">查看招募</button></div>');
}
function demoExpiredShare(){
  closeModal();
  var a=recruits[0],b=recruits[4];
  modal('<h2>原招募已失效</h2><div class="notice warn">原分享对应的角色已经正式招满，不能继续提交申请。</div><p class="subtitle" style="margin-top:12px">你仍可查看同类有效招募：</p><div class="rolePicker"><button class="rolePick" onclick="closeModal();openRecruit('+a.id+')"><div><b>'+e(a.comp)+' · '+e(a.role.name)+'</b><span>'+e(a.role.task)+'</span></div><small>查看 →</small></button><button class="rolePick" onclick="closeModal();openRecruit('+b.id+')"><div><b>'+e(b.comp)+' · '+e(b.role.name)+'</b><span>'+e(b.role.task)+'</span></div><small>查看 →</small></button></div>');
}
function continuePendingApply(){
  var id=state.pendingApplyRecruitId;
  if(!id){go("explore");return}
  state.selectedRecruit=id;state.route="detail";render();
  setTimeout(function(){applyRecruit(id)},150);
}

/* CANDIDATE / INVITE */
function openCandidate(id){state.selectedCandidate=id;state.route="candidate";render();window.scrollTo(0,0)}
function renderCandidate(p){
  var c=candidates.filter(function(x){return x.id===state.selectedCandidate})[0]||candidates[0];
  var r=activeManagedRecruit(),fit=candidateFit(c,r),hard=candidateMeetsHardRules(c,r),existingInvite=activeInviteForCandidate(r.id,c.id);
  p.innerHTML='<button class="btn text" onclick="state.mode=\'people\';go(\'explore\')">← 返回寻找 · 找队友</button><div class="layout"><div class="panel"><div class="profileHero"><div class="avatar">'+e(c.name.charAt(0))+'</div><div><div class="bigTitle" style="margin:0">'+e(c.name)+'</div><div class="meta">广东工业大学 · '+e(c.campus)+' · '+e(c.grade)+' · '+e(c.major)+'</div></div><span class="verifiedTag">学校已认证</span></div>'+
    '<div class="section"><h3 class="sectionTitle">可承担任务与技能</h3><div class="badges">'+c.roles.map(function(x){return '<span class="badge blue">'+e(x)+'</span>'}).join("")+badges(c.skills)+'</div></div>'+
    '<div class="section"><h3 class="sectionTitle">相关经历与具体产出</h3><div class="roleBox"><b>'+e(c.exp.split(" · ")[0])+'</b><p class="subtitle">'+e(c.exp.split(" · ").slice(1).join(" · "))+'</p></div></div>'+
    '<div class="section"><h3 class="sectionTitle">时间与目标</h3><div class="kv" style="margin-top:12px"><div class="k">当前可投入</div><div>'+c.hours+'h / 周</div><div class="k">参赛目标</div><div>'+e(c.target)+'</div><div class="k">联系方式</div><div>未解锁 · 双方同意沟通后按次展示</div></div></div></div>'+
    '<aside class="panel sticky"><h3 class="sectionTitle">针对「'+e(r.role.name)+'」的判断</h3><div class="reasons" style="margin-top:12px"><b>匹配维度</b><br>'+fit.dims.join(" · ")+'</div>'+(!fit.timeOk?'<div class="notice warn" style="margin-top:10px">该同学当前可投入 '+c.hours+'h / 周，低于岗位要求 '+r.role.hours+'h / 周。</div>':'')+(!hard.ok?'<div class="notice warn" style="margin-top:10px">'+e(hard.reason)+'。资料仍可查看，但不能发起邀请。</div>':'')+'<div class="actions"><button class="btn secondary" onclick="candidateMore('+c.id+')">更多</button><button class="btn primary push" '+((hard.ok&&!existingInvite)?'':'disabled')+' onclick="inviteCandidate('+c.id+')">'+(existingInvite?"查看邀请进度":hard.ok?"邀请沟通":"当前不可邀请")+'</button></div></aside></div>';
}
function activeInviteForCandidate(recruitId,candidateId){
  return state.relationships.filter(function(x){return x.type==="invitation"&&x.direction==="outgoing"&&x.recruitId===recruitId&&x.candidateId===candidateId&&x.status!=="ended"})[0]||null;
}
function inviteCandidate(id){
  var c=candidates.filter(function(x){return x.id===id})[0],r=activeManagedRecruit();
  if(!c||!r)return;
  if(activeInviteForCandidate(r.id,c.id)){toast("该候选人在此招募下已有进行中的邀请");state.progressView="relations";go("progress");return}
  if(!state.loggedIn||!state.verified){state.authReturn="invite";state.selectedCandidate=id;go("auth");return}
  if(!state.profileComplete){state.profileReturn="invite";state.selectedCandidate=id;go("profileEdit");toast("请先完成最小个人档案");return}
  if(!hasUserContact()){state.profileReturn="invite";state.selectedCandidate=id;go("profileEdit");toast("发送邀请前请至少填写并授权一种联系方式");return}
  if(r.status==="full"||r.status==="ended"||deadlinePassed(r)){toast("该招募当前不能继续邀请");return}
  var hard=candidateMeetsHardRules(c,r);if(!hard.ok){toast(hard.reason);return}
  var fit=candidateFit(c,r);
  modal('<h2>邀请 '+e(c.name)+' 沟通</h2><p class="subtitle">本次邀请绑定「'+e(r.comp)+' · '+e(r.role.name)+'」，不会直接占用名额。</p><div class="kv"><div class="k">具体任务</div><div>'+e(r.role.task)+'</div><div class="k">最低投入</div><div>'+r.role.hours+'h / 周</div><div class="k">候选人时间</div><div>'+c.hours+'h / 周</div></div>'+(!fit.timeOk?'<div class="notice warn" style="margin-top:10px">时间低于当前岗位要求，建议先沟通是否能调整。</div>':'')+'<div class="field" style="margin-top:12px"><label>邀请说明</label><textarea class="textarea">你的经历与当前任务比较匹配，希望进一步聊聊具体分工和时间安排。</textarea></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="sendInvitation('+c.id+','+r.id+')">发送邀请</button></div>');
}
function sendInvitation(candidateId,recruitId){
  var c=candidates.filter(function(x){return x.id===candidateId})[0],r=findRecruit(recruitId);
  if(!c||!r)return;
  if(activeInviteForCandidate(recruitId,candidateId)){closeModal();toast("已有进行中的邀请");return}
  state.relationships.unshift({id:Date.now(),type:"invitation",direction:"outgoing",recruitId:r.id,candidateId:c.id,title:r.comp+" · "+r.role.name,party:c.name,role:r.role.name,status:"pending",time:"刚刚",contact:false,initiator:null,reserved:false,reservedHours:0,partyContact:c.contact,expiresAt:Date.now()+7*24*60*60*1000});
  closeModal();toast("邀请已发送，可在组队 / 进度查看");state.progressView="relations";go("progress");
}
function candidateMore(id){
  modal('<h2>更多操作</h2><p class="subtitle">平台不做公开能力评分；拉黑只影响未来新的搜索、推荐、申请与邀请。</p><div class="modalFoot"><button class="btn secondary" onclick="reportUser('+id+')">举报</button><button class="btn danger" onclick="blockUser('+id+')">拉黑</button></div>');
}
function blockUser(id){
  state.blocked[id]=true;
  state.relationships.forEach(function(x){
    if(x.candidateId===id&&x.status!=="joined"&&x.status!=="ended"){
      releaseReservation(x);
      x.status="ended";
      x.reason="已拉黑，未完成关系同时结束";
    }
  });
  closeModal();toast("已拉黑，未完成关系与临时预留已释放");state.mode="people";go("explore");
}

/* PROGRESS / STATE MACHINE */
function renderProgress(p){
  var pending=state.relationships.filter(function(x){return x.status==="pending"}).length;
  var communication=state.relationships.filter(function(x){return x.status==="communication"}).length;
  var confirming=state.relationships.filter(function(x){return x.status==="confirming"}).length;
  var joined=Math.max(state.relationships.filter(function(x){return x.status==="joined"}).length,state.joined?1:0);
  p.innerHTML=demoBar()+
    '<section class="progressHero"><div><span class="pageKicker">TEAMING PROGRESS</span><h2>组队 / 进度</h2><p>申请、沟通、确认和正式队伍统一放在一条状态链里。</p></div><div class="progressStats"><div><b>'+pending+'</b><span>待处理</span></div><div><b>'+communication+'</b><span>待沟通</span></div><div><b>'+confirming+'</b><span>确认中</span></div><div><b>'+joined+'</b><span>已组队</span></div></div></section>'+
    '<div class="progressSwitch"><button class="'+(state.progressView==="relations"?"active":"")+'" onclick="state.progressView=\'relations\';render()">沟通与确认</button><button class="'+(state.progressView==="team"?"active":"")+'" onclick="state.progressView=\'team\';render()">我的队伍</button></div>'+
    (state.progressView==="relations"?progressRelations():progressTeam());
}
function refreshRelationExpiry(x){
  if(!x||!x.expiresAt||Date.now()<x.expiresAt)return;
  if(x.status==="pending"){
    x.status="ended";x.reason="请求已超时失效";x.expiresAt=null;
  }else if(x.status==="confirming"){
    releaseReservation(x);x.status="communication";x.initiator=null;x.reason="本次正式确认已超时，关系保留为待沟通";x.time="确认超时 · 已回到待沟通";x.expiresAt=null;
  }
}
function progressRelations(){
  state.relationships.forEach(refreshRelationExpiry);
  var tabs=[["all","全部"],["pending","待处理"],["communication","待沟通"],["confirming","正式确认中"],["joined","已组队"],["ended","已结束"]];
  var rs=state.relationships.filter(function(x){return state.tab==="all"||x.status===state.tab});
  return '<div class="tabs">'+tabs.map(function(t){return '<button class="tab '+(state.tab===t[0]?"active":"")+'" onclick="state.tab=\''+t[0]+'\';render()">'+t[1]+'</button>'}).join("")+'</div><div class="list">'+(rs.map(requestCard).join("")||empty("当前没有该状态记录","切换其他状态查看。"))+'</div>';
}
function currentUserIsCandidate(x){
  return !(x&&x.type==="invitation"&&x.direction==="outgoing");
}
function requestCard(x){
  refreshRelationExpiry(x);
  var mp={pending:["请求待处理",""],communication:["待沟通","green"],confirming:["正式确认中","warn"],joined:["已组队","blue"],ended:["已结束",""]},st=mp[x.status],act="",note="",asCandidate=currentUserIsCandidate(x),r=relationRecruit(x);
  var task=r&&r.role?'<div class="requestTask">任务：'+e(r.role.task)+'</div>':'';
  var saturated=r&&r.role.formal<r.role.capacity&&roleFree(r)<=0;
  if(x.status==="pending"){
    if(x.type==="invitation"&&x.direction==="incoming")act='<button class="btn secondary" onclick="rejectReq('+x.id+')">拒绝</button><button class="btn primary" onclick="agreeReq('+x.id+')">同意沟通</button>';
    else if(x.type==="invitation"&&x.direction==="outgoing")act='<button class="btn secondary" onclick="cancelReq('+x.id+')">撤回邀请</button><button class="btn text" onclick="simulateInviteAccepted('+x.id+')">对方同意</button>';
    else act='<button class="btn secondary" onclick="cancelReq('+x.id+')">取消申请</button>';
    note='<div class="relationMeta">请求有效期：'+e(formatExpiry(x))+'</div>';
  }
  if(x.status==="communication"){
    if(asCandidate)act='<button class="btn secondary" onclick="endComm('+x.id+')">中止沟通</button><button class="btn primary" onclick="candidateStartConfirm('+x.id+')">发起正式确认</button><button class="btn text" onclick="captainStartConfirm('+x.id+')">查看队长发起流程</button>';
    else act='<button class="btn secondary" onclick="endComm('+x.id+')">中止沟通</button><button class="btn primary" onclick="captainStartConfirm('+x.id+')">发起正式确认</button>';
    note='<div class="contactReveal"><b>本次已授权联系方式</b><span>我的微信：'+e(state.userContact||"未授权")+'</span><span>对方：'+e(x.partyContact||"已授权联系方式")+'</span><small>中止沟通后平台停止后续授权，但无法收回已被保存的站外联系方式。</small></div>';
    if(x.conditionUpdated)note+='<div class="notice warn" style="margin-top:8px">该招募条件已更新，请重新查看最新任务、时间与目标。</div>';
  }
  if(x.status==="confirming"){
    if(x.initiator==="captain"){
      if(asCandidate)act='<button class="btn secondary" onclick="rejectConfirm('+x.id+')">暂不加入</button><button class="btn primary" onclick="openCandidateAcceptCaptainConfirm('+x.id+')">确认加入</button>';
      else act='<button class="btn secondary" onclick="rejectConfirm('+x.id+')">撤回确认</button><button class="btn primary" onclick="openCandidateAcceptCaptainConfirm('+x.id+')">查看候选人确认</button>';
      note='<div class="notice warn" style="margin-top:8px">队长发起：已临时预留角色名额'+(asCandidate?"和你的约定投入":"；候选人时间不会计入队长个人时间账本")+'。'+e(formatExpiry(x))+'</div>';
    }else{
      if(asCandidate)act='<button class="btn secondary" onclick="rejectConfirm('+x.id+')">撤回确认</button><button class="btn primary" onclick="openLeaderFinalizeCandidateConfirm('+x.id+')">查看队长最终确认</button>';
      else act='<button class="btn secondary" onclick="rejectConfirm('+x.id+')">拒绝</button><button class="btn primary" onclick="openLeaderFinalizeCandidateConfirm('+x.id+')">最终确认</button>';
      note='<div class="notice" style="margin-top:8px">候选人发起：暂不预留名额；队长最终确认时按最新名额、时间和条件重新校验。'+e(formatExpiry(x))+'</div>';
    }
  }
  if(saturated&&(x.status==="pending"||x.status==="communication"))note+='<div class="notice warn" style="margin-top:8px">该角色名额正在与其他候选人确认中；当前关系保留，可等待预留释放。</div>';
  if(x.status==="joined")act='<button class="btn primary" onclick="state.progressView=\'team\';state.teamView=\''+(asCandidate?"joined":"managed")+'\';render()">查看队伍</button>';
  if(x.status==="ended")act='<button class="btn text" onclick="reportRelation('+x.id+')">举报 / 反馈</button><button class="btn secondary" onclick="blockRelationParty('+x.id+')">拉黑对方</button>';
  return '<div class="request"><div class="requestMain"><div class="between"><div class="requestTitle">'+e(x.title)+'</div><span class="status '+st[1]+'">'+st[0]+'</span></div><div class="requestSub">'+e(x.party)+' · '+e(x.role)+' · '+e(x.time)+'</div>'+task+note+(x.status==="ended"?'<div class="requestSub">'+e(x.reason||"本次关系已结束")+'</div>':'')+'</div><div class="requestActions">'+act+'</div></div>';
}
function rel(id){return state.relationships.filter(function(x){return x.id===id})[0]||null}
function relationRecruit(x){return x?findRecruit(x.recruitId):null}
function rejectReq(id){var x=rel(id);if(!x)return;x.status="ended";x.reason="你已拒绝本次邀请";toast("已拒绝，不产生负面标签");render()}
function cancelReq(id){var x=rel(id);if(!x)return;releaseReservation(x);x.status="ended";x.reason=x.type==="invitation"?"邀请已撤回":"申请已取消";toast(x.reason);render()}
function agreeReq(id){
  var x=rel(id);if(!x)return;
  if(!hasUserContact()){toast("请先补充并授权至少一种联系方式");state.profileReturn="progress";go("profileEdit");return}
  if(!x.partyContact){toast("对方当前未授权可用联系方式，暂不能进入待沟通");return}
  modal('<h2>同意沟通</h2><p class="subtitle">进入待沟通前，双方都需要至少授权一种联系方式；公开档案不会直接展示联系方式。</p><div class="notice">我的授权：微信 · '+e(state.userContact)+'</div><div class="notice" style="margin-top:8px">对方已授权：'+e(x.partyContact)+'</div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="confirmAgree('+id+')">确认并开放</button></div>');
}
function confirmAgree(id){
  var x=rel(id);if(!x)return;
  if(!hasUserContact()||!x.partyContact){toast("双方需至少授权一种联系方式后才能开始沟通");return}
  if(!registerContactUnlock()){toast("短时间联系方式解锁过于频繁，请稍后重试或完成额外验证");return}
  x.status="communication";x.contact=true;x.expiresAt=null;closeModal();toast("已进入待沟通");render();
}
function simulateInviteAccepted(id){
  var x=rel(id);if(!x)return;
  if(!hasUserContact()||!x.partyContact){toast("双方需至少授权一种联系方式后才能开始沟通");return}
  if(!registerContactUnlock()){toast("短时间联系方式解锁过于频繁，请稍后重试");return}
  x.status="communication";x.contact=true;x.expiresAt=null;x.time="刚刚 · 对方已同意";toast("对方已同意沟通，联系方式已开放");render();
}
function endComm(id){var x=rel(id);if(!x)return;releaseReservation(x);x.status="ended";x.reason="本次沟通已结束，旧的正式确认不能继续";toast("本次沟通已结束");render()}
function relationCandidate(x){
  if(!x||currentUserIsCandidate(x))return null;
  return candidates.filter(function(c){return c.id===x.candidateId})[0]||null;
}
function relationCandidateAvailable(x){
  if(currentUserIsCandidate(x))return remaining();
  var c=relationCandidate(x);
  return c?c.hours:0;
}
function releaseReservation(x){
  if(!x||!x.reserved)return;
  var r=relationRecruit(x);
  if(r)r.role.reserved=Math.max(0,r.role.reserved-1);
  if(x.reservedOnCurrentUser)state.reserved=Math.max(0,state.reserved-(x.reservedHours||0));
  x.reserved=false;x.reservedHours=0;x.reservedOnCurrentUser=false;
}
function candidateStartConfirm(id){
  var x=rel(id),r=relationRecruit(x);if(!x||!r)return;
  if(!currentUserIsCandidate(x)){toast("当前视角是队长，请使用发起确认");return}
  if(x.status!=="communication"){toast("当前关系不能发起正式确认");return}
  if(remaining()<0){toast("你当前承诺时间已超出声明总时间，请先调整");return}
  if(remaining()<r.role.hours){toast("当前可投入时间低于最新岗位要求，请先更新真实可投入时间");return}
  if(r.status==="ended"||r.role.formal>=r.role.capacity){toast("该角色当前已无法继续正式确认");return}
  modal('<h2>候选人发起正式确认</h2><p class="subtitle">候选人发起时不预留名额；队长最终确认才按最新资源完成组队。</p><div class="kv"><div class="k">角色</div><div>'+e(r.role.name)+'</div><div class="k">具体任务</div><div>'+e(r.role.task)+'</div><div class="k">项目周期</div><div>'+e(r.period)+'</div><div class="k">每周约定投入</div><div>'+r.role.hours+'h / 周</div><div class="k">当前剩余</div><div>'+Math.max(0,remaining())+'h / 周</div></div><div class="notice" style="margin-top:10px">请确认以上为最新条件；正式确认请求最长保留 24 小时。</div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">返回</button><button class="btn primary" onclick="confirmCandidateStart('+id+')">发送确认请求</button></div>');
}
function confirmCandidateStart(id){var x=rel(id);if(!x)return;x.status="confirming";x.initiator="candidate";x.time="刚刚 · 等待队长最终确认";x.expiresAt=Date.now()+24*60*60*1000;x.conditionUpdated=false;closeModal();toast("确认请求已发送");render()}
function captainStartConfirm(id){
  var x=rel(id),r=relationRecruit(x);if(!x||!r)return;
  if(x.status!=="communication"){toast("当前关系不能发起正式确认");return}
  if(r.status==="ended"||r.role.formal>=r.role.capacity){toast("角色已正式招满或招募已结束");return}
  if(r.role.formal+r.role.reserved>=r.role.capacity){toast("名额正在被其他候选人确认");return}
  var candidateAvailable=relationCandidateAvailable(x);
  if(candidateAvailable<r.role.hours){toast("候选人当前可投入时间不足，不能创建正式确认");return}
  modal('<h2>队长发起正式确认</h2><p class="subtitle">确认后会临时预留 1 个角色名额和候选人的本次约定投入，最长 24 小时。</p><div class="kv"><div class="k">角色</div><div>'+e(r.role.name)+'</div><div class="k">具体任务</div><div>'+e(r.role.task)+'</div><div class="k">项目周期</div><div>'+e(r.period)+'</div><div class="k">每周约定投入</div><div>'+r.role.hours+'h / 周</div><div class="k">候选人当前可投入</div><div>'+candidateAvailable+'h / 周</div></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="confirmCaptainStart('+id+')">发起并预留</button></div>');
}
function confirmCaptainStart(id){
  var x=rel(id),r=relationRecruit(x);if(!x||!r)return;
  if(x.status!=="communication"){closeModal();toast("关系状态已变化，请刷新后重试");return}
  if(r.role.formal+r.role.reserved>=r.role.capacity){closeModal();toast("名额正在被其他候选人确认");return}
  var candidateAvailable=relationCandidateAvailable(x);if(candidateAvailable<r.role.hours){closeModal();toast("候选人最新可投入时间不足");return}
  r.role.reserved+=1;x.reserved=true;x.reservedHours=r.role.hours;x.reservedOnCurrentUser=currentUserIsCandidate(x);
  if(x.reservedOnCurrentUser)state.reserved+=r.role.hours;
  x.status="confirming";x.initiator="captain";x.time="刚刚 · 队长发起 · 名额确认中";x.expiresAt=Date.now()+24*60*60*1000;x.conditionUpdated=false;
  closeModal();toast("已临时预留角色名额"+(x.reservedOnCurrentUser?"与时间":""));render();
}
function rejectConfirm(id){var x=rel(id);if(!x)return;releaseReservation(x);x.status="communication";x.initiator=null;x.time="刚刚 · 回到待沟通";toast("本次正式确认已结束，待沟通关系保留");render()}
function openLeaderFinalizeCandidateConfirm(id){
  var x=rel(id),r=relationRecruit(x);if(!x||!r)return;
  modal('<h2>最终确认组队</h2><p class="subtitle">将按提交瞬间的最新名额、时间、关系和核心条件重新校验。</p><div class="kv"><div class="k">角色</div><div>'+e(r.role.name)+'</div><div class="k">具体任务</div><div>'+e(r.role.task)+'</div><div class="k">项目周期</div><div>'+e(r.period)+'</div><div class="k">每周约定投入</div><div>'+r.role.hours+'h / 周</div><div class="k">当前可用名额</div><div>'+roleFree(r)+'</div></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">返回</button><button class="btn primary" onclick="closeModal();leaderFinalizeCandidateConfirm('+id+')">最终确认</button></div>');
}
function leaderFinalizeCandidateConfirm(id){
  var x=rel(id),r=relationRecruit(x);if(!x||!r)return;
  if(x.status!=="confirming"||x.initiator!=="candidate"){toast("当前不是候选人发起的确认");return}
  if(r.status==="ended"){x.status="ended";x.reason="招募已结束";toast("最终校验失败：招募已结束");render();return}
  if(r.role.formal>=r.role.capacity){x.status="ended";x.reason="角色已正式招满";toast("最终校验失败：角色已正式招满");render();return}
  if(r.role.formal+r.role.reserved>=r.role.capacity){toast("名额正在与其他候选人确认中，请稍后重试");return}
  if(relationCandidateAvailable(x)<r.role.hours){toast("最终校验失败：候选人当前可投入时间不足");return}
  finishJoin(x,r,r.role.hours);
}
function openCandidateAcceptCaptainConfirm(id){
  var x=rel(id),r=relationRecruit(x);if(!x||!r)return;
  modal('<h2>确认加入队伍</h2><p class="subtitle">本次预留将转为正式成员占位，不会重复扣减时间。</p><div class="kv"><div class="k">角色</div><div>'+e(r.role.name)+'</div><div class="k">具体任务</div><div>'+e(r.role.task)+'</div><div class="k">项目周期</div><div>'+e(r.period)+'</div><div class="k">每周约定投入</div><div>'+r.role.hours+'h / 周</div><div class="k">剩余处理时间</div><div>'+e(formatExpiry(x))+'</div></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">返回</button><button class="btn primary" onclick="closeModal();candidateAcceptCaptainConfirm('+id+')">确认加入</button></div>');
}
function candidateAcceptCaptainConfirm(id){
  var x=rel(id),r=relationRecruit(x);if(!x||!r)return;
  if(x.status!=="confirming"||x.initiator!=="captain"||!x.reserved){toast("该临时预留已失效");return}
  if(r.status==="ended"){releaseReservation(x);x.status="ended";x.reason="招募已结束";toast("确认失败：招募已结束");render();return}
  if(r.role.formal>=r.role.capacity){releaseReservation(x);x.status="ended";x.reason="角色已正式招满";toast("确认失败：角色已正式招满");render();return}
  var available=currentUserIsCandidate(x)?remaining()+(x.reservedOnCurrentUser?(x.reservedHours||0):0):relationCandidateAvailable(x);
  if(available<r.role.hours){releaseReservation(x);x.status="communication";x.initiator=null;toast("确认失败：最新可投入时间不足，已释放预留");render();return}
  releaseReservation(x);
  finishJoin(x,r,r.role.hours);
}
function finishJoin(x,r,hours){
  var asCandidate=currentUserIsCandidate(x);
  r.role.formal=Math.min(r.role.capacity,r.role.formal+1);
  if(asCandidate){
    state.committed+=hours;
    state.joinedStageHours=hours;
    state.joined=true;state.joinedRecruitId=r.id;state.teamView="joined";
  }else{
    state.teamView="managed";
  }
  x.status="joined";x.initiator=null;x.time="刚刚 · 正式组队成功";
  if(asCandidate){
    state.relationships.forEach(function(other){
      if(other.id!==x.id&&other.recruitId===r.id&&other.status!=="joined"&&other.status!=="ended"&&currentUserIsCandidate(other)){
        releaseReservation(other);other.status="ended";other.reason="已通过另一关系正式组队";
      }
    });
  }
  if(r.role.formal>=r.role.capacity){
    r.status="full";
    state.relationships.forEach(function(other){
      if(other.id!==x.id&&other.recruitId===r.id&&other.status!=="joined"&&other.status!=="ended"){
        releaseReservation(other);other.status="ended";other.reason="名额已满";
      }
    });
  }
  x.expiresAt=null;
  toast("正式组队成功");state.progressView="team";render();
}

/* FULL TEAM PAGE */
/* FULL TEAM PAGE */
function progressTeam(){
  var hasJoined=state.joined&&state.joinedRecruitId;
  var selector=hasJoined?'<div class="teamViewSwitch"><button class="'+(state.teamView==="managed"?"active":"")+'" onclick="state.teamView=\'managed\';render()">我创建的队伍</button><button class="'+(state.teamView==="joined"?"active":"")+'" onclick="state.teamView=\'joined\';render()">我加入的队伍</button></div>':'';
  return selector+(hasJoined&&state.teamView==="joined"?renderJoinedTeam():renderManagedTeam());
}
function renderManagedTeam(){
  var r=activeManagedRecruit(),joinedInvite=state.relationships.filter(function(x){return x.type==="invitation"&&x.direction==="outgoing"&&x.recruitId===r.id&&x.status==="joined"})[0];
  var added=joinedInvite&&joinedInvite.candidateId?candidates.filter(function(c){return c.id===joinedInvite.candidateId})[0]:null;
  var gaps=[];
  if(r.role.formal<r.role.capacity)gaps.push('<div class="roleBox"><div class="between"><b>'+e(r.role.name)+' · '+(r.role.capacity-r.role.formal)+' 人</b><span class="status warn">待招募</span></div><p class="subtitle">'+e(r.role.task)+'</p></div>');
  if(state.memberRemoved)gaps.push('<div class="roleBox"><div class="between"><b>前端开发 · 1 人</b><span class="status warn">成员移除后恢复</span></div><p class="subtitle">历史申请不会自动重新生效，由队长决定是否重新开放招募。</p></div>');
  var members=3+(added?1:0)-(state.memberRemoved?1:0);
  return '<div class="panel teamFullPage"><div class="between"><div><div class="meta">'+e(r.comp)+' · 我创建的队伍</div><div class="bigTitle">'+(r.id===901?"CompMate 项目队":"行业分析队")+'</div><div class="subtitle">队长视角：管理正式成员、角色投入与剩余缺口。</div></div><span class="status green">进行中</span></div>'+
    '<div class="stats"><div class="stat"><b>'+members+'</b><span>正式成员</span></div><div class="stat"><b>'+gaps.length+'</b><span>当前角色缺口</span></div><div class="stat"><b>'+state.managedStageHours+'h</b><span>我的当前投入</span></div></div>'+
    '<div class="section"><div class="between"><h3 class="sectionTitle">成员与角色</h3><button class="btn secondary" onclick="editHours()">更新我的阶段投入</button></div><div class="list" style="margin-top:12px">'+
      teamMember("你","队长 / 产品","负责需求、产品方案与整体推进",true,false)+
      teamMember("林清禾","数据分析","当前阶段投入 10h / 周",false,false)+
      (state.memberRemoved?"":teamMember("陈予安","前端开发","当前阶段投入 8h / 周",false,true))+
      (added?teamMember(added.name,r.role.name,"已通过正式确认加入",false,false):"")+
    '</div></div>'+
    '<div class="section"><div class="between"><h3 class="sectionTitle">剩余角色缺口</h3><button class="btn primary" onclick="beginPublish()">管理招募</button></div>'+(gaps.length?gaps.join(""):'<div class="notice good" style="margin-top:10px">当前角色已补齐。</div>')+'</div>'+
    '<div class="section"><h3 class="sectionTitle">入群说明</h3><p class="subtitle">仅正式成员可见：请联系队长加入微信项目群。当前仅使用文本入群说明，不上传群二维码。</p></div></div>';
}
function renderJoinedTeam(){
  var r=findRecruit(state.joinedRecruitId)||recruits[0];
  return '<div class="panel teamFullPage"><div class="between"><div><div class="meta">'+e(r.comp)+' · 我加入的队伍</div><div class="bigTitle">星火队</div><div class="subtitle">成员视角：查看角色任务、阶段投入、队伍缺口与退出操作。</div></div><span class="status green">已组队</span></div>'+
    '<div class="stats"><div class="stat"><b>4</b><span>正式成员</span></div><div class="stat"><b>1</b><span>剩余角色缺口</span></div><div class="stat"><b>'+state.joinedStageHours+'h</b><span>我的当前投入</span></div></div>'+
    (state.joinedStageHours<r.role.hours?'<div class="notice warn" style="margin-top:12px">当前投入低于原约定 '+r.role.hours+'h / 周，请与队长继续协商新的投入安排。</div>':'')+
    '<div class="section"><div class="between"><h3 class="sectionTitle">成员与角色</h3><button class="btn secondary" onclick="editHours()">更新我的阶段投入</button></div><div class="list" style="margin-top:12px">'+
      teamMember("顾闻","队长 / 产品","负责产品方案与整体推进",false,false)+
      teamMember("林清禾","数据分析","当前阶段投入 10h / 周",false,false)+
      teamMember("陈予安","前端开发","当前阶段投入 8h / 周",false,false)+
      teamMember("你",r.role.name,"当前阶段投入 "+state.joinedStageHours+"h / 周",true,false)+
    '</div></div>'+
    '<div class="section"><h3 class="sectionTitle">我的角色与任务</h3><div class="roleBox"><b>'+e(r.role.name)+'</b><p class="subtitle">'+e(r.role.task)+'</p><div class="badges">'+badges(r.role.skills)+'<span class="badge blue">原约定 '+r.role.hours+'h / 周</span></div></div></div>'+
    '<div class="section"><div class="between"><h3 class="sectionTitle">剩余角色缺口</h3><span class="status warn">视觉设计 · 1 人</span></div><p class="subtitle">是否重新开放招募由队长决定，历史申请不会自动恢复。</p></div>'+
    '<div class="section"><h3 class="sectionTitle">入群说明</h3><p class="subtitle">仅正式成员可见：请联系队长顾闻加入微信项目群。</p></div>'+
    '<div class="actions"><button class="btn danger" onclick="leaveTeam()">退出队伍</button><button class="btn secondary" onclick="toast(\'基础举报已记录\')">举报问题</button></div></div>';
}
function teamMember(name,role,sub,self,removable){
  return '<div class="request"><div><div class="requestTitle">'+e(name)+' · '+e(role)+'</div><div class="requestSub">'+e(sub)+'</div></div><div class="requestActions">'+(self?'<span class="status green">本人</span>':'<span class="status">正式成员</span>')+(removable?'<button class="btn text" onclick="removeMemberDemo()">移除</button>':'')+'</div></div>';
}
function removeMemberDemo(){
  modal('<h2>移除成员？</h2><p class="subtitle">移除后对应角色恢复为空缺；历史申请不会自动重新生效。</p><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn danger" onclick="confirmRemoveMember()">确认移除</button></div>');
}
function confirmRemoveMember(){state.memberRemoved=true;closeModal();toast("成员已移除，前端开发角色恢复为空缺");render()}
function simulateTeam(){
  if(state.joined){state.teamView="joined";state.progressView="team";render();return}
  var r=recruits[0],existing=state.relationships.filter(function(x){return x.recruitId===r.id&&x.status!=="ended"&&currentUserIsCandidate(x)})[0];
  state.joined=true;state.joinedRecruitId=r.id;state.teamView="joined";state.joinedStageHours=r.role.hours;state.committed+=r.role.hours;
  if(r.role.formal<r.role.capacity)r.role.formal=r.role.capacity;
  r.status="full";
  if(existing){
    releaseReservation(existing);existing.status="joined";existing.initiator=null;existing.time="演示数据 · 正式组队";
  }else{
    state.relationships.unshift({id:Date.now(),type:"application",direction:"outgoing",recruitId:r.id,title:r.comp+" · "+r.role.name,party:"星火队",role:r.role.name,status:"joined",time:"演示数据",contact:true,initiator:null,reserved:false,reservedHours:0});
  }
  state.relationships.forEach(function(other){
    if(existing&&other.id!==existing.id&&other.recruitId===r.id&&other.status!=="joined"&&other.status!=="ended"&&currentUserIsCandidate(other)){
      releaseReservation(other);other.status="ended";other.reason="已通过另一关系正式组队";
    }
  });
  state.progressView="team";render();
}
function editHours(){
  var joinedView=state.teamView==="joined",r=joinedView?(findRecruit(state.joinedRecruitId)||recruits[0]):activeManagedRecruit();
  var current=joinedView?state.joinedStageHours:state.managedStageHours;
  modal('<h2>更新当前阶段投入</h2><p class="subtitle">实际投入变化会立即影响后续匹配；低于原约定时会提示继续协商。</p><div class="field"><label>当前阶段预计投入（h / 周）</label><input class="input" id="stageHours" type="number" min="0" value="'+current+'"></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="saveStageHours()">保存</button></div>');
}
function saveStageHours(){
  var joinedView=state.teamView==="joined",r=joinedView?(findRecruit(state.joinedRecruitId)||recruits[0]):activeManagedRecruit();
  var old=joinedView?state.joinedStageHours:state.managedStageHours;
  var v=Math.max(0,Number(byId("stageHours").value)||0),delta=v-old;
  if(joinedView)state.joinedStageHours=v;else state.managedStageHours=v;
  state.committed=Math.max(0,state.committed+delta);
  closeModal();toast(v<r.role.hours?"已更新：当前投入低于原约定，请继续协商":"阶段投入已更新");render();
}
function leaveTeam(){
  modal('<h2>确认退出队伍？</h2><p class="subtitle">退出后，对应角色名额恢复，你在该项目中的正式投入不再计入时间占用；历史申请不会自动重新生效。</p><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn danger" onclick="confirmLeave()">确认退出</button></div>');
}
function confirmLeave(){
  var x=state.relationships.filter(function(a){return a.status==="joined"&&(state.joinedRecruitId==null||a.recruitId===state.joinedRecruitId)})[0],r=x?relationRecruit(x):findRecruit(state.joinedRecruitId);
  var h=state.joinedStageHours;
  if(r){r.role.formal=Math.max(0,r.role.formal-1);if(r.status==="full"&&r.role.formal<r.role.capacity)r.status="active"}
  state.committed=Math.max(0,state.committed-h);state.joined=false;state.joinedRecruitId=null;state.joinedStageHours=0;state.teamView="managed";
  if(x){x.status="ended";x.reason="你已退出队伍"}
  closeModal();toast("已退出，名额和时间已释放");render();
}

/* PROFILE */
function renderProfile(p){
  var pct=state.total?Math.min(100,Math.round(state.committed/state.total*100)):0;
  p.innerHTML=demoBar()+'<div class="layout"><div class="panel"><div class="profileHero"><div class="avatar">黄</div><div><div class="bigTitle" style="margin:0">黄同学</div><div class="meta">广东工业大学 · 龙洞校区 · 大二 · 国际经济与贸易</div></div><span class="verifiedTag">'+(state.verified?"学校已认证":"未认证")+'</span></div>'+
    '<div class="section"><div class="between"><h3 class="sectionTitle">我能承担的任务与技能</h3><button class="btn secondary" onclick="go(\'profileEdit\')">编辑档案</button></div><div class="badges"><span class="badge blue">用户调研</span><span class="badge blue">商业分析</span><span class="badge">产品策划</span><span class="badge">Excel</span><span class="badge">报告写作</span></div></div>'+
    '<div class="section"><h3 class="sectionTitle">相关经历与具体产出</h3><div class="roleBox"><b>挑战杯 · 项目负责人</b><p class="subtitle">负责需求调研、方案设计、团队推进与成果整合。</p><button class="btn text" onclick="openEvidence()">查看用户提供的成果链接</button></div><div class="roleBox"><b>行业经济分析大赛</b><p class="subtitle">负责资料检索、分析框架与报告撰写。</p></div></div></div>'+
    '<aside class="panel sticky"><h3 class="sectionTitle">时间与目标</h3><div class="timeCapacityViz"><div class="timeCapacityNumbers"><div><b>'+Math.max(0,remaining())+'h</b><span>剩余可投入</span></div><small>总 '+state.total+'h / 周</small></div><div class="capacityTrack"><i style="width:'+pct+'%"></i></div><div class="capacityLegend"><span><i class="used"></i>已正式投入 '+state.committed+'h</span><span><i class="free"></i>剩余 '+Math.max(0,remaining())+'h</span></div></div><div class="section"><div class="kv"><div class="k">参赛目标</div><div>优先冲奖</div><div class="k">协作方式</div><div>关键节点提前同步</div><div class="k">联系方式</div><div>'+(hasUserContact()?'微信 · 已填写，按次授权':'未填写 · 不能发起申请 / 邀请')+'</div></div></div><div class="notice">学校认证只证明属于该学校，不代表能力水平。</div></aside></div>';
}
function renderProfileEdit(p){
  p.innerHTML='<div class="layout"><div class="panel"><h2 class="sectionTitle">最小可匹配档案</h2><p class="subtitle">经历和成果证明可后补；最小字段完整后才可主动申请并进入可被邀请候选列表。</p><div class="formGrid">'+
    '<div class="field"><label>显示名称 <span class="req">*</span></label><input class="input" value="黄同学"></div><div class="field"><label>学校 / 校区 <span class="req">*</span></label><input class="input" value="广东工业大学 / 龙洞校区"></div>'+
    '<div class="field"><label>年级 / 专业</label><input class="input" value="大二 / 国际经济与贸易"></div><div class="field"><label>每周总可投入 <span class="req">*</span></label><input class="input" id="totalHours" type="number" min="0" value="'+state.total+'"></div>'+
    '<div class="field full"><label>希望承担的任务 <span class="req">*</span></label><div class="checkRow"><button class="check on">用户调研</button><button class="check on">商业分析</button><button class="check">产品策划</button><button class="check">数据分析</button></div></div>'+
    '<div class="field full"><label>技能标签 <span class="req">*</span></label><input class="input" value="Excel、报告写作、用户访谈"></div><div class="field"><label>可参与日期 <span class="req">*</span></label><input class="input" value="2026/10/05 - 2026/12/31"></div><div class="field"><label>参赛目标 <span class="req">*</span></label><select class="select"><option>优先冲奖</option><option>完整参赛</option><option>积累经验</option></select></div>'+
    '<div class="field full"><label>协作方式 <span class="req">*</span></label><input class="input" value="关键节点提前同步，出现延误及时说明"></div><div class="field full"><label>联系方式（隐私字段）</label><input class="input" id="profileContact" value="'+e(state.userContact)+'" placeholder="微信 / QQ / 手机至少一种"><div class="help">不会出现在公开档案；发起请求前至少填写一种，双方同意沟通后按次开放。</div></div><div class="field full"><label>成果证据链接（可选）</label><input class="input" id="evidenceUrl" value="'+e(state.evidenceUrl)+'" placeholder="仅支持 http / https"><div class="help">平台仅标记为“用户提供”，不对第三方内容真实性背书。</div></div><div class="field full"><label>经历与具体产出（可选）</label><textarea class="textarea">挑战杯项目负责人：负责需求调研、方案设计、团队推进与成果整合。</textarea></div></div>'+
    '<div class="actions end"><button class="btn secondary" onclick="go(\'profile\')">取消</button><button class="btn primary" onclick="saveProfile()">保存档案</button></div></div><aside class="panel sticky"><h3 class="sectionTitle">档案规则</h3><div class="notice '+(hasUserContact()?"good":"warn")+'">'+(hasUserContact()?"当前最小字段完整；完成认证后可正常申请 / 邀请。":"当前未填写联系方式：可保存和浏览，但不能发起申请 / 邀请或完成待沟通闭环。")+'</div><div class="section"><p class="subtitle">平台不公开能力评分、责任心评分、人才等级或排行榜。</p></div><div class="section"><button class="btn secondary" onclick="state.verified=false;state.authReturn=\'profile\';go(\'auth\')">重新演示学校认证</button></div></aside></div>';
}
function openEvidence(){
  var u=String(state.evidenceUrl||"").trim();
  if(!/^https?:\/\//i.test(u)){toast("成果证据链接无效");return}
  var unknown=!/^(https?:\/\/)?(docs\.qq\.com|github\.com|gitee\.com|drive\.google\.com|example\.com)(\/|$)/i.test(u);
  modal('<h2>即将离开 CompMate</h2><p class="subtitle">该链接由用户提供，平台不对第三方内容真实性或安全性背书。</p>'+(unknown?'<div class="notice warn">当前为未知域名，请注意防范钓鱼、付款诱导和个人信息泄露。</div>':'')+'<div class="roleBox" style="margin-top:10px">'+e(u)+'</div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">返回</button><button class="btn primary" onclick="closeModal();toast(\'已确认外链风险；正式产品将打开新页面\')">继续前往</button></div>');
}
function saveProfile(){
  var hours=Number(byId("totalHours").value),contact=String(byId("profileContact").value||"").trim(),proof=String(byId("evidenceUrl").value||"").trim();
  if(!Number.isFinite(hours)||hours<0){toast("每周总可投入时间需为 0 或正数");return}
  if(proof&&!/^https?:\/\//i.test(proof)){toast("成果证据链接仅支持 http / https");return}
  state.total=hours;state.userContact=contact;state.evidenceUrl=proof;state.profileComplete=true;toast("个人档案已保存");
  var ret=state.profileReturn;state.profileReturn="";
  if(ret==="publish")beginPublish();
  else if(ret==="apply"){state.route="detail";render();setTimeout(function(){applyRecruit(state.selectedRecruit)},150)}
  else if(ret==="invite"){state.mode="people";state.route="candidate";render();setTimeout(function(){inviteCandidate(state.selectedCandidate)},150)}
  else if(ret==="progress"){state.progressView="relations";go("progress")}
  else go("profile");
}

/* PUBLISH */
function beginPublish(){
  if(!state.loggedIn||!state.verified){state.authReturn="publish";go("auth");return}
  if(!state.profileComplete){state.profileReturn="publish";go("profileEdit");toast("请先补齐最小个人档案");return}
  go("publish");
}
function periodInput(r,which){
  var m=String(r.period||"").match(/(\d{1,2})\/(\d{1,2})\s*-\s*(\d{1,2})\/(\d{1,2})/);
  if(!m)return which==="start"?"2026-10-05":"2026-12-20";
  var mm=which==="start"?m[1]:m[3],dd=which==="start"?m[2]:m[4];
  return "2026-"+String(mm).padStart(2,"0")+"-"+String(dd).padStart(2,"0");
}
function deadlineInput(r){
  var m=String(r.deadline||"").match(/(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{2})/);
  if(!m)return"2026-10-28T23:59";
  return "2026-"+String(m[1]).padStart(2,"0")+"-"+String(m[2]).padStart(2,"0")+"T"+String(m[3]).padStart(2,"0")+":"+m[4];
}
function md(v){var d=new Date(v+"T00:00:00");return (d.getMonth()+1)+"/"+d.getDate()}
function mdhm(v){var d=new Date(v);return (d.getMonth()+1)+"/"+d.getDate()+" "+String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0")}
function renderPublish(p){
  var r=activeManagedRecruit(),statusLabel=r.status==="active"?"招募中":r.status==="paused"?"暂停接收":r.status==="full"?"已招满":"已结束";
  p.innerHTML='<div class="layout"><div class="panel"><div class="between"><div><h2 class="sectionTitle">结构化招募</h2><p class="subtitle">围绕“目标竞赛 + 缺口角色 + 具体任务 + 招募人数 + 时间要求”发布，候选人可以直接判断加入后要做什么。</p></div><span class="status '+(r.status==="active"?"green":r.status==="full"?"blue":"warn")+'">'+statusLabel+'</span></div>'+
    '<div class="formGrid">'+
    '<div class="field"><label>目标竞赛 <span class="req">*</span></label><input class="input" id="pubComp" value="'+e(r.comp)+'"><div class="help">未收录赛事可直接填写临时名称；发布时会做基础名称规范化。</div></div>'+
    '<div class="field"><label>招募标题（可选）</label><input class="input" id="pubTitle" maxlength="30" value="'+e(r.title)+'"><div class="help">不超过 30 字；留空时由系统根据竞赛和主要缺口生成。</div></div>'+
    '<div class="field"><label>学校 / 校区</label><input class="input" value="'+e(r.school)+' / '+e(r.campus)+'" disabled></div>'+
    '<div class="field"><label>学校 / 校区是否硬条件</label><select class="select" id="pubHard"><option value="0" '+(!r.hard?"selected":"")+'>否，可跨校区沟通</option><option value="1" '+(r.hard?"selected":"")+'>是，不满足不可申请 / 邀请</option></select></div>'+
    '<div class="field full"><label>队伍现状 <span class="req">*</span></label><input class="input" id="pubTeam" value="'+e(r.team)+'" placeholder="如：现有 3 人，产品 / 前端 / 商业各 1 人"></div>'+
    '<div class="field full"><label>当前进度 <span class="req">*</span></label><input class="input" id="pubProgress" value="'+e(r.progress)+'" placeholder="如：已完成选题与访谈框架"></div>'+
    '<div class="field"><label>缺口角色 <span class="req">*</span></label><input class="input" id="pubRole" value="'+e(r.role.name)+'"></div>'+
    '<div class="field"><label>招募人数 <span class="req">*</span></label><input class="input" id="pubCap" type="number" min="1" step="1" value="'+r.role.capacity+'"></div>'+
    '<div class="field full"><label>具体任务 <span class="req">*</span></label><textarea class="textarea" id="pubTask" maxlength="500">'+e(r.role.task)+'</textarea><div class="help">不超过 500 字；不要在公开描述中填写手机号、微信或 QQ。</div></div>'+
    '<div class="field"><label>必需技能 <span class="req">*</span></label><input class="input" id="pubSkills" value="'+e(r.role.skills.join("、"))+'"></div>'+
    '<div class="field"><label>最低每周投入 <span class="req">*</span></label><input class="input" id="pubHours" type="number" min="1" step="1" value="'+r.role.hours+'"></div>'+
    '<div class="field"><label>项目开始日期 <span class="req">*</span></label><input class="input" id="pubStart" type="date" value="'+periodInput(r,"start")+'"></div>'+
    '<div class="field"><label>项目结束日期 <span class="req">*</span></label><input class="input" id="pubEnd" type="date" value="'+periodInput(r,"end")+'"></div>'+
    '<div class="field"><label>招募截止时间 <span class="req">*</span></label><input class="input" id="pubDeadline" type="datetime-local" value="'+deadlineInput(r)+'"></div>'+
    '<div class="field"><label>参赛目标 <span class="req">*</span></label><input class="input" id="pubTarget" value="'+e(r.target)+'"></div>'+
    '<div class="field full"><label>协作预期</label><input class="input" id="pubCollab" value="'+e(r.collab)+'" placeholder="同步频率、关键节点沟通等"></div>'+
    '</div>'+
    '<div class="actions"><button class="btn secondary" onclick="previewRecruit()">预览</button><button class="btn primary push" onclick="saveRecruit()">保存并发布</button></div></div>'+
    '<aside class="panel sticky"><h3 class="sectionTitle">招募生命周期</h3><div class="list" style="margin-top:12px"><button class="btn secondary" onclick="pauseRecruit()">'+(r.status==="paused"?"恢复接收申请":"暂停接收新申请")+'</button><button class="btn secondary" onclick="coreChange()">修改核心条件说明</button><button class="btn danger" onclick="endRecruit()">结束本轮招募</button></div><div class="section"><div class="notice">暂停仅停止新的加入申请；截止前且未主动结束时仍可主动邀请。结束招募会关闭尚未组队的关系并释放临时预留。</div></div><div class="section"><div class="meta">招募人数必须是正整数，且不得低于“正式成员 + 当前有效预留”。</div></div></aside></div>';
}
function previewRecruit(){
  var title=String(byId("pubTitle").value||"").trim(),comp=normalizeCompetitionName(byId("pubComp").value),role=String(byId("pubRole").value||"").trim();
  if(!title)title=comp+" · 招募"+role;
  modal('<h2>招募预览</h2><div class="roleBox"><div class="meta">'+e(comp)+'</div><b>'+e(title)+'</b><p class="subtitle">'+e(byId("pubTask").value)+'</p><div class="badges"><span class="badge blue">'+e(role)+' · '+e(byId("pubCap").value)+' 人</span><span class="badge">'+e(byId("pubSkills").value)+'</span><span class="badge">'+e(byId("pubHours").value)+'h / 周</span></div><p class="subtitle">'+e(byId("pubTeam").value)+' · '+e(byId("pubProgress").value)+'</p></div><div class="modalFoot"><button class="btn primary" onclick="closeModal()">返回编辑</button></div>');
}
function saveRecruit(){
  var r=activeManagedRecruit();
  var comp=normalizeCompetitionName(byId("pubComp").value),title=String(byId("pubTitle").value||"").trim(),role=String(byId("pubRole").value||"").trim(),task=String(byId("pubTask").value||"").trim(),skills=String(byId("pubSkills").value||"").split(/[、,，]/).map(function(x){return x.trim()}).filter(Boolean),target=String(byId("pubTarget").value||"").trim(),team=String(byId("pubTeam").value||"").trim(),progress=String(byId("pubProgress").value||"").trim(),collab=String(byId("pubCollab").value||"").trim();
  var cap=Number(byId("pubCap").value),hours=Number(byId("pubHours").value),start=byId("pubStart").value,end=byId("pubEnd").value,deadline=byId("pubDeadline").value,hard=byId("pubHard").value==="1";
  if(!comp||!role||!task||!skills.length||!target||!team||!progress||!start||!end||!deadline){toast("请补齐所有必填字段");return}
  if(!Number.isInteger(cap)||cap<=0){toast("招募人数必须为正整数");return}
  if(!(hours>0)){toast("最低每周投入必须大于 0");return}
  if(title.length>30){toast("招募标题不能超过 30 字");return}
  if(task.length>500){toast("具体任务不能超过 500 字");return}
  var startDate=new Date(start+"T00:00:00"),endDate=new Date(end+"T23:59:59"),deadlineDate=new Date(deadline);
  if(startDate>endDate){toast("项目开始日期不能晚于结束日期");return}
  if(deadlineDate<=new Date()){toast("新发布招募的截止时间必须晚于当前时间");return}
  if(deadlineDate>endDate){toast("招募截止时间不能晚于项目结束日期");return}
  var occupied=r.role.formal+r.role.reserved;if(cap<occupied){toast("招募人数不能低于正式成员 + 有效预留");return}
  if(unsafePublicText([comp,title,task,collab].join(" "))){toast("公开文本中疑似包含联系方式或高风险引导，请修改后再发布");return}
  if(!title)title=comp+" · 招募"+role;
  var newPeriod=md(start)+" - "+md(end),newDeadline=mdhm(deadline),newSkills=skills.join("|"),oldSkills=r.role.skills.join("|");
  var coreChanged=r.role.name!==role||r.role.task!==task||r.role.hours!==hours||r.period!==newPeriod||r.target!==target||oldSkills!==newSkills||r.hard!==hard;
  var confirming=state.relationships.filter(function(x){return x.recruitId===r.id&&x.status==="confirming"})[0];
  if(coreChanged&&confirming){toast("该岗位存在正式确认中关系，请先结束或撤回当前确认");return}
  r.comp=comp;r.title=title;r.team=team;r.progress=progress;r.collab=collab;r.target=target;r.period=newPeriod;r.deadline=newDeadline;r.hard=hard;
  r.role.capacity=cap;r.role.hours=hours;r.role.task=task;r.role.name=role;r.role.skills=skills;
  if(coreChanged){
    state.relationships.forEach(function(x){
      if(x.recruitId===r.id&&(x.status==="pending"||x.status==="communication"))x.conditionUpdated=true;
    });
  }
  r.status="active";toast(coreChanged?"招募已保存；相关候选人将看到条件更新提示":"招募已保存并发布");render();
}
function pauseRecruit(){
  var r=activeManagedRecruit();
  if(r.status==="ended"){toast("主动结束的本轮招募不能直接恢复，请新建或复制招募");return}
  if(deadlinePassed(r)){toast("招募已过截止时间，需先设置新的截止时间后才能重新开放");return}
  r.status=r.status==="paused"?"active":"paused";
  toast(r.status==="paused"?"已暂停新的加入申请；截止前仍可主动邀请":"已恢复接收申请");render();
}
function endRecruit(){
  var r=activeManagedRecruit();
  state.relationships.forEach(function(x){
    if(x.recruitId===r.id&&x.status!=="joined"&&x.status!=="ended"){
      releaseReservation(x);x.status="ended";x.reason="队长已结束本轮招募";x.expiresAt=null;
    }
  });
  r.status="ended";
  toast("招募已结束，未完成的组队请求已关闭");render();
}
function coreChange(){
  var r=activeManagedRecruit();
  var confirming=state.relationships.filter(function(x){return x.recruitId===r.id&&x.status==="confirming"})[0];
  if(confirming){toast("当前存在正式确认中关系，必须先结束或撤回确认");return}
  modal('<h2>核心条件修改规则</h2><p class="subtitle">角色、任务、必需技能、最低投入、项目周期、参赛目标和硬性校区条件发生变化时，保存后会通知待处理 / 待沟通候选人。</p><div class="notice warn">已经形成的正式成员约定不会被招募编辑自动改写；需要在队伍内另行协商确认。</div><div class="modalFoot"><button class="btn primary" onclick="closeModal()">知道了</button></div>');
}

/* AUTH */
function renderAuth(p){
  var action=state.authReturn==="publish"?"发布招募":state.authReturn==="apply"?"继续申请":state.authReturn==="invite"?"继续邀请":"继续使用";
  p.innerHTML='<div class="layout"><div class="panel"><h2 class="sectionTitle">学校身份认证</h2><p class="subtitle">认证只验证“属于该学校”，不代表能力水平。</p><div class="formGrid"><div class="field"><label>学校</label><input class="input" value="广东工业大学"></div><div class="field"><label>校区</label><select class="select"><option>龙洞校区</option><option>大学城校区</option></select></div><div class="field full"><label>认证方式</label><select class="select"><option>校园邮箱验证码</option><option>运营白名单 / 人工核验</option></select></div><div class="field full"><label>校园邮箱</label><input class="input" value="demo@gdut.edu.cn"></div></div><div class="actions end"><button class="btn secondary" onclick="interruptAuth()">暂不认证</button><button class="btn primary" onclick="completeAuth()">完成认证并'+action+'</button></div></div><aside class="panel sticky"><div class="notice">产品逻辑只依赖“已认证 / 未认证”结果；具体认证方案可按工作室资源选择低成本实现。</div></aside></div>';
}
function interruptAuth(){
  if(state.authReturn==="apply"&&state.selectedRecruit)state.pendingApplyRecruitId=state.selectedRecruit;
  state.authReturn="";go("home");toast("认证已中断，可从首页继续此前申请");
}
function completeAuth(){
  state.loggedIn=true;state.verified=true;
  var ret=state.authReturn;state.authReturn="";
  if(ret==="publish"){toast("认证成功");beginPublish();return}
  if(ret==="apply"){state.pendingApplyRecruitId=null;state.route="detail";render();setTimeout(function(){applyRecruit(state.selectedRecruit)},150);return}
  if(ret==="invite"){state.mode="people";state.route="candidate";render();setTimeout(function(){inviteCandidate(state.selectedCandidate)},150);return}
  toast("认证成功");go("profile");
}

/* EXPORT */
window.state=state;
window.render=render;
window.go=go;
window.openRecruit=openRecruit;
window.openCandidate=openCandidate;
window.applyExploreFilters=applyExploreFilters;
window.toggleFilter=toggleFilter;
window.setCategory=setCategory;
window.openRolePicker=openRolePicker;
window.chooseRole=chooseRole;
window.applyRecruit=applyRecruit;
window.submitApplication=submitApplication;
window.shareRecruit=shareRecruit;
window.demoShare=demoShare;
window.demoExpiredShare=demoExpiredShare;
window.continuePendingApply=continuePendingApply;
window.inviteCandidate=inviteCandidate;
window.sendInvitation=sendInvitation;
window.candidateMore=candidateMore;
window.blockUser=blockUser;
window.reportUser=reportUser;
window.rejectReq=rejectReq;
window.cancelReq=cancelReq;
window.agreeReq=agreeReq;
window.confirmAgree=confirmAgree;
window.simulateInviteAccepted=simulateInviteAccepted;
window.endComm=endComm;
window.candidateStartConfirm=candidateStartConfirm;
window.confirmCandidateStart=confirmCandidateStart;
window.captainStartConfirm=captainStartConfirm;
window.rejectConfirm=rejectConfirm;
window.leaderFinalizeCandidateConfirm=leaderFinalizeCandidateConfirm;
window.candidateAcceptCaptainConfirm=candidateAcceptCaptainConfirm;
window.simulateTeam=simulateTeam;
window.editHours=editHours;
window.saveStageHours=saveStageHours;
window.removeMemberDemo=removeMemberDemo;
window.confirmRemoveMember=confirmRemoveMember;
window.leaveTeam=leaveTeam;
window.confirmLeave=confirmLeave;
window.saveProfile=saveProfile;
window.beginPublish=beginPublish;
window.previewRecruit=previewRecruit;
window.saveRecruit=saveRecruit;
window.pauseRecruit=pauseRecruit;
window.endRecruit=endRecruit;
window.coreChange=coreChange;
window.interruptAuth=interruptAuth;
window.completeAuth=completeAuth;
window.closeModal=closeModal;
window.toast=toast;
render();
