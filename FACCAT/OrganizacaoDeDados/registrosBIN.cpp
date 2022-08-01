#include <stdio.h>
#include <stdlib.h>

typedef struct {
	char nome[100];
} Pessoa;

int main() {
	int escolha = 0;
	Pessoa p;
	int t = 0;
	FILE *arquivoBinario;
	
		printf("1 - Escrever 10 mil vezes seu nome em um arquivo binário\n");
		printf("2 - Ler os 10 mil nomes do arquivo binário\n");
		printf("6 - Para sair\n\n\n");
		scanf("%d", &escolha);
		switch(escolha){
			case 1:
				arquivoBinario = fopen("listaBIN.bin", "ab");
				printf("Digite seu nome: ");
				fflush(stdin);
				gets(p.nome);
				
				for(t = 0; t<10000; t++){
					fwrite(&p, sizeof(Pessoa), 1, arquivoBinario);
				};
				fclose(arquivoBinario);
	
				break;
			case 2:
				arquivoBinario = fopen("listaBIN.bin", "rb");
				if(!arquivoBinario) {
					printf("Erro ao tentar ler o arquivo!");
					exit(1);
				}
				while(fread(&p, sizeof(Pessoa), 1, arquivoBinario)){
					printf("%s\n", p.nome);
				};
				fclose(arquivoBinario);
				break;
			default:
				if(escolha == 6) {
					printf("Ate mais!\n");
				} else {
					printf("Essa opcao nao e valida!\n");
				}
				break;
		}
		
	
	return 0;
}
