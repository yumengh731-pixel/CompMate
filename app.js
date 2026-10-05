var config={
  pendingRequestMs:7*24*60*60*1000,
  formalConfirmMs:24*60*60*1000,
  contactUnlockWindowMs:10*60*1000,
  contactUnlockLimit:5
};

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
  profileName:"黄同学",
  profileCampus:"龙洞校区",
  profileGrade:"大二",
  profileMajor:"国际经济与贸易",
  profileTasks:"用户调研、商业分析、产品策划",
  profileTarget:"优先冲奖",
  profileCollab:"关键节点提前同步，出现延误及时说明",
  profileExperience:"挑战杯项目负责人：负责需求调研、方案设计、团队推进与成果整合；行业经济分析大赛：负责资料检索、分析框架与报告撰写。",
  availStart:"2026-10-05",
  availEnd:"2026-12-31",
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
  managedTeamRecruitId:901,
  authReturn:"",
  profileReturn:"",
  pendingApplyRecruitId:null,
  memberRemoved:false,
  managedCaptain:true,
  managedCaptainName:"你",
  managedMemberActive:true,
  teamDissolved:false,
  dataMemberRemoved:false,
  groupNote:"请联系当前队长加入微信项目群。",
  publishNewRequested:false,
  frontendAgreedHours:8,
  frontendCurrentHours:6,
  userCampus:"龙洞校区",
  profileSkills:["Excel","报告写作","用户访谈","问卷设计","商业分析","数据分析","可视化"],
  userContact:"cm_demo_2026",
  contactUnlockEvents:[],
  demoPageState:"normal",
  reports:[],
  evidenceUrl:"https://example.com/compmate-output",
  teamFilters:{campus:false,time:false,active:true,award:false,category:"",query:""},
  peopleFilters:{time:false,output:false,campus:false,target:false,capability:"",query:""},
  relationships:[
    {id:201,type:"application",direction:"outgoing",recruitId:1,title:"挑战杯 · 数据分析岗",party:"星火队",role:"数据分析",status:"communication",time:"今天 00:42",contact:true,initiator:null,reserved:false,reservedHours:0,partyContact:"spark_team"},
    {id:202,type:"invitation",direction:"incoming",recruitId:2,title:"正大杯 · 市场调研岗",party:"许辰",role:"市场调研",status:"pending",time:"2 小时前",contact:false,initiator:null,reserved:false,reservedHours:0,partyContact:"xuchen_demo",expiresAt:Date.now()+6*24*60*60*1000},
    {id:204,type:"application",direction:"incoming",recruitId:901,candidateId:14,title:"挑战杯 · 视觉设计岗",party:"宋禾",role:"视觉设计",status:"pending",time:"今天 01:20",contact:false,initiator:null,reserved:false,reservedHours:0,partyContact:"song_demo",expiresAt:Date.now()+config.pendingRequestMs},
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
  {id:11,name:"林清禾",campus:"大学城校区",grade:"大二",major:"数据科学与大数据技术",roles:["数据分析","数学建模"],skills:["Python","SPSS","数据可视化","数据分析"],hours:10,target:"冲省奖",proof:true,contact:"lin_demo",availStart:"2026-10-05",availEnd:"2026-12-31",exp:"正大杯校赛二等奖 · 负责数据清洗、统计检验和结果可视化"},
  {id:12,name:"陈予安",campus:"大学城校区",grade:"大二",major:"计算机科学与技术",roles:["前端开发","数据处理"],skills:["React","JavaScript","Python","HTML/CSS"],hours:8,target:"完整参赛",proof:true,contact:"chen_demo",availStart:"2026-10-01",availEnd:"2026-11-30",exp:"互联网+校赛项目 · 负责前端页面与数据接口"},
  {id:13,name:"周言",campus:"龙洞校区",grade:"大二",major:"工商管理",roles:["商业分析","用户调研"],skills:["访谈","Excel","报告写作","商业分析"],hours:6,target:"冲奖",proof:true,contact:"zhou_demo",availStart:"2026-10-05",availEnd:"2026-12-20",exp:"行业经济分析大赛 · 负责访谈、资料分析与报告"},
  {id:14,name:"宋禾",campus:"龙洞校区",grade:"大一",major:"工业设计",roles:["视觉设计"],skills:["Figma","PPT","PS","视觉设计"],hours:7,target:"积累经验",proof:false,contact:"song_demo",availStart:"2026-10-20",availEnd:"2026-12-31",exp:"社团招新视觉 · 负责海报与展示物料设计"}
];

