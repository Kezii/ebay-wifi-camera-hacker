#! /bin/sh
### BEGIN INIT INFO
# File:				wifi_stop.sh	
# Provides:         stop wifi 
# Required-Start:   $
# Required-Stop:
# Default-Start:     
# Default-Stop:
# Short-Description:stop wifi connet service
# Author:			gao_wangsheng
# Email: 			gao_wangsheng@anyka.oa
# Date:				2012-8-2
### END INIT INFO

MODE=$1
MODULE=8188eu
PATH=$PATH:/bin:/sbin:/usr/bin:/usr/sbin

usage()
{
	echo "Usage: $0 mode(all|station|softap)"
	exit 3
}

stop_station()
{
	echo "stop wifi station......"
	killall -9 dhclient
	killall -9 wpa_supplicant
}

stop_softap ()
{
	echo "stop wifi soft ap......"
	killall -9 dhcpd
	killall -9 hostapd
}

stop_module ()
{
	rmmod $MODULE
	rmmod otg-hs
}

#
# main:
#

case "$MODE" in
	all)
		stop_station
		stop_softap
		stop_module	
		;;
	station)
		stop_station
		stop_module	
		;;
	softap)
		stop_softap	
		stop_module	
		;;
	*)
		usage
		;;
esac

exit 0

