function showAddWifi()
{
	var mesW=document.createElement("div");
	mesW.id="mesWindow";
	mesW.className="mesWindow";

	var winW = 960;

	if (parseInt(navigator.appVersion)>3) {
 		if (navigator.appName=="Netscape") {
  		winW = window.innerWidth;
 		}
 		if (navigator.appName.indexOf("Microsoft")!=-1 || navigator.appName.indexOf("Opera")!=-1) {
  		winW = document.body.offsetWidth -30;
 		}
	}

	if (winW < 960) {
		winW = 960;
	}


	mesW.innerHTML="<br><br><br><br><br><br> \
	<table  border=\"0\" width=\"384\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" style=\"font-family:Arial;\"> \
	<tr><td height=\"46\" background=\"../images/addwifi_01.png\"><font color=\"#ffffff\" valign=\"top\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+document.form.str_add_wifi_network.value+"</font></td></tr> \
	<tr><td height=\"269\" background=\"../images/addwifi_02.png\" align=\"center\"> \
		<table> \
		<tr><td width=\"70\">&nbsp;</td> \
			<td width=\"220\" class=\"mesWindowContent\">"+document.form.str_networkssid.value+"<br> \
			<input type=\"text\" maxlength=\"64\" name=\"SSID\" id=\"add_ssid\" class=\"inputtxt\" > \
			<br>"+document.form.str_security.value+"<br> \
			<input value=\""+document.form.str_none.value+"\" onclick=\"hide_id('security_d')\" id=\"security_in\"  class=\"text14\" style=\"text-align:left;border: 0px none ; background: transparent url(../images/input/common_panel_drop.png) repeat scroll 0%; width: 217px; height: 23px;\" type=\"button\"> \
			<input value=\"0\" id=\"add_security\" type=\"hidden\"> \
			<td width=\"70\">&nbsp;</td> </tr> </table> \
			<ul class=\"sec_css\" id=\"security_d\"><li ><!--[if lte IE 6]><a href=\"#\"><table><tr><td><![endif]--> \
	        <dd id=\"security_d0\" onclick=\"select_id('security_d','"+document.form.str_none.value+"','0')\" class=\"first\" ><a href=\"#\">"+document.form.str_none.value+"</a></dd> \
            <dd id=\"security_d1\" onclick=\"select_id('security_d','"+document.form.str_wep.value+"','1')\" class=\"mid\"  ><a href=\"#\">"+document.form.str_wep.value+"</a></dd> \
            <dd id=\"security_d2\" onclick=\"select_id('security_d','"+document.form.str_wpa.value+"','2')\" class=\"last\" ><a href=\"#\">"+document.form.str_wpa.value+"</a></dd> \
    	<!--[if lte IE 6]></td></tr></table></a><![endif]--></li></ul> \
		<DIV id=\"wep\" > \
		<table > \
		<tr ><td class=\"mesWindowContent\"> \
			"+document.form.str_keyindex.value+"<br> \
				<input value=\"1\" onclick=\"hide_id('key_d')\" id=\"key_in\"  class=\"text14\" style=\"text-align:left;border: 0px none ; background: transparent url(../images/input/common_panel_drop.png) repeat scroll 0%; width: 217px; height: 23px;\" type=\"button\"> \
				<br>"+document.form.str_wephex.value+"<br><input type=\"text\" maxlength=\"64\" id=\"add_wepkey\"name=\"WEPhex\" class=\"inputtxt\" ></td> </tr> </table></DIV>\
				<input value=\"0\" id=\"add_keyindex\" type=\"hidden\"> \
				<ul class=\"key_css\" id=\"key_d\"><li ><!--[if lte IE 6]><a href=\"#\"><table><tr><td><![endif]--> \
		        <dd id=\"key_d0\" onclick=\"select_id('key_d','1','0')\" class=\"first\" ><a href=\"#\">1</a></dd> \
	            <dd id=\"key_d1\" onclick=\"select_id('key_d','2','1')\" class=\"mid\"  ><a href=\"#\">2</a></dd> \
	            <dd id=\"key_d2\" onclick=\"select_id('key_d','3','2')\" class=\"mid\"  ><a href=\"#\">3</a></dd> \
	            <dd id=\"key_d3\" onclick=\"select_id('key_d','4','3')\" class=\"last\" ><a href=\"#\">4</a></dd> \
	          	<!--[if lte IE 6]></td></tr></table></a><![endif]--></li></ul> \
	  	<DIV id= \"wpapsk\" > \
		<table > \
		<tr ><td class=\"mesWindowContent\"> \
		"+document.form.str_wirelesspassword.value+"<br> \
		<input type=\"text\" class=\"inputtxt\" maxlength=\"64\" name=\"WPApassword\" id=\"add_wpapw\" ></td></tr> </table></DIV></td></tr>\
		<tr><td background=\"../images/addwifi_03.png\" align=\"center\" height=\"55\"> \
			<input type=\"button\" value="+document.form.str_back.value+" onclick=\"closeWindow()\" style=\"width:149px;font-family:Arial;height:28px;border:0px;font-weight: bold;color: #FFFFFF; background: url(../images/button/common_bk_button_wide_rest.png);\" >&nbsp;&nbsp; \
			<input type=\"button\" value="+document.form.str_done.value+" onclick=\"AddWifiDone()\" style=\"width:149px;font-family:Arial;height:28px;border:0px;font-weight: bold;color: #FFFFFF; background: url(../images/button/common_gn_button_medium_rest.png);\" > </td></tr></table>";


	styleStr="left:0px;top:82px;position:absolute;width:" + winW + "px;height:620px;";
	mesW.style.cssText=styleStr;

	document.body.appendChild(mesW);

}
function showSettingWifi(close)
{
		if(close.length > 0)
			document.getElementById('mesWindow').parentNode.removeChild(document.getElementById('mesWindow'));

		var mesW=document.createElement("div");
		mesW.id="mesWindow";
		mesW.className="mesWindow";

		var winW = 960;

		if (parseInt(navigator.appVersion)>3) {
	 		if (navigator.appName=="Netscape") {
	  		winW = window.innerWidth;
	 		}
	 		if (navigator.appName.indexOf("Microsoft")!=-1 || navigator.appName.indexOf("Opera")!=-1) {
	  		winW = document.body.offsetWidth -30;
	 		}
		}

		if (winW < 960){
			winW = 960;
		}
		var s1;
		var s2;
		//var x=document.getElementById("wifi_id");
		//var ssid = x.options[x.selectedIndex].text;
		//var ssid = getSelSSID(x.options[x.selectedIndex].text);
		var ssid = document.getElementById("wifi_in").value;

		var wifid="wifi_d"+document.form.wifi_index.value;
		var sec = getAPSecurity(document.getElementById(wifid).innerHTML);

		

		s1="<br><br><br><br><br><br> \
		<table  border=\"0\" width=\"384\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\" style=\"font-family:Arial;\"> \
		<tr><td height=\"46\" background=\"../images/addwifi_01.png\"><font color=\"#ffffff\" valign=\"top\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+document.form.str_wifi.value+"</font></td></tr> \
		<tr><td height=\"269\" background=\"../images/addwifi_02.png\" align=\"center\"> \
		<table> \
		<tr><td width=\"70\">&nbsp;</td> \
			<td width=\"220\" class=\"mesWindowContent\">"+document.form.str_networkssid.value+"<br> \
				<input type=\"text\" maxlength=\"32\" id=\"set_ssid\" disabled class=\"inputtxt\"  value=\""+ssid+"\" name=\"SSID\">";

		if(sec==0)
		{
			s2 ="<br>"+document.form.str_security.value+"<br> \
			<input value="+document.form.str_none.value+" disabled id=\"security_in\" class=\"text14\" style=\"text-align:left;border: 0px none ; background: transparent url(../images/input/common_panel_drop.png) repeat scroll 0%; width: 217px; height: 23px;\" type=\"button\"> \
			<input value=\"0\" id=\"add_security\" type=\"hidden\"> \
			<input value=\"0\" id=\"add_keyindex\" type=\"hidden\"> \
			<input value=\"\" id=\"set_wepkey\" type=\"hidden\"> \
			<td width=\"70\">&nbsp;</td> </tr> </table> \
			<table > \
			<tr style=\"display:none;\"><td class=\"mesWindowContent\"> \
			"+document.form.str_wirelesspassword.value+"<br> \
			<input type=\"text\" class=\"inputtxt\" maxlength=\"64\" name=\"WPApassword\" id=\"set_wpapw\" ></td></tr> </table></td></tr>\
			          	<tr><td background=\"../images/addwifi_03.png\" align=\"center\" height=\"55\"> \
				<input type=\"button\" value="+document.form.str_cancel.value+" onclick=\"closeWindow()\" style=\"width:149px;font-family:Arial;height:28px;border:0px;font-weight: bold;color: #FFFFFF; background: url(../images/button/common_bk_button_wide_rest.png);\" >&nbsp;&nbsp; \
			<input type=\"button\" value="+document.form.str_done.value+" onclick=\"SettingAPDone()\" style=\"width:149px;font-family:Arial;height:28px;border:0px;font-weight: bold;color: #FFFFFF; background: url(../images/button/common_gn_button_medium_rest.png);\" > </td></tr></table>";
		}
		else if(sec==1)
		{
			//show_hide("wep",  false);
			//show_hide("wpapsk", false);

			s2 ="<br>"+document.form.str_security.value+"<br> \
			<input value=\""+document.form.str_wep.value+"\" disabled id=\"security_in\"  class=\"text14\" style=\"text-align:left;border: 0px none ; background: transparent url(../images/input/common_panel_drop.png) repeat scroll 0%; width: 217px; height: 23px;\" type=\"button\"> \
			<input value=\"1\" id=\"add_security\" type=\"hidden\"> \
			<td width=\"70\">&nbsp;</td> </tr> </table> \
			<table > \
			<tr ><td class=\"mesWindowContent\"> \
				"+document.form.str_keyindex.value+"<br> \
					<input value=\"1\" onclick=\"hide_id('key_d')\" id=\"key_in\"  class=\"text14\" style=\"text-align:left;border: 0px none ; background: transparent url(../images/input/common_panel_drop.png) repeat scroll 0%; width: 217px; height: 23px;\" type=\"button\"> \
					<br>"+document.form.str_wephex.value+"<br><input type=\"text\" maxlength=\"64\" id=\"set_wepkey\"name=\"WEPhex\" class=\"inputtxt\" ></td> </tr> </table>\
					<input value=\"0\" id=\"add_keyindex\" type=\"hidden\"> \
					<input value=\"\" id=\"set_wpapw\" type=\"hidden\"> \
					<ul class=\"key_css\" id=\"key_d\"><li ><!--[if lte IE 6]><a href=\"#\"><table><tr><td><![endif]--> \
			        <dd id=\"key_d0\" onclick=\"select_id('key_d','1','0')\" class=\"first\" ><a href=\"#\">1</a></dd> \
		            <dd id=\"key_d1\" onclick=\"select_id('key_d','2','1')\" class=\"mid\"  ><a href=\"#\">2</a></dd> \
		            <dd id=\"key_d2\" onclick=\"select_id('key_d','3','2')\" class=\"mid\"  ><a href=\"#\">3</a></dd> \
		            <dd id=\"key_d3\" onclick=\"select_id('key_d','4','3')\" class=\"last\" ><a href=\"#\">4</a></dd> \
		          	<!--[if lte IE 6]></td></tr></table></a><![endif]--></li></ul> \
		          	<tr><td background=\"../images/addwifi_03.png\" align=\"center\" height=\"55\"> \
			<input type=\"button\" value="+document.form.str_cancel.value+" onclick=\"closeWindow()\" style=\"width:149px;font-family:Arial;height:28px;border:0px;font-weight: bold;color: #FFFFFF; background: url(../images/button/common_bk_button_wide_rest.png);\" >&nbsp;&nbsp; \
			<input type=\"button\" value="+document.form.str_done.value+" onclick=\"SettingAPDone()\" style=\"width:149px;font-family:Arial;height:28px;border:0px;font-weight: bold;color: #FFFFFF; background: url(../images/button/common_gn_button_medium_rest.png);\" > </td></tr></table>";

		}
		else if(sec==2)
		{
			//show_hide("wep",  false);
			//show_hide("key_d", false);
			s2 ="<br>"+document.form.str_security.value+"<br> \
			<input value="+document.form.str_wpa.value+" disabled id=\"security_in\" class=\"text14\" style=\"text-align:left;border: 0px none ; background: transparent url(../images/input/common_panel_drop.png) repeat scroll 0%; width: 217px; height: 23px;\" type=\"button\"> \
			<input value=\"2\" id=\"add_security\" type=\"hidden\"> \
			<input value=\"0\" id=\"add_keyindex\" type=\"hidden\"> \
			<input value=\"\" id=\"set_wepkey\" type=\"hidden\"> \
			<td width=\"70\">&nbsp;</td> </tr> </table> \
			<table > \
			<tr ><td class=\"mesWindowContent\"> \
			"+document.form.str_wirelesspassword.value+"<br> \
			<input type=\"text\" class=\"inputtxt\" maxlength=\"64\" name=\"WPApassword\" id=\"set_wpapw\" ></td></tr> </table></td></tr>\
			          	<tr><td background=\"../images/addwifi_03.png\" align=\"center\" height=\"55\"> \
				<input type=\"button\" value="+document.form.str_cancel.value+" onclick=\"closeWindow()\" style=\"width:149px;font-family:Arial;height:28px;border:0px;font-weight: bold;color: #FFFFFF; background: url(../images/button/common_bk_button_wide_rest.png);\" >&nbsp;&nbsp; \
			<input type=\"button\" value="+document.form.str_done.value+" onclick=\"SettingAPDone()\" style=\"width:149px;font-family:Arial;height:28px;border:0px;font-weight: bold;color: #FFFFFF; background: url(../images/button/common_gn_button_medium_rest.png);\" > </td></tr></table>";
		}


		mesW.innerHTML=s1+s2;
		styleStr="left:0px;top:82px;position:absolute;width:" + winW + "px;height:620px;";
		mesW.style.cssText=styleStr;
		document.body.appendChild(mesW);
		if(sec==1)
			show_hide("key_d", false);
}
function showDeviceSetting(title,showMsg)
{

	var mesW=document.createElement("div");
	mesW.id="mesWindow";
	mesW.className="mesWindow";

	var winW =960;

	if (parseInt(navigator.appVersion)>3) {
		if (navigator.appName=="Netscape") {
		winW = window.innerWidth;
		}
		if (navigator.appName.indexOf("Microsoft")!=-1 || navigator.appName.indexOf("Opera")!=-1) {
		winW = document.body.offsetWidth -30;
		}
	}

	if (winW <960) {
		winW =960 ;
	}
	var name=document.form.tube_name.value;
	var s1= "<br><br><br><br><br><br> \
	<table width=\"384\" height=\"146\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" background=\"../images/pop1.png\"> \
	<tr><td width=\"26\" height=\"46\"></td> \
		<td class=\"mesWindowContent\" width=\"335\" height=\"46\"><font color=\"#ffffff\" >"+title+"</font></td> \
		<td width=\"23\" height=\"46\"></td></tr> \
	<tr><td width=\"26\" height=\"52\"></td> \
		<td class=\"mesWindowContent\" width=\"335\" height=\"52\">"+showMsg+"</td> \
		<td width=\"23\" height=\"52\"></td></tr> \
	<tr><td width=\"26\" height=\"51\"></td> \
		<td width=\"335\" height=\"51\" align=\"right\"> \
			<input type=\"button\" value="+document.form.str_done.value+" onclick=\"closeWindow();\" style=\"width:149px;font-family:Arial;height:28px;border:0px;font-weight: bold;color: #FFFFFF; background: url(../images/button/common_gn_button_medium_rest.png);\" ></td> \
		<td width=\"23\" height=\"51\"></td></tr></table>";
	mesW.innerHTML=s1;
	styleStr="left:0px;top:82px;position:absolute;width:" + winW + "px;height:620px;";
	mesW.style.cssText=styleStr;
	document.body.appendChild(mesW);
}


