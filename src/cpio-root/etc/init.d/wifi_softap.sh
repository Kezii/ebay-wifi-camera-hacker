#! /bin/sh
### BEGIN INIT INFO
# Provides:          wifi soft ap 
# Required-Start:    $
# Required-Stop:
# Default-Start:     
# Default-Stop:
# Short-Description: start wifi service
# Author:			gao_wangsheng
# Email: 			gao_wangsheng@anyka.oa
# Date:				2012-8-2
### END INIT INFO

PATH=$PATH:/bin:/sbin:/usr/bin:/usr/sbin
MODE=$1

do_start () {
	echo "start wifi soft ap......"
	insmod /root/otg-hs.ko
	insmod /root/8188eu.ko
	ifconfig wlan0 192.168.1.1
	hostapd /etc/hostapd.conf -B
	test -f /var/run/udhcpd.pid && rm -f /var/run/udhcpd.pid
	test -f /var/run/dhcpd.pid && rm -f /var/run/dhcpd.pid

	dhcpd 
}

do_stop () {
	/etc/init.d/wifi_stop.sh all
}

do_restart () {
	echo "restart wifi soft ap......"
	do_stop
	do_start
}

do_status () {
	echo "status wifi soft ap......"
}

case "$MODE" in
  start)
	do_start
	;;
  restart|reload|force-reload)
	do_restart
	;;
  stop)
	do_stop
	;;
  status)
	do_status
	;;
  *)
	echo "Usage: $0 start|stop|restart|status"
	exit 3
	;;
esac

exit 0 
