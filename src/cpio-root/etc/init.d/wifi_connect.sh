#! /bin/sh
### BEGIN INIT INFO
# File:				wifi_connect.sh	
# Provides:         wifi connet to other AP 
# Required-Start:   $
# Required-Stop:
# Default-Start:     
# Default-Stop:
# Short-Description:start wifi connet service
# Author:			gao_wangsheng
# Email: 			gao_wangsheng@anyka.oa
# Date:				2012-8-2
### END INIT INFO

MODE=$1
GSSID=$2
SSID=\'\"$GSSID\"\'
GPSK=$3
PSK=\'\"$GPSK\"\'
KEY=$PSK
KEY_INDEX=$4
NET_ID=
PATH=$PATH:/bin:/sbin:/usr/bin:/usr/sbin

usage()
{
	echo "Usage: $0 mode(wpa|wep|open) ssid password"
	exit 3
}

start_wifi_service()
{
	insmod /root/otg-hs.ko
	insmod /root/8188eu.ko
	sleep 2
	wpa_supplicant -B -iwlan0 -Dwext -c /etc/wpa_supplicant.conf
}
stop_wifi_service()
{
	/etc/init.d/wifi_stop.sh all
}
restart_wifi_service()
{
	stop_wifi_service
	start_wifi_service
}

check_ssid_valid()
{
	echo "scanning.."
	ap=""
	count=0
	while [ "$ap" == "" ] #-a "$count" -lt "5" ]
	do
		wpa_cli -iwlan0 scan
		ap=`wpa_cli -iwlan0 scan_results |grep $GSSID`
		wpa_cli -iwlan0 scan_results
#		count=`expr $count + 1`
		sleep 1
	done
	echo $ap
}

check_ssid_exist()
{
	NET_ID=`wpa_cli -iwlan0 list_network\
		| awk 'NR>=2{print $1 "\t" $2}'\
		| grep "$GSSID" | awk '{print $1}'`
	echo $NET_ID
}

check_connet_finish()
{
	status=""
	while [ "$status" != "wpa_state=COMPLETED" ]
	do
		status=`wpa_cli -iwlan0 status |grep wpa_state`
		echo $status
		sleep 2
	done
	dhclient wlan0
	ifconfig
}

finish_station_connect()
{
	sh -c "wpa_cli -iwlan0 set_network $1 scan_ssid 1"
	wpa_cli -iwlan0 enable_network $1
	wpa_cli -iwlan0 select_network $1
	wpa_cli -iwlan0 save_config
	check_connet_finish
}

connet_wpa()
{
	restart_wifi_service
	NET_ID=""
	check_ssid_exist
	if [ "$NET_ID" = "" ];then
	{
		NET_ID=`wpa_cli -iwlan0 add_network`
		sh -c "wpa_cli -iwlan0 set_network $NET_ID ssid $SSID"
		sh -c "wpa_cli -iwlan0 set_network $NET_ID priority 9"
		sh -c "wpa_cli -iwlan0 set_network $NET_ID key_mgmt WPA-PSK"
		sh -c "wpa_cli -iwlan0 set_network $NET_ID psk $PSK"
	}
	elif [ "$GPSK" != "" ];then
	{
		sh -c "wpa_cli -iwlan0 set_network $NET_ID psk $PSK"
	}
	fi

	finish_station_connect $NET_ID
}

connet_wep()
{
	restart_wifi_service
	NET_ID=""
	check_ssid_exist
	if [ "$NET_ID" = "" ];then
	{
		NET_ID=`wpa_cli -iwlan0 add_network`
		sh -c "wpa_cli -iwlan0 set_network $NET_ID ssid $SSID"
		wpa_cli -iwlan0 set_network $NET_ID key_mgmt NONE
		sh -c "wpa_cli -iwlan0 set_network $NET_ID wep_key${KEY_INDEX} $KEY"
	}
	elif [ "$GPSK" != "" ];then
	{
		sh -c "wpa_cli -iwlan0 set_network $NET_ID wep_key${KEY_INDEX} $KEY"
	}
	fi

	finish_station_connect $NET_ID
}

connet_open()
{
	restart_wifi_service
	NET_ID=""
	check_ssid_exist
	if [ "$NET_ID" = "" ];then
	{
		NET_ID=`wpa_cli -iwlan0 add_network`
		sh -c "wpa_cli -iwlan0 set_network $NET_ID ssid $SSID"
		wpa_cli -iwlan0 set_network $NET_ID key_mgmt NONE
	}
	fi

	finish_station_connect $NET_ID
}


#
# main:
#

case "$MODE" in
	wpa)
		connet_wpa 
		;;
	wep)
		connet_wep 
		;;
	open)
		connet_open 
		;;
	*)
		usage
		;;
esac

exit 0