function showSettingLanguage(title,showMsg)
{

	var mesW=document.createElement("div");
	mesW.id="mesWindow";
	mesW.className="mesWindow";

	var winW =960;

	if (parseInt(navigator.appVersion)>3) {
		if (navigator.appName=="Netscape") {
		winW = window.innerWidth;
		}
		if (navigator.appName.indexOf("Microsoft")!=-1 || navigator.appName.indexOf("Opera")!=-1) {
		winW = document.body.offsetWidth -30;
		}
	}

	if (winW <960) {
		winW =960 ;
	}
	var name=document.form.tube_name.value;
	var s1= "<br><br><br><br><br><br> \
	<table width=\"384\" height=\"146\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" background=\"../images/pop1.png\"> \
	<tr><td width=\"26\" height=\"46\"></td> \
		<td class=\"mesWindowContent\" width=\"335\" height=\"46\"><font color=\"#ffffff\" >"+title+"</font></td> \
		<td width=\"23\" height=\"46\"></td></tr> \
	<tr><td width=\"26\" height=\"52\"></td> \
		<td class=\"mesWindowContent\" width=\"335\" height=\"52\">"+showMsg+"</td> \
		<td width=\"23\" height=\"52\"></td></tr> \
	<tr><td width=\"26\" height=\"51\"></td> \
		<td width=\"335\" height=\"51\" align=\"right\"> \
			<input type=\"button\" value="+document.form.str_done.value+" onclick=\"closeWindow();\" style=\"width:149px;font-family:Arial;height:28px;border:0px;font-weight: bold;color: #FFFFFF; background: url(../images/button/common_gn_button_medium_rest.png);\" ></td> \
		<td width=\"23\" height=\"51\"></td></tr></table>";
	mesW.innerHTML=s1;
	styleStr="left:0px;top:82px;position:absolute;width:" + winW + "px;height:620px;";
	mesW.style.cssText=styleStr;
	document.body.appendChild(mesW);
}
function videoProgress(title,msg_progress,msg_videodone)
{
	showSettingVideo(title,msg_progress);
	if(document.form.apmode.value==1)
	{		
		timer = setTimeout(function(){closeWindow();showVideoDone(title,msg_videodone);},50*1000);	
	}
	else
	{		
		timer = setTimeout(function(){closeWindow();showVideoDone(title,msg_videodone);},70*1000);
	}
}
function showSettingVideo(title,msg_progress)
{
	var mesW=document.createElement("div");
	mesW.id="mesWindow";
	mesW.className="mesWindow";

	var winW =960;

	if (parseInt(navigator.appVersion)>3) {
		if (navigator.appName=="Netscape") {
		winW = window.innerWidth;
		}
		if (navigator.appName.indexOf("Microsoft")!=-1 || navigator.appName.indexOf("Opera")!=-1) {
		winW = document.body.offsetWidth -30;
		}
	}

	if (winW <960) {
		winW =960 ;
	}

	var s1= "<br><br><br><br><br><br> \
	<table width=\"384\" height=\"186\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" background=\"../images/video_progress.png\" > \
	<tr><td width=\"31\" height=\"46\"></td> \
	<td class=\"mesWindowContent\" width=\"322\" height=\"46\" ><font color=\"#ffffff\" >"+title+"</font></td> \
	<td width=\"31\" height=\"46\" ></td></tr> \
	<tr><td width=\"31\" height=\"73\"></td> \
	<td class=\"mesWindowContent\" width=\"322\" height=\"73\">"+msg_progress+"</td> \
	<td width=\"31\" height=\"73\"></td></tr> \
	<tr><td colspan=\"3\" width=\"384\" height=\"30\" align=\"center\"> \
	<img style=\"width: 28px; height: 29px;\" src=\"../images/icon/common_icon_login.gif\" /></td></tr> \
	<tr><td colspan=\"3\" width=\"384\" height=\"37\"></td></tr></table>";
	mesW.innerHTML=s1;
	styleStr="left:0px;top:82px;position:absolute;width:" + winW + "px;height:620px;";
	mesW.style.cssText=styleStr;
	document.body.appendChild(mesW);
}
function showVideoDone(title,msg_videodone)
{
	var mesW=document.createElement("div");
	mesW.id="mesWindow";
	mesW.className="mesWindow";

	var winW =960;

	if (parseInt(navigator.appVersion)>3) {
		if (navigator.appName=="Netscape") {
		winW = window.innerWidth;
		}
		if (navigator.appName.indexOf("Microsoft")!=-1 || navigator.appName.indexOf("Opera")!=-1) {
		winW = document.body.offsetWidth -30;
		}
	}

	if (winW <960) {
		winW =960 ;
	}
	var name=document.form.tube_name.value;
	var s1= "<br><br><br><br><br><br> \
	<table width=\"384\" height=\"146\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" background=\"../images/pop1.png\"> \
	<tr><td width=\"26\" height=\"46\"></td> \
		<td class=\"mesWindowContent\" width=\"335\" height=\"46\"><font color=\"#ffffff\" >"+title+"</font></td> \
		<td width=\"23\" height=\"46\"></td></tr> \
	<tr><td width=\"26\" height=\"52\"></td> \
		<td class=\"mesWindowContent\" width=\"335\" height=\"52\">"+msg_videodone+"</td> \
		<td width=\"23\" height=\"52\"></td></tr> \
	<tr><td width=\"26\" height=\"51\"></td> \
		<td width=\"335\" height=\"51\" align=\"right\"> \
			<input type=\"button\" value="+document.form.str_done.value+" onclick=\"closeWindow();\" style=\"width:149px;font-family:Arial;height:28px;border:0px;font-weight: bold;color: #FFFFFF; background: url(../images/button/common_gn_button_medium_rest.png);\" ></td> \
		<td width=\"23\" height=\"51\"></td></tr></table>";

	mesW.innerHTML=s1;
	styleStr="left:0px;top:82px;position:absolute;width:" + winW + "px;height:620px;";
	mesW.style.cssText=styleStr;
	document.body.appendChild(mesW);
}
function showEditWin()
{
	//document.getElementById('edit').src="../images/button/common_edit_selected.png";
	//alert("edit!!");
	var mesW=document.createElement("div");
	mesW.id="mesWindow";
	mesW.className="mesWindow";

	var winW =960;

	if (parseInt(navigator.appVersion)>3) {
		if (navigator.appName=="Netscape") {
		winW = window.innerWidth;
		}
		if (navigator.appName.indexOf("Microsoft")!=-1 || navigator.appName.indexOf("Opera")!=-1) {
		winW = document.body.offsetWidth -30;
		}
	}

	if (winW <960) {
		winW =960 ;
	}
	//var x=document.getElementById("wifi_id");
	//var ssid = x.options[x.selectedIndex].text;
	//var ssid = getSelSSID(x.options[x.selectedIndex].text);
	var ssid = document.getElementById("wifi_in").value;
	var wifid="wifi_d"+document.form.wifi_index.value;
	var str = document.getElementById(wifid).innerHTML;
	var sec = getAPSecurity(str );


	var s1= "<br><br><br><br><br><br> \
	<table  border=\"0\" width=\"384\" cellpadding=\"0\" cellspacing=\"0\" align=\"center\"> \
	<tr><td class=\"mesWindowContent\" background=\"../images/video2_01.png\" height=\"46\" width=\"384\"><font color=\"#ffffff\" valign=\"top\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+document.form.str_wifi.value+"</font></td></tr> \
	<tr><td class=\"mesWindowContent\" background=\"../images/video2_02.png\" height=\"52\" width=\"384\"> \
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+document.form.str_networkssid.value+" <input type=\"text\" class=\"inputtxt\" maxlength=\"32\" id=\"SSID\" disabled  value=\""+ssid+"\" name=\"SSID\">";
	if(sec!=0 && str.search(document.form.str_connected.value)==-1 && str.search("EAP")==-1)
	{
		var s2 ="<tr><td background=\"../images/video2_03.png\" height=\"51\" align=\"center\"> \
			<input type=\"button\" value="+document.form.str_cancel.value+" onclick=\"closeWindow()\" style=\"width:99px;font-family:Arial;height:28px;border:0px;font-size:12px;color: #FFFFFF; background: url(../images/button/common_bk_button_wide_rest_99.png);\" >&nbsp;&nbsp; \
			<input type=\"button\" value="+document.form.str_forget.value+" onclick=\"ForgetAP();closeWindow();\"  style=\"width:99px;font-family:Arial;height:28px;border:0px;font-size:12px;color: #FFFFFF; background: url(../images/button/common_gn_button_medium_rest_forget.png);\" >&nbsp;&nbsp; \
			<input type=\"button\" value="+document.form.str_changepassword.value+" onclick=\"showSettingWifi('close');\" style=\"width:131px;font-family:Arial;height:28px;border:0px;font-size:12px;color: #FFFFFF; background: url(../images/button/common_gn_button_medium_rest_pas.png);\" ></td></tr></table>";
	}
	else
	{
		var s2 ="<tr><td background=\"../images/video2_03.png\" height=\"51\" align=\"center\"> \
			<input type=\"button\" value="+document.form.str_cancel.value+" onclick=\"closeWindow()\" style=\"width:149px;font-family:Arial;height:28px;border:0px;font-weight: bold;color: #FFFFFF; background: url(../images/button/common_bk_button_wide_rest.png);\" >&nbsp;&nbsp; \
			<input type=\"button\" value="+document.form.str_forget.value+" onclick=\"ForgetAP();closeWindow();\"  style=\"width:149px;font-family:Arial;height:28px;border:0px;font-weight: bold;color: #FFFFFF; background: url(../images/button/common_gn_button_medium_rest.png);\" >&nbsp;&nbsp;"
	}
	mesW.innerHTML=s1+s2;
	styleStr="left:0px;top:82px;position:absolute;width:" + winW + "px;height:620px;";
	mesW.style.cssText=styleStr;
	document.body.appendChild(mesW);


}
function showWifiDone(title,showMsg)
{
	var mesW=document.createElement("div");
	mesW.id="mesWindow";
	mesW.className="mesWindow";

	var winW =960;

	if (parseInt(navigator.appVersion)>3) {
		if (navigator.appName=="Netscape") {
		winW = window.innerWidth;
		}
		if (navigator.appName.indexOf("Microsoft")!=-1 || navigator.appName.indexOf("Opera")!=-1) {
		winW = document.body.offsetWidth -30;
		}
	}

	if (winW <960) {
		winW =960 ;
	}
	var s1= "<br><br><br><br><br><br> \
	<table width=\"384\" height=\"240\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" background=\"../images/pop2.png\"> \
	<tr><td width=\"28\" height=\"44\"></td> \
		<td width=\"329\" height=\"44\"><font color=\"#ffffff\" >"+title+"</font></td> \
		<td width=\"27\" height=\"44\"></td></tr> \
	<tr><td width=\"28\" height=\"141\"></td> \
		<td width=\"329\" height=\"141\">"+showMsg+"</td> \
		<td width=\"27\" height=\"141\"></td></tr> \
	<tr><td width=\"28\" height=\"55\"></td> \
		<td width=\"329\" height=\"55\" align=\"right\"> \
			<input type=\"button\" value=\""+document.form.str_done.value+"\" onclick=\"closeWindow();\" style=\"width:149px;font-family:Arial;height:28px;border:0px;font-weight: bold;color: #FFFFFF; background: url(../images/button/common_gn_button_medium_rest.png);\" ></td> \
		<td width=\"27\" height=\"55\"></td></tr></table>";

	mesW.innerHTML=s1;
	styleStr="left:0px;top:82px;position:absolute;width:" + winW + "px;height:620px;";
	mesW.style.cssText=styleStr;
	document.body.appendChild(mesW);
}
function showDisconnectMsg(title,showMsg)
{
	var mesW=document.createElement("div");
	mesW.id="mesWindow";
	mesW.className="mesWindow";

	var winW =960;

	if (parseInt(navigator.appVersion)>3) {
		if (navigator.appName=="Netscape") {
		winW = window.innerWidth;
		}
		if (navigator.appName.indexOf("Microsoft")!=-1 || navigator.appName.indexOf("Opera")!=-1) {
		winW = document.body.offsetWidth -30;
		}
	}

	if (winW <960) {
		winW =960 ;
	}
	var s1= "<br><br><br><br><br><br> \
	<table width=\"384\" height=\"240\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" background=\"../images/pop2.png\"> \
	<tr><td width=\"28\" height=\"44\"></td> \
		<td width=\"329\" height=\"44\"><font color=\"#ffffff\" >"+title+"</font></td> \
		<td width=\"27\" height=\"44\"></td></tr> \
	<tr><td width=\"28\" height=\"141\"></td> \
		<td width=\"329\" height=\"141\">"+showMsg+"</td> \
		<td width=\"27\" height=\"141\"></td></tr> \
	<tr><td width=\"28\" height=\"55\"></td> \
		<td width=\"329\" height=\"55\" align=\"right\"> \
			<input type=\"button\" value=\""+document.form.str_done.value+"\" onclick=\"closeWindow();\" style=\"width:149px;font-family:Arial;height:28px;border:0px;font-weight: bold;color: #FFFFFF; background: url(../images/button/common_gn_button_medium_rest.png);\" ></td> \
		<td width=\"27\" height=\"55\"></td></tr></table>";


	mesW.innerHTML=s1;
	styleStr="left:0px;top:82px;position:absolute;width:" + winW + "px;height:620px;";
	mesW.style.cssText=styleStr;
	document.body.appendChild(mesW);
}
function setDivs()
{

	//var element = document.getElementById('add_security');
	//var index =element.selectedIndex;
	//alert("setDivs : " +index );
	//index = (index > -1 && index < cf.KC300_Security.options.length) ? index : 0;
	show_hide("wep",  false);
	show_hide("wpapsk", false);
	show_hide("security_d", false);
	show_hide("key_d", false);
}
function setDivs2()
{

	var element = document.getElementById('set_security');
	var index =element.selectedIndex;
	//alert("setDivs : " +index );
	//index = (index > -1 && index < cf.KC300_Security.options.length) ? index : 0;
	show_hide("wep",  index==1);
	show_hide("wpapsk", index==2);
}
var showit = "block";
var hideit = "none";

