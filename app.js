"use strict";
// GDUTmate MVP v35. All accounts and contacts below are demonstration data.
var seedData = {"recruits": [{"id": 1, "groupId": 1, "teamName": "星火队", "comp": "挑战杯 · 大挑", "title": "寻找数据分析 / 商业分析队友", "leader": "顾闻", "status": "active", "start": "2026-10-06", "end": "2026-12-20", "deadline": "2026-11-28T23:59", "competitionStart": "2026-11-20", "competitionEnd": "2026-12-10", "role": {"name": "数据分析", "capacity": 2, "formal": 1, "task": "问卷数据清洗、统计分析、可视化与需求结论提炼", "skills": ["Excel", "数据分析", "可视化"]}}, {"id": 2, "groupId": 2, "teamName": "远见调研队", "comp": "正大杯", "title": "招募市场调研与访谈同学", "leader": "许辰", "status": "active", "start": "2026-10-10", "end": "2026-12-10", "deadline": "2026-12-05T20:00", "competitionStart": "2026-12-01", "competitionEnd": "2026-12-10", "role": {"name": "市场调研", "capacity": 1, "formal": 0, "task": "访谈提纲、用户访谈、问卷设计与洞察整理", "skills": ["用户访谈", "问卷设计", "报告写作"]}}, {"id": 3, "groupId": 3, "teamName": "逐光开发队", "comp": "互联网+", "title": "寻找前端开发同学", "leader": "陈屿", "status": "paused", "start": "2026-10-01", "end": "2026-11-25", "deadline": "2026-10-22T18:00", "competitionStart": "2026-11-10", "competitionEnd": "2026-11-20", "role": {"name": "前端开发", "capacity": 2, "formal": 1, "task": "实现产品 Demo、核心交互和路演展示页面", "skills": ["JavaScript", "React", "HTML/CSS"]}}, {"id": 4, "groupId": 4, "teamName": "数模探索队", "comp": "数学建模竞赛", "title": "建模队补一名编程队友", "leader": "林深", "status": "full", "start": "2026-11-01", "end": "2026-12-01", "deadline": "2026-10-12T22:00", "competitionStart": "2026-11-20", "competitionEnd": "2026-11-22", "role": {"name": "编程 / 建模", "capacity": 1, "formal": 1, "task": "Python 求解、模型验证、结果整理", "skills": ["Python", "数学建模"]}}, {"id": 5, "groupId": 5, "teamName": "行业洞察队", "comp": "行业经济分析大赛", "title": "招募商业分析与报告撰写队友", "leader": "叶知", "status": "active", "start": "2026-10-08", "end": "2026-11-30", "deadline": "2026-11-28T21:00", "competitionStart": "2026-11-25", "competitionEnd": "2026-11-30", "role": {"name": "商业分析", "capacity": 2, "formal": 1, "task": "行业资料检索、分析框架搭建、核心结论与报告撰写", "skills": ["Excel", "商业分析", "报告写作"]}}, {"id": 901, "groupId": 901, "teamName": "GDUTmate 项目队", "comp": "挑战杯 · 大挑", "title": "GDUTmate 项目招募", "leader": "你", "status": "active", "start": "2026-10-05", "end": "2026-12-20", "deadline": "2026-10-28T23:59", "competitionStart": "2026-11-20", "competitionEnd": "2026-12-10", "role": {"name": "视觉设计", "capacity": 1, "formal": 0, "task": "负责路演 PPT 视觉、海报与产品展示物料", "skills": ["PPT", "Figma", "视觉设计"]}}, {"id": 902, "groupId": 901, "teamName": "GDUTmate 项目队", "comp": "挑战杯 · 大挑", "title": "GDUTmate 项目招募", "leader": "你", "status": "active", "start": "2026-10-05", "end": "2026-12-20", "deadline": "2026-10-28T23:59", "competitionStart": "2026-11-20", "competitionEnd": "2026-12-10", "role": {"name": "数据分析", "capacity": 1, "formal": 0, "task": "负责问卷数据清洗、统计分析、可视化与需求结论提炼", "skills": ["Excel", "数据分析", "可视化"]}}], "people": [{"id": 11, "name": "林清禾", "grade": "大二", "major": "数据科学与大数据技术", "roles": ["数据分析", "数学建模"], "skills": ["Python", "SPSS", "数据可视化", "数据分析"], "exp": "正大杯校赛二等奖 · 负责数据清洗、统计检验和结果可视化", "contact": "lin_demo", "visible": true}, {"id": 12, "name": "陈予安", "grade": "大二", "major": "计算机科学与技术", "roles": ["前端开发", "数据处理"], "skills": ["React", "JavaScript", "Python", "HTML/CSS"], "exp": "互联网+校赛项目 · 负责前端页面与数据接口", "contact": "chen_demo", "visible": true}, {"id": 13, "name": "周言", "grade": "大二", "major": "工商管理", "roles": ["商业分析", "用户调研"], "skills": ["访谈", "Excel", "报告写作", "商业分析"], "exp": "行业经济分析大赛 · 负责访谈、资料分析与报告", "contact": "zhou_demo", "visible": true}, {"id": 14, "name": "宋禾", "grade": "大一", "major": "工业设计", "roles": ["视觉设计"], "skills": ["Figma", "PPT", "PS", "视觉设计"], "exp": "社团招新视觉 · 负责海报与展示物料设计", "contact": "song_demo", "visible": true}]};
var HENRY_FUN_MODE=new URLSearchParams(window.location.search).get("fun")==="henry";
var STORAGE_KEY=HENRY_FUN_MODE?"gdutmate-henry-fun-v1":"gdutmate-mvp-v35";
var state={route:"home",mode:"teams",view:"relations",tab:"pending",returnRoute:"home",selected:1,editing:null,
 calendarYear:new Date().getFullYear(),calendarMonth:new Date().getMonth(),calendarInitialized:false,
 teamFilters:{start:"",end:"",competition:[],roles:[],skills:[]},peopleFilters:{roles:[],skills:[]},
 recruits:seedData.recruits,people:seedData.people,blocked:{},
 profile:HENRY_FUN_MODE?{name:"野猪亨利",grade:"猪大二",major:"泥坑经济与食物贸易",roles:["首席拱地工程师","零食安全监察员","泥潭气氛组组长"],skills:["拱人","啃食食物","泥地漂移","精准定位零食","三秒进入午睡","听见开饭立刻上线"],exp:"2026年泥坑翻滚邀请赛精神冠军；擅长听声辨零食、猪突猛进式推进项目，曾凭一己之力清空团队下午茶。",contact:"hengli_oink_demo",visible:true}:{name:"黄同学",grade:"大二",major:"国际经济与贸易",roles:["用户调研","商业分析","产品策划"],skills:["Excel","报告写作","用户访谈","问卷设计","商业分析","数据分析"],exp:"挑战杯项目负责人：负责需求调研、方案设计与团队推进。",contact:"gdutmate_demo",visible:true},
 relationships:[
 {id:201,type:"application",direction:"outgoing",recruitId:1,party:"顾闻",status:"pending",selfGrant:true,peerGrant:true,peerContact:"guwen_demo"},
 {id:202,type:"invitation",direction:"incoming",recruitId:2,party:"许辰",status:"pending",selfGrant:false,peerGrant:true,peerContact:"xuchen_demo"},
 {id:204,type:"application",direction:"incoming",recruitId:901,candidateId:14,party:"宋禾",status:"pending",selfGrant:false,peerGrant:true,peerContact:"song_demo"},
 {id:205,type:"application",direction:"outgoing",recruitId:5,party:"叶知",status:"joined",selfGrant:true,peerGrant:true,peerContact:"yezhi_demo"},
 {id:203,type:"application",direction:"outgoing",recruitId:3,party:"陈屿",status:"ended",reason:"申请未通过"}],feedback:[]};
