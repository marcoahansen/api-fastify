### Para testar


copie e cole o .env na pasta raiz 

Rode `docker build --no-cache -t ecommerce_api .`

Rode `docker run --rm -d -p 3000:3000/tcp ecommerce_api:latest `

é apra funcionar o acesso ao banco no EC2, mesmo rodando a API local

Porém devido a crédito de CPU minha instância pode ter desligado.
Caso isso aconteça me mande um e-mail para que eu inicie ela.

