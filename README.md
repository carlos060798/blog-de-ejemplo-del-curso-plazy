# conceptos basicos de docker

## dockerfile
archivo que contiene las instrucciones para crear una imagen de docker  

## comando simples

docker images => lista las imagenes de docker
docker ps => lista los contenedores de docker

## imagen
docker build  . =>  crea una imagen de docker a partir de un dockerfile pero sin referencia  de nombre
docker build  -t nombre:tag . =>  crea una imagen de docker a partir de un dockerfile con referencia de nombre
docker rif -f  =>  removemos una imagen de docker 
docker pull nombre:tag => descarga una imagen de docker de un repositorio
docker image -t  nombre:tag  nueva:tag => cambia el tag de una imagen de docker

## contenedor
siquieres desplegar una neubva instancia de la imagen puedes 
docker run -it --rm -d -p 8080:80 --name nombrecontenedor nombredelaimagen=>  crea un contenedor de docker a partir de una imagen 


docker ps => lista los contenedores de docker 

docker stop idcontenedor => detiene un contenedor de docker

