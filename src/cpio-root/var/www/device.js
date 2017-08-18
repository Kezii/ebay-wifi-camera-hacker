var video_c=0;
var videotmp=0;
var lang_c=0;
var wifi_c=0;
var name_c=0;
var pawd_c=0;
function showSecurity()
{
	var mesW=document.createElement("div");
	mesW.id="mesWindow";
	mesW.className="mesWindow";	
	
	var s1="<table BORDER=\"0\" CELLPADDING=\"0\" CELLSPACING=\"0\" class=\"mesWindowContent\" > \
	<tr><td class=\"comWinHeader\">"+document.form.str_wifi.value+"</td></tr> \
		<tr><td class=\"comWinContent\" id=\"security0\" onclick=\"comMouseClick('security','0')\">"+document.form.str_none.value+"</td></tr> \
		<tr><td class=\"divide420\"></td></tr> \
		<tr><td class=\"comWinContent\" id=\"security1\" onclick=\"comMouseClick('security','1')\">"+document.form.str_wep.value+"</td></tr> \
		<tr><td class=\"divide420\"></td></tr> \
		<tr><td class=\"comWinContent\" id=\"security2\" onclick=\"comMouseClick('security','2')\">"+document.form.str_wpa.value+"</td></tr> \
		<tr><td class=\"comWinBottom\" align=\"center\"><input value=\""+document.form.str_done.value+"\" class=\"btntext\" type=\"button\" onclick=\"securityDone()\"></td></tr></table>";	

	mesW.innerHTML=s1;
	styleStr="left:px;top:0px;position:absolute;width:480px;height:820px";
	mesW.style.cssText=styleStr;
	document.body.appendChild(mesW);
}
function showVideoOption()
{
	var mesW=document.createElement("div");
	mesW.id="mesWindow";
	mesW.className="mesWindow";	
	
	var s1="<table BORDER=\"0\" CELLPADDING=\"0\" CELLSPACING=\"0\" class=\"mesWindowContent\" > \
	<tr><td class=\"comWinHeader\">"+document.form.str_video_output.value+"</td></tr> \
		<tr><td class=\"comWinContent\" id=\"video0\" onclick=\"comMouseClick('video','0')\">"+document.form.str_auto.value+"</td></tr> \
		<tr><td class=\"divide420\"></td></tr> \
		<tr><td class=\"comWinContent\" id=\"video1\" onclick=\"comMouseClick('video','1')\">480P</td></tr> \
		<tr><td class=\"divide420\"></td></tr> \
		<tr><td class=\"comWinContent\" id=\"video2\" onclick=\"comMouseClick('video','2')\">720P</td></tr> \
		<tr><td class=\"comWinBottom\" align=\"center\"><input value=\""+document.form.str_done.value+"\" class=\"btntext\" type=\"button\" onclick=\"videoDone()\"></td></tr></table>";	

	mesW.innerHTML=s1;
	styleStr="left:0px;top:0px;position:absolute;width:480px;height:980px";
	mesW.style.cssText=styleStr;
	document.body.appendChild(mesW);
	
	
	videotmp = document.form.HDMI.value;
}
function showKeyOption()
{
	var mesW=document.createElement("div");
	mesW.id="mesWindow";
	mesW.className="mesWindow";	
	
	var s1="<table BORDER=\"0\" CELLPADDING=\"0\" CELLSPACING=\"0\" class=\"mesWindowContent\" > \
	<tr><td class=\"comWinHeader\">"+document.form.str_wifi.value+"</td></tr> \
		<tr><td class=\"comWinContent\" id=\"key0\" onclick=\"KeyMouseClick('key','0','1')\">1</td></tr> \
		<tr><td class=\"divide420\"></td></tr> \
		<tr><td class=\"comWinContent\" id=\"key1\" onclick=\"KeyMouseClick('key','1','2')\">2</td></tr> \
		<tr><td class=\"divide420\"></td></tr> \
		<tr><td class=\"comWinContent\" id=\"key2\" onclick=\"KeyMouseClick('key','2','3')\">3</td></tr> \
		<tr><td class=\"divide420\"></td></tr> \
		<tr><td class=\"comWinContent\" id=\"key3\" onclick=\"KeyMouseClick('key','3','4')\">4</td></tr> \
		<tr><td class=\"comWinBottom\" align=\"center\"><input value=\""+document.form.str_done.value+"\" class=\"btntext\" type=\"button\" onclick=\"closeWindow()\"></td></tr></table>";	

	mesW.innerHTML=s1;
	styleStr="left:px;top:0px;position:absolute;width:480px;height:820px";
	mesW.style.cssText=styleStr;
	document.body.appendChild(mesW);
}

