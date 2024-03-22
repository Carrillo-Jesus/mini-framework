# Mini-Framework con Factory y Repository

Este es un pequeño proyecto que demuestra la implementación de un mini-framework utilizando los patrones de diseño Factory y Repository. El framework se basa en TypeScript y se construye con Vite como herramienta de empaquetado y desarrollo.

## Requisitos previos
- npm (se instala junto con Node.js)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Carrillo-Jesus/mini-framework
Navega al directorio del proyecto:

cd mini-framework
Instala las dependencias:
bash


npm install

##Uso
Para iniciar el servidor de desarrollo de Vite, ejecuta el siguiente comando:

npm run dev
Este comando compilará el código TypeScript y abrirá un servidor de desarrollo en http://localhost:5173. El servidor se actualizará automáticamente al realizar cambios en los archivos de origen.

Estructura del proyecto
src/main.ts: Punto de entrada principal del proyecto.
src/factory: Implementación del patrón Factory.
src/repository: Implementación del patrón Repository.
src/entities: Entidades utilizadas en el proyecto.
Patrones de diseño
Factory
El patrón Factory se utiliza para crear objetos de diferentes tipos de manera centralizada. En este proyecto, se implementa una fábrica para crear instancias de diferentes repositorios.

Repository
El patrón Repository se utiliza para abstraer el acceso y la manipulación de datos. En este proyecto, se implementan repositorios para diferentes tipos de entidades, como usuarios y productos.

Construir para producción
Para construir la aplicación para producción, ejecuta el siguiente comando:


npm run build
Este comando compilará el código TypeScript y generará un paquete optimizado en el directorio dist.

Contribución
Si deseas contribuir a este proyecto, siéntete libre de enviar una solicitud de extracción. Antes de hacerlo, asegúrate de seguir las convenciones de codificación.




