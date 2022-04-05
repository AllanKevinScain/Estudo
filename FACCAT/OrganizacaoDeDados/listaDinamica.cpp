#include <stdio.h>
#include <stdlib.h>


//Laço de repetição
typedef struct No{
	int valor;
	struct No *proximo;
}No;

//Lista dinamica
typedef struct {
	No *inicio;	
	int tamanho;
}Lista;

//função de inserção no começo da lista
void inserirNoInicio(Lista *lista, int valor){
	No *novo = (No*)malloc(sizeof(No));
	novo->valor = valor; // (*novo).valor = valor;
	novo->proximo = lista->inicio;
	lista->inicio = novo;
	lista->tamanho++;
};

//função de inserção no final da lista
void inserirNoFim(Lista *lista, int valor) {
	No *segundoNo, *novo = (No*)malloc(sizeof(No));
	novo->valor = valor;
	novo->proximo = NULL;
	
	if(lista->inicio == NULL) {
		lista->inicio = novo;
	} else {
		segundoNo = lista->inicio;
		while(segundoNo->proximo != NULL) {
			segundoNo = segundoNo->proximo;
		};
		segundoNo->proximo = novo;
	};
	lista->tamanho++;
};

//função para imprimir a lista
void imprimir(Lista *lista){
	No *inicio = lista->inicio;
	printf("Tamanho da lista: %d\n", lista->tamanho);
	while(inicio != NULL) {
		printf("%d\n", inicio->valor);
		inicio = inicio->proximo;
	}
	printf("\n\n");
};

int main() {
	Lista listaD;
	int opcao, valor;
	
	//Inicialização da lista
	listaD.inicio = NULL;
	listaD.tamanho = 0;
	
	do{
		printf("1 - inserir no incio\n2 - imprimir\n3 - inserir no final\n5 - sair\n\n");
		scanf("%d", &opcao);
		
		switch(opcao) {
			case 1:
				printf("Digite um numero para ser inserido:\t");
				scanf("%d", &valor);
				inserirNoInicio(&listaD, valor);
				break;
			case 2:
				imprimir(&listaD);
				break;
			case 3:
				printf("Digite um numero para ser inserido:\t");
				scanf("%d", &valor);
				inserirNoFim(&listaD, valor);
				break;
			case 5:
				printf("Programa encerrado!\n");
			default:
				printf("Opção nao encontrada.\n");
			
		}
	} while(opcao != 5);
	
	return 0;
}
