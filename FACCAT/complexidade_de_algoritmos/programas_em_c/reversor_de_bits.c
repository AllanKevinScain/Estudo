#include <stdio.h>
#include <stdint.h>

uint32_t reverse_bits(uint32_t n, int num_bits) {
    if (num_bits == 0) {
        return 0;
    } else {
        return ((n & 1) << (num_bits - 1)) | reverse_bits(n >> 1, num_bits - 1);
    }
}

int main() {
    uint32_t num = 4294967293;
    uint32_t reversed_num = reverse_bits(num, 32);

    printf("Numero original: %u\n", num);
    printf("Numero invertido: %u\n", reversed_num);

    return 0;
}
