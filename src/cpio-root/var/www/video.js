var date = deviceTime.split(" ")[0];
var time = deviceTime.split(" ")[1];
var y = date.split("-")[0];
var months = date.split("-")[1]-1;
var d = date.split("-")[2];
var now = new Date(y,months,d,time.split(":")[0],time.split(":")[1],time.split(":")[2]);

function showTime(){
	y = now.getFullYear();
	months = now.getMonth()+1;
	d = now.getDate();
	var h=now.getHours();   
	var m=now.getMinutes();   
	var s=now.getSeconds();   
	if(months<10) months='0'+months;   
	if(d<10) d='0'+d; 
	if(h<10) h='0'+h;    
	if(m<10) m='0'+m;   
	if(s<10) s='0'+s; 
	document.getElementById("deviceTime").value=y+"-"+months+"-"+d+" "+h+":"+m+":"+s;
	s=s+1;
	now.setSeconds(s);
}

// 与电脑时间同步
function saveComputerTime(){
	var today = new Date();
	now=today;
	var yearnow = today.getFullYear();
	var monthnow = today.getMonth();
	var dnow = today.getDate();
	var hnow = today.getHours();
	var mnow = today.getMinutes();
	var snow = today.getSeconds();
	monthnow= monthnow+1;
	if(monthnow<10){
		monthnow="0"+monthnow;
	}
	if(dnow<10){
		dnow="0"+dnow;
	}
	if(hnow<10){
		hnow="0"+hnow;
	}
	if(mnow<10){
		mnow="0"+mnow;
	}
	if(snow<10){
		snow="0"+snow;
	}
	var dateTimeNow=yearnow + "-" + monthnow + "-"+ dnow + " " + hnow + ":" + mnow + ":" + snow;
	setVideoParamValue("TIME="+dateTimeNow);
}
// 保存时间
function saveTime(){
	var adjustTimeValue=document.getElementById("adjustTime").value;
	var _reTimeReg = /^[1-9][0-9]{3}-(0?[1-9]|1[0|1|2])-(0?[1-9]|[1|2][0-9]|3[0|1]) (0?[1-9]|1[0-9]|2[0-3]):(0?[0-9]|[1|2|3|4|5][0-9]):(0?[0-9]|[1|2|3|4|5][0-9])$/;  
	if(_reTimeReg.test(adjustTimeValue)){
		setVideoParamValue("TIME="+adjustTimeValue);
	}else{
		alert("日期时间格式错误，格式为：yyyy-mm-dd HH:MM:SS");
	}
}

// 取得视频设置
function getAllVideoSetting(){
	var resolutionValue=document.getElementById("RESOLUTION").value;
	var timestampValue=document.getElementById("TIMESTAMP").value;
	var voiceValue=document.getElementById("VOICE").value;
	var recTimeValue=document.getElementById("REC_TIME").value;
	var brightnessValue=document.getElementById("BRIGHTNESS").value;
	var hueValue=document.getElementById("HUE").value;
	var contrastValue=document.getElementById("CONTRAST").value;
	return "IP="+ip+"&RESOLUTION="+resolutionValue+"&TIMESTAMP="+timestampValue+"&VOICE="+voiceValue+"&REC_TIME="+recTimeValue+"&BRIGHTNESS="+brightnessValue+"&HUE="+hueValue+"&CONTRAST="+contrastValue;
}

// 向控件传参数
function setVideoParamValue(paramValue){
	ipcamera.setParameter(paramValue);
}
// 拍照
function doCapture(){
	var r1=document.getElementById("NOR_RECORDStatus").value;
	var r2=document.getElementById("ROT_RECORDStatus").value;
	if(r1=="1" || r2=="1"){
		alert("录像正在进行中，请先停止录像！");
	}else{
		setVideoParamValue("CAPTURE=1");
	}
}
// 录像
function doVideoRecord(rType,rObject){
	var r1=document.getElementById("NOR_RECORDStatus");
	var r2=document.getElementById("ROT_RECORDStatus");
	if(rType=="NOR_RECORD"){
		if(rObject.value=="普通录像"){
			if(r2.value=="1"){
				alert("请先停止循环录像！");
				return false;
			}else{
				setVideoParamValue("NOR_RECORD=1");
				r1.value="1";
				rObject.value="停止普通录像";
			}
		}else{
			setVideoParamValue("NOR_RECORD=0");
			r1.value="0";
			rObject.value="普通录像";

		}
	}else if(rType="ROT_RECORD"){
		if(rObject.value=="循环录像"){
			if(r1.value=="1"){
				alert("请先停止普通录像！");
				return false;
			}else{
				setVideoParamValue("ROT_RECORD=1");
				r2.value="1";
				rObject.value="停止循环录像";
			}
		}else{
			setVideoParamValue("ROT_RECORD=0");
			r2.value="0";
			rObject.value="循环录像";
		}
	}
}

// 设置视频参数改变
function doChangeVideoParam(vObject){
	setVideoParamValue(vObject.name+"="+vObject.value);
}