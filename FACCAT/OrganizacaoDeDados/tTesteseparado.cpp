#include <stdio.h>
#include <stdlib.h>

int main(){
	int escolha = 0;
	char str[] = "Allan";
	int t;
	FILE *arquivoTexto;
	
   arquivoTexto = fopen( "arquivo.txt" , "w" );
   for(t = 0; t < 10000; t++) {
   		fwrite(str , 1 , sizeof(str) , arquivoTexto );
   		fwrite("\n" , 1 , 1 , arquivoTexto );
   };
   
   fclose(arquivoTexto);
   return(0);
}
