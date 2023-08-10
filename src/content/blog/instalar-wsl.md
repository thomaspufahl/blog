---
id: 7a0bcba5-03ca-44a4-9746-a7ba62fa63fa
recommended: false
author: Thomas Pufahl
date: 2023-08-10
lastmod: 2023-08-10
title: "LINUX EN WINDOWS: Cómo instalar WSL paso a paso."
description: "WSL es una característica de Windows que permite ejecutar distribuciones de Linux en Windows. WSL 2 es la versión más reciente de WSL y ofrece un mejor rendimiento y compatibilidad con las aplicaciones de Linux. En este artículo, te mostraremos cómo instalar WSL 2 en Windows 10/11."
image: {
    src: "/images/thumbnail/3-instalar-docker.jpg",
    alt: "A picture of Ubuntu and Windows logo"
}
draft: false
---

## Instalación Sencilla de WSL 2 en Windows 🐧

### Requisitos previos 🧐

* Windows 10 versión 2004 o superior
* Privilegios de administrador en tu cuenta de usuario

### Instalación 🚀

1. Abre PowerShell como administrador. Para hacerlo, busca "PowerShell" en el menú de inicio, haz clic derecho en "Windows PowerShell" y selecciona "Ejecutar como administrador".

2. Ejecuta el siguiente comando para iniciar la instalacion de WSL 2 y actualizar el kernel:
    ~~~
    wsl --install
    ~~~

3. El comando realizará los siguientes pasos de manera automática:
    * Habilitar la característica de Windows Subsystem for Linux
    * Habilitar la característica de Plataforma de Máquina Virtual
    * Descargar e instalar el kernel de Linux de WSL 2
    * Establecer WSL 2 como versión predeterminada cuando se instalen nuevas distribuciones
   
4. Durante este proceso, es posible que se te pida reiniciar tu computadora. Si es así, siguie las indicaciones para reiniciar.
5. Una vez que la instalación se complete, podrás elegir una distribución de Linux para instalar desde la Microsoft Store. Puedes bucar "Linux" en la Microsoft Store y seleccionar la distribución que prefieras (por ejemplo, Ubuntu, Debian, Fedora).
6. Inicia la distribución de linux instalada desde el mnu de inicio o ejecutando su nombre en PowerShell. Por ejemplo:
    ~~~
    ubuntu
    ~~~
7. La primera vez que inicies tu distribución, se configurarán algunos archivos. Espera a que se complete este proceso.

### ¡Listo! 💯

Ahora puedes usar WSL 2 en tu computadora. Si quieres saber más sobre WSL 2, puedes consultar la [documentación oficial](https://docs.microsoft.com/en-us/windows/wsl/about) 😉. 

### Plus ✨

Si estás utilizando Windows 11, se puede configurar la aplicacion "Terminal" para que inicie directamente en WSL. Para hacerlo, sigue estos pasos:

1. Abre la aplicación "Terminal" desde el menú de inicio.
2. Haz clic en el menú desplegable en la parte superior de la ventana y selecciona "Configuración".
3. En la sección "Arranque", selecciona "Perfil predeterminado" y luego selecciona la distribución de Linux que prefieras.
4. Cierra la ventana de configuración y cierra la aplicación "Terminal".
5. Abre la aplicación "Terminal" desde el menú de inicio. Debería abrirse directamente en la distribución de Linux que seleccionaste.


