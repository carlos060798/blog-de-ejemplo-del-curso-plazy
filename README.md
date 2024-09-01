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
docker save nombre:dela imagen > nombrede archivo.zip => guarda una imagen de docker en un archivo zip
docker load < nombrede archivo.zip => carga una imagen de docker de un archivo zip

## contenedor
siquieres desplegar una neubva instancia de la imagen puedes 
docker run -it --rm -d -p 8080:80 --name nombrecontenedor nombredelaimagen=>  crea un contenedor de docker a partir de una imagen 


docker run -it --rm -d -p 8080:80 -v ubicacion del carpeta del volumen --name nombrecontenedor nombredelaimagen
=>  crea un contenedor de docker a partir de una imagen con un volumen
docker ps => lista los contenedores de docker 

docker stop idcontenedor => detiene un contenedor de docker 

docker inspect idcontenedor => muestra la configuracion de un contenedor de docker 
docker network create red2 => crea una red de docker 



## compartir contedores de docker
docker login => loguearse en docker hub
docker build -t nombreuser:tag/nombreimagen:tag  . => crea una imagen de docker con referencia a un repositorio con ususario y nombre de imagen
docker push nombre:tag => sube una imagen de docker a un repositorio en docker hub
docker pull nombre:tag => descarga una imagen de docker de un repositorio



## docker compose
docker  compose build => es una herramienta que permite definir y ejecutar aplicaciones docker de varios contenedores
docker-compose up -d => permite levantar los contenedores de docker para que corran
docker-compose.yml => crea una imagen de docker con referencia a un repositorio con ususario y nombre de imagen