function showDevWifiEdit()
{
	document.form.mode.value="ShowDevWifiEdit";
}
function showAddWifi()
{
	document.form.mode.value="ShowDevAddWifi";
	document.getElementById("myForm").submit();
	
}


function showWifiSetting(ssid,security)
{
	var mesW=document.createElement("div");
	mesW.id="mesWindow";
	mesW.className="mesWindow";	
	var wepd='none';
	var wpad='none';
	var security_str=document.form.str_none.value;//'None';
	
	if(security==1)
	{
		wepd='block';
		security_str =document.form.str_wep.value;//'WEP';
	}
	else if(security==2)
	{
		wpad='block';
		security_str =document.form.str_wpa.value;//'WPA/WPA2 PSK';
	}
	var s1="<table BORDER=\"0\" CELLPADDING=\"0\" CELLSPACING=\"0\" class=\"mesWindowContent\"  > \
	<tr><td class=\"comWinHeader\">"+document.form.str_wifi.value+"</td></tr> \
		<tr><td class=\"p_wifitxt\" >"+document.form.str_networkssid.value+"</td></tr> \
		<tr><td class=\"p_wifitxt\" ><input maxlength=\"32\" name=\"ssid\" id=\"set_ssid\" value=\""+ssid+"\" class=\"p_inputtxt\" type=\"text\" disabled> \
        <tr><td class=\"p_wifitxt\" >"+document.form.str_security.value+"</td></tr> \
		<tr><td class=\"p_wifitxt\" ><input maxlength=\"32\" value=\""+security_str+"\" name=\"security\" class=\"p_pulldown\" type=\"button\" id=\"security_id\" disabled></td></tr> \
		<tr><td><div id=\"wep\" style=\"display:"+wepd+"\"><table BORDER=\"0\" CELLPADDING=\"0\" CELLSPACING=\"0\" > \
		<tr><td class=\"p_wifitxt\" >"+document.form.str_keyindex.value+"</td></tr> \
		<tr><td class=\"p_wifitxt\"  ><input maxlength=\"32\" value=\"1\" name=\"key\" id=\"key_id\" class=\"p_pulldown\" type=\"button\" > \
		<tr><td class=\"p_wifitxt\" >"+document.form.str_wephex.value+"</td></tr> \
		<tr><td class=\"p_wifitxt\" ><input maxlength=\"32\" name=\"wepkey\" id=\"set_wepkey\" class=\"p_inputtxt\" type=\"text\"> \
		</table></div></td></td> \
		<tr><td ><div id=\"wpa\" style=\"display:"+wpad+"\"><table BORDER=\"0\" CELLPADDING=\"0\" CELLSPACING=\"0\"> \
		<tr><td class=\"p_wifitxt\" >"+document.form.str_wpa.value+"</td></tr> \
		<tr><td class=\"p_wifitxt\" ><input maxlength=\"32\" name=\"twpapw\" id=\"set_wpapw\" class=\"p_inputtxt\" type=\"text\"> \
		</table></div></td></td> \
		<tr><td id=\"space\" style=\"height:10px\" class=\"p_wifitxt\"></td></td> \
		<tr><td class=\"comWinBottom\" align=\"center\"> \
		<input value=\""+document.form.str_cancel.value+"\" class=\"p_btntext\" type=\"button\" onclick=\"closeWindow();\"> \
		<input value=\""+document.form.str_done.value+"\" class=\"p_btntext\" type=\"button\" onclick=\"SettingAPDone()\"></td></tr></table> \
		<input value=\"0\" id=\"set_keyindex\" type=\"hidden\"> \
		<input value=\""+security+"\" id=\"set_security\" type=\"hidden\">";

	mesW.innerHTML=s1;
	styleStr="left:px;top:0px;position:absolute;width:480px;height:1000px";
	mesW.style.cssText=styleStr;
	document.body.appendChild(mesW);

}
function closeWindow()
{
	if(document.getElementById('mesWindow')!=null)
	{
		document.getElementById('mesWindow').parentNode.removeChild(document.getElementById('mesWindow'));
	}
}

