#!/bin/sh

# client port exe .sh

start_wifi_connect() {
	# start wpa_supplient server
	echo "start wifi wps......"
	rm -f /etc/wpa_supplicant.conf
	cp -a /etc/init.d/wpa_supplicant.conf /etc/
	insmod /root/otg-hs.ko
	insmod /root/8188eu.ko
	sleep 2
	wpa_supplicant -iwlan0 -D wext -c /etc/wpa_supplicant.conf -B

	# start software WPS(PBC)
	wpa_cli -iwlan0 wps_pbc

	status=""
	while [ $status != "wpa_state=COMPLETED" ]
	do
		status=`wpa_cli -iwlan0 status|grep wpa_state`
		echo $status
	done

	echo "wifi connected"

	dhclient wlan0
	ifconfig
}


stop_wifi_connect() {
	echo "stop wifi wps......"
	killall dhclient
	killall wpa_supplicant
	rmmod 8188eu
	rmmod otg-hs
}

stop_wifi_connect
start_wifi_connect

exit 0
