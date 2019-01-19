#!/bin/sh

setxkbmap -option grp:caps_toggle us,ru
session=${1:-dwm}
case $session in
	dwm	) dwmstatus 2>&1 >/dev/null & feh --bg-scale ~/.wal.png & exec dwm;;
	openbox	) exec openbox-session;;
	*	) exec $1;;
esac
