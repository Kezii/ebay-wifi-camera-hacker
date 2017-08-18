

dd bs=1 skip=512 count=13823 if=flash.blob of=bootloader 



dd if=/dev/null of=nuovo_blob bs=1 count=0 seek=8388608





layout della rom:

0x00: qualcosa
0x200 - 0x37FF: bootloader? 
0x10000 0x136C3: decompressore per gzip?
0x136C4- 0x5DE4FF: gzip

layout del gzip:
0x00 - 0x958B5B: root packata in ASCII cpio archive (SVR4 with no CRC)
0x958B5B - EOF: dietro



layout di tutto:

davanti: bootloader, decompressore per gzip
dietro: il kernel e altra roba poco identificata

|--- davanti --- | ---      ---      gzip      ---      --- |   <- la rom finale
                 | --- cpio della root --- | --- dietro --- |   <- dentro il gzip
                       
                