function show_hide(el,shownow)  // IE & NS6; shownow = true, false
{
	//alert("el = " + el + " " + shownow);
	if (document.all)
	{
		//alert("el = " + el + " " + shownow);
		document.all(el).style.display = (shownow) ? showit : hideit ;
	}
	else if(document.getElementById('mesWindow')!=null && document.getElementById(el)!=null )
	{
		document.getElementById(el).style.display = (shownow) ? showit : hideit ;
		//alert("el2 = " + el + " " + shownow);
	}
}

function closeWindow()
{
	if(document.getElementById('mesWindow')!=null)
	{
		document.getElementById('mesWindow').parentNode.removeChild(document.getElementById('mesWindow'));
	}
}
function AddWifiDone()
{
	if(document.getElementById('mesWindow')!=null)
	{
		//String tube_ssid,String tube_security,String tube_keyindex,String tube_wepkey,String tube_wpapw)
		document.form.tube_ssid.value= document.getElementById('add_ssid').value;
		document.form.tube_security.value= document.getElementById('add_security').value;
		document.form.tube_keyindex.value= document.getElementById('add_keyindex').value;
		document.form.tube_wepkey.value=document.getElementById('add_wepkey').value;
		document.form.tube_wpapw.value=document.getElementById('add_wpapw').value;

		if(!isCharNumber(document.getElementById('add_ssid').value))
			return;

		//if((document.getElementById('add_security').value==1 && document.getElementById('add_wepkey').value.length<8)||
		if((document.getElementById('add_security').value==2 && document.getElementById('add_wpapw').value.length<8 ))
		{
			alert(document.form.str_error_input.value+' '+document.form.str_error_password_length.value);
			return;
		}
		document.getElementById('mesWindow').parentNode.removeChild(document.getElementById('mesWindow'));
		document.form.mode.value="AddWifiDone";
		document.getElementById("myForm").submit();

	}

	//location.href="/Settings";

}

