# passo 1

```
npm i typescript --save-dev
```

gera os arquivos package.json


# passo 2 

```
npx tsc --init
```

Gera o arquivo tsconfig

# passo 3

No arquivo `tsconfig.json` 

foi descomentado o item

 * `incremental: true` -> compila somente o que foi alterado
 * `outDir: "./dist"` -> foi colocado o valor ./dist quando o projeto for compilado os arquivos serão colocado na pasta
 * `"experimentalDecorators": true"` -> para nao ficar dando erro warnning nos annotations do sequelize
 * `"emitDecoratorMetadata": true"` -> para nao ficar dando erro warnning nos annotations do sequelize
 * `"strictNullChecks": false"` -> alterado para false
dist.

Foi incluido ao json esse trecho

```
  "include": [
    "src/**/*.ts"
  ],
```

Para compilar apenas arquivos da pasta `src`

# Passo 4

Comando para compilar o TS

```
npx tsc
```

# Passo 5

Instalar o TSLint

```
npm i tslint --save-dev
```

Comando para gera o tslint.json

```
npx tslint --init
```

# Avançando com Teste

Instalar o Jest 

```
npm i -D jest @types/jest ts-node --save-dev
```

Instalar SWC é um compilador feito em rust que consegue transpilar mais rapidamente o JS
acelerando os testes

```
npm i -D @swc/jest @swc/cli @swc/core
```

**Realizar a inicialização do Jest**

```
npx jest --init  
```

Sera criado o arquivo jest.config.ts

### uuid

```
npm i uuid @types/uuid 
```


## Camada de Infra

### Instalar o sequelize 

É o ORM geralmente utilizado pelo TS

```
npm install sequelize reflect-metadata sequelize-typescript 
```

### instalar o SQLite3

```
npm install sqlite3
```




### Ajuste no price do OrderItem
Olá Devs,

Para a aula "Relacionando Item com Product", foi necessário corrigir o método get price do OrderItem, pois, multiplicando o price com a quantidade estava gerando inconsistência em alguns testes.

Deste modo, o price ficou assim:

```
get price(): number {
return this._price;
}
```
E criamos o método  orderItemTotal, que ficou assim:

```
orderItemTotal(): number {
return this._price * this._quantity;
}
```
E pra relacionar com a classe Order, a função total passa a ficar da seguinte maneira:
```
total(): number {
return this._items.reduce((acc, item) => acc + item.orderItemTotal(), 0);
}
```

Deste modo, os preços unitário são retornados com sucesso. 