try{var saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||"null");if(saved&&saved.version===35){["recruits","people","profile","relationships","feedback","blocked"].forEach(function(k){if(saved[k])state[k]=saved[k]})}}catch(err){}
function persist(){try{var data={version:35};["recruits","people","profile","relationships","feedback","blocked"].forEach(function(k){data[k]=state[k]});localStorage.setItem(STORAGE_KEY,JSON.stringify(data));return true}catch(err){toast("浏览器未能保存数据，请勿关闭当前页面");return false}}
function e(v){return String(v==null?"":v).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function byId(id){return document.getElementById(id)}
function action(code){return e(code)}
function btn(label,code,kind){return '<button type="button" class="btn '+(kind||'secondary')+'" onclick="'+action(code)+'">'+e(label)+'</button>'}
function badges(a){return a.map(function(v){return '<span class="badge">'+e(v)+'</span>'}).join('')}
function empty(a,b){return '<div class="panel empty"><h3>'+e(a)+'</h3><p>'+e(b||'')+'</p></div>'}
function toast(s){var t=byId('toast');t.textContent=s;t.classList.add('show');clearTimeout(state.toastTimer);state.toastTimer=setTimeout(function(){t.classList.remove('show')},2400)}
function modal(html){byId('modalRoot').innerHTML='<div class="modalBg" id="modalBg"><div class="modal" role="dialog" aria-modal="true">'+html+'</div></div>';byId('modalBg').onclick=function(ev){if(ev.target.id==='modalBg')closeModal()};var first=byId('modalRoot').querySelector('input,textarea,button');if(first)first.focus()}
function closeModal(){byId('modalRoot').innerHTML=''}
function findRecruit(id){return state.recruits.find(function(r){return r.id===Number(id)})}
function allRecruitments(){return state.recruits}
function roleFree(r){return Math.max(0,r.role.capacity-r.role.formal)}
function deadlinePassed(r){return Date.now()>new Date(r.deadline).getTime()}
function openForApply(r){return r&&r.status==='active'&&roleFree(r)>0&&!deadlinePassed(r)&&r.start<=today()}
function today(){var d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function displayStatus(r){return r.status==='ended'?'已结束':r.status==='paused'?'已暂停':r.status==='full'||!roleFree(r)?'名额已满':deadlinePassed(r)?'已截止':r.start>today()?'报名未开始':'招募中'}
function normalizeCompetitionName(v){return String(v||'').trim().replace(/\s+/g,' ')}
function competitionInput(r,k){return k==='start'?r.competitionStart:r.competitionEnd}
function periodText(r){return r.start+' 至 '+r.end}
function relationNeedsMyAction(x){return x.status==='pending'}
function homeTeamCount(){return new Set(state.recruits.filter(function(r){return r.leader==='你'&&r.status!=='ended'}).map(function(r){return r.groupId} ).concat(state.relationships.filter(function(x){return x.status==='joined'}).map(function(x){var r=findRecruit(x.recruitId);return r?r.groupId:null}).filter(Boolean))).size}
function openHomeProgress(view,tab){state.view=view==='team'?'team':'relations';state.tab=tab==='joined'||tab==='ended'?tab:'pending';go('progress')}
function go(route){state.route=route;closeModal();render();window.scrollTo(0,0)}
function openRecruit(id){if(state.route!=='detail')state.returnRoute=state.route;state.selected=Number(id);go('detail')}
function openCandidate(id){if(state.route!=='candidate')state.returnRoute=state.route;state.selected=Number(id);go('candidate')}
function shell(){var titles={home:'首页',explore:'寻找',calendar:'比赛日历',detail:'招募详情',candidate:'队友资料',progress:'管理',profile:'我的',profileEdit:'编辑个人资料',publish:state.editing?'编辑招募':'发布招募'};
 var nav=[['home','首页','⌂'],['explore','寻找','⌕'],['progress','管理','◎'],['profile','我的','○']];
 byId('app').innerHTML='<div class="shell"><aside class="sidebar"><div class="brand"><div class="brandMark">G</div><div><div class="brandName">GDUTmate</div><div class="brandSub">大学生竞赛组队平台</div></div></div><nav class="nav">'+nav.map(function(n){return '<button class="navItem '+(state.route===n[0]?'active':'')+'" onclick="go(\''+n[0]+'\')"><span>'+n[2]+'</span><b>'+n[1]+'</b></button>'}).join('')+'</nav></aside><main class="main"><header class="topbar"><div><div class="eyebrow">GDUTmate</div><h1 class="pageTitle">'+titles[state.route]+'</h1></div><div class="topActions"><span class="demoDataPill">Demo · 示例数据</span>'+(state.route==='publish'?'':btn('发布招募','beginPublish()', 'primary'))+'</div></header><div id="page"></div></main></div><nav class="mobileNav">'+nav.map(function(n){return '<button class="mNav '+(state.route===n[0]?'active':'')+'" onclick="go(\''+n[0]+'\')"><b>'+n[2]+'</b><span>'+n[1]+'</span></button>'}).join('')+'</nav>'}

/* Demo-only login gate. Production credentials must be verified by the backend. */
var demoAuth={studentId:""};
var DEMO_INITIAL_PASSWORD="123456";
var DEMO_AUTH_SESSION="gdutmate-demo-auth-v1";
var DEMO_PASSWORD_PREFIX="gdutmate-demo-password-v1:";
try{demoAuth.studentId=sessionStorage.getItem(DEMO_AUTH_SESSION)||""}catch(err){}
async function demoPasswordDigest(studentId,password){
  var bytes=new TextEncoder().encode("GDUTmate-demo:"+studentId+":"+password);
  var digest=await crypto.subtle.digest("SHA-256",bytes);
  return Array.from(new Uint8Array(digest)).map(function(b){return b.toString(16).padStart(2,"0")}).join("");
}
function renderLogin(){
  closeModal();
  byId("app").innerHTML='<main style="min-height:100vh;display:grid;place-items:center;padding:24px"><section class="panel" style="width:100%;max-width:440px;padding:32px"><div class="brand" style="margin-bottom:24px"><div class="brandMark">G</div><div><div class="brandName">GDUTmate</div><div class="meta">大学生竞赛组队平台</div></div></div><h1 style="font-size:26px;margin:0 0 24px">学号登录</h1><form onsubmit="event.preventDefault();submitStudentLogin()"><div class="field" style="margin-bottom:18px"><label for="loginStudentId">学号</label><input class="input" id="loginStudentId" inputmode="numeric" autocomplete="username" maxlength="20" required placeholder="请输入学号"></div><div class="field" style="margin-bottom:24px"><label for="loginPassword">密码</label><input class="input" id="loginPassword" type="password" autocomplete="current-password" required placeholder="请输入密码"></div><p class="help">初始密码由后台统一设置，登录后可在“我的”中修改。</p><p class="help">Demo 统一初始密码：123456；学号使用 6–20 位数字。仅供演示，请勿输入真实密码。</p><button class="btn primary" id="loginSubmit" type="submit" style="width:100%;margin-top:16px">登录</button><p id="loginError" role="alert" style="color:var(--red);font-size:14px;min-height:22px;margin-bottom:0"></p></form></section></main>';
}
async function submitStudentLogin(){
  var studentId=byId("loginStudentId").value.trim(),password=byId("loginPassword").value,error=byId("loginError"),submit=byId("loginSubmit");
  if(submit.disabled)return;
  if(!/^\d{6,20}$/.test(studentId)){error.textContent="请输入 6–20 位数字学号";return}
  if(!password){error.textContent="请输入密码";return}
  submit.disabled=true;error.textContent="";
  try{
    var saved=localStorage.getItem(DEMO_PASSWORD_PREFIX+studentId);
    var valid=saved?(await demoPasswordDigest(studentId,password))===saved:password===DEMO_INITIAL_PASSWORD;
    if(!valid){error.textContent="学号或密码错误";return}
    sessionStorage.setItem(DEMO_AUTH_SESSION,studentId);
    demoAuth.studentId=studentId;
    byId("loginPassword").value="";
    render();
  }catch(err){error.textContent="登录失败，浏览器暂时无法保存登录信息，请重试"}
  finally{submit.disabled=false}
}
function openChangePassword(){
  if(!demoAuth.studentId){render();return}
  modal('<h2>修改密码</h2><p class="subtitle">学号：'+e(demoAuth.studentId)+'</p><form onsubmit="event.preventDefault();saveChangedPassword()"><div class="field" style="margin-top:18px"><label for="currentPassword">当前密码</label><input class="input" id="currentPassword" type="password" autocomplete="current-password" required></div><div class="field" style="margin-top:18px"><label for="newPassword">新密码</label><input class="input" id="newPassword" type="password" autocomplete="new-password" minlength="6" maxlength="64" required><small class="help">6–64 位，不含空格。</small></div><div class="field" style="margin-top:18px"><label for="confirmPassword">确认新密码</label><input class="input" id="confirmPassword" type="password" autocomplete="new-password" minlength="6" maxlength="64" required></div><p class="help" style="margin-top:18px">演示版修改仅在当前浏览器生效，请勿使用真实密码。</p><p id="passwordError" role="alert" style="color:var(--red);font-size:14px"></p><div class="modalFoot">'+btn('取消','closeModal()')+'<button class="btn primary" id="passwordSubmit" type="submit">保存密码</button></div></form>');
}
async function saveChangedPassword(){
  if(!demoAuth.studentId){closeModal();render();return}
  var current=byId("currentPassword").value,next=byId("newPassword").value,confirm=byId("confirmPassword").value,error=byId("passwordError"),submit=byId("passwordSubmit");
  if(submit.disabled)return;
  if(!current){error.textContent="请输入当前密码";return}
  if(next.length<6||next.length>64||/\s/.test(next)){error.textContent="新密码须为 6–64 位，且不含空格";return}
  if(next!==confirm){error.textContent="两次输入的新密码不一致";return}
  if(next===current){error.textContent="新密码不能与当前密码相同";return}
  submit.disabled=true;error.textContent="";
  try{
    var id=demoAuth.studentId,saved=localStorage.getItem(DEMO_PASSWORD_PREFIX+id);
    var valid=saved?(await demoPasswordDigest(id,current))===saved:current===DEMO_INITIAL_PASSWORD;
    if(!valid){error.textContent="当前密码不正确";return}
    localStorage.setItem(DEMO_PASSWORD_PREFIX+id,await demoPasswordDigest(id,next));
    byId("currentPassword").value="";byId("newPassword").value="";byId("confirmPassword").value="";
    closeModal();toast("密码已修改，下次登录请使用新密码");
  }catch(err){error.textContent="密码未能保存，请重试"}
  finally{submit.disabled=false}
}

function render(){if(!demoAuth.studentId){renderLogin();return}shell();var routes={home:renderHome,calendar:renderCalendar,explore:renderExplore,detail:renderDetail,candidate:renderCandidate,progress:renderProgress,profile:renderProfile,profileEdit:renderProfileEdit,publish:renderPublish};(routes[state.route]||renderHome)(byId('page'))}

function renderHome(p){
  var posts=state.recruits.filter(function(r){return !state.blocked["r"+r.id]&&r.status==="active"&&roleFree(r)>0&&!deadlinePassed(r)}).slice(0,3);
  var peers=state.people.filter(function(c){return !state.blocked[c.id]&&c.visible!==false}).slice(0,3);
  var pending=state.relationships.filter(relationNeedsMyAction).length;
  var teams=homeTeamCount();
  p.innerHTML='<div class="gd-referenceHome">'+
    '<section class="gd-referenceHero"><div><span class="gd-heroOverline">GDUT / TEAM UP</span><h2>让每一份能力，<br>找到合适的队伍。</h2><p>发现竞赛伙伴，开启共同的参赛计划。</p><div class="actions"><button class="btn primary" onclick="state.mode=\'teams\';go(\'explore\')">寻找队伍</button><button class="btn secondary" onclick="state.mode=\'people\';go(\'explore\')">寻找队友</button></div></div>'+
    '<div class="gd-heroCounts"><button onclick="openHomeProgress(\'relations\',\'all\')"><b>'+pending+'</b><span>待处理事项</span></button><button onclick="openHomeProgress(\'team\')"><b>'+teams+'</b><span>我的队伍</span></button></div></section>'+
    '<section class="gd-referenceLinks" aria-label="常用功能">'+
    '<button type="button" onclick="go(\'calendar\')"><span class="gd-linkIcon" aria-hidden="true">▦</span><b>比赛日历</b><small>查看比赛日程</small><i aria-hidden="true">↗</i></button>'+
    '<button type="button" onclick="openHomeProgress(\'team\')"><span class="gd-linkIcon" aria-hidden="true">◎</span><b>我的队伍</b><small>招募与成员管理</small><i aria-hidden="true">↗</i></button>'+
    '<button type="button" onclick="openHomeProgress(\'relations\',\'all\')"><span class="gd-linkIcon" aria-hidden="true">↗</span><b>待办</b><small>'+pending+' 条待处理事项</small><i aria-hidden="true">↗</i></button></section>'+
    '<div class="gd-referenceSectionHead"><h2>队伍推荐</h2><button class="btn text" onclick="state.mode=\'teams\';go(\'explore\')">查看全部 →</button></div><div class="gd-referencePostGrid">'+
    (posts.length?posts.map(referenceTeamCard).join(""):empty("暂无正在招募的队伍","可前往寻找页面浏览其他队伍。"))+'</div>'+
    '<div class="gd-referenceSectionHead"><h2>队友推荐</h2><button class="btn text" onclick="state.mode=\'people\';go(\'explore\')">查看全部 →</button></div><div class="gd-referencePostGrid">'+
    (peers.length?peers.map(referencePersonCard).join(""):empty("暂无队友推荐","可前往寻找页面查看队友。"))+'</div></div>';
}
function referenceTeamCard(r){
  return '<article class="gd-referencePost"><div class="gd-referencePostTop"><span>队伍招募</span><span aria-hidden="true">↗</span></div><h3>'+e(r.comp)+'</h3><p class="gd-referenceTeamName">队伍名称：'+e(r.teamName||r.comp+"参赛队")+'</p><p class="gd-referenceDate">时间段：'+e(periodText(r))+'</p><div class="gd-referencePostRow"><span>招募岗位</span><b>'+e(r.role.name)+'</b></div><div class="gd-referencePostRow"><span>能力要求</span><div class="badges">'+badges(r.role.skills)+'</div></div><button class="gd-referenceCardLink" onclick="openRecruit('+r.id+')" aria-label="查看'+e(r.teamName||r.comp)+'招募详情"></button></article>';
}
function referencePersonCard(c){
  return '<article class="gd-referencePost"><div class="gd-referencePersonHead"><span class="gd-referenceAvatar" aria-hidden="true">'+e(c.name.charAt(0))+'</span><h3>'+e(c.name)+'</h3><span class="gd-referencePostArrow" aria-hidden="true">↗</span></div><div class="gd-referencePostRow"><span>意向岗位</span><b>'+e(c.roles.join("、"))+'</b></div><div class="gd-referencePostRow"><span>能力标签</span><div class="badges">'+badges(c.skills)+'</div></div><button class="gd-referenceCardLink" onclick="openCandidate('+c.id+')" aria-label="查看'+e(c.name)+'队友详情"></button></article>';
}
function renderCalendar(p){
  var events=getCompetitionCalendarEvents();
  if(!state.calendarInitialized){
    var now=new Date(),todayKey=gdCalendarISO(now.getFullYear(),now.getMonth(),now.getDate());
    var nearest=events.filter(function(x){return x.start>todayKey})[0];
    var ongoing=events.some(function(x){return x.start<=todayKey&&x.end>=todayKey});
    if(nearest&&!ongoing){var parts=nearest.start.split("-");state.calendarYear=Number(parts[0]);state.calendarMonth=Number(parts[1])-1;}
    state.calendarInitialized=true;
  }
  p.innerHTML='<div class="gd-calendarPage"><div class="gd-calendarPageHeader"><button class="btn text" onclick="go(\'home\')">← 返回首页</button><p>查看比赛时间，点击比赛即可寻找正在招募的队伍。</p></div>'+
    homeCompetitionCalendar(events)+'</div>';
}

function getCompetitionCalendarEvents(){
  var seen={},events=[];
  allRecruitments().forEach(function(r){
    var name=normalizeCompetitionName(r.comp);
    if(!name||seen[name])return;
    seen[name]=true;
    var start=competitionInput(r,"start"),end=competitionInput(r,"end");
    if(!start||!end)return;
    var n=state.recruits.filter(function(x){return normalizeCompetitionName(x.comp)===name&&!state.blocked["r"+x.id]&&x.status==="active"&&roleFree(x)>0&&!deadlinePassed(x)}).length;
    events.push({name:name,start:start,end:end,recruiting:n});
  });
  return events.sort(function(x,y){return x.start.localeCompare(y.start)});
}
function gdCalendarISO(y,m,d){return y+"-"+String(m+1).padStart(2,"0")+"-"+String(d).padStart(2,"0");}
function gdCalendarArg(s){return encodeURIComponent(s).replace(/'/g,"%27");}
function gdCalendarGo(name){state.mode="teams";state.teamFilters={start:"",end:"",competition:[name],roles:[],skills:[]};go("explore");}
function shiftCompetitionCalendar(offset){
  var next=new Date(state.calendarYear,state.calendarMonth+offset,1);
  state.calendarYear=next.getFullYear();state.calendarMonth=next.getMonth();render();
}
function homeCompetitionCalendar(events){
  var y=state.calendarYear,m=state.calendarMonth;
  var first=(new Date(y,m,1).getDay()+6)%7,last=new Date(y,m+1,0).getDate();
  var cells=["一","二","三","四","五","六","日"].map(function(x){return '<div class="gd-calDow">'+x+'</div>'}).join("");
  for(var blank=0;blank<first;blank++)cells+='<div class="gd-calEmpty"></div>';
  var today=new Date(),todayKey=gdCalendarISO(today.getFullYear(),today.getMonth(),today.getDate());
  for(var d=1;d<=last;d++){
    var key=gdCalendarISO(y,m,d);
    var milestones=events.filter(function(x){return x.start===key||x.end===key});
    var ongoing=events.some(function(x){return x.start<=key&&x.end>=key});
    cells+='<div class="gd-calDay '+(key===todayKey?"today ":"")+(ongoing?"gd-ongoing":"")+'"><span>'+d+'</span>'+
      milestones.map(function(x){var tag=x.start===key&&x.end===key?"开始 / 截止":x.start===key?"开始":"截止";return '<button class="gd-calMark" onclick="gdCalendarGo(decodeURIComponent(\''+gdCalendarArg(x.name)+'\'))" title="'+e(x.name)+' · '+tag+'">'+e(x.name)+' · '+tag+'</button>'}).join("")+'</div>';
  }
  var rows=events.map(function(x){
    return '<button class="gd-eventRow" onclick="gdCalendarGo(decodeURIComponent(\''+gdCalendarArg(x.name)+'\'))"><span class="gd-eventName">'+e(x.name)+'</span>'+
      '<span class="gd-eventDates"><small>开始日期</small><b>'+e(x.start)+'</b><small>截止日期</small><b>'+e(x.end)+'</b></span>'+
      '<span class="gd-eventAvailability">'+(x.recruiting?"招募中 "+x.recruiting+" 个岗位":"暂无在招队伍")+' <i>→</i></span></button>';
  }).join("");
  return '<section class="gd-calendarPanel"><div class="gd-homeFeedHead"><div><h2>比赛日历</h2><p>点击比赛直接筛选对应的正在招募队伍</p></div><span class="gd-demoNote">演示日期 · 非官方赛程</span></div>'+
    '<div class="gd-calendarColumns"><div class="gd-calendarMonth"><div class="gd-calendarToolbar"><b>'+y+' 年 '+(m+1)+' 月</b><div><button onclick="shiftCompetitionCalendar(-1)" aria-label="上个月">‹</button><button onclick="shiftCompetitionCalendar(1)" aria-label="下个月">›</button></div></div>'+
    '<div class="gd-calendarGrid">'+cells+'</div></div><div class="gd-calendarAgenda"><div class="gd-agendaTitle">比赛时间一览 <small>开始 / 截止日期</small></div>'+
    (rows||'<div class="notice">暂无比赛日程</div>')+'</div></div></section>';
}

/* Search: OR within a field, AND between fields. */
function overlaps(r){var f=state.teamFilters;return (!f.start||r.end>=f.start)&&(!f.end||r.start<=f.end)&&(!f.start||r.deadline.slice(0,10)>=f.start)}
function filteredTeams(){var f=state.teamFilters;return state.recruits.filter(function(r){return r.leader!=='你'&&!state.blocked['r'+r.id]&&openForApply(r)&&overlaps(r)&&(!f.competition.length||f.competition.includes(r.comp))&&(!f.roles.length||f.roles.includes(r.role.name))&&(!f.skills.length||f.skills.some(function(s){return r.role.skills.includes(s)}))})}
function filteredCandidates(){var f=state.peopleFilters;return state.people.filter(function(c){return c.visible!==false&&!state.blocked[c.id]&&(!f.roles.length||f.roles.some(function(s){return c.roles.includes(s)}))&&(!f.skills.length||f.skills.some(function(s){return c.skills.includes(s)}))})}
function unique(a){return Array.from(new Set(a)).sort(function(a,b){return a.localeCompare(b,'zh-CN')})}
function filterRow(label,kind,key,values){var f=kind==='team'?state.teamFilters:state.peopleFilters;return '<tr><th scope="row">'+e(label)+'</th><td><div class="filterChoices">'+btn('全部','clearFilter('+JSON.stringify(kind)+','+JSON.stringify(key)+')',!f[key].length?'primary':'secondary')+values.map(function(v){return '<button type="button" aria-pressed="'+f[key].includes(v)+'" class="check '+(f[key].includes(v)?'on':'')+'" onclick="'+action('toggleChoice('+JSON.stringify(kind)+','+JSON.stringify(key)+','+JSON.stringify(v)+')')+'">'+e(v)+'</button>'}).join('')+'</div></td></tr>'}
function clearFilter(kind,key){(kind==='team'?state.teamFilters:state.peopleFilters)[key]=[];render()}
function toggleChoice(kind,key,v){var f=kind==='team'?state.teamFilters:state.peopleFilters;f[key]=f[key].includes(v)?f[key].filter(function(s){return s!==v}):f[key].concat(v);render()}
function setDates(){var start=byId('filterStart').value,end=byId('filterEnd').value;if(start&&end&&start>end){toast('开始日期不能晚于结束日期');return}state.teamFilters.start=start;state.teamFilters.end=end;render()}
function resetFilters(){if(state.mode==='teams')state.teamFilters={start:'',end:'',competition:[],roles:[],skills:[]};else state.peopleFilters={roles:[],skills:[]};render()}
function renderExplore(p){var teams=state.mode==='teams';p.innerHTML='<div class="tabs">'+btn('找队伍',"state.mode='teams';render()",teams?'primary':'secondary')+btn('找队友',"state.mode='people';render()",!teams?'primary':'secondary')+'</div>'+(teams?renderTeamSearch():renderPeopleSearch())}

function competitionFilterRow(values){
  var categories=[
    {label:"商赛",pattern:/商赛|商[业务]|市场|正大杯|经济|营销|贸易|金融|会计/},
    {label:"电赛",pattern:/电子|电路|电赛|集成电路/},
    {label:"机电结合",pattern:/机电|机器人|智能车|机械|工程训练/},
    {label:"创新创业",pattern:/挑战杯|互联网|创新|创业/},
    {label:"数学建模",pattern:/数学|建模/},
    {label:"其他竞赛",pattern:/.*/}
  ];
  var groups=categories.map(function(c){return {label:c.label,values:[]}});
  values.forEach(function(v){var index=categories.findIndex(function(c){return c.pattern.test(v)});groups[index].values.push(v)});
  return '<tr><th scope="row">竞赛名称</th><td><div class="filterChoices">'+btn('全部','clearFilter("team","competition")',!state.teamFilters.competition.length?'primary':'secondary')+'</div>'+
    groups.filter(function(g){return g.values.length}).map(function(g){
      return '<div style="margin-top:12px"><div style="margin-bottom:8px;font-size:14px;color:var(--muted)">'+e(g.label)+'：</div><div class="filterChoices">'+
        g.values.map(function(v){return '<button type="button" aria-pressed="'+state.teamFilters.competition.includes(v)+'" class="check '+(state.teamFilters.competition.includes(v)?'on':'')+'" onclick="'+action('toggleChoice("team","competition",'+JSON.stringify(v)+')')+'">'+e(v)+'</button>'}).join('')+'</div></div>';
    }).join('')+'</td></tr>';
}

function renderTeamSearch(){var base=state.recruits.filter(function(r){return r.leader!=='你'&&openForApply(r)&&overlaps(r)}),f=state.teamFilters,comps=unique(base.map(function(r){return r.comp}).concat(f.competition));var linked=base.filter(function(r){return !f.competition.length||f.competition.includes(r.comp)});var list=filteredTeams();return '<details class="panel mvpFilterFold" '+(state.teamFilterOpen?'open':'')+' ontoggle="state.teamFilterOpen=this.open"><summary>筛选条件</summary><table class="mvpFilter"><tbody><tr><th scope="row">可报名时间段</th><td><div class="dateFilters"><input aria-label="可报名开始日期" class="input" id="filterStart" type="date" value="'+e(f.start)+'"><span>至</span><input aria-label="可报名结束日期" class="input" id="filterEnd" type="date" value="'+e(f.end)+'">'+btn('确定','setDates()')+'</div></td></tr>'+competitionFilterRow(comps)+filterRow('招募岗位（JD）','team','roles',unique(linked.map(function(r){return r.role.name}).concat(f.roles)))+filterRow('能力要求','team','skills',unique(linked.flatMap(function(r){return r.role.skills}).concat(f.skills)))+'</tbody></table><div class="actions">'+btn('清空筛选','resetFilters()','text')+'</div></details><div class="resultsHead"><b>队伍招募</b><span>'+list.length+' 个岗位</span></div><div class="list">'+(list.map(teamResultRow).join('')||empty('暂无符合条件的队伍','请调整筛选条件。'))+'</div>'}
function teamResultRow(r){return '<article class="panel mvpTeamCard"><div><h3>'+e(r.comp)+'</h3><p>时间段：'+e(periodText(r))+'</p><div class="mvpCardLine"><span>招募岗位</span><b>'+e(r.role.name)+'</b></div><div class="mvpCardLine"><span>能力要求</span><div class="badges">'+badges(r.role.skills)+'</div></div></div>'+btn('查看详情','openRecruit('+r.id+')','primary')+'</article>'}
function myPost(){return '<section class="panel myPost"><div><h3>我的帖子</h3><p>'+e(state.profile.roles.join('、'))+' · '+(state.profile.visible?'正在展示':'已暂停展示')+'</p></div><div class="actions">'+btn('编辑帖子',"state.profileReturn='explore';go('profileEdit')")+btn(state.profile.visible?'暂停展示':'开启展示','togglePost()',state.profile.visible?'secondary':'primary')+'</div></section>'}
function togglePost(){state.profile.visible=!state.profile.visible;persist();render();toast(state.profile.visible?'帖子已开启展示':'帖子已暂停展示')}
function renderPeopleSearch(){var list=filteredCandidates();return myPost()+'<details class="panel mvpFilterFold" '+(state.peopleFilterOpen?'open':'')+' ontoggle="state.peopleFilterOpen=this.open"><summary>筛选条件</summary><table class="mvpFilter"><tbody>'+filterRow('能力','people','skills',unique(state.people.flatMap(function(c){return c.skills})))+filterRow('岗位','people','roles',unique(state.people.flatMap(function(c){return c.roles})))+'</tbody></table><div class="actions">'+btn('清空筛选','resetFilters()','text')+'</div></details><div class="resultsHead"><b>队友帖子</b><span>'+list.length+' 人</span></div><div class="gd-referencePostGrid">'+(list.map(referencePersonCard).join('')||empty('暂无符合条件的队友','请调整筛选条件。'))+'</div>'}
/* Details and contact authorization */
function backButton(){return btn('← 返回',"go(state.returnRoute||'explore')",'text')}
function renderDetail(p){var r=findRecruit(state.selected);if(!r){p.innerHTML=backButton()+empty('招募不存在','请返回查看其他招募。');return}var rel=state.relationships.find(function(x){var rr=findRecruit(x.recruitId);return rr&&rr.groupId===r.groupId&&x.status!=='ended'&&x.direction==='outgoing'&&x.type==='application'});var alreadyJoined=state.relationships.some(function(x){var rr=findRecruit(x.recruitId);return rr&&rr.groupId===r.groupId&&x.status==='joined'&&((x.type==='application'&&x.direction==='outgoing')||(x.type==='invitation'&&x.direction==='incoming'))});p.innerHTML=backButton()+'<section class="panel"><div class="between"><div><div class="meta">'+e(r.comp)+'</div><h2>'+e(r.title)+'</h2><p>队伍名称：'+e(r.teamName)+'</p>'+'</div><span class="status">'+(alreadyJoined||r.id===1?'已加入':displayStatus(r))+'</span></div><div class="section kv"><div class="k">时间段</div><div>'+e(periodText(r))+'</div><div class="k">报名截止</div><div>'+e(r.deadline.replace('T',' '))+'</div><div class="k">招募岗位</div><div>'+e(r.role.name)+'</div><div class="k">剩余名额</div><div>'+roleFree(r)+'</div><div class="k">能力要求</div><div class="badges">'+badges(r.role.skills)+'</div><div class="k">具体任务</div><div>'+e(r.role.task)+'</div></div><div class="actions">'+(r.leader==='你'?btn('编辑招募','beginPublish('+r.id+')'):rel?btn('查看组队记录',"state.view='relations';state.tab='"+rel.status+"';go('progress')",'primary'):openForApply(r)?btn('申请加入','applyRecruit('+r.id+')','primary'):'')+'</div></section>'}
function renderCandidate(p){var c=state.people.find(function(c){return c.id===state.selected});if(!c||c.visible===false||state.blocked[c.id]){p.innerHTML=backButton()+empty('帖子已停止展示','请返回查看其他队友。');return}p.innerHTML=backButton()+'<section class="panel"><h2>'+e(c.name)+'</h2><p>'+e(c.grade)+' · '+e(c.major)+'</p><div class="section kv"><div class="k">意向岗位</div><div>'+e(c.roles.join('、'))+'</div><div class="k">能力</div><div class="badges">'+badges(c.skills)+'</div><div class="k">相关经历</div><div>'+e(c.exp)+'</div></div><div class="actions">'+btn('发送招募邀请','inviteCandidate('+c.id+')','primary')+'</div></section>'}
function requireContact(){if(!state.profile.name.trim()||!state.profile.roles.length||!state.profile.skills.length||!state.profile.contact.trim()){state.profileReturn=state.route;go('profileEdit');toast('请先填写姓名、岗位、能力及联系方式');return false}return true}
function applyRecruit(id){var r=findRecruit(id);if(!openForApply(r)||r.leader==='你'){toast('该招募当前不可申请');return}if(!requireContact())return;var active=state.relationships.find(function(x){var rr=findRecruit(x.recruitId);return rr&&rr.groupId===r.groupId&&x.direction==='outgoing'&&x.type==='application'&&x.status!=='ended'});if(active){toast('已存在申请记录');return}modal('<h2>申请加入</h2><p>'+e(r.comp)+' · '+e(r.role.name)+'</p><label class="consent"><input id="contactConsent" type="checkbox">同意向对方提供我的联系方式，用于组队沟通。</label><div class="modalFoot">'+btn('取消','closeModal()')+btn('提交申请','submitApplication('+id+')','primary')+'</div>')}
function nextId(){return Date.now()+Math.floor(Math.random()*1000)}
function submitApplication(id){var r=findRecruit(id);if(!r||!openForApply(r)){closeModal();toast('招募状态已变更');return}if(!byId('contactConsent').checked){toast('请先授权联系方式');return}if(state.relationships.some(function(x){var rr=findRecruit(x.recruitId);return rr&&rr.groupId===r.groupId&&x.direction==='outgoing'&&x.type==='application'&&x.status!=='ended'})){closeModal();toast('请勿重复申请');return}state.relationships.push({id:nextId(),type:'application',direction:'outgoing',recruitId:id,party:r.leader,status:'pending',selfGrant:true,peerGrant:false,peerContact:'leader_demo_'+id});persist();closeModal();state.view='relations';state.tab='pending';go('progress');toast('申请已提交')}
function inviteCandidate(id){var c=state.people.find(function(c){return c.id===id&&c.visible!==false});if(!c||!requireContact())return;var owned=state.recruits.filter(function(r){return r.leader==='你'&&openForApply(r)});if(!owned.length){toast('请先发布有效招募');beginPublish();return}modal('<h2>发送招募邀请</h2><div class="field"><label for="inviteRole">选择招募岗位</label><select class="select" id="inviteRole">'+owned.map(function(r){return '<option value="'+r.id+'">'+e(r.comp+' · '+r.role.name)+'</option>'}).join('')+'</select></div><label class="consent"><input id="contactConsent" type="checkbox">同意向对方提供我的联系方式，用于组队沟通。</label><div class="modalFoot">'+btn('取消','closeModal()')+btn('发送邀请','sendInvitation('+id+')','primary')+'</div>')}
function sendInvitation(id){var r=findRecruit(Number(byId('inviteRole').value)),c=state.people.find(function(c){return c.id===id});if(!r||r.leader!=='你'||!openForApply(r)||!c||c.visible===false){toast('招募或队友状态已变更');return}if(!byId('contactConsent').checked){toast('请先授权联系方式');return}if(state.relationships.some(function(x){var rr=findRecruit(x.recruitId);return rr&&rr.groupId===r.groupId&&x.candidateId===id&&x.status!=='ended'})){toast('该队伍已与此队友建立组队记录');return}state.relationships.push({id:nextId(),type:'invitation',direction:'outgoing',recruitId:r.id,candidateId:id,party:c.name,status:'pending',selfGrant:true,peerGrant:false,peerContact:c.contact});persist();closeModal();state.view='relations';state.tab='pending';go('progress');toast('邀请已发送')}
function getRelation(id){return state.relationships.find(function(x){return x.id===id})}
function shareContact(id){var x=getRelation(id);if(!x||x.status!=='pending'||!requireContact())return;modal('<h2>授权联系方式</h2><p>授权后，对方可查看你的联系方式并在平台外沟通。</p><div class="modalFoot">'+btn('取消','closeModal()')+btn('同意授权','confirmContact('+id+')','primary')+'</div>')}
function confirmContact(id){var x=getRelation(id);if(!x||x.status!=='pending')return;x.selfGrant=true;persist();closeModal();render()}
function showContact(id){var x=getRelation(id);if(!x||x.status==='ended'||!x.selfGrant||!x.peerGrant){toast('双方授权后可查看联系方式');return}modal('<h2>对方联系方式</h2><p>'+e(x.party)+'</p><input class="input" readonly aria-label="对方联系方式" value="'+e(x.peerContact)+'"><p class="help">演示账号。请自行沟通竞赛安排，并在管理页确认组队结果。</p><div class="modalFoot">'+btn('关闭','closeModal()')+'</div>')}
/* Three states only; external communication stays inside a pending record. */
function isLeader(x){var r=findRecruit(x.recruitId);return r&&r.leader==='你'}
function renderProgress(p){p.innerHTML='<div class="tabs">'+btn('组队记录',"state.view='relations';render()",state.view==='relations'?'primary':'secondary')+btn('我的队伍',"state.view='team';render()",state.view==='team'?'primary':'secondary')+'</div>'+(state.view==='team'?renderTeams():renderRelations())}
function renderRelations(){return '<div class="tabs">'+[['pending','待处理'],['joined','已组队'],['ended','已结束']].map(function(v){return btn(v[1]+' '+state.relationships.filter(function(x){return x.status===v[0]}).length,"state.tab='"+v[0]+"';render()",state.tab===v[0]?'primary':'secondary')}).join('')+'</div><div class="list">'+(state.relationships.filter(function(x){return x.status===state.tab}).map(relationCard).join('')||empty('暂无记录'))+'</div>'}
function relationCard(x){var r=findRecruit(x.recruitId);if(!r)return '';var label={pending:'待处理',joined:'已组队',ended:'已结束'}[x.status],canJoin=x.selfGrant&&x.peerGrant,controls='';if(x.status==='pending'){if(!x.selfGrant)controls+=btn('授权联系方式','shareContact('+x.id+')');if(canJoin)controls+=btn('查看联系方式','showContact('+x.id+')');if(isLeader(x)&&canJoin)controls+=btn('确认加入','askJoin('+x.id+')','primary');controls+=btn(isLeader(x)?(x.type==='invitation'?'撤回邀请':'申请不通过'):x.direction==='outgoing'?'撤回申请':'拒绝邀请','askEnd('+x.id+')','text');controls+='<details class="mvpSimulation"><summary>演示对方操作</summary><p>仅模拟另一方响应，不代表真实通知。</p>'+(!x.peerGrant?btn('模拟对方授权','simulatePeer('+x.id+',"authorize")'):'')+(!isLeader(x)&&canJoin?btn('模拟队长确认加入','simulatePeer('+x.id+',"join")'):'')+btn('模拟对方拒绝','simulatePeer('+x.id+',"reject")')+'</details>'}else if(x.status==='joined')controls+=btn('查看联系方式','showContact('+x.id+')');return '<article class="panel"><div class="between"><div><h3>'+e(r.comp)+' · '+e(r.role.name)+'</h3><p>'+e(x.party)+' · '+(x.type==='application'?'加入申请':'招募邀请')+'</p></div><span class="status">'+label+'</span></div>'+(x.status==='pending'?'<p class="meta">'+(canJoin?'双方已授权联系方式，请在平台外沟通后确认结果。':x.selfGrant?'已授权，等待对方授权联系方式。':'请授权联系方式以便双方沟通。')+'</p>':'')+(x.reason?'<p>'+e(x.reason)+'</p>':'')+'<div class="actions mvpWrap">'+controls+'</div></article>'}
function askJoin(id){var x=getRelation(id);if(!x||!isLeader(x)||x.status!=='pending'||!x.selfGrant||!x.peerGrant)return;modal('<h2>确认加入队伍？</h2><p>请确认已与对方沟通并达成组队意向。</p><div class="modalFoot">'+btn('取消','closeModal()')+btn('确认加入','finishJoin('+id+',false)','primary')+'</div>')}
function finishJoin(id,simulation){var x=getRelation(id),r=x&&findRecruit(x.recruitId);if(!x||!r||x.status!=='pending'||!x.selfGrant||!x.peerGrant||(!simulation&&!isLeader(x))){toast('当前记录不可确认');return false}if(!openForApply(r)){toast('该岗位已停止招募或名额已满');return false}var duplicate=state.relationships.some(function(y){var rr=findRecruit(y.recruitId);return y.id!==x.id&&y.status==='joined'&&rr&&rr.groupId===r.groupId&&(x.candidateId?y.candidateId===x.candidateId:!y.candidateId)});if(duplicate){toast('该成员已在队伍中');return false}x.status='joined';r.role.formal++;if(!roleFree(r)){r.status='full';state.relationships.forEach(function(y){if(y.recruitId===r.id&&y.status==='pending'){y.status='ended';y.reason='名额已满'}})}persist();closeModal();render();toast('已确认组队');return true}
function simulatePeer(id,kind){var x=getRelation(id);if(!x||x.status!=='pending')return;if(kind==='authorize')x.peerGrant=true;else if(kind==='join'){if(isLeader(x))return;finishJoin(id,true);return}else{x.status='ended';x.reason=x.type==='application'?'申请未通过':'邀请未接受'}persist();render();toast('已模拟对方响应')}
function askEnd(id){var x=getRelation(id);if(!x||x.status!=='pending')return;modal('<h2>结束本次组队记录？</h2><div class="modalFoot">'+btn('取消','closeModal()')+btn('确认结束','finishEnd('+id+')','danger')+'</div>')}
function finishEnd(id){var x=getRelation(id);if(!x||x.status!=='pending')return;x.status='ended';x.reason=isLeader(x)?(x.type==='invitation'?'邀请已撤回':'申请未通过'):x.direction==='outgoing'?'已撤回':'邀请未接受';persist();closeModal();render()}
function renderTeams(){var owned=state.recruits.filter(function(r){return r.leader==='你'&&r.status!=='ended'}),groups=unique(owned.map(function(r){return String(r.groupId)}));var joined=state.relationships.filter(function(x){return x.status==='joined'&&!isLeader(x)});return '<div class="list">'+groups.map(function(g){var rs=owned.filter(function(r){return String(r.groupId)===g}),r=rs[0];return '<section class="panel"><h3>'+e(r.teamName)+'</h3><p>'+e(r.comp)+' · 我是队长</p>'+rs.map(function(rr){return '<div class="mvpCardLine"><span>'+e(rr.role.name)+' · '+displayStatus(rr)+'</span>'+btn('编辑招募','beginPublish('+rr.id+')')+'</div>'}).join('')+'<div class="section"><b>成员</b><p>'+e(state.profile.name)+' · 队长</p>'+state.relationships.filter(function(x){return x.status==='joined'&&rs.some(function(r){return r.id===x.recruitId})}).map(function(x){return '<div class="mvpCardLine"><span>'+e(x.party)+' · '+e(findRecruit(x.recruitId).role.name)+'</span>'+btn('移除成员','askTeamAction("remove",'+x.id+')','text')+'</div>'}).join('')+'</div><div class="actions">'+btn('新增招募岗位','beginPublish(null,'+r.id+')')+btn('解散队伍','askTeamAction("dissolve",'+r.id+')','danger')+'</div></section>'}).join('')+joined.map(function(x){var r=findRecruit(x.recruitId);return '<section class="panel"><h3>'+e(r.teamName)+'</h3><p>'+e(r.comp)+' · '+e(r.role.name)+'</p><div class="actions">'+btn('查看联系方式','showContact('+x.id+')')+btn('退出队伍','askTeamAction("leave",'+x.id+')','danger')+'</div></section>'}).join('')+(!groups.length&&!joined.length?empty('暂无队伍','可以前往寻找页申请加入队伍。'):'')+'</div>'}
function askTeamAction(kind,id){var labels={leave:'退出队伍',remove:'移除成员',dissolve:'解散队伍'};modal('<h2>确认'+labels[kind]+'？</h2><p>'+(kind==='dissolve'?'所有成员关系及待处理申请将结束。':'该成员的组队记录将移至已结束。')+'</p><div class="modalFoot">'+btn('取消','closeModal()')+btn('确认','finishTeamAction('+JSON.stringify(kind)+','+id+')','danger')+'</div>')}
function finishTeamAction(kind,id){if(kind==='dissolve'){var r=findRecruit(id);if(!r||r.leader!=='你')return;var ids=state.recruits.filter(function(g){return g.groupId===r.groupId}).map(function(g){g.status='ended';return g.id});state.relationships.forEach(function(x){if(ids.includes(x.recruitId)&&x.status!=='ended'){if(x.status==='joined')findRecruit(x.recruitId).role.formal=Math.max(0,findRecruit(x.recruitId).role.formal-1);x.status='ended';x.reason='队伍已解散'}})}else{var x=getRelation(id),r=x&&findRecruit(x.recruitId);if(!x||!r||x.status!=='joined'||(kind==='remove'&&!isLeader(x))||(kind==='leave'&&isLeader(x)))return;x.status='ended';x.reason=kind==='leave'?'已退出队伍':'已移出队伍';r.role.formal=Math.max(0,r.role.formal-1);if(r.status==='full')r.status='active'}persist();closeModal();render()}
/* Profile: its public fields are the teammate post. */
function field(id,label,value,type,help){return '<div class="field"><label for="'+id+'">'+e(label)+'</label><input class="input" id="'+id+'" type="'+(type||'text')+'" value="'+e(value)+'"'+(type==='number'?' min="1" step="1"':'')+'>'+(help?'<small class="help">'+e(help)+'</small>':'')+'</div>'}
function textarea(id,label,value,help){return '<div class="field full"><label for="'+id+'">'+e(label)+'</label><textarea class="textarea" id="'+id+'" maxlength="500">'+e(value)+'</textarea>'+(help?'<small class="help">'+e(help)+'</small>':'')+'</div>'}
function renderProfile(p){var u=state.profile;p.innerHTML='<section class="panel"><h2>'+e(u.name)+'</h2><p>'+e(u.grade)+' · '+e(u.major)+'</p><div class="section kv"><div class="k">意向岗位</div><div>'+e(u.roles.join('、'))+'</div><div class="k">能力</div><div class="badges">'+badges(u.skills)+'</div><div class="k">相关经历</div><div>'+e(u.exp)+'</div><div class="k">联系方式</div><div>已填写 · 授权后可见</div></div><div class="actions">'+btn('编辑个人资料',"state.profileReturn='profile';go('profileEdit')",'primary')+btn('修改密码','openChangePassword()')+'</div></section>'+myPost()+'<section class="panel"><h3>意见反馈</h3><p class="help">演示版反馈仅保存在当前浏览器，不会发送给管理员。</p>'+textarea('feedbackText','反馈内容','')+'<div class="actions">'+btn('保存反馈','saveFeedback()','primary')+'</div><div class="section">'+state.feedback.map(function(f){return '<p>'+e(f.text)+'</p>'}).join('')+'</div></section>'}
function splitTags(v){return unique(String(v).split(/[、,，\n]/).map(function(x){return x.trim()}).filter(Boolean))}
function renderProfileEdit(p){var u=state.profile;p.innerHTML='<form class="panel" onsubmit="event.preventDefault();saveProfile()"><div class="formGrid">'+field('profileName','显示名称',u.name)+field('profileGrade','年级',u.grade)+field('profileMajor','专业',u.major)+field('profileRoles','意向岗位',u.roles.join('、'))+field('profileSkills','能力标签',u.skills.join('、'))+field('profileContact','联系方式',u.contact)+textarea('profileExp','相关经历',u.exp)+'</div><label class="consent"><input id="postVisible" type="checkbox" '+(u.visible?'checked':'')+'>在找队友中展示我的帖子</label><div class="actions">'+btn('取消',"go(state.profileReturn||'profile')")+'<button class="btn primary" type="submit">保存</button></div></form>'}
function saveProfile(){var name=byId('profileName').value.trim(),roles=splitTags(byId('profileRoles').value),skills=splitTags(byId('profileSkills').value),contact=byId('profileContact').value.trim();if(!name||!roles.length||!skills.length||!contact){toast('请填写显示名称、意向岗位、能力和联系方式');return}state.profile={name:name,grade:byId('profileGrade').value.trim(),major:byId('profileMajor').value.trim(),roles:roles,skills:skills,contact:contact,exp:byId('profileExp').value.trim(),visible:byId('postVisible').checked};persist();go(state.profileReturn||'profile');toast('个人资料与帖子已同步更新')}
function saveFeedback(){var text=byId('feedbackText').value.trim();if(!text){toast('请填写反馈内容');return}state.feedback.push({id:nextId(),text:text,date:new Date().toISOString()});var ok=persist();render();if(ok)toast('反馈已保存在本机')}
/* Recruitment publishing */
function beginPublish(id,copyFrom){state.publishReturn=state.route==='publish'?state.publishReturn:state.route;state.editing=id||null;state.copyFrom=copyFrom||null;go('publish')}
function publishBase(){return findRecruit(state.editing||state.copyFrom)||{comp:'',teamName:'',title:'',start:today(),end:'',deadline:'',competitionStart:'',competitionEnd:'',role:{name:'',skills:[],task:'',capacity:1}}}

function publishCompetitionSelect(selected){
  var values=unique(seedData.recruits.map(function(r){return r.comp}));
  var categories=[
    {label:"商赛",pattern:/商赛|商[业务]|市场|正大杯|经济|营销|贸易|金融|会计/},
    {label:"电赛",pattern:/电子|电路|电赛|集成电路/},
    {label:"机电结合",pattern:/机电|机器人|智能车|机械|工程训练/},
    {label:"创新创业",pattern:/挑战杯|互联网|创新|创业/},
    {label:"数学建模",pattern:/数学|建模/},
    {label:"其他竞赛",pattern:/.*/}
  ];
  var groups=categories.map(function(c){return {label:c.label,values:[]}});
  values.forEach(function(v){var index=categories.findIndex(function(c){return c.pattern.test(v)});groups[index].values.push(v)});

  return '<div class="field"><label for="pubComp">竞赛名称</label><select class="select" id="pubComp" required><option value="">请选择竞赛</option>'+
    groups.filter(function(g){return g.values.length}).map(function(g){
      return '<optgroup label="'+e(g.label)+'">'+g.values.map(function(v){return '<option value="'+e(v)+'" '+(v===selected?'selected':'')+'>'+e(v)+'</option>'}).join('')+'</optgroup>';
    }).join('')+'</select></div>';
}

function renderPublish(p){var r=publishBase(),copy=!!state.copyFrom;p.innerHTML='<form class="panel mvpPublish" onsubmit="event.preventDefault();saveRecruit()"><div class="formGrid">'+field('pubTitle','招募标题',r.title,'text','简要说明招募方向。')+field('pubTeamName','队伍名称',r.teamName)+publishCompetitionSelect(r.comp)+field('pubStart','项目开始日期',r.start,'date','包括可报名时间在内。')+field('pubEnd','项目结束日期',r.end,'date')+field('pubDeadline','报名截止时间',r.deadline,'datetime-local')+field('pubRole','招募岗位',copy?'':r.role.name)+field('pubSkills','能力要求',copy?'':r.role.skills.join('、'))+field('pubCap','招募人数',copy?1:r.role.capacity,'number')+textarea('pubTask','具体任务',copy?'':r.role.task,'说明该岗位需要完成的具体工作。')+'</div><div class="actions">'+btn('取消',"go(state.publishReturn||'home')")+btn('预览','previewRecruit()')+'<button class="btn primary" type="submit">'+(state.editing?'保存修改':'发布招募')+'</button></div></form>'}
function readPublish(){return {title:byId('pubTitle').value.trim(),teamName:byId('pubTeamName').value.trim(),comp:normalizeCompetitionName(byId('pubComp').value),start:byId('pubStart').value,end:byId('pubEnd').value,deadline:byId('pubDeadline').value,role:{name:byId('pubRole').value.trim(),skills:splitTags(byId('pubSkills').value),capacity:Number(byId('pubCap').value),task:byId('pubTask').value.trim(),formal:0}}}
function validateRecruit(d){if(!d.title||!d.teamName||!d.comp||!d.start||!d.end||!d.deadline||!d.role.name||!d.role.skills.length||!d.role.task)return '请填写全部字段';if(d.title.length>50)return '招募标题请控制在 50 字内';if(!Number.isInteger(d.role.capacity)||d.role.capacity<1)return '招募人数必须为正整数';if(d.start>d.end)return '项目开始日期不能晚于结束日期';if(d.deadline.slice(0,10)<d.start||d.deadline.slice(0,10)>d.end)return '报名截止时间须在项目时间段内';if(new Date(d.deadline).getTime()<=Date.now())return '报名截止时间必须晚于当前时间';return ''}
function previewRecruit(){var d=readPublish(),err=validateRecruit(d);if(err){toast(err);return}modal('<h2>'+e(d.title)+'</h2><p>'+e(d.teamName)+' · '+e(d.comp)+'</p><p>'+e(periodText(d))+'</p><p>'+e(d.role.name)+' · '+d.role.capacity+' 人</p><div class="badges">'+badges(d.role.skills)+'</div><p>'+e(d.role.task)+'</p><div class="modalFoot">'+btn('返回编辑','closeModal()')+'</div>')}
function saveRecruit(){var d=readPublish(),err=validateRecruit(d),old=state.editing&&findRecruit(state.editing);if(err){toast(err);return}if(state.editing&&(!old||old.leader!=='你'||old.status==='ended')){toast('当前招募不可编辑');return}if(old&&d.role.capacity<old.role.formal){toast('招募人数不能小于已加入人数');return}var base=old||(state.copyFrom&&findRecruit(state.copyFrom)),id=old?old.id:nextId();if(state.copyFrom&&(!base||base.leader!=='你'||base.status==='ended')){toast('当前队伍不可新增招募');return}d.id=id;d.groupId=base?base.groupId:id;d.leader='你';d.role.formal=old?old.role.formal:0;d.status=d.role.formal>=d.role.capacity?'full':'active';d.competitionStart=base?base.competitionStart:d.start;d.competitionEnd=base?base.competitionEnd:d.end;if(old)Object.assign(old,d);else state.recruits.push(d);state.recruits.forEach(function(r){if(r.groupId===d.groupId){r.comp=d.comp;r.teamName=d.teamName;r.title=d.title;r.start=d.start;r.end=d.end;r.deadline=d.deadline}});state.relationships.forEach(function(x){if(x.recruitId===id&&x.status==='pending'&&d.status==='full'){x.status='ended';x.reason='名额已满'}});persist();state.view='team';go('progress');toast(old?'修改已保存':'招募已发布')}
document.addEventListener('keydown',function(ev){if(ev.key==='Escape')closeModal()});
var params=new URLSearchParams(window.location.search);if(params.has('recruit')){state.selected=Number(params.get('recruit'));state.route='detail'}
render();