function e(s){return String(s==null?"":s).replace(/[&<>"']/g,function(m){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]})}
function byId(id){return document.getElementById(id)}
function remaining(){return state.total-state.committed-state.reserved}
function periodRange(r){
  if(r&&r.periodStart&&r.periodEnd){
    return {start:new Date(r.periodStart+"T00:00:00"),end:new Date(r.periodEnd+"T23:59:59")};
  }
  var m=String(r&&r.period||"").match(/(\d{1,2})\/(\d{1,2})\s*-\s*(\d{1,2})\/(\d{1,2})/);
  if(!m)return null;
  var sy=2026,ey=Number(m[3])<Number(m[1])?sy+1:sy;
  return {start:new Date(sy,Number(m[1])-1,Number(m[2])),end:new Date(ey,Number(m[3])-1,Number(m[4]),23,59,59)};
}
function periodsOverlap(a,b){
  var x=periodRange(a),y=periodRange(b);if(!x||!y)return true;
  return x.start<=y.end&&y.start<=x.end;
}
function availabilityOverlaps(start,end,r){
  var pr=periodRange(r);if(!pr||!start||!end)return true;
  var a=new Date(start+"T00:00:00"),b=new Date(end+"T23:59:59");
  return a<=pr.end&&pr.start<=b;
}
function userAvailabilityOverlaps(r){return availabilityOverlaps(state.availStart,state.availEnd,r)}
function candidateAvailabilityOverlaps(c,r){return availabilityOverlaps(c.availStart,c.availEnd,r)}

function remainingFor(r){
  if(!r)return remaining();
  var used=0,managed=findRecruit(state.managedTeamRecruitId);
  if(state.managedMemberActive&&managed&&periodsOverlap(managed,r))used+=state.managedStageHours;
  state.relationships.forEach(function(x){
    var rr=relationRecruit(x);
    if(!rr||!periodsOverlap(rr,r))return;
    if(x.status==="joined"&&currentUserIsCandidate(x))used+=x.joinedHours||rr.role.hours||0;
    else if(x.reserved&&x.reservedOnCurrentUser)used+=x.reservedHours||0;
  });
  return state.total-used;
}
function allRecruitments(){return recruits.concat(managedRecruitments)}
function findRecruit(id){return allRecruitments().filter(function(x){return x.id===Number(id)})[0]||null}
function activeManagedRecruit(){return findRecruit(state.activeRoleRecruitId)||managedRecruitments[0]}
function recruitGroupId(r){return r?(r.groupId||r.id):null}
function managedGroup(r){
  var gid=recruitGroupId(r);
  return managedRecruitments.filter(function(x){return recruitGroupId(x)===gid});
}
function managedGroupPaused(r){
  var live=managedGroup(r).filter(function(g){return g.status!=="full"&&g.status!=="ended"});
  return live.length>0&&live.every(function(g){return g.status==="paused"});
}
function roleFree(r){return Math.max(0,r.role.capacity-r.role.formal-r.role.reserved)}
function recruitDisplayStatus(r){
  if(!r)return ["未知",""];
  if(deadlinePassed(r)&&r.status!=="full"&&r.status!=="ended")return ["已截止",""];
  return status(r.status);
}
function candidateRemainingFor(c,r,excludeRelationId){
  if(!c)return 0;
  var used=0;
  state.relationships.forEach(function(x){
    if(x.id===excludeRelationId||x.candidateId!==c.id)return;
    var rr=relationRecruit(x);
    if(!rr||!periodsOverlap(rr,r))return;
    if(x.status==="joined")used+=x.joinedHours||rr.role.hours||0;
    else if(x.status==="confirming"&&x.reserved)used+=x.reservedHours||rr.role.hours||0;
  });
  return Math.max(0,c.hours-used);
}
function canManageRecruit(r){return !!(r&&r.leader==="你"&&state.verified)}
function recruitIsPublished(r){return !!(r&&!r.isDraft&&!r.isDraftRole)}
function isAwardGoal(t){return /冲|奖|省赛|金奖/.test(t||"")}
function goalAligned(a,b){if(isAwardGoal(a))return isAwardGoal(b);return true}
function hasUserContact(){return !!(state.userContact&&String(state.userContact).trim())}
function publisherBasicComplete(){
  return !!(String(state.profileName||"").trim()&&String(state.profileCampus||"").trim()&&String(state.profileGrade||"").trim()&&String(state.profileMajor||"").trim());
}
function remainingLabel(v){v=Number(v)||0;return v>=0?v+"h":"超出 "+Math.abs(v)+"h"}
function userMatchReasons(r){
  if(!r)return [];
  var out=[],skills=(r.role&&r.role.skills)||[];
  var overlap=skills.filter(function(k){return state.profileSkills.indexOf(k)>=0});
  if(overlap.length)out.push("技能匹配："+overlap.slice(0,2).join("、"));
  var tasks=String(state.profileTasks||""),role=String(r.role&&r.role.name||"");
  var taskRelated=tasks.indexOf(role)>=0||
    (/数据|建模/.test(role)&&/数据|分析|建模/.test(tasks))||
    (/市场|调研/.test(role)&&/调研|访谈|问卷|市场/.test(tasks))||
    (/商业|报告/.test(role)&&/商业|分析|报告/.test(tasks))||
    (/前端|开发/.test(role)&&/前端|开发|编程/.test(tasks))||
    (/视觉|设计/.test(role)&&/视觉|设计|PPT/.test(tasks));
  if(role&&taskRelated)out.push("任务方向相关");
  if(remainingFor(r)>=r.role.hours)out.push("时间满足要求");
  if(r.campus===state.userCampus)out.push("同校区");
  if(goalAligned(r.target,state.profileTarget))out.push("目标可对齐");
  return out.filter(function(x,i,a){return a.indexOf(x)===i}).slice(0,2);
}
function parseDeadline(r){
  if(r&&r.deadlineAt)return new Date(r.deadlineAt);
  var m=String(r&&r.deadline||"").match(/(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{2})/);
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
  if(!userAvailabilityOverlaps(r))return {ok:false,reason:"你的可参与日期与项目周期不重叠"};
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
  if(!candidateAvailabilityOverlaps(c,r))return {ok:false,reason:"候选人的可参与日期与项目周期不重叠"};
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
function unsafePublicText(v){return /(微信号\s*[:：]?\s*[A-Za-z0-9_-]{4,}|(?:vx|wechat)\s*[:：]?\s*[A-Za-z0-9_-]{4,}|qq\s*[:：]?\s*\d{5,}|手机号\s*[:：]?\s*1[3-9]\d{9}|1[3-9]\d{9}|加我(?:微信|QQ)|私聊付款|先转账|代刷)/i.test(String(v||""))}
function registerContactUnlock(){
  var now=Date.now(),windowMs=config.contactUnlockWindowMs;
  state.contactUnlockEvents=state.contactUnlockEvents.filter(function(t){return now-t<windowMs});
  if(state.contactUnlockEvents.length>=config.contactUnlockLimit)return false;
  state.contactUnlockEvents.push(now);return true;
}
function toast(msg){var t=byId("toast");if(!t)return;t.textContent=msg;t.classList.add("show");clearTimeout(state.toastTimer);state.toastTimer=setTimeout(function(){t.classList.remove("show")},1800)}
function modal(html){byId("modalRoot").innerHTML='<div class="modalBg" id="modalBg"><div class="modal">'+html+'</div></div>';byId("modalBg").onclick=function(x){if(x.target.id==="modalBg")closeModal()}}
function closeModal(){byId("modalRoot").innerHTML=""}
function status(s){return {active:["招募中","green"],paused:["暂停接收","warn"],full:["已招满","blue"],ended:["已结束",""]}[s]||["未知",""]}
function empty(a,b){return '<div class="panel empty"><h3>'+e(a)+'</h3><p>'+e(b)+'</p></div>'}
function badges(arr){return arr.map(function(x){return '<span class="badge">'+e(x)+'</span>'}).join("")}

function navIcon(r){return {home:"⌂",explore:"⌕",progress:"◎",profile:"○"}[r]||"•"}
function title(){return {home:"首页",explore:"组队大厅",detail:"招募详情",candidate:"候选人详情",progress:"组队中心",profile:"我的",profileEdit:"编辑个人档案",publish:"发布 / 编辑招募",auth:"学校身份认证"}[state.route]||"竞旅 CompMate"}
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
  if(!state.loggedIn){
    byId("app").innerHTML='<div class="publicShell"><header class="publicHeader"><div class="brand"><div class="brandMark">C</div><div><div class="brandName">竞旅 CompMate</div><div class="brandSub">大学生竞赛组队平台</div></div></div><span>公开招募预览</span></header><main class="publicMain"><div id="page"></div></main></div>';
    return;
  }
  var pending=state.relationships.filter(function(x){return x.status==="pending"}).length;
  byId("app").innerHTML=
    '<div class="shell"><aside class="sidebar">'+
      '<div class="brand"><div class="brandMark">C</div><div><div class="brandName">竞旅 CompMate</div><div class="brandSub">大学生竞赛组队平台</div></div></div>'+
      '<nav class="nav">'+navButton("home","首页")+navButton("explore","寻找")+navButton("progress","组队 / 进度",pending)+navButton("profile","我的")+'</nav>'+
      '<div class="sideBottom"><div class="identity"><span class="dot"></span>'+(state.verified?"广东工业大学 · 已认证":"学校身份未认证")+'<br><span style="color:#8f96a1">联系方式按沟通关系授权</span></div><button class="sideGhost" onclick="demoShare()">预览外部分享</button></div>'+
    '</aside><main class="main"><header class="topbar"><div><div class="eyebrow">竞旅 CompMate</div><h1 class="pageTitle">'+title()+'</h1></div><div class="topActions"><div class="timePill"><span>'+(remaining()<0?"时间已超额":"当前可投入")+'</span><b>'+remainingLabel(remaining())+'</b></div></div></header><div id="page"></div></main></div>'+
    (state.route!=="publish"?'<button class="fabPublish" onclick="beginPublish(true)"><span>＋</span><b>发布招募</b></button>':'')+
    '<nav class="mobileNav">'+mNav("home","首页")+mNav("explore","寻找")+mNav("progress","进度")+mNav("profile","我的")+'</nav>';
}
function demoBar(){
  return '<details class="demoGuide"><summary>面试演示辅助</summary><div class="demoGuideInner"><span>真实产品不会替另一方点击。这里仅用于单机 Demo 模拟站外另一方响应与通用页面状态。</span><div class="demoGuideActions"><button onclick="go(\'explore\')">从“寻找”开始</button><button onclick="simulateNextRemoteAction()">模拟下一次对方响应</button><button onclick="simulatePageState(\'loading\')">加载态</button><button onclick="simulatePageState(\'error\')">失败态</button></div></div></details>';
}
function simulatePageState(kind){
  state.demoPageState=kind;render();
}
function clearPageState(){
  state.demoPageState="normal";render();
}
function renderDemoPageState(p){
  if(state.demoPageState==="loading"){
    p.innerHTML='<div class="stateFrame"><div class="stateSkeleton wide"></div><div class="stateSkeleton"></div><div class="stateSkeleton short"></div><p>正在加载；当前筛选、已填内容与业务状态都会保留。</p><button class="btn secondary" onclick="clearPageState()">结束状态演示</button></div>';
    return true;
  }
  if(state.demoPageState==="error"){
    p.innerHTML='<div class="panel empty"><h3>操作失败，请稍后重试</h3><p>网络 / 服务异常不会写入最终业务状态；当前筛选、已填内容和关系状态均已保留。</p><button class="btn primary" onclick="clearPageState()">重试</button></div>';
    return true;
  }
  return false;
}

function simulateNextRemoteAction(){
  var outgoingApp=state.relationships.filter(function(x){return x.type==="application"&&x.direction==="outgoing"&&x.status==="pending"})[0];
  if(outgoingApp){simulateRemoteAgree(outgoingApp.id);return}
  var outgoingInvite=state.relationships.filter(function(x){return x.type==="invitation"&&x.direction==="outgoing"&&x.status==="pending"})[0];
  if(outgoingInvite){simulateInviteAccepted(outgoingInvite.id);return}
  var waitingLeader=state.relationships.filter(function(x){return currentUserIsCandidate(x)&&x.status==="confirming"&&x.initiator==="candidate"})[0];
  if(waitingLeader){remoteLeaderFinalizeCandidateConfirm(waitingLeader.id);return}
  var waitingCandidate=state.relationships.filter(function(x){return !currentUserIsCandidate(x)&&x.status==="confirming"&&x.initiator==="captain"})[0];
  if(waitingCandidate){candidateAcceptCaptainConfirm(waitingCandidate.id);return}
  toast("当前没有需要模拟的对方响应");
}
function simulateRemoteAgree(id){
  var x=rel(id);if(!x||x.status!=="pending")return;
  var r=relationRecruit(x);
  if(r&&(r.status==="ended"||r.role.formal>=r.role.capacity)){x.status="ended";x.reason=r.status==="ended"?"招募已结束":"名额已满";x.expiresAt=null;toast(x.reason);render();return}
  if(!hasUserContact()||!x.partyContact){toast("双方联系方式条件尚未满足");return}
  if(!registerContactUnlock()){toast("短时间联系方式解锁过于频繁，请稍后重试或完成额外验证");return}
  x.status="communication";x.contact=true;x.expiresAt=null;x.time="刚刚 · 对方已同意沟通";toast("已模拟对方同意沟通");render();
}
function remoteLeaderFinalizeCandidateConfirm(id){
  var x=rel(id),r=relationRecruit(x);if(!x||!r)return;
  refreshRelationExpiry(x);if(x.status!=="confirming"||x.initiator!=="candidate"){toast("该确认当前不能由队长处理");render();return}
  var eligible=formalEligibility(x,r);if(!eligible.ok){x.status="communication";x.initiator=null;x.expiresAt=null;toast("对方最终校验失败："+eligible.reason);render();return}
  if(r.role.formal>=r.role.capacity){x.status="ended";x.reason="角色已正式招满";x.expiresAt=null;toast("对方最终校验：角色已正式招满");render();return}
  if(r.role.formal+r.role.reserved>=r.role.capacity){toast("对方最终校验：名额正在与其他候选人确认中");return}
  if(relationCandidateAvailable(x)<r.role.hours){x.status="communication";x.initiator=null;x.expiresAt=null;toast("对方最终校验：当前可投入时间不足，已回到待沟通");render();return}
  finishJoin(x,r,r.role.hours);
}
function go(r){
  if(!state.loggedIn&&r!=="detail"&&r!=="auth"){state.authReturn="browse";state.route="auth";render();window.scrollTo(0,0);return}
  state.route=r;render();window.scrollTo(0,0);
}
function render(){
  state.relationships.forEach(refreshRelationExpiry);
  shell();
  var p=byId("page");
  if(renderDemoPageState(p))return;
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
  var recommended=recruits.filter(function(r){return r.status==="active"&&roleFree(r)>0&&!deadlinePassed(r)&&userMeetsRecruitHardRules(r).ok&&userAvailabilityOverlaps(r)&&remainingFor(r)>=r.role.hours}).slice(0,3);
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
  var timeOk=remainingFor(r)>=r.role.hours;
  var reasons=userMatchReasons(r);
  return '<article class="smartRecommendRow" onclick="openRecruit('+r.id+')"><div class="smartRecMain"><div class="smartRecMeta">'+e(r.comp)+' · '+e(r.campus)+'</div><b>'+e(r.title)+'</b><p>'+e(r.role.task)+'</p><div class="smartRecTags"><span>'+e(r.role.name)+'</span><span>'+r.role.hours+'h / 周</span><span>'+e(r.target)+'</span></div></div>'+
    '<div class="smartRecReason"><span>为什么可能适合你</span><div class="matchDims">'+reasons.slice(0,2).map(function(x){return '<i>'+e(x)+'</i>'}).join("")+'</div><small>剩余 '+roleFree(r)+' 个名额</small></div><span class="smartRecArrow">→</span></article>';
}
function reminderRow(date,comp,label,sub,tone){
  return '<div class="reminderRow '+(tone||"")+'"><div class="reminderDate">'+date+'</div><div class="reminderLine"><span></span></div><div class="reminderContent"><b>'+e(comp)+'</b><strong>'+e(label)+'</strong><small>'+e(sub)+'</small></div></div>';
}

/* EXPLORE */
function renderExplore(p){
  var isTeams=state.mode!=="people";
  var r=activeManagedRecruit();
  if(!isTeams&&(!canManageRecruit(r)||!recruitIsPublished(r))){
    var owned=managedRecruitments.filter(function(x){return x.status!=="ended"&&recruitIsPublished(x)&&canManageRecruit(x)})[0];
    if(owned){state.activeRoleRecruitId=owned.id;r=owned}
  }
  p.innerHTML=
    '<section class="exploreHeader"><div><span class="pageKicker">EXPLORE</span><h2>组队大厅</h2><p>主动搜索与筛选是主路径；在“找队伍 / 找队友”之间切换，推荐只帮助你更快缩小范围。</p></div></section>'+
    '<div class="exploreSwitch"><button class="'+(isTeams?"active":"")+'" onclick="state.mode=\'teams\';render()"><b>找队伍</b><span>我要加入一支队伍</span></button><button class="'+(!isTeams?"active":"")+'" onclick="state.mode=\'people\';render()"><b>找队友</b><span>我的队伍还缺人</span></button></div>'+
    (isTeams?renderTeamSearch():renderPeopleSearch(r));
}
function renderTeamSearch(){
  var list=filteredTeams(state.teamFilters.query||"");
  return '<section class="filterPanel"><div class="filterSearch"><span>⌕</span><input id="searchBox" value="'+e(state.teamFilters.query||"")+'" placeholder="搜索竞赛、角色、任务或技能" oninput="applyExploreFilters()"></div><div class="filterChips">'+
    filterButton("team","campus","同校 / 同校区",state.teamFilters.campus)+filterButton("team","time","时间可行",state.teamFilters.time)+filterButton("team","active","仅看招募中",state.teamFilters.active)+filterButton("team","award","冲奖目标",state.teamFilters.award)+'</div></section>'+
    '<div class="categoryRibbon"><span>按方向：</span>'+categoryButton("team","innovation","创新创业")+categoryButton("team","market","市场调研")+categoryButton("team","tech","科技科研")+categoryButton("team","math","数学建模")+'</div>'+
    '<div class="resultsHead"><div><b>队伍招募</b><span id="resultCount">'+list.length+' 条结果</span></div><span>任务、时间和风险分开呈现</span></div>'+
    '<div id="hallList" class="teamResultList">'+(list.map(teamResultRow).join("")||relaxEmpty("team","没有严格匹配结果","可以一键放宽非核心筛选；招募有效性、拉黑和不可放宽条件仍会保留。"))+'</div>';
}
function renderPeopleSearch(r){
  if(!r||!canManageRecruit(r)||!recruitIsPublished(r))return '<div class="panel empty"><h3>当前没有已发布的可管理招募缺口</h3><p>找队友必须绑定一条已经发布的招募。未发布草稿只能继续编辑，不能向候选人发送邀请。</p><button class="btn primary" onclick="beginPublish(true)">继续 / 发布招募</button></div>';
  var list=filteredCandidates(state.peopleFilters.query||"");
  return '<section class="roleContext"><div class="roleContextMain"><span>当前招募岗位</span><b>'+e(r.comp)+' · '+e(r.role.name)+'</b><small>'+e(r.role.task)+' · 最低 '+r.role.hours+'h / 周</small></div><div class="roleRequirement"><span>必需技能</span><b>'+e(r.role.skills.join(" · "))+'</b></div><button class="btn secondary" onclick="openRolePicker()">切换岗位</button></section>'+
    '<section class="filterPanel"><div class="filterSearch"><span>⌕</span><input id="searchBox" value="'+e(state.peopleFilters.query||"")+'" placeholder="搜索技能、专业、经历或任务" oninput="applyExploreFilters()"></div><div class="filterChips">'+
    filterButton("people","time","时间满足",state.peopleFilters.time)+filterButton("people","output","有相关产出",state.peopleFilters.output)+filterButton("people","campus","同校区",state.peopleFilters.campus)+filterButton("people","target","目标一致",state.peopleFilters.target)+'</div></section>'+
    '<div class="categoryRibbon"><span>按能力：</span>'+categoryButton("people","data","数据分析")+categoryButton("people","front","前端开发")+categoryButton("people","research","用户调研")+categoryButton("people","design","视觉设计")+'</div>'+
    '<div class="resultsHead"><div><b>候选人</b><span id="resultCount">'+list.length+' 人</span></div><span>学校认证 ≠ 能力认证</span></div>'+
    '<div id="hallList" class="peopleResultList">'+(list.map(personResultRow).join("")||relaxEmpty("people","没有合适候选人","可以一键放宽时间、校区、目标和能力筛选；不可放宽条件仍会在邀请前校验。"))+'</div>';
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
    if(state.blockedRecruitIds[r.id])return false;
    if(q&&JSON.stringify(r).toLowerCase().indexOf(q)<0)return false;
    if(state.teamFilters.campus&&r.campus!==state.userCampus)return false;
    if(state.teamFilters.time&&remainingFor(r)<r.role.hours)return false;
    if(state.teamFilters.active&&(r.status!=="active"||deadlinePassed(r)))return false;
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
  var available=candidateRemainingFor(c,r,null);
  var timeOk=available>=r.role.hours;
  var campusOk=c.campus===r.campus;
  var targetOk=goalAligned(r.target,c.target),dateOk=candidateAvailabilityOverlaps(c,r);
  var dims=[];
  dims.push(taskMatch?"任务相关":"任务需确认");
  dims.push(timeOk?"时间满足":"时间不足");
  if(targetOk)dims.push("目标可对齐");
  dims.push(dateOk?"日期匹配":"日期不匹配");
  if(campusOk)dims.push("同校区");
  return {taskMatch:taskMatch,timeOk:timeOk,campusOk:campusOk,targetOk:targetOk,dateOk:dateOk,overlap:overlap,dims:dims,available:available};
}
function filteredCandidates(q){
  q=(q||"").toLowerCase();
  var r=activeManagedRecruit();
  return candidates.filter(function(c){
    if(state.blocked[c.id])return false;
    if(q&&JSON.stringify(c).toLowerCase().indexOf(q)<0)return false;
    var fit=candidateFit(c,r);
    if(state.peopleFilters.time&&(!fit.timeOk||!fit.dateOk))return false;
    if(state.peopleFilters.output&&!c.proof)return false;
    if(state.peopleFilters.campus&&!fit.campusOk)return false;
    if(state.peopleFilters.target&&!fit.targetOk)return false;
    if(state.peopleFilters.capability&&!candidateCapability(c,state.peopleFilters.capability))return false;
    return true;
  });
}
function applyExploreFilters(){
  var q=byId("searchBox")?byId("searchBox").value:"";
  if(state.mode==="people")state.peopleFilters.query=q;else state.teamFilters.query=q;
  var box=byId("hallList");
  if(!box)return;
  if(state.mode==="people"){
    var people=filteredCandidates(q);
    box.innerHTML=people.map(personResultRow).join("")||relaxEmpty("people","没有合适候选人","可以一键放宽时间、校区、目标和能力筛选；不可放宽条件仍会在邀请前校验。");
    if(byId("resultCount"))byId("resultCount").textContent=people.length+" 人";
  }else{
    var teams=filteredTeams(q);
    box.innerHTML=teams.map(teamResultRow).join("")||relaxEmpty("team","没有严格匹配结果","可以一键放宽校区、时间、冲奖目标和方向筛选；招募有效性与不可放宽条件仍保留。");
    if(byId("resultCount"))byId("resultCount").textContent=teams.length+" 条结果";
  }
}
function relaxEmpty(kind,title,sub){
  return '<div class="panel empty"><h3>'+e(title)+'</h3><p>'+e(sub)+'</p><div class="actions" style="justify-content:center"><button class="btn secondary" onclick="relaxFilters(\''+kind+'\')">一键放宽非核心条件</button><button class="btn primary" onclick="beginPublish(true)">发布招募</button></div></div>';
}
function relaxFilters(kind){
  var relaxed=[];
  if(kind==="team"){
    if(state.teamFilters.campus)relaxed.push("校区优先");
    if(state.teamFilters.time)relaxed.push("时间可行");
    if(state.teamFilters.award)relaxed.push("冲奖目标");
    if(state.teamFilters.category)relaxed.push("竞赛方向");
    state.teamFilters={campus:false,time:false,active:true,award:false,category:"",query:state.teamFilters.query||""};
  }else{
    if(state.peopleFilters.time)relaxed.push("时间满足");
    if(state.peopleFilters.output)relaxed.push("成果产出");
    if(state.peopleFilters.campus)relaxed.push("同校区");
    if(state.peopleFilters.target)relaxed.push("目标一致");
    if(state.peopleFilters.capability)relaxed.push("能力方向");
    state.peopleFilters={time:false,output:false,campus:false,target:false,capability:"",query:state.peopleFilters.query||""};
  }
  toast(relaxed.length?"已放宽："+relaxed.join("、")+"；不可放宽条件仍保留":"当前没有可继续放宽的非核心条件");
  render();
}
function openRolePicker(){
  var rows=managedRecruitments.filter(function(r){return r.status!=="ended"&&recruitIsPublished(r)&&canManageRecruit(r)}).map(function(r){
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
  var st=recruitDisplayStatus(r),free=roleFree(r),risk=r.role.hours>remainingFor(r),reasons=userMatchReasons(r);
  return '<article class="teamResult" onclick="openRecruit('+r.id+')"><div class="teamResultMain"><div class="resultTopline"><span>'+e(r.comp)+'</span><span>'+e(r.school)+' · '+e(r.campus)+'</span></div><h3>'+e(r.title)+'</h3><p>'+e(r.role.task)+'</p><div class="resultTags"><span class="strong">'+e(r.role.name)+'</span>'+r.role.skills.slice(0,3).map(function(x){return '<span>'+e(x)+'</span>'}).join("")+'</div></div><div class="teamResultFacts"><div><span>时间</span><b>'+r.role.hours+'h / 周</b></div><div><span>目标</span><b>'+e(r.target)+'</b></div><div><span>名额</span><b>'+free+' / '+r.role.capacity+'</b></div></div><div class="teamResultDecision"><span class="status '+st[1]+'">'+st[0]+'</span><div class="matchBox"><b>匹配提示</b><small>'+e(reasons.join(" · ")||"建议查看详情进一步判断")+'</small>'+(risk?'<small class="riskText">当前时间可能不足</small>':'')+'</div><button class="btn primary">查看详情</button></div></article>';
}
function personResultRow(c){
  var r=activeManagedRecruit(),fit=candidateFit(c,r),hard=candidateMeetsHardRules(c,r),existing=activeInviteForCandidate(r.id,c.id);
  var action=existing?"state.progressView='relations';go('progress')":"inviteCandidate("+c.id+")";
  return '<article class="personResult" onclick="openCandidate('+c.id+')"><div class="personIdentity"><div class="personAvatar">'+e(c.name.charAt(0))+'</div><div><h3>'+e(c.name)+'</h3><span>'+e(c.grade)+' · '+e(c.major)+'</span><small>'+e(c.campus)+' · 学校已认证</small></div></div><div class="personCapability"><span>可承担</span><b>'+e(c.roles.join(" / "))+'</b><div class="resultTags">'+c.skills.slice(0,4).map(function(x){return '<span>'+e(x)+'</span>'}).join("")+'</div><p>'+e(c.exp)+'</p></div><div class="personFit"><div><span>当前可投入</span><b>'+fit.available+'h / 周</b></div><div><span>目标</span><b>'+e(c.target)+'</b></div><div class="matchBox"><b>针对 '+e(r.role.name)+'</b><small>'+fit.dims.join(" · ")+'</small>'+(!fit.timeOk?'<small class="riskText">低于岗位要求 '+r.role.hours+'h / 周</small>':'')+(!hard.ok?'<small class="riskText">'+e(hard.reason)+'</small>':'')+'</div><button class="btn primary" '+((hard.ok||existing)?'':'disabled')+' onclick="event.stopPropagation();'+action+'">'+(existing?"查看进度":hard.ok?"邀请沟通":"不可邀请")+'</button></div></article>';
}

/* RECRUITMENT DETAIL / APPLY */
function openRecruit(id){state.selectedRecruit=id;state.route="detail";render();window.scrollTo(0,0)}
function activeCandidateRelationForRecruit(id){
  var target=findRecruit(id),gid=recruitGroupId(target);
  return state.relationships.filter(function(x){
    var rr=findRecruit(x.recruitId);
    return rr&&recruitGroupId(rr)===gid&&x.status!=="ended"&&currentUserIsCandidate(x);
  })[0]||null;
}
function relationButtonLabel(x){
  if(!x)return"申请加入";
  return {pending:"查看申请进度",communication:"查看沟通进度",confirming:"查看确认进度",joined:"已正式组队"}[x.status]||"查看进度";
}
function renderDetail(p){
  var r=findRecruit(state.selectedRecruit);
  if(!r){
    var alternatives=recruits.filter(function(x){return x.status==="active"&&!deadlinePassed(x)&&x.role.formal<x.role.capacity}).slice(0,2);
    p.innerHTML='<div class="panel empty"><h3>这条分享对应的招募已不存在</h3><p>链接可能已失效或招募已被删除。不会自动跳到另一条招募，避免产生错误上下文。</p><div class="rolePicker">'+alternatives.map(function(x){return '<button class="rolePick" onclick="openRecruit('+x.id+')"><div><b>'+e(x.comp)+' · '+e(x.role.name)+'</b><span>'+e(x.role.task)+'</span></div><small>查看 →</small></button>'}).join("")+'</div></div>';return;
  }
  var ro=r.role,st=recruitDisplayStatus(r),free=roleFree(r),existing=activeCandidateRelationForRecruit(r.id),hard=userMeetsRecruitHardRules(r),publicCanApply=r.status==="active"&&!deadlinePassed(r)&&ro.formal<ro.capacity;
  if(!state.loggedIn){
    p.innerHTML='<div class="publicRecruitDetail"><div class="panel"><div class="between"><div><div class="meta">'+e(r.comp)+' · '+e(r.school)+' '+e(r.campus)+'</div><div class="bigTitle">'+e(r.title)+'</div></div><span class="status '+st[1]+'">'+st[0]+'</span></div>'+
      '<div class="badges"><span class="badge green">队长学校身份已认证</span><span class="badge">'+e(r.leader)+' · 队长</span></div>'+
      '<div class="section"><h3 class="sectionTitle">队伍现状</h3><div class="kv" style="margin-top:12px"><div class="k">当前成员</div><div>'+e(r.team)+'</div><div class="k">当前进度</div><div>'+e(r.progress)+'</div><div class="k">参赛目标</div><div>'+e(r.target)+'</div><div class="k">项目周期</div><div>'+e(r.period)+'</div><div class="k">招募截止</div><div>'+e(r.deadline)+'</div></div></div>'+
      '<div class="section"><h3 class="sectionTitle">当前角色缺口</h3><div class="roleBox"><b>'+e(ro.name)+' · 余 '+free+' 名</b><p class="subtitle">'+e(ro.task)+'</p><div class="badges">'+badges(ro.skills)+'<span class="badge blue">最低 '+ro.hours+'h / 周</span></div></div></div>'+
      '<div class="section"><h3 class="sectionTitle">协作预期</h3><p class="subtitle">'+e(r.collab)+'</p></div></div>'+
      '<aside class="panel sticky"><h3 class="sectionTitle">申请前需要登录 / 认证</h3><p class="subtitle">公开分享仅展示招募信息，不展示任何私人联系方式或个性化匹配判断。</p><div class="notice">点击申请后再完成登录和学校身份认证，成功后会自动回到这条招募继续。</div><div class="actions"><button class="btn text" onclick="reportRecruit('+r.id+')">举报 / 反馈</button><button class="btn secondary" onclick="copyShareLink('+r.id+')">复制分享链接</button><button class="btn primary push" '+(publicCanApply?'':'disabled')+' onclick="applyRecruit('+r.id+')">'+(publicCanApply?'登录后申请':deadlinePassed(r)?'已截止':r.status==="paused"?'暂停接收申请':ro.formal>=ro.capacity?'已招满':'当前不可申请')+'</button></div></aside></div>';
    return;
  }
  var canApply=r.status==="active"&&ro.formal<ro.capacity&&remainingFor(r)>=0&&!existing&&hard.ok&&!deadlinePassed(r);
  var actionLabel=existing?relationButtonLabel(existing):(deadlinePassed(r)?"已截止":r.status==="paused"?"暂停接收申请":ro.formal>=ro.capacity?"已招满":remainingFor(r)<0?"当前时间不可申请":!hard.ok?hard.reason:"申请加入");
  var actionClick=existing?"go('progress')":"applyRecruit("+r.id+")";
  p.innerHTML='<button class="btn text" onclick="state.mode=\'teams\';go(\'explore\')">← 返回寻找 · 找队伍</button><div class="layout"><div class="panel">'+
    '<div class="between"><div><div class="meta">'+e(r.comp)+' · '+e(r.school)+' '+e(r.campus)+'</div><div class="bigTitle">'+e(r.title)+'</div></div><span class="status '+st[1]+'">'+st[0]+'</span></div>'+
    '<div class="badges"><span class="badge green">队长学校身份已认证</span><span class="badge">'+e(r.leader)+' · 队长</span><span class="badge">'+e(r.period)+'</span></div>'+
    '<div class="section"><h3 class="sectionTitle">队伍现状</h3><div class="kv" style="margin-top:12px"><div class="k">当前成员</div><div>'+e(r.team)+'</div><div class="k">当前进度</div><div>'+e(r.progress)+'</div><div class="k">参赛目标</div><div>'+e(r.target)+'</div><div class="k">项目周期</div><div>'+e(r.period)+'</div><div class="k">招募截止</div><div>'+e(r.deadline)+'</div></div></div>'+
    '<div class="section"><h3 class="sectionTitle">角色缺口</h3><div class="roleBox"><div class="between"><div><b>'+e(ro.name)+'</b><div class="meta" style="margin-top:4px">'+ro.formal+'/'+ro.capacity+' 已正式加入'+(ro.reserved?' · '+ro.reserved+' 个名额确认中':'')+'</div></div><span class="status '+(ro.reserved?"warn":"green")+'">'+(ro.formal>=ro.capacity?"已招满":ro.reserved?"名额确认中":"可申请")+'</span></div><p class="subtitle">'+e(ro.task)+'</p><div class="badges">'+badges(ro.skills)+'<span class="badge blue">最低 '+ro.hours+'h / 周</span></div></div></div>'+
    '<div class="section"><h3 class="sectionTitle">协作预期</h3><p class="subtitle">'+e(r.collab)+'</p></div></div>'+
    '<aside class="panel sticky"><h3 class="sectionTitle">与你的匹配情况</h3><div class="reasons" style="margin-top:12px"><b>推荐理由</b><br>'+e(userMatchReasons(r).join(" · ")||"建议结合任务、时间和目标进一步判断")+'</div><div class="stats"><div class="stat"><b>'+Math.max(0,remainingFor(r))+'h</b><span>当前可投入</span></div><div class="stat"><b>'+ro.hours+'h</b><span>岗位最低投入</span></div><div class="stat"><b>'+free+'</b><span>可用名额</span></div></div>'+
    (ro.hours>remainingFor(r)?'<div class="notice warn" style="margin-top:12px">当前时间低于最低要求：可以先沟通，但正式组队前必须满足最新要求。</div>':'<div class="notice good" style="margin-top:12px">当前时间条件满足。申请仍只代表沟通意向。</div>')+
    (r.status==="paused"?'<div class="notice warn" style="margin-top:10px">队长已暂停接收新的加入申请；已有关系仍可继续。</div>':'')+
    (!hard.ok&&!existing?'<div class="notice warn" style="margin-top:10px">'+e(hard.reason)+'。你仍可查看详情，但不能提交申请。</div>':'')+
    '<div class="actions"><button class="btn text" onclick="reportRecruit('+r.id+')">举报 / 反馈</button><button class="btn secondary" onclick="shareRecruit('+r.id+')">分享招募</button><button class="btn primary push" '+((canApply||existing)?'':'disabled')+' onclick="'+actionClick+'">'+actionLabel+'</button></div></aside></div>';
}
function applyRecruit(id){
  var r=findRecruit(id);
  if(!r)return;
  if(canManageRecruit(r)){toast("不能申请自己发布的招募");return}
  if(r.status!=="active"){toast("该招募当前不接收新的申请");return}
  if(deadlinePassed(r)){toast("该招募已过截止时间，不能新增申请");return}
  if(r.role.formal>=r.role.capacity){toast("角色已正式招满");return}
  if(!state.loggedIn||!state.verified){
    state.selectedRecruit=id;state.pendingApplyRecruitId=id;state.authReturn="apply";go("auth");return;
  }
  var existing=activeCandidateRelationForRecruit(id);
  if(existing){state.progressView="relations";go("progress");return}
  if(!state.profileComplete){
    state.selectedRecruit=id;state.profileReturn="apply";go("profileEdit");toast("请先完成最小个人档案");return;
  }
  if(!hasUserContact()){state.selectedRecruit=id;state.profileReturn="apply";go("profileEdit");toast("发起申请前请至少填写并授权一种联系方式");return}
  var hard=userMeetsRecruitHardRules(r);if(!hard.ok){toast(hard.reason);return}
  if(remainingFor(r)<0){toast("当前承诺时间已超出声明总时间，请先调整");return}
  var short=remainingFor(r)<r.role.hours,reservationBusy=roleFree(r)<=0&&r.role.formal<r.role.capacity;
  modal('<h2>提交加入申请</h2><p class="subtitle">申请只代表愿意进一步沟通，不会直接加入队伍或占用正式名额。</p>'+
    (short?'<div class="notice warn">当前剩余 '+Math.max(0,remainingFor(r))+'h / 周，低于岗位 '+r.role.hours+'h / 周。可以申请沟通，但正式组队前必须满足最新时间要求。</div>':'<div class="notice good">当前剩余 '+remainingFor(r)+'h / 周，岗位要求 '+r.role.hours+'h / 周，时间条件满足。</div>')+(reservationBusy?'<div class="notice warn" style="margin-top:8px">当前可用名额正在与其他候选人确认中；这不等于正式招满，你仍可提交沟通申请。</div>':'')+
    '<div class="formGrid" style="margin-top:14px"><div class="field"><label>首选角色</label><input class="input" value="'+e(r.role.name)+'"></div><div class="field"><label>可接受其他角色</label><input class="input" value="可协商"></div><div class="field full"><label>补充说明</label><textarea class="textarea">我有相关项目经历，希望进一步了解具体分工和时间安排。</textarea></div></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="submitApplication('+id+')">提交申请</button></div>');
}
function submitApplication(id){
  var r=findRecruit(id);
  if(!r)return;
  if(activeCandidateRelationForRecruit(id)){closeModal();toast("该招募已有进行中的关系");state.progressView="relations";go("progress");return}
  if(!state.loggedIn||!state.verified||!state.profileComplete||!hasUserContact()){closeModal();applyRecruit(id);return}
  if(r.status!=="active"||deadlinePassed(r)||r.role.formal>=r.role.capacity){
    closeModal();toast(r.role.formal>=r.role.capacity?"角色已正式招满":deadlinePassed(r)?"招募已过截止时间":"该招募当前不接收新的申请");render();return;
  }
  var hard=userMeetsRecruitHardRules(r);if(!hard.ok){closeModal();toast(hard.reason);render();return}
  if(remainingFor(r)<0){closeModal();toast("当前承诺时间已超出声明总时间，请先调整");render();return}
  state.relationships.unshift({id:Date.now(),type:"application",direction:"outgoing",recruitId:r.id,title:r.comp+" · "+r.role.name,party:r.leader,role:r.role.name,status:"pending",time:"刚刚",contact:false,initiator:null,reserved:false,reservedHours:0,partyContact:"team_contact",expiresAt:Date.now()+config.pendingRequestMs});
  state.pendingApplyRecruitId=null;
  closeModal();toast("申请已提交，等待队长处理");state.progressView="relations";state.tab="all";go("progress");
}

/* SHARE / AUTH CONTEXT */
function shareRecruit(id){
  var r=findRecruit(id);if(!r)return;
  modal('<h2>外部分享卡</h2><div class="panel" style="padding:15px;background:#f8f9fb"><div class="meta">'+e(r.comp)+'</div><div class="title">'+e(r.title)+'</div><p class="subtitle">'+e(r.role.task)+'</p><div class="badges"><span class="badge blue">'+e(r.role.name)+'</span><span class="badge">'+r.role.hours+'h / 周</span><span class="badge">'+e(r.target)+'</span></div><div class="meta">私人联系方式不会出现在分享内容中。</div></div><div class="modalFoot"><button class="btn secondary" onclick="copyShareLink('+id+')">复制分享链接</button><button class="btn secondary" onclick="demoExpiredShare()">查看失效链接状态</button><button class="btn primary" onclick="closeModal();demoShare('+id+')">预览外部访问</button></div>');
}
function copyShareLink(id){
  var base=(window.location&&window.location.origin?window.location.origin+window.location.pathname:"");
  var url=base+"?share=1&recruit="+encodeURIComponent(id);
  function fallback(){
    modal('<h2>复制分享链接</h2><p class="subtitle">私人联系方式不会包含在分享链接中。</p><div class="roleBox">'+e(url)+'</div><div class="modalFoot"><button class="btn primary" onclick="closeModal()">完成</button></div>');
  }
  closeModal();
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(url).then(function(){toast("分享链接已复制")}).catch(fallback);
  }else fallback();
}
function demoShare(id){
  state.loggedIn=false;state.verified=false;if(id)state.selectedRecruit=id;state.pendingApplyRecruitId=null;state.route="detail";render();
  modal('<h2>外部分享访问</h2><p class="subtitle">当前模拟从微信群打开分享链接的未登录访客。访客可以先查看完整公开招募，点击申请时再登录 / 学校认证。</p><div class="modalFoot"><button class="btn primary" onclick="closeModal()">查看招募</button></div>');
}
function showInvalidOriginalRecruit(id,reason){
  var original=findRecruit(id),cat=original?teamCategory(original):"";
  var alternatives=recruits.filter(function(r){
    return r.id!==Number(id)&&!state.blockedRecruitIds[r.id]&&r.status==="active"&&!deadlinePassed(r)&&r.role.formal<r.role.capacity&&(!cat||teamCategory(r)===cat);
  }).slice(0,2);
  state.pendingApplyRecruitId=null;
  var cards=alternatives.map(function(r){return '<button class="rolePick" onclick="closeModal();openRecruit('+r.id+')"><div><b>'+e(r.comp)+' · '+e(r.role.name)+'</b><span>'+e(r.role.task)+'</span></div><small>'+(roleFree(r)<=0?"名额确认中 · 仍可申请沟通":"查看 →")+'</small></button>'}).join("");
  modal('<h2>原招募当前无法继续申请</h2><div class="notice warn">'+e(reason||"原招募已失效")+'</div><p class="subtitle" style="margin-top:12px">'+(cards?"可以查看以下同类有效招募：":"当前暂无同类有效招募，可返回寻找页调整筛选。")+'</p>'+(cards?'<div class="rolePicker">'+cards+'</div>':'')+'<div class="modalFoot"><button class="btn secondary" onclick="closeModal();state.mode=\'teams\';go(\'explore\')">返回寻找</button></div>');
}
function demoExpiredShare(){closeModal();showInvalidOriginalRecruit(4,"原分享对应的角色已经正式招满，不能继续提交申请。")}
function continuePendingApply(){
  var id=state.pendingApplyRecruitId;
  if(!id){go("explore");return}
  var r=findRecruit(id);
  if(!r||r.status!=="active"||r.role.formal>=r.role.capacity||deadlinePassed(r)){
    showInvalidOriginalRecruit(id,!r?"原招募不存在":r.status!=="active"?"原招募当前不接收申请":r.role.formal>=r.role.capacity?"原角色已经正式招满":"原招募已过截止时间");return;
  }
  state.selectedRecruit=id;state.route="detail";render();setTimeout(function(){applyRecruit(id)},150);
}

/* CANDIDATE / INVITE */
function openCandidate(id){state.selectedCandidate=id;state.route="candidate";render();window.scrollTo(0,0)}
function renderCandidate(p){
  var c=candidates.filter(function(x){return x.id===state.selectedCandidate})[0]||candidates[0];
  var r=activeManagedRecruit(),fit=candidateFit(c,r),hard=candidateMeetsHardRules(c,r),existingInvite=activeInviteForCandidate(r.id,c.id);
  p.innerHTML='<button class="btn text" onclick="state.mode=\'people\';go(\'explore\')">← 返回寻找 · 找队友</button><div class="layout"><div class="panel"><div class="profileHero"><div class="avatar">'+e(c.name.charAt(0))+'</div><div><div class="bigTitle" style="margin:0">'+e(c.name)+'</div><div class="meta">广东工业大学 · '+e(c.campus)+' · '+e(c.grade)+' · '+e(c.major)+'</div></div><span class="verifiedTag">学校已认证</span></div>'+
    '<div class="section"><h3 class="sectionTitle">可承担任务与技能</h3><div class="badges">'+c.roles.map(function(x){return '<span class="badge blue">'+e(x)+'</span>'}).join("")+badges(c.skills)+'</div></div>'+
    '<div class="section"><h3 class="sectionTitle">相关经历与具体产出</h3><div class="roleBox"><b>'+e(c.exp.split(" · ")[0])+'</b><p class="subtitle">'+e(c.exp.split(" · ").slice(1).join(" · "))+'</p></div></div>'+
    '<div class="section"><h3 class="sectionTitle">时间与目标</h3><div class="kv" style="margin-top:12px"><div class="k">当前可投入</div><div>'+fit.available+'h / 周</div><div class="k">参赛目标</div><div>'+e(c.target)+'</div><div class="k">联系方式</div><div>未解锁 · 双方同意沟通后按次展示</div></div></div></div>'+
    '<aside class="panel sticky"><h3 class="sectionTitle">针对「'+e(r.role.name)+'」的判断</h3><div class="reasons" style="margin-top:12px"><b>匹配维度</b><br>'+fit.dims.join(" · ")+'</div>'+(!fit.timeOk?'<div class="notice warn" style="margin-top:10px">该同学当前可投入 '+fit.available+'h / 周，低于岗位要求 '+r.role.hours+'h / 周。</div>':'')+(!hard.ok?'<div class="notice warn" style="margin-top:10px">'+e(hard.reason)+'。资料仍可查看，但不能发起邀请。</div>':'')+'<div class="actions"><button class="btn secondary" onclick="candidateMore('+c.id+')">更多</button><button class="btn primary push" '+((hard.ok||existingInvite)?'':'disabled')+' onclick="'+(existingInvite?"state.progressView=\'relations\';go(\'progress\')":"inviteCandidate("+c.id+")")+'">'+(existingInvite?"查看邀请进度":hard.ok?"邀请沟通":"当前不可邀请")+'</button></div></aside></div>';
}
function activeInviteForCandidate(recruitId,candidateId){
  var target=findRecruit(recruitId),gid=recruitGroupId(target);
  return state.relationships.filter(function(x){
    var rr=findRecruit(x.recruitId);
    return rr&&recruitGroupId(rr)===gid&&x.candidateId===candidateId&&x.status!=="ended"&&!currentUserIsCandidate(x);
  })[0]||null;
}
function inviteCandidate(id){
  var c=candidates.filter(function(x){return x.id===id})[0],r=activeManagedRecruit();
  if(!c||!r)return;
  if(!recruitIsPublished(r)){toast("请先保存并发布该招募，再向候选人发送邀请");beginPublish(false);return}
  if(c.name===state.profileName){toast("不能向自己发送邀请");return}
  if(!canManageRecruit(r)){toast("只有当前队长可以处理候选人或发送邀请");return}
  if(activeInviteForCandidate(r.id,c.id)){toast("该候选人在此招募下已有进行中的邀请");state.progressView="relations";go("progress");return}
  if(!state.loggedIn||!state.verified){state.authReturn="invite";state.selectedCandidate=id;go("auth");return}
  if(!state.profileComplete){state.profileReturn="invite";state.selectedCandidate=id;go("profileEdit");toast("请先完成最小个人档案");return}
  if(!hasUserContact()){state.profileReturn="invite";state.selectedCandidate=id;go("profileEdit");toast("发送邀请前请至少填写并授权一种联系方式");return}
  if(r.status==="full"||r.status==="ended"||deadlinePassed(r)){toast("该招募当前不能继续邀请");return}
  var hard=candidateMeetsHardRules(c,r);if(!hard.ok){toast(hard.reason);return}
  var fit=candidateFit(c,r);
  modal('<h2>邀请 '+e(c.name)+' 沟通</h2><p class="subtitle">本次邀请绑定「'+e(r.comp)+' · '+e(r.role.name)+'」，不会直接占用名额。</p><div class="kv"><div class="k">具体任务</div><div>'+e(r.role.task)+'</div><div class="k">最低投入</div><div>'+r.role.hours+'h / 周</div><div class="k">候选人当前可投入</div><div>'+fit.available+'h / 周</div></div>'+(!fit.timeOk?'<div class="notice warn" style="margin-top:10px">时间低于当前岗位要求，建议先沟通是否能调整。</div>':'')+'<div class="field" style="margin-top:12px"><label>邀请说明</label><textarea class="textarea">你的经历与当前任务比较匹配，希望进一步聊聊具体分工和时间安排。</textarea></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="sendInvitation('+c.id+','+r.id+')">发送邀请</button></div>');
}
function sendInvitation(candidateId,recruitId){
  var c=candidates.filter(function(x){return x.id===candidateId})[0],r=findRecruit(recruitId);
  if(!c||!r)return;
  if(!recruitIsPublished(r)){closeModal();toast("该招募尚未发布，不能发送邀请");render();return}
  if(c.name===state.profileName){closeModal();toast("不能向自己发送邀请");return}
  if(activeInviteForCandidate(recruitId,candidateId)){closeModal();toast("已有进行中的邀请");return}
  if(!state.loggedIn||!state.verified||!state.profileComplete||!hasUserContact()){closeModal();state.activeRoleRecruitId=recruitId;inviteCandidate(candidateId);return}
  if(!canManageRecruit(r)){closeModal();toast("只有当前队长可以发送邀请");render();return}
  if(r.status==="full"||r.status==="ended"||deadlinePassed(r)){closeModal();toast("该招募当前不能继续邀请");render();return}
  var hard=candidateMeetsHardRules(c,r);if(!hard.ok){closeModal();toast(hard.reason);render();return}
  state.relationships.unshift({id:Date.now(),type:"invitation",direction:"outgoing",recruitId:r.id,candidateId:c.id,title:r.comp+" · "+r.role.name,party:c.name,role:r.role.name,status:"pending",time:"刚刚",contact:false,initiator:null,reserved:false,reservedHours:0,partyContact:c.contact,expiresAt:Date.now()+config.pendingRequestMs});
  closeModal();toast("邀请已发送，可在组队 / 进度查看");state.progressView="relations";state.tab="all";go("progress");
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
      x.expiresAt=null;
    }
  });
  closeModal();toast("已拉黑，未完成关系与临时预留已释放");state.mode="people";go("explore");
}
function openReport(kind,id,label){
  modal('<h2>举报 / 反馈</h2><p class="subtitle">对象：'+e(label)+'</p><div class="field"><label>举报原因</label><select class="select" id="reportReason"><option>虚假招募 / 经历</option><option>骚扰</option><option>诱导站外支付</option><option>疑似不当索取成果</option><option>其他</option></select></div><div class="field" style="margin-top:10px"><label>补充说明（可选）</label><textarea class="textarea" id="reportNote"></textarea></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="submitReport(\''+kind+'\','+id+')">提交举报</button></div>');
}
function submitReport(kind,id){
  var reason=byId("reportReason")?byId("reportReason").value:"其他";
  var note=byId("reportNote")?byId("reportNote").value:"";
  state.reports.push({id:Date.now(),kind:kind,targetId:id,reason:reason,note:note,status:"received"});
  closeModal();toast("已收到反馈；不会因单次举报自动评分或封禁");
}
function reportRecruit(id){var r=findRecruit(id);if(r)openReport("recruit",id,r.comp+" · "+r.title)}
function reportRelation(id){var x=rel(id);if(x)openReport("relation",id,x.title+" · "+x.party)}
function reportUser(id){var c=candidates.filter(function(x){return x.id===id})[0];if(c)openReport("user",id,c.name)}
function blockRelationParty(id){
  var x=rel(id);if(!x)return;
  if(x.candidateId){blockUser(x.candidateId);return}
  var r=relationRecruit(x),gid=recruitGroupId(r);
  allRecruitments().forEach(function(rr){if(recruitGroupId(rr)===gid)state.blockedRecruitIds[rr.id]=true});
  releaseReservation(x);
  if(x.status!=="joined"){x.status="ended";x.reason="已拉黑对方";x.expiresAt=null}
  toast("已拉黑；双方不再进入新的搜索、申请或邀请");render();
}


/* PROGRESS / STATE MACHINE */
function renderProgress(p){
  var pending=state.relationships.filter(function(x){return x.status==="pending"}).length;
  var communication=state.relationships.filter(function(x){return x.status==="communication"}).length;
  var confirming=state.relationships.filter(function(x){return x.status==="confirming"}).length;
  var joined=Math.max(state.relationships.filter(function(x){return x.status==="joined"}).length,state.joined?1:0);
  p.innerHTML=demoBar()+
    '<section class="progressHero"><div><span class="pageKicker">TEAMING PROGRESS</span><h2>组队中心</h2><p>“申请 / 邀请中心”和“我的队伍”统一归档，但仍保持两类页面职责清晰。</p></div><div class="progressStats"><div><b>'+pending+'</b><span>待处理</span></div><div><b>'+communication+'</b><span>待沟通</span></div><div><b>'+confirming+'</b><span>确认中</span></div><div><b>'+joined+'</b><span>已组队</span></div></div></section>'+
    '<div class="progressSwitch"><button class="'+(state.progressView==="relations"?"active":"")+'" onclick="state.progressView=\'relations\';render()">申请 / 邀请中心</button><button class="'+(state.progressView==="team"?"active":"")+'" onclick="state.progressView=\'team\';render()">我的队伍</button></div>'+
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
  if(!x)return true;
  return (x.type==="application"&&x.direction==="outgoing")||(x.type==="invitation"&&x.direction==="incoming");
}
function relationGroupRoles(x){
  var r=relationRecruit(x);if(!r)return[];
  var gid=recruitGroupId(r);
  return allRecruitments().filter(function(rr){return recruitGroupId(rr)===gid});
}
function changeRelationRole(id){
  var x=rel(id),r=relationRecruit(x);if(!x||!r)return;
  if(x.status!=="communication"){toast("只有待沟通阶段可以调整当前目标角色");return}
  var roles=relationGroupRoles(x);
  if(roles.length<=1){toast("当前招募没有其他角色缺口");return}
  var rows=roles.map(function(rr){
    var current=rr.id===r.id,full=rr.role.formal>=rr.role.capacity;
    return '<button class="rolePick '+(current?"active":"")+'" '+((current||full)?'disabled':'')+' onclick="confirmRelationRoleChange('+id+','+rr.id+')"><div><b>'+e(rr.role.name)+(current?" · 当前角色":"")+'</b><span>'+e(rr.role.task)+'</span></div><small>'+(full?"已招满":rr.role.hours+"h / 周")+'</small></button>';
  }).join("");
  modal('<h2>调整当前目标角色</h2><p class="subtitle">待沟通阶段可以协商调整角色；正式确认前会按新角色重新检查名额、技能、时间和最新条件。</p><div class="rolePicker">'+rows+'</div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button></div>');
}
function confirmRelationRoleChange(id,newRecruitId){
  var x=rel(id),oldR=relationRecruit(x),r=findRecruit(newRecruitId);if(!x||!oldR||!r)return;
  if(x.status!=="communication"||recruitGroupId(oldR)!==recruitGroupId(r)){toast("关系状态或角色已变化，请刷新后重试");return}
  if(r.role.formal>=r.role.capacity){toast("该角色已正式招满");return}
  var hard=formalEligibility(x,r);
  if(!hard.ok){toast("当前不能切换到该角色："+hard.reason);return}
  x.recruitId=r.id;x.role=r.role.name;x.title=r.comp+" · "+r.role.name;x.conditionUpdated=true;
  closeModal();toast("目标角色已调整；正式确认将按新角色重新校验");render();
}

function requestCard(x){
  refreshRelationExpiry(x);
  var mp={pending:["请求待处理",""],communication:["待沟通","green"],confirming:["正式确认中","warn"],joined:["已组队","blue"],ended:["已结束",""]},st=mp[x.status],act="",note="",asCandidate=currentUserIsCandidate(x),r=relationRecruit(x);
  var task=r&&r.role?'<div class="requestTask">任务：'+e(r.role.task)+'</div>':'';
  var saturated=r&&r.role.formal<r.role.capacity&&roleFree(r)<=0;
  if(x.status==="pending"){
    if((x.type==="invitation"&&x.direction==="incoming")||(x.type==="application"&&x.direction==="incoming"))act='<button class="btn secondary" onclick="rejectReq('+x.id+')">拒绝</button><button class="btn primary" onclick="agreeReq('+x.id+')">同意沟通</button>';
    else if(x.type==="invitation"&&x.direction==="outgoing")act='<button class="btn secondary" onclick="cancelReq('+x.id+')">撤回邀请</button><span class="status">等待对方处理</span>';
    else act='<button class="btn secondary" onclick="cancelReq('+x.id+')">取消申请</button>';
    note='<div class="relationMeta">请求有效期：'+e(formatExpiry(x))+'</div>'+(x.conditionUpdated?'<div class="notice warn" style="margin-top:8px">该招募条件已更新，请重新查看最新任务、时间与目标后再决定是否继续。</div>':'');
  }
  if(!asCandidate&&r&&!canManageRecruit(r)&&x.status!=="joined"&&x.status!=="ended"){
    act='<span class="status">已无队长权限</span>';note='<div class="notice warn" style="margin-top:8px">该队伍的队长身份已经转交，你不能继续处理候选人或正式确认。</div>';
  }else if(x.status==="communication"){
    var roleSwitch=relationGroupRoles(x).length>1?'<button class="btn secondary" onclick="changeRelationRole('+x.id+')">调整角色</button>':'';
    if(asCandidate)act='<button class="btn secondary" onclick="endComm('+x.id+')">中止沟通</button>'+roleSwitch+'<button class="btn primary" onclick="candidateStartConfirm('+x.id+')">发起正式确认</button>';
    else act='<button class="btn secondary" onclick="endComm('+x.id+')">中止沟通</button>'+roleSwitch+'<button class="btn primary" onclick="captainStartConfirm('+x.id+')">发起正式确认</button>';
    note='<div class="contactReveal"><b>本次已授权联系方式</b><span>我的微信：'+e(state.userContact||"未授权")+'</span><span>对方：'+e(x.partyContact||"已授权联系方式")+'</span><small>中止沟通后平台停止后续授权，但无法收回已被保存的站外联系方式。</small></div>';
    if(x.conditionUpdated)note+='<div class="notice warn" style="margin-top:8px">该招募条件已更新，请重新查看最新任务、时间与目标。</div>';
  }
  if((asCandidate||!r||canManageRecruit(r))&&x.status==="confirming"){
    if(x.initiator==="captain"){
      if(asCandidate)act='<button class="btn secondary" onclick="rejectConfirm('+x.id+')">暂不加入</button><button class="btn primary" onclick="openCandidateAcceptCaptainConfirm('+x.id+')">确认加入</button>';
      else act='<button class="btn secondary" onclick="rejectConfirm('+x.id+')">撤回确认</button><span class="status">等待候选人确认</span>';
      note='<div class="notice warn" style="margin-top:8px">队长发起：已临时预留角色名额'+(asCandidate?"和你的约定投入":"；不会占用队长自己的可投入时间")+'。'+e(formatExpiry(x))+'</div>';
    }else{
      if(asCandidate)act='<button class="btn secondary" onclick="rejectConfirm('+x.id+')">撤回确认</button><span class="status">等待队长最终确认</span>';
      else act='<button class="btn secondary" onclick="rejectConfirm('+x.id+')">拒绝</button><button class="btn primary" onclick="openLeaderFinalizeCandidateConfirm('+x.id+')">最终确认</button>';
      note='<div class="notice" style="margin-top:8px">候选人发起：暂不预留名额；队长最终确认时按最新名额、时间和条件重新校验。'+e(formatExpiry(x))+'</div>';
    }
  }
  if(saturated&&(x.status==="pending"||x.status==="communication"||(x.status==="confirming"&&x.initiator==="candidate")))note+='<div class="notice warn" style="margin-top:8px">该角色名额正在与其他候选人确认中；当前关系保留，可等待预留释放。</div>';
  if(x.status==="joined")act=asCandidate?'<button class="btn primary" onclick="openJoinedRelationTeam('+x.id+')">查看队伍</button>':'<button class="btn primary" onclick="state.progressView=\'team\';state.teamView=\'managed\';render()">查看队伍</button>';
  if(x.status==="ended")act='<button class="btn text" onclick="reportRelation('+x.id+')">举报 / 反馈</button><button class="btn secondary" onclick="blockRelationParty('+x.id+')">拉黑对方</button>';
  return '<div class="request"><div class="requestMain"><div class="between"><div class="requestTitle">'+e(x.title)+'</div><span class="status '+st[1]+'">'+st[0]+'</span></div><div class="requestSub">'+e(x.party)+' · '+e(x.role)+' · '+e(x.time)+'</div>'+task+note+(x.status==="ended"?'<div class="requestSub">'+e(x.reason||"本次关系已结束")+'</div>':'')+'</div><div class="requestActions">'+act+'</div></div>';
}
function rel(id){return state.relationships.filter(function(x){return x.id===id})[0]||null}
function openJoinedRelationTeam(id){
  var x=rel(id),r=relationRecruit(x);
  if(!x||!r||x.status!=="joined"||!currentUserIsCandidate(x)){toast("该正式队伍当前不可查看");return}
  state.joined=true;state.joinedRecruitId=r.id;state.joinedStageHours=x.joinedHours||r.role.hours||0;
  state.progressView="team";state.teamView="joined";render();
}
function relationRecruit(x){return x?findRecruit(x.recruitId):null}
function rejectReq(id){var x=rel(id);if(!x)return;x.status="ended";x.reason=x.type==="application"?"你已拒绝本次申请":"你已拒绝本次邀请";x.expiresAt=null;toast("已拒绝，不产生负面标签");render()}
function cancelReq(id){
  var x=rel(id);if(!x)return;
  releaseReservation(x);x.status="ended";x.reason=x.type==="invitation"?"邀请已撤回":"申请已取消";x.expiresAt=null;
  toast(x.reason);render();
}
function agreeReq(id){
  var x=rel(id);if(!x)return;
  if(!hasUserContact()){toast("请先补充并授权至少一种联系方式");state.profileReturn="progress";go("profileEdit");return}
  if(!x.partyContact){toast("对方当前未授权可用联系方式，暂不能进入待沟通");return}
  modal('<h2>同意沟通</h2><p class="subtitle">进入待沟通前，双方都需要至少授权一种联系方式；公开档案不会直接展示联系方式。</p><div class="notice">我的授权：微信 · '+e(state.userContact)+'</div><div class="notice" style="margin-top:8px">对方已授权：'+e(x.partyContact)+'</div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="confirmAgree('+id+')">确认并开放</button></div>');
}
function confirmAgree(id){
  var x=rel(id);if(!x)return;
  if(x.status!=="pending"){closeModal();toast("请求状态已变化，请按最新状态继续");render();return}
  var r=relationRecruit(x);
  if(r&&(r.status==="ended"||r.role.formal>=r.role.capacity)){x.status="ended";x.reason=r.status==="ended"?"招募已结束":"名额已满";x.expiresAt=null;closeModal();toast(x.reason);render();return}
  if(!hasUserContact()||!x.partyContact){toast("双方需至少授权一种联系方式后才能开始沟通");return}
  if(!registerContactUnlock()){toast("短时间联系方式解锁过于频繁，请稍后重试或完成额外验证");return}
  x.status="communication";x.contact=true;x.expiresAt=null;closeModal();toast("已进入待沟通");render();
}
function simulateInviteAccepted(id){
  var x=rel(id);if(!x||x.status!=="pending"){toast("邀请状态已变化，请按最新状态继续");render();return}
  var r=relationRecruit(x);
  if(r&&(r.status==="ended"||r.role.formal>=r.role.capacity)){x.status="ended";x.reason=r.status==="ended"?"招募已结束":"名额已满";x.expiresAt=null;toast(x.reason);render();return}
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
  if(currentUserIsCandidate(x))return remainingFor(relationRecruit(x));
  var c=relationCandidate(x),r=relationRecruit(x);
  return c&&r?candidateRemainingFor(c,r,x.id):0;
}
function formalEligibility(x,r){
  if(!x||!r)return {ok:false,reason:"关系或招募不存在"};
  if(r.status==="ended")return {ok:false,reason:"招募已结束"};
  if(currentUserIsCandidate(x)){
    if(state.blockedRecruitIds[r.id])return {ok:false,reason:"双方存在拉黑关系"};
    if(r.hard&&r.campus!==state.userCampus)return {ok:false,reason:"最新校区限制不满足"};
    if(!userAvailabilityOverlaps(r))return {ok:false,reason:"你的可参与日期与最新项目周期不匹配"};
    var miss=(r.role.skills||[]).filter(function(k){return state.profileSkills.indexOf(k)<0});
    if(miss.length)return {ok:false,reason:"最新必需技能条件不满足："+miss.join("、")};
  }else{
    var c=relationCandidate(x);if(!c)return {ok:false,reason:"候选人资料不存在"};
    if(state.blocked[c.id])return {ok:false,reason:"双方存在拉黑关系"};
    if(r.hard&&c.campus!==r.campus)return {ok:false,reason:"最新校区限制不满足"};
    if(!candidateAvailabilityOverlaps(c,r))return {ok:false,reason:"候选人的可参与日期与最新项目周期不匹配"};
    var pool=c.skills.concat(c.roles),missing=(r.role.skills||[]).filter(function(k){return pool.indexOf(k)<0});
    if(missing.length)return {ok:false,reason:"候选人不满足最新必需技能："+missing.join("、")};
  }
  return {ok:true,reason:""};
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
  var eligibility=formalEligibility(x,r);if(!eligibility.ok){toast("当前不能发起正式确认："+eligibility.reason);return}
  if(remainingFor(r)<0){toast("你当前承诺时间已超出声明总时间，请先调整");return}
  if(remainingFor(r)<r.role.hours){toast("当前可投入时间低于最新岗位要求，请先更新真实可投入时间");return}
  if(r.status==="ended"||r.role.formal>=r.role.capacity){toast("该角色当前已无法继续正式确认");return}
  modal('<h2>候选人发起正式确认</h2><p class="subtitle">候选人发起时不预留名额；队长最终确认才按最新资源完成组队。</p><div class="kv"><div class="k">角色</div><div>'+e(r.role.name)+'</div><div class="k">具体任务</div><div>'+e(r.role.task)+'</div><div class="k">项目周期</div><div>'+e(r.period)+'</div><div class="k">每周约定投入</div><div>'+r.role.hours+'h / 周</div><div class="k">当前剩余</div><div>'+Math.max(0,remainingFor(r))+'h / 周</div></div><div class="notice" style="margin-top:10px">请确认以上为最新条件；正式确认请求最长保留 24 小时。</div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">返回</button><button class="btn primary" onclick="confirmCandidateStart('+id+')">发送确认请求</button></div>');
}
function confirmCandidateStart(id){
  var x=rel(id),r=relationRecruit(x);if(!x||!r)return;
  if(x.status!=="communication"){closeModal();toast("关系状态已变化，请重新操作");render();return}
  var eligibility=formalEligibility(x,r);if(!eligibility.ok){closeModal();toast("当前不能发起正式确认："+eligibility.reason);render();return}
  if(r.role.formal>=r.role.capacity){closeModal();toast("该角色已正式招满");render();return}
  if(remainingFor(r)<r.role.hours){closeModal();toast("当前可投入时间低于最新岗位要求，请先更新真实可投入时间");render();return}
  x.status="confirming";x.initiator="candidate";x.time="刚刚 · 等待队长最终确认";x.expiresAt=Date.now()+config.formalConfirmMs;x.conditionUpdated=false;
  closeModal();toast("确认请求已发送");render();
}
function captainStartConfirm(id){
  var x=rel(id),r=relationRecruit(x);if(!x||!r)return;
  if(!canManageRecruit(r)){toast("只有当前队长可以发起队长侧正式确认");return}
  if(x.status!=="communication"){toast("当前关系不能发起正式确认");return}
  var eligibility=formalEligibility(x,r);if(!eligibility.ok){toast("当前不能发起正式确认："+eligibility.reason);return}
  if(r.status==="ended"||r.role.formal>=r.role.capacity){toast("角色已正式招满或招募已结束");return}
  if(r.role.formal+r.role.reserved>=r.role.capacity){toast("名额正在被其他候选人确认");return}
  var candidateAvailable=relationCandidateAvailable(x);
  if(candidateAvailable<r.role.hours){toast("候选人当前可投入时间不足，不能创建正式确认");return}
  modal('<h2>队长发起正式确认</h2><p class="subtitle">确认后会临时预留 1 个角色名额和候选人的本次约定投入，最长 24 小时。</p><div class="kv"><div class="k">角色</div><div>'+e(r.role.name)+'</div><div class="k">具体任务</div><div>'+e(r.role.task)+'</div><div class="k">项目周期</div><div>'+e(r.period)+'</div><div class="k">每周约定投入</div><div>'+r.role.hours+'h / 周</div><div class="k">候选人当前可投入</div><div>'+candidateAvailable+'h / 周</div></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="confirmCaptainStart('+id+')">发起并预留</button></div>');
}
function confirmCaptainStart(id){
  var x=rel(id),r=relationRecruit(x);if(!x||!r)return;
  if(!canManageRecruit(r)){closeModal();toast("只有当前队长可以发起队长侧正式确认");render();return}
  if(x.status!=="communication"){closeModal();toast("关系状态已变化，请刷新后重试");render();return}
  var eligibility=formalEligibility(x,r);if(!eligibility.ok){closeModal();toast("当前不能发起正式确认："+eligibility.reason);render();return}
  if(r.role.formal>=r.role.capacity){closeModal();toast("角色已正式招满");render();return}
  if(r.role.formal+r.role.reserved>=r.role.capacity){closeModal();toast("名额正在被其他候选人确认");render();return}
  var candidateAvailable=relationCandidateAvailable(x);if(candidateAvailable<r.role.hours){closeModal();toast("候选人最新可投入时间不足");render();return}
  r.role.reserved+=1;x.reserved=true;x.reservedHours=r.role.hours;x.reservedOnCurrentUser=currentUserIsCandidate(x);
  if(x.reservedOnCurrentUser)state.reserved+=r.role.hours;
  x.status="confirming";x.initiator="captain";x.time="刚刚 · 队长发起 · 名额确认中";x.expiresAt=Date.now()+config.formalConfirmMs;x.conditionUpdated=false;
  closeModal();toast("已临时预留角色名额"+(x.reservedOnCurrentUser?"与时间":""));render();
}
function rejectConfirm(id){
  var x=rel(id);if(!x)return;
  releaseReservation(x);x.status="communication";x.initiator=null;x.time="刚刚 · 回到待沟通";x.expiresAt=null;
  toast("本次正式确认已结束，待沟通关系保留");render();
}
function openLeaderFinalizeCandidateConfirm(id){
  var x=rel(id),r=relationRecruit(x);if(!x||!r)return;
  refreshRelationExpiry(x);if(x.status!=="confirming"){toast("本次正式确认已失效，已回到待沟通");render();return}
  modal('<h2>最终确认组队</h2><p class="subtitle">将按提交瞬间的最新名额、时间、关系和核心条件重新校验。</p><div class="kv"><div class="k">角色</div><div>'+e(r.role.name)+'</div><div class="k">具体任务</div><div>'+e(r.role.task)+'</div><div class="k">项目周期</div><div>'+e(r.period)+'</div><div class="k">每周约定投入</div><div>'+r.role.hours+'h / 周</div><div class="k">当前可用名额</div><div>'+roleFree(r)+'</div><div class="k">剩余处理时间</div><div>'+e(formatExpiry(x))+'</div></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">返回</button><button class="btn primary" onclick="closeModal();leaderFinalizeCandidateConfirm('+id+')">最终确认</button></div>');
}
function leaderFinalizeCandidateConfirm(id){
  var x=rel(id),r=relationRecruit(x);if(!x||!r)return;
  if(!canManageRecruit(r)){toast("只有当前队长可以完成最终确认");return}
  if(x.status!=="confirming"||x.initiator!=="candidate"){toast("当前不是候选人发起的确认");return}
  var eligible=formalEligibility(x,r);if(!eligible.ok){x.status="communication";x.initiator=null;x.expiresAt=null;toast("最终校验失败："+eligible.reason);render();return}
  if(r.role.formal>=r.role.capacity){x.status="ended";x.reason="角色已正式招满";x.expiresAt=null;toast("最终校验失败：角色已正式招满");render();return}
  if(r.role.formal+r.role.reserved>=r.role.capacity){toast("名额正在与其他候选人确认中，请稍后重试");return}
  if(relationCandidateAvailable(x)<r.role.hours){x.status="communication";x.initiator=null;x.expiresAt=null;toast("最终校验失败：候选人当前可投入时间不足，已回到待沟通");render();return}
  finishJoin(x,r,r.role.hours);
}
function openCandidateAcceptCaptainConfirm(id){
  var x=rel(id),r=relationRecruit(x);if(!x||!r)return;
  refreshRelationExpiry(x);if(x.status!=="confirming"){toast("本次正式确认已失效，已回到待沟通");render();return}
  modal('<h2>确认加入队伍</h2><p class="subtitle">本次预留将转为正式成员占位，不会重复扣减时间。</p><div class="kv"><div class="k">角色</div><div>'+e(r.role.name)+'</div><div class="k">具体任务</div><div>'+e(r.role.task)+'</div><div class="k">项目周期</div><div>'+e(r.period)+'</div><div class="k">每周约定投入</div><div>'+r.role.hours+'h / 周</div><div class="k">剩余处理时间</div><div>'+e(formatExpiry(x))+'</div></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">返回</button><button class="btn primary" onclick="closeModal();candidateAcceptCaptainConfirm('+id+')">确认加入</button></div>');
}
function candidateAcceptCaptainConfirm(id){
  var x=rel(id),r=relationRecruit(x);if(!x||!r)return;
  if(x.status!=="confirming"||x.initiator!=="captain"||!x.reserved){toast("该临时预留已失效");return}
  var eligible=formalEligibility(x,r);if(!eligible.ok){releaseReservation(x);x.status="communication";x.initiator=null;x.expiresAt=null;toast("确认失败："+eligible.reason);render();return}
  if(r.role.formal>=r.role.capacity){releaseReservation(x);x.status="ended";x.reason="角色已正式招满";x.expiresAt=null;toast("确认失败：角色已正式招满");render();return}
  var available=currentUserIsCandidate(x)?remainingFor(r)+(x.reservedOnCurrentUser?(x.reservedHours||0):0):relationCandidateAvailable(x);
  if(available<r.role.hours){releaseReservation(x);x.status="communication";x.initiator=null;x.expiresAt=null;toast("确认失败：最新可投入时间不足，已释放预留并回到待沟通");render();return}
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
  x.status="joined";x.initiator=null;x.joinedHours=hours;x.time="刚刚 · 正式组队成功";
  if(r.restoredKind==="front")state.memberRemoved=false;
  if(r.restoredKind==="data")state.dataMemberRemoved=false;
  if(asCandidate){
    var candidateGroupId=recruitGroupId(r);
    state.relationships.forEach(function(other){
      var rr=findRecruit(other.recruitId);
      if(other.id!==x.id&&rr&&recruitGroupId(rr)===candidateGroupId&&other.status!=="joined"&&other.status!=="ended"&&currentUserIsCandidate(other)){
        releaseReservation(other);other.status="ended";other.reason="已通过同一招募的另一角色关系正式组队";
      }
    });
  }else if(x.candidateId){
    var gid=recruitGroupId(r);
    state.relationships.forEach(function(other){
      var rr=findRecruit(other.recruitId);
      if(other.id!==x.id&&rr&&recruitGroupId(rr)===gid&&other.candidateId===x.candidateId&&other.status!=="joined"&&other.status!=="ended"){
        releaseReservation(other);other.status="ended";other.reason="该候选人已通过同一招募的另一角色关系正式入队";
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
  var completedGroup=managedRecruitments.indexOf(r)>=0?managedGroup(r):[r];
  if(completedGroup.length&&completedGroup.every(function(g){return g.role.formal>=g.role.capacity})){
    var completedIds=completedGroup.map(function(g){return g.id});
    completedGroup.forEach(function(g){g.status="full"});
    state.relationships.forEach(function(other){
      if(other.id!==x.id&&completedIds.indexOf(other.recruitId)>=0&&other.status!=="joined"&&other.status!=="ended"){
        releaseReservation(other);other.status="ended";other.reason="所有角色已正式招满";
      }
    });
  }
  x.expiresAt=null;
  toast("正式组队成功");state.progressView="team";render();
}

/* FULL TEAM PAGE */
function progressTeam(){
  var joinedRelations=state.relationships.filter(function(x){return x.status==="joined"&&currentUserIsCandidate(x)});
  var hasJoined=joinedRelations.length>0;
  if(hasJoined&&!joinedRelations.some(function(x){return x.recruitId===state.joinedRecruitId})){
    var first=joinedRelations[0],rr=relationRecruit(first);
    state.joined=true;state.joinedRecruitId=first.recruitId;state.joinedStageHours=first.joinedHours||(rr&&rr.role?rr.role.hours:0);
  }else if(!hasJoined){
    state.joined=false;state.joinedRecruitId=null;state.joinedStageHours=0;
  }
  var selector=hasJoined?'<div class="teamViewSwitch"><button class="'+(state.teamView==="managed"?"active":"")+'" onclick="state.teamView=\'managed\';render()">我创建的队伍</button><button class="'+(state.teamView==="joined"?"active":"")+'" onclick="state.teamView=\'joined\';render()">我加入的队伍</button></div>':'';
  return selector+(hasJoined&&state.teamView==="joined"?renderJoinedTeam():renderManagedTeam());
}
function managedJoinedCandidates(){
  var base=findRecruit(state.managedTeamRecruitId)||managedRecruitments[0],ids=managedGroup(base).map(function(g){return g.id});
  return state.relationships.filter(function(x){
    return ids.indexOf(x.recruitId)>=0&&x.status==="joined"&&x.candidateId;
  }).map(function(x){
    return {relation:x,candidate:candidates.filter(function(c){return c.id===x.candidateId})[0],recruit:findRecruit(x.recruitId)};
  }).filter(function(x){return x.candidate&&x.recruit});
}
function managedAddedCandidate(){
  var items=managedJoinedCandidates();return items.length?items[0].candidate:null;
}
function managedOtherCount(){
  var count=0;if(!state.dataMemberRemoved)count++;if(!state.memberRemoved)count++;count+=managedJoinedCandidates().length;return count;
}
function renderManagedTeam(){
  var r=findRecruit(state.managedTeamRecruitId)||managedRecruitments[0],group=managedGroup(r),addedItems=managedJoinedCandidates();
  if(state.teamDissolved)return '<div class="panel empty"><h3>队伍已解散</h3><p>未完成招募和请求已关闭，相关临时预留已释放。</p><button class="btn secondary" onclick="state.progressView=\'relations\';render()">返回组队进度</button></div>';
  if(!state.managedMemberActive)return '<div class="panel empty"><h3>你已退出该队伍</h3><p>队长权限已转交，退出后不再显示成员管理操作。</p><button class="btn secondary" onclick="state.progressView=\'relations\';render()">返回组队进度</button></div>';
  var gaps=[];
  group.forEach(function(g){
    if(g.role.formal<g.role.capacity){
      var stateText=g.status==="paused"?"暂停接收":g.status==="active"?"招募中":g.status==="ended"?"已结束":"待招募";
      gaps.push('<div class="roleBox"><div class="between"><b>'+e(g.role.name)+' · '+(g.role.capacity-g.role.formal)+' 人</b><span class="status warn">'+stateText+'</span></div><p class="subtitle">'+e(g.role.task)+'</p>'+(state.managedCaptain?'<button class="btn text" onclick="manageGapRole('+g.id+')">配置 / 开放该角色</button>':'')+'</div>');
    }
  });
  var members=1+managedOtherCount(),captainActions="";
  if(state.managedCaptain){
    captainActions='<button class="btn secondary" onclick="transferCaptain()">转交队长</button><button class="btn primary" onclick="editManagedRecruit()">管理招募</button>'+(managedOtherCount()===0?'<button class="btn danger" onclick="dissolveManagedTeam()">解散队伍</button>':'');
  }else captainActions='<button class="btn danger" onclick="leaveManagedTeam()">退出队伍</button>';
  var frontendSub=state.memberRemoved?"":"当前阶段投入 "+state.frontendCurrentHours+"h / 周 · 约定 "+state.frontendAgreedHours+"h / 周";
  return '<div class="panel teamFullPage"><div class="between"><div><div class="meta">'+e(r.comp)+' · 我创建的队伍</div><div class="bigTitle">'+(r.id===901?"CompMate 项目队":"行业分析队")+'</div><div class="subtitle">当前队长：'+e(state.managedCaptainName)+'。'+(state.managedCaptain?"你拥有招募、成员和队长转交权限。":"你当前按普通正式成员权限使用。")+'</div></div><span class="status green">进行中</span></div>'+
    '<div class="actions">'+captainActions+'</div>'+
    '<div class="stats"><div class="stat"><b>'+members+'</b><span>正式成员</span></div><div class="stat"><b>'+gaps.length+'</b><span>当前角色缺口</span></div><div class="stat"><b>'+state.managedStageHours+'h</b><span>我的当前投入</span></div></div>'+
    '<div class="section"><div class="between"><h3 class="sectionTitle">成员与角色</h3><button class="btn secondary" onclick="editHours()">更新我的阶段投入</button></div><div class="list" style="margin-top:12px">'+
      teamMember("你",state.managedCaptain?"队长 / 产品":"产品","当前阶段投入 "+state.managedStageHours+"h / 周",true,false)+
      (state.dataMemberRemoved?"":'<div class="request"><div><div class="requestTitle">苏嘉 · '+(state.managedCaptainName==="苏嘉"?"队长 / 数据分析":"数据分析")+'</div><div class="requestSub">当前阶段投入 10h / 周</div></div><div class="requestActions"><span class="status">正式成员</span>'+(state.managedCaptain?'<button class="btn text" onclick="removeManagedMember(\'data\')">移除</button>':'')+'</div></div>')+
      (state.memberRemoved?"":'<div class="request"><div><div class="requestTitle">何川 · '+(state.managedCaptainName==="何川"?"队长 / 前端开发":"前端开发")+'</div><div class="requestSub">'+e(frontendSub)+'</div>'+(state.frontendCurrentHours<state.frontendAgreedHours?'<div class="notice warn" style="margin-top:8px">当前投入低于原约定 '+state.frontendAgreedHours+'h / 周，需要继续协商。</div>':'')+'</div><div class="requestActions"><span class="status">正式成员</span>'+(state.managedCaptain&&state.frontendCurrentHours<state.frontendAgreedHours?'<button class="btn text" onclick="resolveMemberHours()">处理投入变化</button>':'')+(state.managedCaptain?'<button class="btn text" onclick="removeManagedMember(\'front\')">移除</button>':'')+'</div></div>')+
      addedItems.map(function(item){return addedMemberRow(item.candidate,item.recruit)}).join("")+
    '</div></div>'+
    '<div class="section"><div class="between"><h3 class="sectionTitle">剩余角色缺口</h3>'+(state.managedCaptain?'<button class="btn primary" onclick="editManagedRecruit()">管理招募</button>':'')+'</div>'+(gaps.length?gaps.join(""):'<div class="notice good" style="margin-top:10px">当前角色已补齐。</div>')+'</div>'+
    '<div class="section"><div class="between"><h3 class="sectionTitle">入群说明</h3>'+(state.managedCaptain?'<button class="btn secondary" onclick="editGroupNote()">编辑</button>':'')+'</div><p class="subtitle">'+e(state.groupNote)+'</p><div class="meta">仅正式成员可见；队长转交后由新队长继续维护。</div></div></div>';
}
function addedMemberRow(c,r){
  var isCaptain=state.managedCaptainName===c.name;
  return '<div class="request"><div><div class="requestTitle">'+e(c.name)+' · '+e(isCaptain?"队长 / "+r.role.name:r.role.name)+'</div><div class="requestSub">已通过正式确认加入 · 当前岗位 '+e(r.role.name)+'</div></div><div class="requestActions"><span class="status">正式成员</span>'+(state.managedCaptain&&!isCaptain?'<button class="btn text" onclick="removeAddedCandidate('+c.id+')">移除</button>':'')+'</div></div>';
}
function removeAddedCandidate(candidateId){
  if(!state.managedCaptain){toast("只有当前队长可以移除其他成员");return}
  var cnd=candidates.filter(function(x){return x.id===candidateId})[0],base=findRecruit(state.managedTeamRecruitId)||managedRecruitments[0];
  if(!cnd||!base)return;
  if(state.managedCaptainName===cnd.name){toast("不能直接移除当前队长，请先转交队长身份");return}
  var ids=managedGroup(base).map(function(g){return g.id});
  var joined=state.relationships.filter(function(x){return x.candidateId===candidateId&&ids.indexOf(x.recruitId)>=0&&x.status==="joined"})[0];
  var rr=joined?relationRecruit(joined):base;
  modal('<h2>移除成员？</h2><p class="subtitle">'+e(cnd.name)+' · '+e(rr.role.name)+'。移除后对应角色恢复为空缺，历史申请不会自动重新生效。</p><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn danger" onclick="confirmRemoveAddedCandidate('+candidateId+')">确认移除</button></div>');
}
function confirmRemoveAddedCandidate(candidateId){
  var base=findRecruit(state.managedTeamRecruitId)||managedRecruitments[0],ids=managedGroup(base).map(function(g){return g.id});
  var x=state.relationships.filter(function(a){return a.candidateId===candidateId&&ids.indexOf(a.recruitId)>=0&&a.status==="joined"})[0];
  var r=x?relationRecruit(x):null;
  if(x){x.status="ended";x.reason="已被队长移除";x.expiresAt=null}
  if(r){
    r.role.formal=Math.max(0,r.role.formal-1);
    if(r.status==="full"&&r.role.formal<r.role.capacity)r.status="paused";
  }
  closeModal();toast("成员已移除，角色名额已恢复；是否重新开放招募由队长决定");render();
}

function transferCaptain(){
  if(!state.managedCaptain){toast("只有当前队长可以转交队长身份");return}
  var addedItems=managedJoinedCandidates(),opts="";
  if(!state.dataMemberRemoved)opts+='<button class="rolePick" onclick="confirmTransferCaptain(\'苏嘉\')"><div><b>苏嘉</b><span>数据分析 · 正式成员</span></div><small>设为队长 →</small></button>';
  if(!state.memberRemoved)opts+='<button class="rolePick" onclick="confirmTransferCaptain(\'何川\')"><div><b>何川</b><span>前端开发 · 正式成员</span></div><small>设为队长 →</small></button>';
  addedItems.forEach(function(item){opts+='<button class="rolePick" onclick="confirmTransferCaptain(\''+e(item.candidate.name)+'\')"><div><b>'+e(item.candidate.name)+'</b><span>'+e(item.recruit.role.name)+' · 正式成员</span></div><small>设为队长 →</small></button>'});
  modal('<h2>转交队长身份</h2><p class="subtitle">只能转交给当前正式成员。转交成功后，你立即按普通正式成员权限处理。</p>'+(opts?'<div class="rolePicker">'+opts+'</div>':'<div class="notice warn">当前没有其他正式成员，不能转交队长。你可以选择解散队伍。</div>')+'<div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button>'+(opts?'':'<button class="btn danger" onclick="closeModal();dissolveManagedTeam()">解散队伍</button>')+'</div>');
}
function confirmTransferCaptain(name){
  var r=findRecruit(state.managedTeamRecruitId)||managedRecruitments[0];
  state.managedCaptain=false;state.managedCaptainName=name;
  if(r)managedGroup(r).forEach(function(g){g.leader=name});
  closeModal();toast("队长身份已转交给 "+name+"；你在该招募全部角色下的管理权限已立即更新");render();
}
function editGroupNote(){
  if(!state.managedCaptain){toast("只有当前队长可以维护入群说明");return}
  modal('<h2>编辑入群说明</h2><p class="subtitle">仅正式成员可见，不公开展示群二维码。</p><div class="field"><label>入群说明</label><textarea class="textarea" id="groupNoteInput">'+e(state.groupNote)+'</textarea></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="saveGroupNote()">保存</button></div>');
}
function saveGroupNote(){var v=String(byId("groupNoteInput").value||"").trim();state.groupNote=v;closeModal();toast("入群说明已更新");render()}
function ensureRestoredRole(kind){
  var base=findRecruit(state.managedTeamRecruitId)||managedRecruitments[0],group=managedGroup(base);
  var existing=group.filter(function(g){return g.restoredKind===kind})[0];
  if(existing)return existing;
  var def=kind==="data"
    ?{name:"数据分析",hours:10,task:"负责数据清洗、统计分析、可视化与结果提炼",skills:["Excel","数据分析","可视化"]}
    :kind==="front"
      ?{name:"前端开发",hours:8,task:"负责产品页面、核心交互与前端实现",skills:["JavaScript","HTML/CSS","React"]}
      :{name:"产品 / 项目推进",hours:Math.max(1,state.managedStageHours||8),task:"负责需求梳理、方案设计、关键节点推进与成果整合",skills:["产品策划","用户调研"]};
  var id=Date.now()+Math.floor(Math.random()*1000),gid=recruitGroupId(base);
  var r={
    id:id,groupId:gid,restoredKind:kind,category:base.category,comp:base.comp,title:base.title,school:base.school,campus:base.campus,leader:base.leader,status:"paused",
    target:base.target,period:base.period,deadline:base.deadline,team:base.team,progress:base.progress,collab:base.collab,hard:base.hard,reasons:[],
    role:{name:def.name,capacity:1,formal:0,reserved:0,hours:def.hours,task:def.task,skills:def.skills}
  };
  if(!base.groupId)base.groupId=gid;
  managedRecruitments.push(r);return r;
}
function manageGapRole(id){
  if(!state.managedCaptain){toast("只有当前队长可以管理角色缺口");return}
  var r=findRecruit(id);if(!r||!canManageRecruit(r)){toast("该角色当前不可管理");return}
  state.activeRoleRecruitId=id;beginPublish(false);
}

function removeManagedMember(kind){
  if(!state.managedCaptain){toast("只有当前队长可以移除其他成员");return}
  var label=kind==="data"?"苏嘉 · 数据分析":"何川 · 前端开发";
  modal('<h2>移除成员？</h2><p class="subtitle">'+e(label)+'。移除后对应角色恢复为空缺，历史申请不会自动重新生效。</p><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn danger" onclick="confirmRemoveManagedMember(\''+kind+'\')">确认移除</button></div>');
}
function confirmRemoveManagedMember(kind){
  if(kind==="data")state.dataMemberRemoved=true;else state.memberRemoved=true;
  var gap=ensureRestoredRole(kind);
  closeModal();toast("成员已移除，"+gap.role.name+"已恢复为角色缺口；由队长决定何时重新开放");render();
}
function removeMemberDemo(){removeManagedMember("front")}
function confirmRemoveMember(){confirmRemoveManagedMember("front")}
function leaveManagedTeam(){
  if(state.managedCaptain){toast("队长退出前必须先转交队长身份；无其他正式成员时可解散队伍");return}
  modal('<h2>退出该队伍？</h2><p class="subtitle">退出后你的角色恢复为空缺，相关正式投入不再计入你的剩余时间。</p><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn danger" onclick="confirmLeaveManagedTeam()">确认退出</button></div>');
}
function confirmLeaveManagedTeam(){var gap=ensureRestoredRole("product"),released=state.managedStageHours;state.managedMemberActive=false;state.committed=Math.max(0,state.committed-released);state.managedStageHours=0;closeModal();toast("已退出队伍；"+gap.role.name+"已恢复为空缺，由当前队长决定是否重新开放");render()}
function dissolveManagedTeam(){
  if(!state.managedCaptain){toast("只有当前队长可以解散队伍");return}
  if(managedOtherCount()>0){toast("仍有其他正式成员，请先转交队长；不能直接解散");return}
  var r=findRecruit(state.managedTeamRecruitId)||managedRecruitments[0],group=managedGroup(r),ids=group.map(function(g){return g.id});
  state.relationships.forEach(function(x){
    if(ids.indexOf(x.recruitId)>=0&&x.status!=="joined"&&x.status!=="ended"){
      releaseReservation(x);x.status="ended";x.reason="队伍已解散";x.expiresAt=null;
    }
  });
  group.forEach(function(g){g.status="ended"});
  state.teamDissolved=true;state.managedMemberActive=false;state.committed=Math.max(0,state.committed-state.managedStageHours);state.managedStageHours=0;
  closeModal();toast("队伍已解散，全部角色招募、未完成请求与临时预留已关闭");render();
}
function resolveMemberHours(){
  if(!state.managedCaptain){toast("只有当前队长可以处理成员投入变化");return}
  modal('<h2>处理成员投入变化</h2><p class="subtitle">何川当前阶段预计投入 '+state.frontendCurrentHours+'h / 周，低于原约定 '+state.frontendAgreedHours+'h / 周。</p><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">继续协商</button><button class="btn secondary" onclick="acceptFrontendAgreement()">接受新约定</button><button class="btn danger" onclick="closeModal();removeManagedMember(\'front\')">移除并恢复缺口</button></div>');
}
function acceptFrontendAgreement(){state.frontendAgreedHours=state.frontendCurrentHours;closeModal();toast("已接受新的阶段约定投入");render()}
function renderJoinedTeam(){
  var r=findRecruit(state.joinedRecruitId)||recruits[0],m=String(r.team||"").match(/(\d+)/),baseCount=m?Number(m[1]):1;
  var memberCount=baseCount+1,free=roleFree(r),teamName=r.teamName||(r.leader+"的队伍");
  return '<div class="panel teamFullPage"><div class="between"><div><div class="meta">'+e(r.comp)+' · 我加入的队伍</div><div class="bigTitle">'+e(teamName)+'</div><div class="subtitle">成员视角：查看角色任务、阶段投入、队伍缺口与退出操作。</div></div><span class="status green">已组队</span></div>'+
    '<div class="stats"><div class="stat"><b>'+memberCount+'</b><span>正式成员</span></div><div class="stat"><b>'+free+'</b><span>当前岗位剩余名额</span></div><div class="stat"><b>'+state.joinedStageHours+'h</b><span>我的当前投入</span></div></div>'+
    (state.joinedStageHours<r.role.hours?'<div class="notice warn" style="margin-top:12px">当前投入低于原约定 '+r.role.hours+'h / 周，请与队长继续协商新的投入安排。</div>':'')+
    '<div class="section"><div class="between"><h3 class="sectionTitle">成员与角色</h3><button class="btn secondary" onclick="editHours()">更新我的阶段投入</button></div><div class="list" style="margin-top:12px">'+
      teamMember(r.leader,"队长","当前队伍负责人",false,false)+
      (baseCount>1?teamMember("其他正式成员",baseCount-1+" 人","队伍原有成员，Demo 仅展示汇总",false,false):"")+
      teamMember("你",r.role.name,"当前阶段投入 "+state.joinedStageHours+"h / 周",true,false)+
    '</div></div>'+
    '<div class="section"><h3 class="sectionTitle">我的角色与任务</h3><div class="roleBox"><b>'+e(r.role.name)+'</b><p class="subtitle">'+e(r.role.task)+'</p><div class="badges">'+badges(r.role.skills)+'<span class="badge blue">原约定 '+r.role.hours+'h / 周</span></div></div></div>'+
    '<div class="section"><div class="between"><h3 class="sectionTitle">当前岗位剩余缺口</h3>'+(free?'<span class="status warn">'+e(r.role.name)+' · '+free+' 人</span>':'<span class="status green">当前岗位已补齐</span>')+'</div><p class="subtitle">其他角色是否重新开放招募由队长决定，历史申请不会自动恢复。</p></div>'+
    '<div class="section"><h3 class="sectionTitle">入群说明</h3><p class="subtitle">仅正式成员可见：请联系队长 '+e(r.leader)+' 获取项目群信息。</p></div>'+
    '<div class="actions"><button class="btn danger" onclick="leaveTeam()">退出队伍</button><button class="btn secondary" onclick="openReport(\'team\','+r.id+',\''+e(teamName)+'\')">举报问题</button></div></div>';
}
function teamMember(name,role,sub,self,removable){
  return '<div class="request"><div><div class="requestTitle">'+e(name)+' · '+e(role)+'</div><div class="requestSub">'+e(sub)+'</div></div><div class="requestActions">'+(self?'<span class="status green">本人</span>':'<span class="status">正式成员</span>')+(removable?'<button class="btn text" onclick="removeMemberDemo()">移除</button>':'')+'</div></div>';
}
function editHours(){
  var joinedView=state.teamView==="joined",r=joinedView?(findRecruit(state.joinedRecruitId)||recruits[0]):(findRecruit(state.managedTeamRecruitId)||managedRecruitments[0]);
  var current=joinedView?state.joinedStageHours:state.managedStageHours;
  modal('<h2>更新当前阶段投入</h2><p class="subtitle">实际投入变化会立即影响后续匹配；低于原约定时会提示继续协商。</p><div class="field"><label>当前阶段预计投入（h / 周）</label><input class="input" id="stageHours" type="number" min="0" value="'+current+'"></div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn primary" onclick="saveStageHours()">保存</button></div>');
}
function saveStageHours(){
  var joinedView=state.teamView==="joined",r=joinedView?(findRecruit(state.joinedRecruitId)||recruits[0]):activeManagedRecruit();
  var old=joinedView?state.joinedStageHours:state.managedStageHours;
  var v=Math.max(0,Number(byId("stageHours").value)||0),delta=v-old;
  if(joinedView){
    state.joinedStageHours=v;
    var joinedRel=state.relationships.filter(function(x){return x.status==="joined"&&x.recruitId===state.joinedRecruitId&&currentUserIsCandidate(x)})[0];
    if(joinedRel)joinedRel.joinedHours=v;
  }else state.managedStageHours=v;
  state.committed=Math.max(0,state.committed+delta);
  closeModal();toast(v<r.role.hours?"已更新：当前投入低于原约定，请继续协商":"阶段投入已更新");render();
}
function leaveTeam(){
  modal('<h2>确认退出队伍？</h2><p class="subtitle">退出后，对应角色名额恢复，你在该项目中的正式投入不再计入时间占用；历史申请不会自动重新生效。</p><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">取消</button><button class="btn danger" onclick="confirmLeave()">确认退出</button></div>');
}
function confirmLeave(){
  var x=state.relationships.filter(function(a){return a.status==="joined"&&currentUserIsCandidate(a)&&(state.joinedRecruitId==null||a.recruitId===state.joinedRecruitId)})[0],r=x?relationRecruit(x):findRecruit(state.joinedRecruitId);
  var h=x?(x.joinedHours||state.joinedStageHours):state.joinedStageHours;
  if(r){r.role.formal=Math.max(0,r.role.formal-1);if(r.status==="full"&&r.role.formal<r.role.capacity)r.status="paused"}
  state.committed=Math.max(0,state.committed-h);
  if(x){x.status="ended";x.reason="你已退出队伍";x.expiresAt=null}
  var next=state.relationships.filter(function(a){return a.status==="joined"&&currentUserIsCandidate(a)})[0];
  if(next){
    var nr=relationRecruit(next);state.joined=true;state.joinedRecruitId=next.recruitId;state.joinedStageHours=next.joinedHours||(nr&&nr.role?nr.role.hours:0);state.teamView="joined";
  }else{
    state.joined=false;state.joinedRecruitId=null;state.joinedStageHours=0;state.teamView="managed";
  }
  closeModal();toast("已退出，角色名额已恢复；是否重新开放招募由队长决定");render();
}

/* PROFILE */
function renderProfile(p){
  var used=Math.max(0,state.committed+state.reserved),pct=state.total?Math.min(100,Math.round(used/state.total*100)):0;
  p.innerHTML=demoBar()+'<div class="layout"><div class="panel"><div class="profileHero"><div class="avatar">'+e((state.profileName||"黄").charAt(0))+'</div><div><div class="bigTitle" style="margin:0">'+e(state.profileName)+'</div><div class="meta">广东工业大学 · '+e(state.profileCampus)+' · '+e(state.profileGrade)+' · '+e(state.profileMajor)+'</div></div><span class="verifiedTag">'+(state.verified?"学校已认证":"未认证")+'</span></div>'+
    '<div class="section"><div class="between"><h3 class="sectionTitle">我能承担的任务与技能</h3><button class="btn secondary" onclick="go(\'profileEdit\')">编辑档案</button></div><div class="badges">'+state.profileTasks.split(/[、,，]/).filter(Boolean).map(function(x){return '<span class="badge blue">'+e(x.trim())+'</span>'}).join("")+badges(state.profileSkills.slice(0,6))+'</div></div>'+
    '<div class="section"><h3 class="sectionTitle">相关经历与具体产出</h3><div class="roleBox"><b>项目 / 竞赛经历</b><p class="subtitle">'+e(state.profileExperience||"暂未补充")+'</p>'+(state.evidenceUrl?'<button class="btn text" onclick="openEvidence()">查看用户提供的成果链接</button>':'')+'</div></div></div>'+
    '<aside class="panel sticky"><h3 class="sectionTitle">时间与目标</h3><div class="timeCapacityViz"><div class="timeCapacityNumbers"><div><b>'+remainingLabel(remaining())+'</b><span>'+(remaining()<0?"当前时间已超额":"剩余可投入")+'</span></div><small>总 '+state.total+'h / 周</small></div><div class="capacityTrack"><i style="width:'+pct+'%"></i></div><div class="capacityLegend"><span><i class="used"></i>正式投入 '+state.committed+'h</span>'+(state.reserved?'<span><i class="used"></i>临时预留 '+state.reserved+'h</span>':'')+'<span><i class="free"></i>'+(remaining()<0?"超额 "+Math.abs(remaining())+"h":"剩余 "+remaining()+"h")+'</span></div></div><div class="section"><div class="kv"><div class="k">可参与日期</div><div>'+e(state.availStart)+' 至 '+e(state.availEnd)+'</div><div class="k">参赛目标</div><div>'+e(state.profileTarget)+'</div><div class="k">协作方式</div><div>'+e(state.profileCollab)+'</div><div class="k">联系方式</div><div>'+(hasUserContact()?'微信 · 已填写，按次授权':'未填写 · 不能发起申请 / 邀请')+'</div></div></div><div class="notice">学校认证只证明属于该学校，不代表能力水平。时间信息为用户自行声明 / 约定值，平台不将其表述为客观验证时长。</div></aside></div>';
}
function renderProfileEdit(p){
  p.innerHTML='<div class="layout"><div class="panel"><h2 class="sectionTitle">最小可匹配档案</h2><p class="subtitle">经历和成果证明可后补；显示名称、学校 / 校区、年级、专业、任务、技能、可参与日期、每周时间、协作方式和参赛目标构成最小档案。</p><div class="formGrid">'+
    '<div class="field"><label>显示名称 <span class="req">*</span></label><input class="input" id="profileName" value="'+e(state.profileName)+'"></div>'+
    '<div class="field"><label>学校 / 校区 <span class="req">*</span></label><select class="select" id="profileCampus"><option '+(state.profileCampus==="龙洞校区"?"selected":"")+'>龙洞校区</option><option '+(state.profileCampus==="大学城校区"?"selected":"")+'>大学城校区</option></select><div class="help">首批试点学校固定为广东工业大学，保留校区筛选。</div></div>'+
    '<div class="field"><label>年级 <span class="req">*</span></label><input class="input" id="profileGrade" value="'+e(state.profileGrade)+'" placeholder="如：大二"></div>'+
    '<div class="field"><label>专业 <span class="req">*</span></label><input class="input" id="profileMajor" value="'+e(state.profileMajor)+'" placeholder="如：国际经济与贸易"></div>'+
    '<div class="field"><label>每周总可投入 <span class="req">*</span></label><input class="input" id="totalHours" type="number" min="0" value="'+state.total+'"></div>'+
    '<div class="field full"><label>希望承担的角色 / 任务 <span class="req">*</span></label><input class="input" id="profileTasks" value="'+e(state.profileTasks)+'" placeholder="如：用户调研、商业分析"></div>'+
    '<div class="field full"><label>技能标签 <span class="req">*</span></label><input class="input" id="profileSkills" value="'+e(state.profileSkills.join("、"))+'" placeholder="至少 1 项"></div>'+
    '<div class="field"><label>可参与开始日期 <span class="req">*</span></label><input class="input" id="availStart" type="date" value="'+e(state.availStart)+'"></div>'+
    '<div class="field"><label>可参与结束日期 <span class="req">*</span></label><input class="input" id="availEnd" type="date" value="'+e(state.availEnd)+'"></div>'+
    '<div class="field"><label>参赛目标 <span class="req">*</span></label><select class="select" id="profileTarget"><option '+(state.profileTarget==="优先冲奖"?"selected":"")+'>优先冲奖</option><option '+(state.profileTarget==="完整参赛"?"selected":"")+'>完整参赛</option><option '+(state.profileTarget==="积累经验"?"selected":"")+'>积累经验</option></select></div>'+
    '<div class="field"><label>协作方式 <span class="req">*</span></label><input class="input" id="profileCollab" value="'+e(state.profileCollab)+'"></div>'+
    '<div class="field full"><label>联系方式（隐私字段）</label><input class="input" id="profileContact" value="'+e(state.userContact)+'" placeholder="微信 / QQ / 手机至少一种"><div class="help">不会出现在公开档案；发起请求前至少填写一种，双方同意沟通后按次开放。</div></div>'+
    '<div class="field full"><label>成果证据链接（可选）</label><input class="input" id="evidenceUrl" value="'+e(state.evidenceUrl)+'" placeholder="仅支持 http / https"><div class="help">平台仅标记为“用户提供”，不对第三方内容真实性背书。</div></div>'+
    '<div class="field full"><label>经历与具体产出（可选）</label><textarea class="textarea" id="profileExperience" maxlength="800">'+e(state.profileExperience)+'</textarea><div class="help">建议写清项目名称、本人职责和具体产出；不要只写“参加过”。</div></div></div>'+
    '<div class="actions end"><button class="btn secondary" onclick="go(\'profile\')">取消</button><button class="btn primary" onclick="saveProfile()">保存档案</button></div></div>'+
    '<aside class="panel sticky"><h3 class="sectionTitle">档案规则</h3><div class="notice '+(state.profileComplete?"good":"warn")+'">'+(state.profileComplete?"最小档案已完成；申请 / 邀请前还需学校认证和至少一种联系方式。":"当前为未完成档案：可保存草稿和继续浏览，但不能主动申请或进入可邀请候选列表。")+'</div><div class="section"><p class="subtitle">平台不公开能力评分、责任心评分、人才等级或排行榜。</p></div><div class="section"><button class="btn secondary" onclick="state.verified=false;state.authReturn=\'profile\';go(\'auth\')">重新认证</button></div></aside></div>';
}
function openEvidence(){
  var u=String(state.evidenceUrl||"").trim();
  if(!/^https?:\/\//i.test(u)){toast("成果证据链接无效");return}
  var unknown=!/^(https?:\/\/)?(docs\.qq\.com|github\.com|gitee\.com|drive\.google\.com|example\.com)(\/|$)/i.test(u);
  modal('<h2>即将离开 CompMate</h2><p class="subtitle">该链接由用户提供，平台不对第三方内容真实性或安全性背书。</p>'+(unknown?'<div class="notice warn">当前为未知域名，请注意防范钓鱼、付款诱导和个人信息泄露。</div>':'')+'<div class="roleBox" style="margin-top:10px">'+e(u)+'</div><div class="modalFoot"><button class="btn secondary" onclick="closeModal()">返回</button><button class="btn primary" onclick="closeModal();toast(\'已确认外链风险；正式产品将打开新页面\')">继续前往</button></div>');
}
function saveProfile(){
  var name=String(byId("profileName").value||"").trim(),campus=String(byId("profileCampus").value||"").trim(),grade=String(byId("profileGrade").value||"").trim(),major=String(byId("profileMajor").value||"").trim(),tasks=String(byId("profileTasks").value||"").trim(),skills=String(byId("profileSkills").value||"").split(/[、,，]/).map(function(x){return x.trim()}).filter(Boolean),target=String(byId("profileTarget").value||"").trim(),collab=String(byId("profileCollab").value||"").trim();
  var start=byId("availStart").value,end=byId("availEnd").value,hours=Number(byId("totalHours").value),contact=String(byId("profileContact").value||"").trim(),proof=String(byId("evidenceUrl").value||"").trim(),experience=String(byId("profileExperience").value||"").trim();
  if(!Number.isFinite(hours)||hours<0){toast("每周总可投入时间需为 0 或正数");return}
  if(start&&end&&new Date(start)>new Date(end)){toast("可参与开始日期不能晚于结束日期");return}
  if(proof&&!/^https?:\/\//i.test(proof)){toast("成果证据链接仅支持 http / https");return}
  if(unsafePublicText([name,grade,major,tasks,skills.join(" "),collab,experience].join(" "))){toast("公开档案字段中疑似包含联系方式或高风险引导，请改用独立联系方式字段");return}
  state.profileName=name;state.profileCampus=campus;state.profileGrade=grade;state.profileMajor=major;state.userCampus=campus;state.profileExperience=experience;state.profileTasks=tasks;state.profileSkills=skills;state.profileTarget=target;state.profileCollab=collab;state.availStart=start;state.availEnd=end;state.total=hours;state.userContact=contact;state.evidenceUrl=proof;
  var missing=[];if(!name)missing.push("显示名称");if(!campus)missing.push("学校 / 校区");if(!grade)missing.push("年级");if(!major)missing.push("专业");if(!tasks)missing.push("角色 / 任务");if(!skills.length)missing.push("技能标签");if(!start||!end)missing.push("可参与日期");if(!collab)missing.push("协作方式");if(!target)missing.push("参赛目标");
  state.profileComplete=missing.length===0;
  if(!state.profileComplete){
    if(state.profileReturn==="publish"&&publisherBasicComplete()){
      var publishNew=state.publishNewRequested;state.profileReturn="";
      toast("基础展示信息已保存；可继续发布招募，申请 / 邀请前再补完整档案");
      beginPublish(publishNew);return;
    }
    toast("草稿已保存；仍缺少："+missing.join("、"));render();return
  }
  toast("个人档案已保存");
  var ret=state.profileReturn;state.profileReturn="";
  if(ret==="publish")beginPublish(state.publishNewRequested);
  else if(ret==="apply"){state.route="detail";render();setTimeout(function(){applyRecruit(state.selectedRecruit)},150)}
  else if(ret==="invite"){state.mode="people";state.route="candidate";render();setTimeout(function(){inviteCandidate(state.selectedCandidate)},150)}
  else if(ret==="progress"){state.progressView="relations";go("progress")}
  else go("profile");
}
function editManagedRecruit(){
  if(!state.managedCaptain){toast("只有当前队长可以编辑该队伍招募");return}
  state.activeRoleRecruitId=state.managedTeamRecruitId;
  beginPublish(false);
}
function createRecruitDraft(){
  var existing=managedRecruitments.filter(function(r){return r.isDraft&&canManageRecruit(r)})[0];
  if(existing){state.activeRoleRecruitId=existing.id;return existing}
  var id=Date.now();
  managedRecruitments.push({id:id,groupId:id,isDraft:true,category:"innovation",comp:"挑战杯 · 大挑",title:"",school:"广东工业大学",campus:state.userCampus,leader:"你",status:"paused",target:"优先冲奖",period:"10/05 - 12/20",deadline:"10/28 23:59",team:"现有 1 人",progress:"刚开始组队",collab:"关键节点提前同步",hard:false,reasons:[],role:{name:"待补角色",capacity:1,formal:0,reserved:0,hours:6,task:"请填写加入后需要承担的具体任务",skills:["待填写"]}});
  state.activeRoleRecruitId=id;return findRecruit(id);
}
function addAdditionalRole(){
  var base=activeManagedRecruit();if(!base||!canManageRecruit(base)){toast("只有当前队长可以新增角色缺口");return}
  if(base.isDraft){toast("请先保存并发布第一个角色，再新增其他角色缺口");return}
  if(publishFormChanged(base)){toast("当前角色还有未保存修改，请先保存后再新增角色");return}
  var pendingRole=managedGroup(base).filter(function(g){return g.isDraftRole})[0];
  if(pendingRole){state.activeRoleRecruitId=pendingRole.id;toast("已切回尚未发布的角色草稿");render();return}
  var gid=recruitGroupId(base),id=Date.now(),inheritPaused=managedGroupPaused(base);
  if(!base.groupId)base.groupId=gid;
  managedRecruitments.push({
    id:id,groupId:gid,isDraftRole:true,inheritPaused:inheritPaused,category:base.category,comp:base.comp,title:base.title,school:base.school,campus:base.campus,leader:base.leader,status:"paused",
    target:base.target,period:base.period,periodStart:base.periodStart,periodEnd:base.periodEnd,deadline:base.deadline,deadlineAt:base.deadlineAt,team:base.team,progress:base.progress,collab:base.collab,hard:base.hard,reasons:[],
    role:{name:"待补角色",capacity:1,formal:0,reserved:0,hours:6,task:"请填写加入后需要承担的具体任务",skills:["待填写"]}
  });
  state.activeRoleRecruitId=id;toast("已新增一个角色缺口，请补充该角色信息");render();
}
function publishFormChanged(r){
  if(!r||!byId("pubComp"))return false;
  var skills=String(byId("pubSkills").value||"").split(/[、,，]/).map(function(x){return x.trim()}).filter(Boolean).join("|");
  var title=String(byId("pubTitle").value||"").trim();
  return normalizeCompetitionName(byId("pubComp").value)!==r.comp||
    title!==String(r.title||"")||
    String(byId("pubTeam").value||"").trim()!==String(r.team||"")||
    String(byId("pubProgress").value||"").trim()!==String(r.progress||"")||
    String(byId("pubRole").value||"").trim()!==String(r.role.name||"")||
    Number(byId("pubCap").value)!==Number(r.role.capacity)||
    String(byId("pubTask").value||"").trim()!==String(r.role.task||"")||
    skills!==r.role.skills.join("|")||
    Number(byId("pubHours").value)!==Number(r.role.hours)||
    byId("pubStart").value!==periodInput(r,"start")||
    byId("pubEnd").value!==periodInput(r,"end")||
    byId("pubDeadline").value!==deadlineInput(r)||
    String(byId("pubTarget").value||"").trim()!==String(r.target||"")||
    String(byId("pubCollab").value||"").trim()!==String(r.collab||"")||
    (byId("pubHard").value==="1")!==!!r.hard;
}
function switchPublishRole(id){
  var current=activeManagedRecruit(),r=findRecruit(id);if(!r||!canManageRecruit(r)){toast("当前角色不可编辑");return}
  if(current&&current.id!==r.id&&publishFormChanged(current)){toast("当前角色还有未保存修改，请先保存后再切换");return}
  state.activeRoleRecruitId=id;render();
}

function beginPublish(createNew){
  state.publishNewRequested=!!createNew;
  if(!state.loggedIn||!state.verified){state.authReturn="publish";go("auth");return}
  if(!publisherBasicComplete()){state.profileReturn="publish";go("profileEdit");toast("发布招募前请先补充基础展示信息；申请 / 邀请所需的完整档案可后补");return}
  if(state.publishNewRequested){
    var draft=createRecruitDraft();
    state.activeRoleRecruitId=draft.id;
    state.publishNewRequested=false;
  }else{
    var r=activeManagedRecruit();
    if(!canManageRecruit(r)){
      var owned=managedRecruitments.filter(function(x){return canManageRecruit(x)&&x.status!=="ended"})[0];
      if(!owned)owned=createRecruitDraft();
      state.activeRoleRecruitId=owned.id;
    }
  }
  go("publish");
}
function periodInput(r,which){
  if(r&&r.periodStart&&r.periodEnd)return which==="start"?r.periodStart:r.periodEnd;
  var pr=periodRange(r);if(!pr)return which==="start"?"2026-10-05":"2026-12-20";
  var d=which==="start"?pr.start:pr.end;
  return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
}
function deadlineInput(r){
  if(r&&r.deadlineAt)return String(r.deadlineAt).slice(0,16);
  var d=parseDeadline(r);if(!d)return"2026-10-28T23:59";
  return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")+"T"+String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0");
}
function md(v){var d=new Date(v+"T00:00:00");return (d.getMonth()+1)+"/"+d.getDate()}
function periodLabel(start,end){
  var a=new Date(start+"T00:00:00"),b=new Date(end+"T00:00:00");
  return a.getFullYear()===b.getFullYear()?md(start)+" - "+md(end):a.getFullYear()+"/"+(a.getMonth()+1)+"/"+a.getDate()+" - "+b.getFullYear()+"/"+(b.getMonth()+1)+"/"+b.getDate();
}
function mdhm(v){var d=new Date(v);return (d.getFullYear()===2026?"":d.getFullYear()+"/")+(d.getMonth()+1)+"/"+d.getDate()+" "+String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0")}
function renderPublish(p){
  var r=activeManagedRecruit(),group=managedGroup(r),statusLabel=r.status==="active"?"招募中":r.status==="paused"?"暂停接收":r.status==="full"?"已招满":"已结束";
  var roleTabs=group.map(function(g){return '<button type="button" class="roleGapTab '+(g.id===r.id?"active":"")+'" onclick="switchPublishRole('+g.id+')"><b>'+e(g.role.name)+'</b><span>'+g.role.formal+'/'+g.role.capacity+' 已加入</span></button>'}).join("")+'<button type="button" class="roleGapTab add" onclick="addAdditionalRole()">＋ 新增角色缺口</button>';
  p.innerHTML='<div class="layout"><div class="panel"><div class="between"><div><h2 class="sectionTitle">结构化招募</h2><p class="subtitle">围绕“目标竞赛 + 缺口角色 + 具体任务 + 招募人数 + 时间要求”发布，候选人可以直接判断加入后要做什么。</p></div><span class="status '+(r.status==="active"?"green":r.status==="full"?"blue":"warn")+'">'+statusLabel+'</span></div>'+
    '<div class="formGrid"><div class="field full"><label>角色缺口（可重复）</label><div class="roleGapTabs">'+roleTabs+'</div><div class="help">同一队伍可以设置多个角色缺口；每个角色分别维护人数、任务、技能和最低投入。</div></div>'+
    '<div class="field"><label>目标竞赛 <span class="req">*</span></label><input class="input" id="pubComp" list="competitionOptions" value="'+e(r.comp)+'"><datalist id="competitionOptions"><option value="挑战杯 · 大挑"><option value="互联网+"><option value="正大杯"><option value="数学建模竞赛"><option value="行业经济分析大赛"></datalist><div class="help">优先选择标准赛事；未收录赛事可直接填写临时名称，发布时会做基础名称规范化。</div></div>'+
    '<div class="field"><label>招募标题（可选）</label><input class="input" id="pubTitle" maxlength="30" value="'+e(r.title)+'"><div class="help">不超过 30 字；留空时由系统根据竞赛和主要缺口生成。</div></div>'+
    '<div class="field"><label>学校 / 校区</label><input class="input" value="'+e(r.school)+' / '+e(r.campus)+'" disabled></div>'+
    '<div class="field"><label>学校 / 校区是否为不可放宽条件</label><select class="select" id="pubHard"><option value="0" '+(!r.hard?"selected":"")+'>否，可跨校区沟通</option><option value="1" '+(r.hard?"selected":"")+'>是，不满足不可申请 / 邀请</option></select></div>'+
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
    '<div class="actions"><button class="btn secondary" onclick="previewRecruit()">预览</button><button class="btn primary push" onclick="saveRecruit()">'+((r.isDraft||r.isDraftRole)?"保存并发布":"保存修改")+'</button></div></div>'+
    '<aside class="panel sticky"><h3 class="sectionTitle">招募生命周期</h3><div class="list" style="margin-top:12px"><button class="btn secondary" onclick="pauseRecruit()">'+(managedGroupPaused(r)?"恢复接收申请":"暂停接收新申请")+'</button><button class="btn secondary" onclick="coreChange()">修改核心条件说明</button><button class="btn danger" onclick="endRecruit()">结束本轮招募</button></div><div class="section"><div class="notice">暂停仅停止新的加入申请；截止前且未主动结束时仍可主动邀请。结束招募会关闭尚未组队的关系并释放临时预留。</div></div><div class="section"><div class="meta">招募人数必须是正整数，且不得低于“正式成员 + 当前有效预留”。</div></div></aside></div>';
}
function previewRecruit(){
  var title=String(byId("pubTitle").value||"").trim(),comp=normalizeCompetitionName(byId("pubComp").value),role=String(byId("pubRole").value||"").trim();
  if(!title)title=comp+" · 招募"+role;
  modal('<h2>招募预览</h2><div class="roleBox"><div class="meta">'+e(comp)+'</div><b>'+e(title)+'</b><p class="subtitle">'+e(byId("pubTask").value)+'</p><div class="badges"><span class="badge blue">'+e(role)+' · '+e(byId("pubCap").value)+' 人</span><span class="badge">'+e(byId("pubSkills").value)+'</span><span class="badge">'+e(byId("pubHours").value)+'h / 周</span></div><p class="subtitle">'+e(byId("pubTeam").value)+' · '+e(byId("pubProgress").value)+'</p></div><div class="modalFoot"><button class="btn primary" onclick="closeModal()">返回编辑</button></div>');
}
function saveRecruit(){
  var r=activeManagedRecruit();if(!canManageRecruit(r)){toast("无权限：只有当前队长可以编辑招募");return}
  var group=managedGroup(r);
  if(group.some(function(g){return g.status==="ended"})){toast("主动结束的本轮招募不能直接恢复，请新建或复制招募");return}
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
  if(unsafePublicText([comp,title,team,progress,role,task,skills.join(" "),target,collab].join(" "))){toast("公开文本中疑似包含联系方式或高风险引导，请修改后再发布");return}
  if(!title)title=comp+" · 招募"+role;
  var newPeriod=periodLabel(start,end),newDeadline=mdhm(deadline),newSkills=skills.join("|"),oldSkills=r.role.skills.join("|");
  var roleCoreChanged=r.role.name!==role||r.role.capacity!==cap||r.role.task!==task||r.role.hours!==hours||oldSkills!==newSkills;
  var commonCoreChanged=r.comp!==comp||r.period!==newPeriod||r.target!==target||r.hard!==hard;
  var coreChanged=roleCoreChanged||commonCoreChanged;
  var groupIds=group.map(function(g){return g.id});
  var confirming=state.relationships.filter(function(x){
    return x.status==="confirming"&&((roleCoreChanged&&x.recruitId===r.id)||(commonCoreChanged&&groupIds.indexOf(x.recruitId)>=0));
  })[0];
  if(coreChanged&&confirming){toast(commonCoreChanged?"同一招募中存在正式确认中关系，请先结束或撤回确认":"该岗位存在正式确认中关系，请先结束或撤回当前确认");return}
  group.forEach(function(g){
    g.comp=comp;g.title=title;g.team=team;g.progress=progress;g.collab=collab;g.target=target;g.period=newPeriod;g.periodStart=start;g.periodEnd=end;g.deadline=newDeadline;g.deadlineAt=deadline;g.hard=hard;g.category=r.category;
  });
  r.role.capacity=cap;r.role.hours=hours;r.role.task=task;r.role.name=role;r.role.skills=skills;
  state.relationships.forEach(function(x){
    var rr=findRecruit(x.recruitId);
    if(!rr||groupIds.indexOf(rr.id)<0||x.status==="ended")return;
    x.role=rr.role.name;x.title=rr.comp+" · "+rr.role.name;
    var affected=(roleCoreChanged&&x.recruitId===r.id)||(commonCoreChanged&&groupIds.indexOf(x.recruitId)>=0);
    if(coreChanged&&affected&&(x.status==="pending"||x.status==="communication"))x.conditionUpdated=true;
  });
  var publishingDraft=!!r.isDraft,publishingRole=!!r.isDraftRole,inheritPaused=!!r.inheritPaused;
  group.forEach(function(g){
    if(g.role.formal>=g.role.capacity){g.status="full";return}
    if(g.id===r.id&&publishingDraft){g.status="active";return}
    if(g.id===r.id&&publishingRole){g.status=inheritPaused?"paused":"active";return}
    if(g.status!=="paused")g.status="active";
  });
  group.forEach(function(g){
    if(g.role.formal<g.role.capacity)return;
    state.relationships.forEach(function(x){
      if(x.recruitId===g.id&&x.status!=="joined"&&x.status!=="ended"){
        releaseReservation(x);x.status="ended";x.reason="名额已满";x.expiresAt=null;
      }
    });
  });
  delete r.isDraft;delete r.isDraftRole;delete r.inheritPaused;
  toast(coreChanged?"招募已保存；相关候选人将看到条件更新提示":publishingDraft||publishingRole?"招募已保存并发布":"修改已保存");render();
}
function pauseRecruit(){
  var r=activeManagedRecruit();if(!canManageRecruit(r)){toast("无权限：只有当前队长可以暂停或恢复招募");return}
  if(!recruitIsPublished(r)){toast("草稿尚未发布，暂不需要暂停 / 恢复操作");return}
  var group=managedGroup(r);
  if(group.some(function(g){return g.isDraft||g.isDraftRole})){toast("同一招募还有未发布的角色草稿，请先保存草稿再调整招募状态");return}
  if(group.some(function(g){return g.status==="ended"})){toast("主动结束的本轮招募不能直接恢复，请新建或复制招募");return}
  if(deadlinePassed(r)){toast("招募已过截止时间，需先设置新的截止时间后才能重新开放");return}
  var live=group.filter(function(g){return g.role.formal<g.role.capacity});
  if(!live.length){group.forEach(function(g){g.status="full"});toast("当前所有角色均已正式招满");render();return}
  var pausing=!managedGroupPaused(r);
  live.forEach(function(g){g.status=pausing?"paused":"active"});
  group.filter(function(g){return g.role.formal>=g.role.capacity}).forEach(function(g){g.status="full"});
  toast(pausing?"已暂停所有未招满角色的新申请；截止前仍可主动邀请":"已恢复所有未招满角色的申请");render();
}
function endRecruit(){
  var r=activeManagedRecruit();if(!canManageRecruit(r)){toast("无权限：只有当前队长可以结束招募");return}
  if(!recruitIsPublished(r)){toast("草稿尚未发布；如不继续编辑，直接离开即可");return}
  var endGroup=managedGroup(r);
  if(endGroup.some(function(g){return g.isDraft||g.isDraftRole})){toast("同一招募还有未发布的角色草稿，请先保存草稿再结束本轮招募");return}
  var ids=endGroup.map(function(g){return g.id});
  state.relationships.forEach(function(x){
    if(ids.indexOf(x.recruitId)>=0&&x.status!=="joined"&&x.status!=="ended"){
      releaseReservation(x);x.status="ended";x.reason="队长已结束本轮招募";x.expiresAt=null;
    }
  });
  managedGroup(r).forEach(function(g){g.status="ended"});
  toast("招募已结束，所有角色的未完成组队请求已关闭");render();
}
function coreChange(){
  var r=activeManagedRecruit();if(!canManageRecruit(r)){toast("无权限：只有当前队长可以修改核心条件");return}
  var confirming=state.relationships.filter(function(x){return x.recruitId===r.id&&x.status==="confirming"})[0];
  if(confirming){toast("当前存在正式确认中关系，必须先结束或撤回确认");return}
  modal('<h2>核心条件修改规则</h2><p class="subtitle">目标竞赛、角色 / 人数、具体任务、必需技能、最低投入、项目周期、参赛目标和硬性校区条件发生变化时，保存后会通知待处理 / 待沟通候选人；正式确认中则必须先结束或撤回当前确认。</p><div class="notice warn">已经形成的正式成员约定不会被招募编辑自动改写；需要在队伍内另行协商确认。</div><div class="modalFoot"><button class="btn primary" onclick="closeModal()">知道了</button></div>');
}

/* AUTH */
function renderAuth(p){
  var action=state.authReturn==="publish"?"发布招募":state.authReturn==="apply"?"继续申请":state.authReturn==="invite"?"继续邀请":"继续使用";
  p.innerHTML='<div class="layout"><div class="panel"><h2 class="sectionTitle">学校身份认证</h2><p class="subtitle">认证只验证“属于该学校”，不代表能力水平。</p><div class="formGrid"><div class="field full"><label>账号 / 登录信息</label><input class="input" id="loginAccount" value="demo_user@gdut.edu.cn"><div class="help">未登录用户从分享链接申请时，先完成登录，再进行学校身份认证。</div></div><div class="field"><label>学校</label><input class="input" value="广东工业大学"></div><div class="field"><label>校区</label><select class="select"><option>龙洞校区</option><option>大学城校区</option></select></div><div class="field full"><label>认证方式</label><select class="select"><option>校园邮箱验证码</option><option>运营白名单 / 人工核验</option></select></div><div class="field full"><label>校园邮箱</label><input class="input" value="demo@gdut.edu.cn"></div></div><div class="actions end"><button class="btn text" onclick="authHelp()">认证遇到问题</button><button class="btn secondary" onclick="interruptAuth()">暂不认证</button><button class="btn primary" onclick="completeAuth()">完成认证并'+action+'</button></div></div><aside class="panel sticky"><div class="notice">产品逻辑只依赖“已认证 / 未认证”结果；具体认证方案可按工作室资源选择低成本实现。</div></aside></div>';
}
function authHelp(){modal('<h2>认证未完成</h2><p class="subtitle">可以重试校园邮箱验证码，或改用当前试点允许的运营 / 人工核验方式。已填写内容和待恢复申请不会被清空。</p><div class="modalFoot"><button class="btn primary" onclick="closeModal()">返回重试</button></div>')}
function interruptAuth(){
  if(state.authReturn==="apply"&&state.selectedRecruit)state.pendingApplyRecruitId=state.selectedRecruit;
  state.authReturn="";
  if(!state.loggedIn&&state.selectedRecruit){state.route="detail";render();toast("认证已中断；申请意图已保留，之后可继续");return}
  go("home");toast("认证已中断；申请意图已保留");
}
function completeAuth(){
  state.loggedIn=true;state.verified=true;
  var ret=state.authReturn;state.authReturn="";
  if(ret==="publish"){toast("认证成功");beginPublish(state.publishNewRequested);return}
  if(ret==="apply"){
    var rr=findRecruit(state.selectedRecruit);
    if(!rr||rr.status!=="active"||rr.role.formal>=rr.role.capacity||deadlinePassed(rr)){
      showInvalidOriginalRecruit(state.selectedRecruit,!rr?"原招募不存在":rr.status!=="active"?"原招募当前不接收申请":rr.role.formal>=rr.role.capacity?"原角色已经正式招满":"原招募已过截止时间");return;
    }
    state.pendingApplyRecruitId=null;state.route="detail";render();setTimeout(function(){applyRecruit(state.selectedRecruit)},150);return;
  }
  if(ret==="invite"){state.mode="people";state.route="candidate";render();setTimeout(function(){inviteCandidate(state.selectedCandidate)},150);return}
  toast("认证成功");go("profile");
}

function initDeepLink(){
  if(!window.location||!window.location.search)return;
  var params=new URLSearchParams(window.location.search);
  if(params.get("share")==="1"){
    var id=Number(params.get("recruit"));
    state.loggedIn=false;state.verified=false;state.selectedRecruit=id;state.route="detail";
  }
}

/* EXPORT */
window.state=state;
window.render=render;
window.simulatePageState=simulatePageState;
window.clearPageState=clearPageState;
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
window.changeRelationRole=changeRelationRole;
window.confirmRelationRoleChange=confirmRelationRoleChange;
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
window.editHours=editHours;
window.saveStageHours=saveStageHours;
window.removeMemberDemo=removeMemberDemo;
window.confirmRemoveMember=confirmRemoveMember;
window.leaveTeam=leaveTeam;
window.confirmLeave=confirmLeave;
window.saveProfile=saveProfile;
window.addAdditionalRole=addAdditionalRole;
window.switchPublishRole=switchPublishRole;
window.beginPublish=beginPublish;
window.previewRecruit=previewRecruit;
window.saveRecruit=saveRecruit;
window.pauseRecruit=pauseRecruit;
window.endRecruit=endRecruit;
window.coreChange=coreChange;
window.interruptAuth=interruptAuth;
window.completeAuth=completeAuth;
window.closeModal=closeModal;
window.copyShareLink=copyShareLink;
window.reportRecruit=reportRecruit;
window.reportRelation=reportRelation;
window.reportUser=reportUser;
window.blockRelationParty=blockRelationParty;
window.submitReport=submitReport;
window.openEvidence=openEvidence;
window.openLeaderFinalizeCandidateConfirm=openLeaderFinalizeCandidateConfirm;
window.openCandidateAcceptCaptainConfirm=openCandidateAcceptCaptainConfirm;
window.confirmCaptainStart=confirmCaptainStart;
window.ensureRestoredRole=ensureRestoredRole;
window.manageGapRole=manageGapRole;
window.removeAddedCandidate=removeAddedCandidate;
window.confirmRemoveAddedCandidate=confirmRemoveAddedCandidate;
window.transferCaptain=transferCaptain;
window.confirmTransferCaptain=confirmTransferCaptain;
window.leaveManagedTeam=leaveManagedTeam;
window.confirmLeaveManagedTeam=confirmLeaveManagedTeam;
window.resolveMemberHours=resolveMemberHours;
window.acceptFrontendAgreement=acceptFrontendAgreement;
window.authHelp=authHelp;
window.toast=toast;
initDeepLink();
render();