function LanguageSave()
{
	//var selObj = document.getElementById('lang_id');
	//var selIndex = selObj.selectedIndex;
	//document.form.Lang.value = selObj.options[selIndex].value;
	document.form.mode.value="LanguageSave";
	//showSettingLanguage();
}
function WifiSave()
{
	document.form.mode.value="WifiSave";
	document.getElementById("myForm").submit();
	//document.form.wifi_index.value=document.getElementById("wifi_id").selectedIndex ;	
}
function VideoSave()
{
	document.form.mode.value="VideoSave";

}
function NameSave()
{
	var s = document.form.tube_name.value;
	if(isCharNumber(s))
	{
		document.form.mode.value="NameSave";
		document.getElementById("myForm").submit();
	}
	else
		document.form.mode.value="NameError";
}
function PasswordSave()
{
	if(document.form.tube_password.value!=document.form.tube_password1.value || document.form.tube_password.value.length<8)
	{
		alert(document.form.str_error_password_length.value);
		document.form.mode.value="PasswordError";
	}
	else
	{
		document.form.mode.value="PasswordSave";
		document.getElementById("myForm").submit();
	}
}
function DeviceSave()
{
	var s = document.form.tube_name.value;

	//var x=document.getElementById("wifi_id");
	//var ssid = getSelSSID(x.options[x.selectedIndex].text);
	var ssid = document.getElementById("wifi_in").value;

	if( s!=ssid && document.form.tube_password.value.length > 0)
	{
		if(!isCharNumber(s))
		{
			document.form.mode.value="DeviceError";
			return;
		}

		if(document.form.tube_password.value!=document.form.tube_password1.value || document.form.tube_password.value.length<8 )
		{
			alert(document.form.str_error_password_length.value);
			document.form.mode.value="DeviceError";
		}
		else
		{
			document.form.mode.value="DeviceSave";
			document.getElementById("myForm").submit();
		}
	}
	else if(s!=ssid && document.form.tube_password.value.length < 1)
	{
		NameSave();
	}
	else if(s==ssid && document.form.tube_password.value.length > 0)
		PasswordSave();

}
function isCharNumber(s)
{
  	var space=0;
	for( var loc=0; loc<s.length; loc++ )
	{
		if(s.charAt(loc)==' ')
		{
			space++;
			continue;
		}

		for( var loc=0; loc<s.length; loc++ )
		{
			if(s.charAt(loc)==' ')
			{
				space++;
				continue;
			}
			if(loc==0 )
			if((s.charAt(loc) == '!') || (s.charAt(loc) == '#')|| (s.charAt(loc) == ';'))
			{
				alert(document.form.str_error_input.value);
				return false;
			}


			if( (s.charAt(loc) < ' ') || (s.charAt(loc) > '~') || (s.charAt(loc) == '\\') ||
			(s.charAt(loc) == '?') || (s.charAt(loc) == '"') ||
			(s.charAt(loc) == '$') || (s.charAt(loc) == '[') ||
			(s.charAt(loc) == ']') || (s.charAt(loc) == '+'))
			{
				alert(document.form.str_error_input.value);
				return false;
			}

		}

	}
	if(s.length<1 || space==s.length)
	{
		alert(document.form.str_error_name_empty.value);
		return false;
	}

	//alert(s+" "+ s.length+space);
	return true;
}

