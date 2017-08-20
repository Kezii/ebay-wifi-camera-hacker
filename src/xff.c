#include <stdio.h>
#include <stdlib.h>

int main(){
    
    FILE* lol = fopen("0xff.blob","wb");
    
    
    char asd=0xFF;
    
    for(int i=0;i<8388608;i++){
        fwrite(&asd,1,1,lol);
    }

    fclose(lol);
}
