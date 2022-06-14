# Projeto para estudo sobre Web Storage

## Local Storage

### resumo:

Local Storage é tipo uma API do html5 que tem a função de armazenar dados da página na memória do 
navegador esses dados estão no formato de strings, os dados são passados como chave e valor(Key/Value), assim sendo utilizado de forma rápida e evitando requisições desnecessárias ao servidor, tem o tamanho máximo de 10mb pode ser usada em várias páginas no navegador e os dados são armazenados com tempo inderteminado p/ expira, esses dados não são enviados para o servidor, somente são recebidos pelo navegador quando a página é carregada.

#### 5 tipos de métodos + 2 de conversão

setItem(key , value) - Criar os dados no navegado<br />
getItem(key) - Pegar os dados já criados<br />
removeItem(key) - Remover os dados através da chave<br />
clear() - Remover todos os dados<br />
key(n) - É utilizado pra pegar as chaves pelo índice<br /><br />

JSON.stringify() - Converte javascript em string(Stringficando)<br />
JSON.parse() - Converte string em javascript <br />

## 

Session Storage

### resumo:

Session Storage é tipo uma API do html5 que tem a função de armazenar dados da página na memória do 
navegador esses dados estão no formato de strings, os dados são passados como chave e valor(Key/Value), assim sendo utilizado de forma rápida e evitando requisições desnecessárias ao servidor, tem o tamanho máximo de 5mb pode ser usada somente na página do navegador e os dados são armazenados com tempo determinado p/ expira, esses dados são perdidos assim que a página/navegador é fechada, esses dados não são enviados para o servidor, somente são recebidos pelo navegador quando a página é carregada.

#### 5 tipos de métodos + 2 de conversão

setItem(key , value) - Criar os dados no navegado<br />
getItem(key) - Pegar os dados já criados no vavegador<br />
removeItem(key) - Remover os dados através da chave<br />
clear() - Remover todos os dados<br />
key(n) - É utilizado pra pegar as chaves pelo índice<br /><br />

JSON.stringify() - Converte javascript em string(Stringficando)<br />
JSON.parse() - Converte string em javascript <br />





### Obs:

Essas funcionabilidades não substituem os cookies apenas possuem 
benefícios direrentes, os cookies ainda são usados quandos há a nescessidades 
de troca de dados com servidor.

##### leitura: https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/17_Day_Web_storages/17_day_web_storages.md