function checkSave()
{
	if(document.form.mode.value=="PasswordSave")
		PasswordSave();
	else if(document.form.mode.value=="NameSave")
		NameSave();
	else if(document.form.mode.value=="LanguageSave")
		LanguageSave();
	else if(document.form.mode.value=="VideoSave")
		VideoSave();
}
function setSave(type)
{
	document.form.mode.value=type;
}
function securityDone()
{
	wifi_setDiv();
	closeWindow();

}
function videoDone()
{	
	if(videotmp!=document.form.HDMI.value)
	{
		if(document.getElementById('savebtn').disabled)
			document.getElementById('savebtn').disabled = false;
		video_c = 1;		
	}
else
		video_c = 0;
	closeWindow();
}

function wifi_setDiv()
{		
	//alert(document.form.tube_security.value);
	//document.form.tube_security.value=1;
	if(document.form.tube_security.value=='0')
	{
		document.getElementById('wep').style.display ='none';
		document.getElementById('wpa').style.display ='none';
		document.getElementById('space').style.height="303px";
	}
	else if(document.form.tube_security.value=='1')
	{
		document.getElementById('wep').style.display ='block';
		document.getElementById('wpa').style.display ='none';
		document.getElementById('space').style.height="140px";
	}
	else if(document.form.tube_security.value=='2')
	{
		document.getElementById('wep').style.display ='none';
		document.getElementById('wpa').style.display ='block';
		document.getElementById('space').style.height="218px";
	}
	else
	{
		document.getElementById('wep').style.display ='none';
		document.getElementById('wpa').style.display ='none';
		document.getElementById('space').style.height="303px";
		
	}
	
}

function comMouseClick(id,i)
{
	var it=id+i;
	var it1=id+'1';
	var it2=id+'2';
	var value;
	document.getElementById(it).style.background="url(../images/pulldown_content_sel.png)";
	if(i=='0')
	{
		it1=id+'1';
		it2=id+'2';
		value= id=='video'? document.form.str_auto.value:document.form.str_none.value;
	}
	else if(i=='1')
	{
		it1=id+'0';
		it2=id+'2';
		value= id=='video'?'480P':document.form.str_wep.value;
	}
	else if(i=='2')
	{
		it1=id+'0';
		it2=id+'1';
		value= id=='video'?'720P':document.form.str_wpa.value;
	}
	document.getElementById(it1).style.background="url(../images/pulldown_content.png)";
	document.getElementById( it2).style.background="url(../images/pulldown_content.png)";
	
	if(id=='video')
	{		
		document.getElementById('hdmi_in').value= value;
		document.getElementById('hdmi_in').innerHTML=value;
		document.form.HDMI.value = i;
	}
	else if(id=='security')
	{
		document.getElementById('security_id').value= value;
		//document.getElementById('security_id').innerHTML= value;
		document.form.tube_security.value=i;
	
	}
}
function KeyMouseClick(id,i,value)
{
	var it;
	var sel = id+i;
	
	for(x=0;x<4;x++)
	{
		it=id+x;
		document.getElementById(it).style.background="url(../images/pulldown_content.png)";
	}
	document.getElementById(sel).style.background="url(../images/pulldown_content_sel.png)";
	document.getElementById('key_id').value= value;
	document.form.tube_keyindex.value=i;
}
function listMouseMove(id,count,i)
{
	var it;
	var sel = id+i;
	var sub_sel = 'sub'+i;
	var list;
	var listsel;
	var sub_it;
	if(id=='lang')
	{
		list="list";
		listsel="list_sel";
	}
	else 
	{
		list="wlist";
		listsel="wlist_sel";
		
	}
	/*for(x=0;x<count;x++)
	{
		it=id+x;
		sub_it='sub'+x;
		document.getElementById(it).className=list;
		if(id=='wifi')
		{
			if(x==i)	
				document.getElementById(sub_sel).className='substr_sel';	
			
			else			
				document.getElementById(sub_it).className='substr';		
		
		}
	}*/
	document.getElementById(sel).className=listsel;
	if(document.getElementById(sub_it)!=null)
		document.getElementById(sub_it).className='substr';
	
	
}
function langClick(item,index,i)
{
	var sel = 'lang'+i;
	document.getElementById(sel).className="list_sel";
	document.getElementById('lang_in').value=item;
	document.getElementById('lang_in').innerHTML=item;
	
	if(document.form.lang.value!=index)
	{
		if(document.getElementById('savebtn').disabled)
			document.getElementById('savebtn').disabled = false;
		lang_c=1;
	}
	else
		lang_c=0;
	
	document.form.lang.value = index;
	//closeWindow();
	timer = setTimeout(function(){closeWindow();},0.2*1000);
}

