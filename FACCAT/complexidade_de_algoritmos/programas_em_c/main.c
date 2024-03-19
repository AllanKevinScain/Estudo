#include <stdio.h> // Padrão
#include <stdlib.h> // Memória
#include <time.h> // Tempo

int* numerosAleatorios(int tamanhoDaEntrada) {
    int* aux = (int*)malloc(tamanhoDaEntrada * sizeof(int));

    if (aux == NULL) {
        printf("Erro ao alocar memória!\n");
        exit(1);
    }

    srand(time(NULL));

    for (int i = 0; i < tamanhoDaEntrada; i++) {

        aux[i] = rand() % 100000;
    }

    return aux;
}

void mostrarEmTela(int* entrada, int tamanhoDaEntrada) {
    printf("Array ordenado %d:\n", tamanhoDaEntrada);
    for (int i = 0; i < tamanhoDaEntrada; i++) {
        printf("%d ", entrada[i]);
    }
    printf("\n");
}

int particionar(int* entrada, int esquerda, int direita) {
    int pivo = entrada[direita];
    int i = esquerda - 1;

    for (int j = esquerda; j < direita; j++) {
        if (entrada[j] < pivo) {
            i++;
            int temp = entrada[i];
            entrada[i] = entrada[j];
            entrada[j] = temp;
        }
    }

    int temp = entrada[i + 1];
    entrada[i + 1] = entrada[direita];
    entrada[direita] = temp;

    return i + 1;
}

void quickSort(int* entrada, int esquerda, int direita) {
    if (esquerda < direita) {
        int indice_pivo = particionar(entrada, esquerda, direita);

        quickSort(entrada, esquerda, indice_pivo - 1); // Orderna os menores
        quickSort(entrada, indice_pivo + 1, direita); // Ordena os maiores
    }
}

void bubbleSort(int* entrada, int tamanhoDaEntrada) {
    int flagParaTrocar;

    for (int i = 0; i < tamanhoDaEntrada - 1; i++) {
        flagParaTrocar = 0;
        for (int j = 0; j < tamanhoDaEntrada - i - 1; j++) {
            if (entrada[j] > entrada[j + 1]) {
                int temp = entrada[j];
                entrada[j] = entrada[j + 1];
                entrada[j + 1] = temp;
                flagParaTrocar = 1;
            }
        }

        if (flagParaTrocar == 0) {
            break;
        }
    }
}

int main() {
    int tamanhoDaEntrada = 100000;
    int* entrada = numerosAleatorios(tamanhoDaEntrada);

    clock_t inicio = clock();

    quickSort(entrada, 0, tamanhoDaEntrada - 1);
    // bubbleSort(entrada, tamanhoDaEntrada);
    mostrarEmTela(entrada, tamanhoDaEntrada);

    clock_t fim = clock();
    double tempo_execucao = ((double)(fim - inicio)) / CLOCKS_PER_SEC;
    printf("Tempo de execucao: %f segundos\n", tempo_execucao);

    free(entrada);
    return 0;
}