function SettingAPDone()
{
	
	if(document.getElementById('mesWindow')!=null)
	{
		
		//String tube_ssid,String tube_security,String tube_keyindex,String tube_wepkey,String tube_wpapw)
		document.form.tube_ssid.value= document.getElementById('set_ssid').value;
		document.form.tube_security.value= document.getElementById('add_security').value;
		document.form.tube_keyindex.value= document.getElementById('add_keyindex').value;
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
		if(document.form.apmode.value==0)
			document.form.mode.value="SettingAP";
		else
			document.form.mode.value="AddWifiDone";		
		
		//document.form.mode.value="SettingAP";
		document.getElementById("myForm").submit();
	}

	//location.href="/Settings";

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
	if(document.form.tube_password.value.length<8 || document.form.tube_password1.value.length<8)
	{
		alert(document.form.str_error_password_length.value);
		document.form.mode.value="PasswordError";
	}
	else if(document.form.tube_password.value!=document.form.tube_password1.value)
	{
		alert("The two passwords must be the same!");
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

		
		if(document.form.tube_password.value.length<8 || document.form.tube_password1.value.length<8)
		{
			alert(document.form.str_error_password_length.value);
			document.form.mode.value="PasswordError";
		}
		else if(document.form.tube_password.value!=document.form.tube_password1.value)
		{
			alert("The two passwords must be the same!");
			document.form.mode.value="PasswordError";
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
function VideoSave()
{
	document.form.mode.value="VideoSave";
	//document.form.video_value.value=document.getElementById("hdmi_id").selectindex;
	//showSettingVideo();
	document.getElementById("myForm").submit();

}
function LanguageSave()
{
	//var selObj = document.getElementById('lang_id');
	//var selIndex = selObj.selectedIndex;
	//document.form.Lang.value = selObj.options[selIndex].value;
	document.form.mode.value="LanguageSave";
	document.getElementById("myForm").submit();
	//showSettingLanguage();
}
function WifiSave()
{
	document.form.mode.value="WifiSave";
	//document.form.wifi_index.value=document.getElementById("wifi_id").selectedIndex ;
	if(document.form.wifi_index.value==0)
		document.form.apmode.value=1;
	else
		document.form.apmode.value=0;

	//document.getElementById("myForm").submit();
	//showWifiDone();
}
function WifiEdit()
{
	//document.form.mode.value="WifiEdit";
	//document.form.wifi_index.value=document.getElementById("wifi_id").selectedIndex ;
	//document.getElementById("myForm").submit();
	//document.form.wifi_index.value=document.getElementById("wifi_id").selectedIndex ;
	if(document.form.wifi_index.value==0)
		return;

	/*if(document.form.apmode.value==1)
		showEditWin();
	else //if(document.form.apmode.value==0)*/
	{
		//var x = document.getElementById("wifi_id");
		//var str = x.options[x.selectedIndex].text;
		var wifid="wifi_d"+document.form.wifi_index.value;

		var str = document.getElementById(wifid).innerHTML ;
		//alert(str);
		//if(str.search(document.form.str_disabled.value)!=-1 ||str.search(document.form.str_remembered.value)!=-1 || str.search(document.form.str_remembered.value)!=-1)
		if(str.search(document.form.str_disabled.value)!=-1 ||str.search(document.form.str_remembered.value)!=-1 ||str.search(document.form.str_not_in_rage.value)!=-1 && str.search("EAP")==-1 || document.form.wifi_index.value!=-1)
			showEditWin();
		else
		{
			if(str.search(document.form.str_connected.value)==-1 || str.search(document.form.str_open_network.value)==-1 || str.search("EAP")==-1)
			{
				showSettingWifi("");

				//setDivs2();
			}
		}
	}
}

function closeConfigTool()
{
	window.open('','_parent','');
	window.close();

}
function MovePic(type)
{
	if(type=='edit')
	{
		document.getElementById('edit').src="../images/button/common_edit_hover.png";
	}

}
function DownPic(type)
{
	if(type=='edit')
	{
		document.getElementById("edit").src="../images/button/common_edit_selected.png";
	}
}
function OutPic(type)
{
	if(type=='edit')
	{
		document.getElementById('edit').src="../images/button/common_edit_rest.png";
	}
}

function ForgetAP()
{
	document.getElementById('mesWindow').parentNode.removeChild(document.getElementById('mesWindow'));
	document.form.mode.value="ForgetAP";
	//document.form.wifi_index.value=document.getElementById("wifi_id").selectedIndex ;
	document.getElementById("myForm").submit();

}

function getAPSecurity(text)
{
	if(text.search("WEP")!=-1)
		return 1;
	else if(text.search("PSK")!=-1)
		return 2;
	else if(text.search("EAP")!=-1)
		return 3;
	else
		return 0;
}

function hide_id(id)
{
	//alert(id);
	var count=document.getElementById(id).getElementsByTagName('dd').length;

    if(document.getElementById(id).style.display=="" || (document.getElementById(id).style.display=='none'))
	{
		if(id=='wifi_d')
		{
			document.getElementById('lang_d').style.display= "none";
			document.getElementById('hdmi_d').style.display= "none";
		}
		else if(id=='hdmi_d')
		{
			document.getElementById('lang_d').style.display= "none";
			document.getElementById('wifi_d').style.display= "none";
		}
		else if(id=='lang_d')
		{
			document.getElementById('hdmi_d').style.display= "none";
			document.getElementById('wifi_d').style.display= "none";
		}

		document.getElementById(id).style.display= "block";
		var idn ;
		for(var i=0;i<count;++i)
		{
			idn=id+i;
			//alert(idn);
			document.getElementById(idn).style.display= "block";
		}

	}
	else
		document.getElementById(id).style.display= "none";

	if(id=='security_d')
	{
		//alert('show');
		show_hide("wep",  false);
		show_hide("wpapsk", false);
		show_hide("key_d", false);
	}
	if(id=='key_d')
	{
		//alert('show');
		show_hide("wep",  true);
		show_hide("wpapsk", false);
		show_hide("security_d", false);
	}

}
function select_id(id,item,index)
{
	document.getElementById(id).style.display= "none";
	if(id=="hdmi_d")
	{
		document.getElementById('hdmi_in').value=item;
		document.form.HDMI.value = index;
	}
	else if(id =="wifi_d" )
	{
		document.getElementById('wifi_in').value=item;
		document.form.wifi_index.value = index;
	}
	else if(id=="lang_d")
	{
		document.getElementById('lang_in').value=item;
		document.form.lang.value = index;
	}
	else if(id=="security_d")
	{
		document.getElementById('security_in').value=item;
		document.getElementById('add_security').value=index;
//		document.getElementById('set_security').value=index;
		//document.form.lang.value = index;
		if(index==0)
		{
			show_hide('wep',false);
			show_hide('wpapsk',false);
		}
		else if(index==1)
		{
			show_hide('wep',true);
			show_hide('wpapsk',false);
		}
		else if(index ==2)
		{
			show_hide('wpapsk', true);
			show_hide('wep',false);

		}
	}
	else if(id=="key_d")
	{
		document.getElementById('key_in').value=item;
		document.getElementById('add_keyindex').value = index;
		//document.getElementById('set_keyindex').value = index;
		//show_hide('wep',true);
		//show_hide('wpapsk',false);
	}
	//alert();

}
function select_wifi(ssid,index,security,nid)
{
	document.getElementById('wifi_d').style.display= "none";
	document.getElementById('wifi_in').value=ssid;
	document.form.wifi_index.value = index;
	document.form.wifi_ssid.value = ssid;
	document.form.wifi_security.value = security;
	document.form.wifi_nid.value = nid;

	var wifid="wifi_d"+document.form.wifi_index.value;
	var str = document.getElementById(wifid).innerHTML ;
		//alert(str);
	if(str.search(document.form.str_disabled.value)==-1 && str.search(document.form.str_remembered.value)==-1 && str.search(document.form.str_connected.value)==-1&& index!=0 && str.search("EAP")==-1)
	if(nid==-1){
		showSettingWifi("");
	}

}
function hide_all()
{
	document.getElementById('lang_d').style.display= "none";
	document.getElementById('hdmi_d').style.display= "none";
	document.getElementById('wifi_d').style.display= "none";
	//document.getElementById('security_d').style.display= "none";
}
