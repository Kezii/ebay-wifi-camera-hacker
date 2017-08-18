#! /bin/sh
### BEGIN INIT INFO
# File:				wifi_station.sh	
# Provides:         start and exit wifi station mode 
# Required-Start:   $
# Required-Stop:
# Default-Start:     
# Default-Stop:
# Short-Description:start and stop wifi station
# Author:			gao_wangsheng
# Email: 			gao_wangsheng@anyka.oa
# Date:				2012-8-2
### END INIT INFO

MODE=$1
MODULE=8188eu
PATH=$PATH:/bin:/sbin:/usr/bin:/usr/sbin

usage()
{
	echo "Usage: $0 mode(start|stop)"
	exit 3
}

stop_station()
{
	echo "stop wifi station......"
	/etc/init.d/wifi_stop.sh all
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

start_station ()
{
	echo "start wifi station......"
	insmod /root/otg-hs.ko
	insmod /root/8188eu.ko
	sleep 2 
	wpa_supplicant -B -iwlan0 -Dwext -c /etc/wpa_supplicant.conf
	check_connet_finish
}


#
# main:
#

case "$MODE" in
	start)
		start_station	
		;;
	stop)
		stop_station
		;;
	*)
		usage
		;;
esac

exit 0

