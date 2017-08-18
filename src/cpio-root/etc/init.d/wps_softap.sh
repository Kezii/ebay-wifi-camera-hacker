#!/bin/sh

# start or stop softAP function, and dhcpd server

do_start() {
	# start hostapd in the background
	echo "start wifi wps......"
	rm -f /etc/hostapd.conf
	cp -a /etc/init.d/hostapd.conf /etc/
	insmod /root/otg-hs.ko
	insmod /root/8188eu.ko
	hostapd /etc/hostapd.conf -B

	# limited 2min, client should exe `wpa_cli -iwlan0 wps_pbc` command
	hostapd_cli -iwlan0 wps_pbc

	# start dhcpd server
	ifconfig wlan0 192.168.1.1
	dhcpd
}


do_stop () {
	echo "stop wifi wps......"
	killall dhcpd
	killall hostapd
	rmmod 8188eu
	rmmod otg-hs
}

do_restart() {
	echo "Restart wifi softAP"
	do_stop
	do_start
}

do_restart
exit 0

