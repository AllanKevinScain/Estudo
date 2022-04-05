#include <stdio.h>
#include <stdlib.h>


void inserir_ordenado(No **lista, int num){
    No *aux, *novo = malloc(sizeof(No));

    if(novo){
        novo->valor = num;
        
        if(*lista == NULL){ // a lista est� vazia?
            novo->proximo = NULL;
            *lista = novo;
        }
        else if(novo->valor < (*lista)->valor){ // � o menor?
            novo->proximo = *lista;
            *lista = novo;
        }
        else{ // inser��o no meio ou no final da lista
            aux = *lista;
            while(aux->proximo && novo->valor > aux->proximo->valor)
                aux = aux->proximo;
            novo->proximo = aux->proximo;
            aux->proximo = novo;
        }
    }
    else
        printf("Erro ao alocar memoria!\n");
}  }
