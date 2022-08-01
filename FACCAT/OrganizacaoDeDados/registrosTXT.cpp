#include <stdio.h>
#include <stdlib.h>


int main() {
	int escolha = 0;
	char p[100];
	int t;
	FILE *arquivoTexto;
	
		printf("1 - Escrever 10 mil vezes seu nome\n");
		printf("2 - Ler os 10 mil nomes\n");
		printf("6 - Para sair\n\n\n");
		scanf("%d", &escolha);
		switch(escolha){
			case 1:
				arquivoTexto = fopen("listaTXT.txt", "w");
				printf("Digite seu nome: ");
				scanf("%s", &p);
				for(t = 0; t < 10; t++) {
				   	fwrite(p, 1, 100, arquivoTexto);
				   	fwrite("\n", 1, 1, arquivoTexto);
				};
				
				fclose(arquivoTexto);
	
				break;
			
			case 2:
				arquivoTexto = fopen("listaTXT.txt", "r");
				if(!arquivoTexto) {
					printf("Erro ao tentar ler o arquivo!");
					exit(1);
				}
				while(fread(p, 1000, 1, arquivoTexto)){
					printf("%s\n", p);
				};
				fclose(arquivoTexto);
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
