#!/bin/sh

#start ak37 usb-otg hs and wifi driver

do_insmod() {
	insmod /root/otg-hs.ko
	insmod /root/8188eu.ko
}

do_rmmod() {
	rmmod 8192cu
	rmmod otg-hs
}

do_rmmod
do_insmod

exit 0
