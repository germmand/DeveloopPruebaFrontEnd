# DSFrontEnd

El proyecto fue generado con la [Angular CLI](https://github.com/angular/angular-cli) versión 1.7.3.

## Diseño

El proyecto usa [Angular Material](https://material.angular.io/) para el diseño de la interfaz, el cual trabaja con componentes de Material Design para una interfaz sencilla y agradable al usuario.

## Estructura

El proyecto está estructurado siguiendo los patrones de `Core module`, `Shared module` y `Feature modules`.
Cada `Feature Module` tiene su servicio y sus componentes por separado. Así como también las dependencias de otros módulos que cada `Feature Module` necesita.

De tal manera que se tenga una estructura organizada y limpia, así como también muy extensible y/o mantenible.

## Pasos para montar la aplicación

* Clonarse el proyecto: `git clone https://github.com/germmand/DeveloopPruebaFrontEnd.git`.
* Moverse a la carpeta clonada: `cd DeveloopPruebaFrontEnd`.
* Instalar las dependencias: `npm install`.
    * Es necesario tener Angular CLI instalado, por lo que si no se tiene la Angular CLI instalado es necesario hacer: `npm install -g @angular/cli`.
* Correr la aplicación: `ng serve`.
* Abrir: `http://localhost:[puerto]/` (4200 puerto por defecto) en el navegador, o cualquier otro puerto que se haya indicado al ejecutar `ng serve`.

## Notas
* La comunicación entre el _frontend_ y el _backend_ se hace totalmente en `JSON`, exceptuando el _endpoint_ que recibe el archivo el cual tiene un `Content-Type` de `multipart/form-data`.
* **Todas las validaciones se hacen en el _backend_.**

## BUGS
* Al hacer click sobre la celda de la rejilla que se quiere editar, no se enfoca el campo _input_ de una vez, por lo que sólo se hace visible y hay que hacer _click_ nuevamente para activarlo. 
* El campo CP solo puede tener una longitud de 5, ni más ni menos. Cuando sobrepasa éste límite, el exceso se marca en rojo, pero cuando está por debajo del limite, debería marcarse en rojo completamente. Éste _bug_ es muy fácil de solucionar.
* Ciertamente otros.

## Tareas que faltaron por completar
* Cuando el campo de fecha tiene un formato inválido, presentar un [Tooltip](https://material.angular.io/components/tooltip/overview) indicando el formato correcto de la fecha. Ésto se debe al primer _bug_ descrito en los _bugs_ del proyecto [DSBackEnd](https://github.com/germmand/DeveloopPrueba).