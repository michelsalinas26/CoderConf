# CoderConf
### Link de figma https://www.figma.com/file/6DXKX92pFdveXdvW44xifW/CoderConf?node-id=0%3A1

## Link de repositorio Coderhouse https://github.com/coderhouseit/ch-conf-2021-02
## Link de repositorio donde se creo el proyecto https://github.com/michelsalinas26/CoderConf
## Link de gitpage donde se creo el proyecto https://michelsalinas26.github.io/CoderConf/


## Información

La rama main tiene la última actualización del proyecto.

El proyecto está prácticamente terminado, solo se modificarían algunos tamaños de fuentes, optimización de imágenes, completar la documentación en Readme.md 

## Actualización

El proyecto está 100% terminado.

## Preprocesador Sass

Instalar NodeJS desded nodejs.org. Después de haber instalado node, abrir la terminal y entrar al directorio del proyecto.
Ejecutar npm run watch-css para poder modificar archivos sass y que se cambien automáticamente en css.
El package.json ya está configurado dentro del proyecto.
En el archivo package.json, dentro de "scripts", se crearon 2 lineas para utilizar Sass. 
En buil-css se configuró el nombre de los archivos sass y del archivo css.
En watch-css se usa nodemon.
Para instalar node sass y nodemon usar los comandos:
npm install -D node-sass nodemon

## Configurar la fecha del Evento:

Para configurar la fecha del evento dirigirse al archivo js/globals.js y modificar la fecha en la variable “evenday”. Esta fecha debe escribirse en el siguiente formato mm/dd/yyyy hh:mm:ss.
Tenga en cuenta que esta fecha determina el comportamiento del reloj y el renderizado de los disertantes.
Cuando el dia del evento se cumpla en la agenda de speaker se resaltará el speaker que esta hablando en el horario de visita.

## Modificar y Añadir Speaker:

Modificar el archivo data/speakers.json para añadir o modificar los speaker de la aplicación. El orden de escritura en este archivo no incide en el orden de aparición de los disertantes en el sitio.
Los speaker se ordenan teniendo en cuenta el orden de charla. (propiedad horaria). 
El nombre en las propiedades json debe mantenerse en cada nuevo speaker agregado.

## Modificar y Añadir Sponsors

Modificar el archivo data/sponsors.json para añadir o modificar los sponsors de la aplicación. El orden de escritura en este archivo no incide en el orden de aparición de los sponsors en el sitio.
El nombre en las propiedades json debe mantenerse en cada nuevo speaker agregado.
La plantilla actual admite hasta 6 sponsor en mobile y escritorio.
El posible incluir imagenes de origen remoto al editar la propiedad "logo" de cada sponsor. 

## Integración con firebase:

Modificar las credenciales en el archivo data/firebaseconfig.json para integrar la aplicación con su propia base de dato en tiempo real. 
Es posible editar las rutas en el archivo routes.js con la intención de customizar el origen de la información de la aplicación (speakers y sponsors) y las rutas POST para almacenar los inscriptos y nuevos sponsors interesados.

## Integración con reCaptcha:

El recaptcha actual admite peticiones del dominio de prueba, localhost y coder-conf.com

## Seguridad
Al publicar el sitio se recomienda restringir el acceso anónimo a los archivos en la carpeta data.
Firebase: La base de datos de prueba admite escritura pública. Al momento de llevar el sitio a producción se recomienda modificar las reglas de seguridad.
