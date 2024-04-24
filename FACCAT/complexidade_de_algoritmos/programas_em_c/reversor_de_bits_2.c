#include <stdio.h>
#include <stdint.h>

uint32_t reverseBitsHelper(uint32_t n, int bitsLeft) {
    if (bitsLeft == 0)
        return 0;

    return ((n & 1) << (bitsLeft - 1)) | reverseBitsHelper(n >> 1, bitsLeft - 1);
}

uint32_t reverseBits(uint32_t n) {
    return reverseBitsHelper(n, 32);
}

int main() {
    uint32_t n = 43261596;
    printf("Entrada: %u\n", n);
    printf("Saida: %u\n", reverseBits(n));
    return 0;
}
