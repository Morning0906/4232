function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [hour, minute];

  // return [ month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

// 日期格式化
function formatDate2() {
  var date = new Date();
  var year = date.getFullYear()
  var month = date.getMonth()+1
  var day = date.getDate()
  var nowYear = (new Date()).getFullYear();
  var nowMonth = (new Date()).getMonth() + 1;
 

  return year + '-' + month + '-' + day;

  // return [ month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function halfHour() {
  let timeArr = [];
  for (let i = 0; i <= 48; i++) {
    if (i % 2 == 0) {
      timeArr.push(formatNumber(i / 2) + ':00');
    } else {
      timeArr.push(formatNumber(Math.floor(i / 2)) + ":30")
    }
  }
  return timeArr;
}
let timeArr = halfHour();

function setTimeHalf() {
  var thisDate = new Date(), thisTime = formatTime(thisDate), lastTimeArr = [], index = 0;

  timeArr.map(function (t, i) {
    let tArr = t.split(":");
    if (thisTime[0] >= Number(tArr[0])) {
      index = thisTime[1] <= 30 ? i : i + 1;
    }
  })
  lastTimeArr = timeArr.slice(index);
  if (thisTime[1] !== 0 && thisTime[1] !== 30) {
    lastTimeArr.unshift(thisTime[0] + ":" + formatNumber(thisTime[1]));
  }
  return lastTimeArr;
}
var sortBy = function (arr, prop, desc) {
  var props = [],
    ret = [],
    i = 0,
    len = arr.length;
  if (typeof prop == 'string') {
    for (; i < len; i++) {
      var oI = arr[i];
      (props[i] = new String(oI && oI[prop] || ''))._obj = oI;
    }
  } else if (typeof prop == 'function') {
    for (; i < len; i++) {
      var oI = arr[i];
      (props[i] = new String(oI && prop(oI) || ''))._obj = oI;
    }
  } else {
    throw '参数类型错误';
  }
  props.sort();
  for (i = 0; i < len; i++) {
    ret[i] = props[i]._obj;
  }
  if (desc) ret.reverse();
  return ret;
};













function formatDate(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var nowYear = (new Date()).getFullYear();
  var nowMonth = (new Date()).getMonth() + 1;
  if (year == nowYear || (year - nowYear == 1 && nowMonth > month)) {
    return month + "月" + day + "日"
  } else {
    return year + "年" + month + "月" + day + "日"
  }
}

function daysLeft(d) {
  var now = new Date()
  return Math.ceil((d.getTime() - now.getTime()) / 1000.0 / 3600 / 24)
}

function generateNewId() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return (S4() + S4() + "" + S4() + "" + S4())
}

function deleteEventById(eventId) {
  var myEvents = getMyEvents();
  var newEvents = []
  for (var i = 0; i < myEvents.length; i++) {
    if (myEvents[i].id != eventId) {
      newEvents.push(myEvents[i])
    }
  }
  updateMyEvents(newEvents)
}
function saveEventToStoreage(newEvent) {
  console.log("saveEventToStoreage() ... " + newEvent.id)
  if (newEvent.id == null) {
    newEvent.id = generateNewId()
  }
  var myEvents = getMyEvents();
  var found = false
  for (var i = 0; i < myEvents.length; i++) {
    if (myEvents[i].id == newEvent.id) {
      myEvents[i] = newEvent
      found = true
      break
    }
  }
  if (!found) {
    myEvents.push(newEvent)
  }
  updateMyEvents(myEvents)
}
function updateMyEvents(newEvents) {
  getApp().globalData.myEvents = newEvents
  wx.setStorageSync('myevents', newEvents)
}
function getMyEvents() {
  var app = getApp()
  if (app.globalData && app.globalData.myEvents) {
    return app.globalData.myEvents
  }
  //调用API从本地缓存中获取数据
  var myEvents = wx.getStorageSync('myevents') || []
  var newEvents = []
  var now = new Date().getTime()
  for (var i = 0; i < myEvents.length; i++) {
    var event = myEvents[i]
    if (event.d > now) {
      newEvents.push(event)
    }
  }
  if (newEvents.length < myEvents.length) {
    //清除了一部分过期数据
    //wx.setStorageSync("myevents", newEvents)
  }
  app.globalData.myEvents = newEvents
  return newEvents
}




module.exports = {
  formatDate: formatDate,
  daysLeft: daysLeft,
  generateNewId: generateNewId,
  updateMyEvents: updateMyEvents,
  getMyEvents: getMyEvents,
  saveEventToStoreage: saveEventToStoreage,
  deleteEventById: deleteEventById,
  formatTime: formatTime,
  setTimeHalf: setTimeHalf,
  sortBy: sortBy,
  formatDate2: formatDate2,
  halfHour: halfHour,
  formatNumber: formatNumber
}
