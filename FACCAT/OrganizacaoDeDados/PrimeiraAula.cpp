#include <stdio.h>
#include <stdlib.h>


int main(void) {
	
	
  	FILE *pont_arq;
  	char Name[20];
  	char c;
  	
  	printf("Escreva algo aqui:\n");
  	gets(Name);
  	
  	pont_arq = fopen("arquivo.txt", "w");
  	fprintf(pont_arq, "%s", Name);
  
  	fclose(pont_arq);
  	
  	pont_arq = fopen("arquivo.txt", "r");
  	
  	do {
  		
  		c = fgetc(pont_arq);
  		printf("%c", c);
  		
	} while(c != EOF);
  	
  
  	fclose(pont_arq);
  	
	return 0;
}
