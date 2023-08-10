---
id: 0fc5f1a1-7474-4e77-b017-694615ead565
recommended: true
author: Thomas Pufahl
date: 2023-08-05
lastmod: 2023-08-10
title: 'CodeBlocks: código por defecto en nuevos archivos'
description: 'En CodeBlocks 20.03, es posible configurar un código por defecto que se incluirá automáticamente al crear un nuevo archivo. Esto puede ser útil cuando trabajamos con plantillas o queremos tener un esqueleto inicial para nuestros proyectos. En este artículo, aprenderemos cómo hacerlo paso a paso.'
image: {
    src: "/images/thumbnail/3-instalar-docker.jpg",
    alt: "A picture of CodeBlocks logo"
}
draft: false
---
## Introducción

En CodeBlocks 20.03, es posible configurar un código por defecto que se incluirá automáticamente al crear un nuevo archivo. Esto puede ser útil cuando trabajamos con plantillas o queremos tener un esqueleto inicial para nuestros proyectos. En este artículo, aprenderemos cómo hacerlo paso a paso.

### Paso 1: Acceder a las plantillas de código

Primero, debemos asegurarnos de tener instalado CodeBlocks 20.03 en nuestro sistema. Una vez abierto el programa, seguimos estos pasos:

1. En la barra de menú, seleccionamos "Settings" (Configuración) y luego "Editor" (Editor).
![paso-1.png](/images/1-first-step.png)
2. En el panel de la izquierda seleccionamos la pestaña "Default code" (Código por defecto), veremos un cuadro de texto vacío donde podemos escribir nuestro código por defecto.
![paso-2.png](/images/1-second-step.png)

### Paso 2: Escribir el código por defecto

En este paso, escribiremos el código que deseamos que aparezca automáticamente en los nuevos archivos. Puede ser un encabezado estándar, una estructura básica de un programa o cualquier otra plantilla que necesitemos para empezar a trabajar.

Por ejemplo, si estamos trabajando con el lenguaje de programación C++, podríamos establecer un código por defecto como este:

***Corroborar el tipo de archivo en la parte superior → "Type of file" (Tipo de archivo).***	
~~~
#include <iostream>

using namespace std;

int main()
{
	// Tu codigo ;)
	
	return 0;
}
~~~

### Paso 3: Guardar los cambios

Para finalizar simplemente debemos hacer clic en el botón "OK" (Aceptar) y los cambios se guardarán automáticamente. A partir de ahora, cada vez que creemos un nuevo archivo, el código por defecto se incluirá automáticamente.

### Conclusión

Configurar un código por defecto en CodeBlocks 20.03 puede ahorrarnos tiempo y esfuerzo al crear nuevos archivos, especialmente si trabajamos con plantillas o estructuras comunes en nuestros proyectos.

Asegúrate de guardar la configuración. 😉