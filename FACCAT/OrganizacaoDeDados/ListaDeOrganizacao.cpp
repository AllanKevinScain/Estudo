/*#include <stdio.h>
#include <stdlib.h>
#define MAX 15
struct Usuario {
    char nome[MAX]; 
    char chave[2];
};


int main(void)
{
  FILE *pont_arq;
  Usuario lista[10];
  int i;
  
  pont_arq = fopen("ListaDeOrganizacao.txt", "w");
  fprintf(pont_arq, "%s", "Lista de organização. \n"); 
  fclose(pont_arq);
  
  pont_arq = fopen("ListaDeOrganizacao.txt", "a");
  for (i = 0 ; i> 10 ; i++) {
  	printf("Escreva seus dados:\n");
  	scanf("%s%s", lista[i].nome, lista[i].chave);
  	fprintf(pont_arq, "%s", lista[i].nome);
  	fprintf(pont_arq, "%s", "\t\t\t");
  	fprintf(pont_arq, "%s", lista[i].chave);
  	fprintf(pont_arq, "%s", "\n");
  }
  fclose(pont_arq);
  
  return 0;
}*/


#include <stdio.h>
#include <stdlib.h>
#define MAX 15
struct Usuario {
    char nome[MAX]; 
    char chave[2];
};

int main(void)
{
  // criando as variáveis
  FILE *pont_arq;
   Usuario lista[10];
  int i;
  
  //criando o arquivo e colocando nele uma frase
  pont_arq = fopen("arquivo.txt", "w");
  fprintf(pont_arq, "%s", "Lista de organização.\n"); 
  fclose(pont_arq);
  
  // fechando o arquivo
  fclose(pont_arq);
  
  return(0);
}
