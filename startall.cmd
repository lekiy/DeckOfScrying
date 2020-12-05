start startdb.cmd
ping 192.168.1.255 -n 1 -w 5000 > nul
start startsrv.cmd
start startfront.cmd
exit