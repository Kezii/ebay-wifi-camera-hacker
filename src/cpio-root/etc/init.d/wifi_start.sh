#! /bin/sh
### BEGIN INIT INFO
# File:				wifi_start.sh	
# Provides:         select wifi mode
# Required-Start:   $
# Required-Stop:
# Default-Start:     
# Default-Stop:
# Short-Description:start wifi run at station or softAP
# Author:			gao_wangsheng
# Email: 			gao_wangsheng@anyka.oa
# Date:				2012-8-8
### END INIT INFO

PATH=$PATH:/bin:/sbin:/usr/bin:/usr/sbin
STATION=/etc/wpa_supplicant.conf
MODE=softap

usage()
{
	echo "Usage: $0 "
	exit 3
}

isSupplicant()
{
	FLAG=""
	if [ -r $STATION ]
	then
	{
		FLAG=`cat $STATION | grep "^network={"`
	}
	fi

	if [ -z "$FLAG" ]
	then
	{
		MODE=softap
	}
	else
	{
		MODE=station
	}
	fi
}

#
# main:
#

isSupplicant
case "$MODE" in
	station)
		/etc/init.d/wifi_station.sh start
		;;
	softap)
		/etc/init.d/wifi_softap.sh start
		;;
	*)
		usage
		;;
esac

exit 0

