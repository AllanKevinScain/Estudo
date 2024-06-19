%{
#include <stdio.h>
%}

/* Definições de padrões */
DIGIT      [0-9]
LETTER     [a-zA-Z]
WHITESPACE [ \t\n]

%%

{DIGIT}+               { printf("Número: %s\n", yytext); }
{LETTER}+              { printf("Palavra: %s\n", yytext); }
{WHITESPACE}+          { /* Ignora espaços em branco */ }
.                      { printf("Caractere não reconhecido: %s\n", yytext); }

%%

int main(int argc, char **argv) {
    yylex();
    return 0;
}

int yywrap() {
    return 1;
}
