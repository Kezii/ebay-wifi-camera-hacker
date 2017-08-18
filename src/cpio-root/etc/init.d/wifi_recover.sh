#! /bin/sh
### BEGIN INIT INFO
# File:				wifi_recover.sh	
# Provides:         recover wifi setting
# Required-Start:   $
# Required-Stop:
# Default-Start:     
# Default-Stop:
# Short-Description:recover wifi to softap mode
# Author:			gao_wangsheng
# Email: 			gao_wangsheng@anyka.oa
# Date:				2012-8-8
### END INIT INFO

PATH=$PATH:/bin:/sbin:/usr/bin:/usr/sbin
CONFIG=/etc/init.d/wpa_supplicant.conf
MODE=$1

reboot_system()
{
	echo "Reboot system now!"
	reboot
}

reboot_wifi_service()
{
	echo "Reboot wifi service now!"
	/etc/init.d/wifi_stop.sh all
	/etc/init.d/wifi_start.sh
}


#
# main:
#

/bin/cp -f $CONFIG /etc/
case "$MODE" in
	wifi)
		reboot_wifi_service
		;;
	copy)
		;;
	*)
		reboot_system
		;;
esac

exit 0

