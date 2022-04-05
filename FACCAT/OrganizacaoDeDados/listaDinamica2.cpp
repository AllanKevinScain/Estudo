#include <cstdlib>
#include <iostream>
#include <stdio.h>
#include <string.h>

typedef struct No{
	int valor;
	struct No *proximo;
}No;

typedef struct {
	No *inicio;	
	int tamanho;
}Lista;

void inserirNoInicio(Lista *lista, int valor){
	No *novo = (No*)malloc(sizeof(No));
	novo->valor = valor;
	novo->proximo = lista->inicio;
	lista->inicio = novo;
	lista->tamanho++;
};
 
int main(){
	FILE *arquivoLer;
	FILE *arquivoEscrever;
    int opcao, i, valorT;
    char lista[100], valor[1];
    
    do{
		printf("1 - inserir na lista\n2 - exibir lista\n4 - limpar tela\n5 - sair\n\n");
		scanf("%d", &opcao);
		switch(opcao) {
			case 1:
				arquivoEscrever = fopen("lista.txt", "a");
				arquivoLer = fopen("lista.txt", "r"); 
				printf("Digite um numero para ser inserido:\t");
				scanf("%s", &valor);
				
				while(fgets(lista, 100, arquivoLer) != NULL){
					inserirNoInicio(&lista, valor);
				};
				
				fputs(valor, arquivoEscrever);
				putc('\n', arquivoEscrever);
				fclose(arquivoLer);
				fclose(arquivoEscrever);
				break;
			case 2:
				arquivoLer = fopen("lista.txt", "r"); 
				while(fgets(lista, 100, arquivoLer) != NULL){
					printf("%s", lista);
				};
    			fclose(arquivoLer);
				break;
			case 4:
				system("cls");
				break;
			case 5:
				printf("Programa encerrado!\n");
			default:
				printf("Opcao nao encontrada.\n");
			
		}
	} while(opcao != 5);
                   
}

//for(i = 0; i < 100; i++) {
//					if(lista[i] == valor[0]){
//						if(lista[i+1] == valor[1]){
//							printf("Esse valor ja foi escrito antes!\n");
//							fclose(arquivoLer);
//							break;
//						}
//					}
//				}
