#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <time.h>

int *arrayOfNumbers(int qty) {
    int* array = (int*)malloc(qty * sizeof(int));

    if (array == NULL) {
        printf("Erro: Falha na alocação de memória.\n");
        exit(1);
    }

    for (int i = 0; i < qty; i++) {
        array[i] = i + 1;
    }

    return array;
}

long long int miller(long long int base, long long int exp, long long int mod) {
    long long int result = 1;
    base = base % mod;
    while (exp > 0) {
        if (exp & 1) {
            result = (result * base) % mod;
        }
        exp = exp >> 1;
        base = (base * base) % mod;
    }

    return result;
}

bool millerRabin(long long int n, int k) {
    if (n == 2) return true;
    if (n <= 1 || (n > 2 && n % 2 == 0)) return false;

    long long int d = n - 1;
    int s = 0;
    while (d % 2 == 0) {                                    n
        d = d / 2;
        s++;
    };

    for (int i = 0; i < k; i++) {
        long long int a = rand() % (n - 4) + 2;
        long long int x = miller(a, d, n);

        if (x == 1 || x == n - 1) continue;

        for (int j = 0; j < s - 1; j++) {
            x = miller(x, 2, n);

            if (x == 1) return false;
            if (x == n - 1) break;
        }

        if (x != n - 1) return false;
    }

    return true;
}

int main() {
    int *array;
    int ateQualNumeroSeraTestado = 10000;

    array = arrayOfNumbers(ateQualNumeroSeraTestado);

    // printf("os numeros primos ate %d encontrados foram:\n", ateQualNumeroSeraTestado);

    clock_t inicio = clock();
    for (int i = 0; i < ateQualNumeroSeraTestado; i++) {
        if (millerRabin(array[i], ateQualNumeroSeraTestado)) {
            printf("%d numero primo \n", array[i]);
        }
    }
    clock_t fim = clock();
    double tempo_execucao = ((double)(fim - inicio)) / CLOCKS_PER_SEC;
    printf("Tempo de execucao: %f segundos\n", tempo_execucao);

    free(array);
    return 0;
}