function wifiClick(ssid,index,security,nid)
{	
	var sel = 'wifi'+index;
	var sub_sel='sub'+index;
	if(document.getElementById(sel)!=null && document.getElementById(sub_sel)!=null)
	{
		document.getElementById(sel).className="wlist_sel";
		document.getElementById(sub_sel).className='substr_sel';
	}
	if(document.getElementById('wifi_in').value!=ssid)
	{
		if(document.getElementById('savebtn').disabled)
			document.getElementById('savebtn').disabled = false;
		wifi_c=1;
	}
	else
		wifi_c=0;
	
	
	document.getElementById('wifi_in').value=ssid;
	document.getElementById('wifi_in').innerHTML=ssid;
	
	document.form.wifi_index.value = index;
	document.form.wifi_ssid.value = ssid;
	document.form.wifi_security.value = security;
	document.form.wifi_nid.value = nid;
	
	
	if(index!=-1)
	{
		var sub_wifid="sub"+index;
		if(document.getElementById(sub_wifid)!=null)
			var str = document.getElementById(sub_wifid).innerHTML ;
		//	alert(str);
		
		//closeWindow();
		timer = setTimeout(function(){closeWindow();},0.2*1000);	
		if(str.search(document.form.str_disabled.value)==-1 && str.search(document.form.str_remembered.value)==-1 && str.search(document.form.str_connected.value)==-1&& index!=0 && str.search("EAP")==-1)
		if(nid==-1 &&  index!=0)
			timer = setTimeout(function(){showWifiSetting(ssid,security);},0.2*1000);
		
			
		if(str.search(document.form.str_disabled.value)!=-1 ||str.search(document.form.str_remembered.value)!=-1 ||str.search(document.form.str_not_in_rage.value)!=-1 && str.search("EAP")==-1 || index==-1)
		{
			//document.getElementById('editbtn').disabled=false;
			//alert(str.search(document.form.str_remembered.value));	
		}
	}
	
	
	if(document.getElementById(sel)!=null && document.getElementById(sub_sel)!=null)
	{
		document.getElementById(sel).className="wlist_sel";
		document.getElementById(sub_sel).className='substr_sel';
		//alert(sub_sel);
	}
	
}
function SettingAPDone()
{
	if(document.getElementById('mesWindow')!=null)
	{
		//String tube_ssid,String tube_security,String tube_keyindex,String tube_wepkey,String tube_wpapw)
		document.form.tube_ssid.value= document.getElementById('set_ssid').value;
		document.form.tube_security.value= document.getElementById('set_security').value;
		document.form.tube_keyindex.value= document.getElementById('set_keyindex').value;
		document.form.tube_wepkey.value=document.getElementById('set_wepkey').value;
		document.form.tube_wpapw.value=document.getElementById('set_wpapw').value;


		//if((document.form.tube_security.value==1 && document.form.tube_wepkey.value.length<8)||
		if((document.form.tube_security.value==2 && document.form.tube_wpapw.value.length<8 ))
		{
			alert(document.form.str_error_input.value+' '+document.form.str_error_password_length.value);
			return;
		}
		document.getElementById('mesWindow').parentNode.removeChild(document.getElementById('mesWindow'));
		//document.form.wifi_index.value=document.getElementById("wifi_id").selectedIndex ;
		/*if(document.form.apmode.value==0)
			document.form.mode.value="SettingAP";
		else
			document.form.mode.value="AddWifiDone";*/
		document.form.mode.value="AddWifiDone";
		document.getElementById("myForm").submit();
	}

	//location.href="/Settings";

}
function SaveEditWifi()
{
	document.form.mode.value="SettingAP";
	document.getElementById("myForm").submit();	
}
function SaveAddWifi()
{
	document.form.mode.value="AddWifiDone";
	document.getElementById("myForm").submit();	
}
function ForgetAP()
{
	document.form.mode.value="ForgetAP";
	document.getElementById("myForm").submit();
}
function checkPop()
{
	if(document.getElementById('mesWindow')!=null)
	{	
		document.getElementById('tube_name').disabled=true;
		document.getElementById('tube_password').disabled=true;
		document.getElementById('tube_password1').disabled=true;
		document.getElementById('lang_in').disabled=true;
		document.getElementById('hdmi_in').disabled=true;
		document.getElementById('mac').disabled=true;
		document.getElementById('wifi_in').disabled=true;
		//document.getElementById('editbtn').disabled=true;
		document.getElementById('savebtn').disabled=true;
		
	}
	else 
	{	
		
		document.getElementById('tube_name').disabled=false;
		document.getElementById('tube_password').disabled=false;
		document.getElementById('tube_password1').disabled=false;
		document.getElementById('lang_in').disabled=false;
		document.getElementById('hdmi_in').disabled=false;
		document.getElementById('mac').disabled=false;
		document.getElementById('wifi_in').disabled=false;
		//document.getElementById('editbtn').disabled=false;
		document.getElementById('savebtn').disabled=false;
		
	}
}	
function checkName()
{
	var s = document.form.tube_name.value;
	if(isCharNumber(s))
	{	
		if(document.getElementById('savebtn').disabled)
			document.getElementById('savebtn').disabled = false;
		name_c=1;
		return true;
	}
	name_c=0;
	return false;
}
function checkPassword()
{
	if(document.form.tube_password.value.length<8)
	{
		alert(document.form.str_error_password_length.value);
		pawd_c=0;
		return false;
		//document.form.mode.value="PasswordError";
	}
	else if(document.form.tube_password.value!=document.form.tube_password1.value)
	{
		alert(document.form.str_error_input.value);
		pawd_c=0;
		return false;
	}
	else
	{
		if(document.getElementById('savebtn').disabled)
			document.getElementById('savebtn').disabled = false;
			
		pawd_c=1;
		return true;
	}
}
function DeviceAllSave()
{
	if(name_c==0)
	{
		document.form.tube_name.value = "";	
	}
	if(pawd_c==0)
	{
		document.form.tube_password.value="";
		document.form.tube_password1.value="";
	}

	if(video_c==0)
		document.form.HDMI.value = "";
	if(lang_c==0)
		document.form.lang.value = "";
	if(wifi_c==0)
	{
		document.form.wifi_index.value="";
		document.form.wifi_ssid.value="";
		document.form.wifi_security.value="";
		document.form.wifi_nid.value="";
	}
	document.form.mode.value="DeviceAllSave";
	//showSetupMsg();
	document.getElementById("myForm").submit();
}
function showSetupMsg(title,msg)
{
	var mesW=document.createElement("div");
	mesW.id="mesWindow";
	mesW.className="mesWindow";	
	
	var s1="<table BORDER=\"0\" CELLPADDING=\"0\" CELLSPACING=\"0\" class=\"mesWindowContent\" > \
	<tr><td class=\"MsgHeader\">"+title+"</td></tr> \
		<tr><td class=\"MsgContent\" >"+msg+"</td></tr> \
		<tr><td class=\"comWinBottom\" align=\"center\"><input value=\""+document.form.str_done.value+"\" class=\"btntext\" type=\"button\" onclick=\"closeWindow()\"></td></tr></table>";

	mesW.innerHTML=s1;
	styleStr="left:0px;top:0px;position:absolute;width:480px;height:980px";
	mesW.style.cssText=styleStr;
	document.body.appendChild(mesW);
}
