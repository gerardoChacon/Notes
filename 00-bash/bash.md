# Graphic User Interface [GUI]:
A nivel de Software, interactuamos principalmente, con dos interfaces graficas de usuario:
##  1.	Desktop Environment/Entorno de escritorio:
Interfaz gráfica basada en ventanas (Windows, MacOS, Linux).
Utilizándolo mediante clics
##  2.	Shell:
Terminal, ejecuta comandos(scripts) en un lenguaje de instrucciones (Bash). 
Utilizándolo mediante comandos como
- Print working director = [pwd]
- Listar las carpetas = [ls] 
- A los comandos se les puede añadir un "flag", que suele ser una letra o una palabra corta    que le da características extra a un comando, en el caso de " ls -a", este flag me ayuda a listar "todo", tanto archivos y carpetas visible como oculto   
-	Cambiar directorio = [cd] 
-	Crear un archivo = [touch]
-	Crear una carpeta = [mkdir]
-	Limpiar pantalla = [clear]
# Command Line Interface [CLI]:
A los conjuntos/paquetes de instrucciones que se ejecutan en la Shell, se les conoce como aplicaciones.
Descargar un conjunto de comandos que podemos descargar para la terminal:
-	Git
# Ruta absoluta:
Dentro de una computadora va a haber un sistema basado en carpetas y archivos a la carpeta principal se le conoce como [/root] (raíz), a cada carpeta se le conoce como un [nodo] y a cada archivo se le conoce como [vértice] (la línea que conecta los nodos).
el camino por el que se hace referencia a un archivo con respecto a los demás que se encuentran ubicados en el mismo sistema. Es decir, una ruta que empieza a partir de la raíz del sistema de archivos [raíZ] hasta la carpeta a la cual queremos llegar.
Interactuamos con nuestras carpetas y archivos, mediante el uso de nodos y vértices, que en conjunto forman un sistema de archivos.
Cada sistema operativo, tiene su propio sistema de archivos, en donde la carpeta principal recibe el nombre de "root".
# Ruta relativa:
Una ruta incompleta, la cual no empieza a través de la carpeta “root”, sino que se accede directo a un nodo para llegar a otro.
# ¿Qué es Bash y por qué debes aprenderlo?
Bash [Bourne-Again-Shell]  es interprete de línea de comando para sistemas operativos vasados en Unix. Es una herramienta útil para automatizar tareas y realizar tareas administrativas es un sistema. Al aprender Bash, puedes ahorrar tiempo al automatizar tareas y realizar tareas administrativas de forma más eficiente. 
Bash  es interprete de línea de comando para sistemas operativos vasados en Unix. Es una herramienta útil para automatizar tareas y realizar tareas administrativas es un sistema. Al aprender Bash, puedes ahorrar tiempo al automatizar tareas y realizar tareas administrativas de forma más eficiente. 
# ¿Qué es y para qué se utiliza?
Bash es un lenguaje de programación de scripting ampliamente utilizado en sistemas operativos basados en Unix, como Linux y macOS. Se utiliza para automatizar tareas comunes, como la ejecución de comandos, la creación y modificación de archivos y la administración de procesos.
Preguntas de Bash:
1.	¿Cómo ejecuto un script de Bash?
2.	¿Cómo puedo ver los comandos disponibles en Bash?
3.	¿Cómo puedo ver los argumentos de un comando en Bash?
4.	¿Cómo puedo ejecutar un comando en Bash con argumentos?
5.	¿Cómo puedo ejecutar un comando en Bash con variables?
6.	¿Cómo puedo ejecutar un comando en Bash con un bucle?
7.	¿Cómo puedo ejecutar un comando en Bash con una condición?
8.	¿Cómo puedo ejecutar un comando en Bash con una función?
9.	¿Cómo puedo ver los errores en Bash?
10.	¿Cómo puedo ver los archivos en Bash?

# Diferencias con otros lenguajes de programación
Bash es un lenguaje de programación de scripting que se utiliza para automatizar tareas. A diferencia de otros lenguajes de programación, Bash no es un lenguaje de programación orientada a objetos, sino un lenguaje de scripting. Esto significa que Bash no tiene clases, objetos, herencia, etc. Tampoco tiene una sintaxis estricta como otros lenguajes de programación. Esto significa que Bash es más fácil de aprender y usar.

Otra diferencia entre Bash y otros lenguajes de programación es que Bash está diseñado para interactuar con el sistema operativo. Esto significa que puede usar comandos del sistema operativo para realizar tareas. Esto hace que Bash sea útil para automatizar tareas como la administración de sistemas.

# Hola Mundo
“Hola Mundo” es un ejemplo clásico que se utiliza para mostrar el funcionamiento básico de un lenguaje de programación. Ejemplo: En este ejemplo, se imprime el texto “Hola Mundo” en la consola:

_echo “Hola Mundo”_ 
# Sintaxis
Bash es un lenguaje de scripting de Unix que se utiliza para automatizar tareas comunes. La sintaxis de Bash es relativamente sencilla y se basa en palabras clave, comandos, variables, parámetros y operadores. La indentación no es necesaria, pero se recomienda para mejorar la legibilidad. El conjunto de caracteres utilizado en Bash es ASCII, y la sensibilidad a mayúsculas y minúsculas es importante. Los comandos y variables deben escribirse exactamente como se definen para que Bash los reconozca.
# Comentarios 
Los comentarios en Bash son líneas de texto que no son interpretadas como parte del código. Se usan para proporcionar información adicional sobre el código, como explicaciones, notas, o instrucciones para el desarrollador. Los comentarios también se pueden usar para deshabilitar código temporalmente, sin tener que eliminarlo completamente.
Ejemplo:
_# Este código es un comentario._
# Variables
La manipulación de datos es un tarea fundamental de un lenguaje de programación. Para trabajar con datos necesitamos guardarlos en variables. Una [variable] es un contenedor para almacenar datos que retiene su nombre y puede cambiar su valor a lo largo del tiempo. En los siguientes ejemplos vamos a ver varios tipos de datos que puedes guardar en variables. Ejemplo:
Este código declara una variable llamada "libro" y le asigna el valor de una cadena 14 de texto que contiene el título de un libro. Luego, imprime el valor de la variable "libro" en la consola.

_libro="El Programador Pragmático"_

_echo $libro_

[Texto] es un tipo de dato útil para guardar información como números telefónicos y colores, entre otros. También podemos guardar datos como [números] enteros y decimales. Estos datos se usan para realizar operaciones matemáticas y representar valores de peso, dinero, entre otros.
El tipo de dato [buleano] representa los valores de verdadero y falso. Este tipo de datos es útil, por ejemplo, para para indicar si un usuario está autorizado a acceder a una app o no, entre varios usos. Es importante saber que, en el mundo del código binario, el número 1 representa verdadero y 0 representa falso.
Las [listas] en Bash son una estructura de datos que nos permite almacenar una colección ordenada de elementos. Estos elementos pueden ser de cualquier tipo, desde números hasta sublistas. También los vas a encontrar con otros nombres como arreglos, matrices, arrays, etc.
Existen listas de texto, números y datos mixtos
Ejemplo:

_datosMixtos=("Exto" 10 true ["lista" "dentro" "otra" "lista" ])_

_$ echo ${datosMixtos[3]} # Imprime [lista dentro otra lista ]_

_$ echo ${datosMixtos[1]} # Imprime 10_

En Bash, puedes acceder a un elemento de una lista dentro de otra lista utilizando la notación de índices. Aquí tienes un ejemplo de cómo acceder al elemento "dentro" de la lista dentro de la lista "datosMixtos":

_datosMixtos=("Texto" 10 true ["lista" "dentro" "otra" "lista" ])_

_ echo ${datosMixtos[3]} # Imprime [lista dentro otra lista ]_

Los [objetos] en Bash son una forma de almacenar y organizar datos mapeándolo de uno a uno. Estos datos se almacenan en forma de pares clave-valor, donde la clave suele ser una cadena de texto y el valor puede ser cualquier tipo de dato. También los vas a encontrar con otros nombres como mapas, diccionarios, etc.
Ejemplo:

_jugadoresManU=( [8]="Bruno Fernandes" [10]"Marcus Reshford" [18]"Casemiro" )_

_$ echo ${jugadoresManU[8]} # Imprime Bruno Fernandes_
También podemos mapear de texto a texto.
Ejemplo:

_ligas=( [MX]="LigaMX" [ES]="La Liga" [EN]="Premier League" [FR]="Ligue One" [IT]="Serie A" [GE]="Bundesliga")_

E incluso podemos mapear de texto a listas de texto, entre muchas otras opciones.
Este código establece un objeto llamado 􀁱emails􀁲que contiene dos pares clavevalor.
Cada clave es un nombre de persona y el valor es un arreglo de direcciones
de correo electrónico asociadas con esa persona.

_emails=( ["Gerardo"]="elchac97@gmail.com caag971121@gmail.com" ["Rebeca"]="rebecapeimber@hotmail.com")_

_miCompu=(["Marca"]="MSI" ["Modelo"]=2023 ["Procesador"]="i7" ["RAM"]="32GB")_

Las [constantes] son variables que no pueden ser reasignadas. Esto significa que una vez que se asigna un valor a una constante, este no puede ser cambiado.
Ejemplo:
Esta línea de código establece una constante llamada 􀁱pi􀁲con un valor de 3.14159265359. Esta constante se puede usar para almacenar un valor numérico que no cambiará a lo largo del programa. 

_pi=3.14159265359_

_readonly pi_

_echo ${pi} # Imprime 3.14159265359_

_saludo='Hola planeta'_

_readonly saludo_

_echo ${saludo} # Imrprime Hola planeta_

# Condicionales

Los [condicionales] son estructura de control de flujo en Bash, es decir, controlan el flujo del código. Permiten ejecutar una sección de código si una condición es verdadera. También permiten ejecutar otra sección de código, si la condición es falsa. 

_if [ ${a} % 2 = 0 ]; then echo "Es par" else echo "Es impar" fi_

Adicionalmente, los condicionales permiten ejecutar varias secciones de código de acuerdo a varias condiciones.



# Operadores 
Los operadores [aritméticos] en Bash son usados para realizar operaciones matemáticas básicas. Estos operadores incluyen sumar, restar, multiplicar, dividir, entre otros.
Ejemplo:

_echo $((1+1))_ # 2

_echo $((1-1))_ # 0

_echo $((10*3))_ # 30

_echo $((10/2))_ # 5

Los operadores [comparativos] en Bash son usados para comparar dos valores y
determinar si son iguales o diferentes y mayores o menores.

Igual [eq]
Diferente [ne]
Mayor que [ge]
Menor que [lt]

_echo $(if [ 5 -eq 4 ]; then echo "true"; else echo "false"; fi) # false_

_echo $(if [ 4 -ne 4 ]; then echo "true"; else echo "false"; fi) # false_

_echo $(if [ 5 -ge 4 ]; then echo "true"; else echo "false"; fi) # true_

_echo $(if [ 3 -lt 4 ]; then echo "true"; else echo "false"; fi) # true_

Los operadores [lógicos] en Bash se usan para realizar comparaciones entre valores y devolver un valor booleano (verdadero o falso). Estos operadores puede ser útiles, por ejemplo, si deseamos saber si un􀁯animal􀁰es un gato y es un mamífero (al mismo tiempo).

Ejemplo:
Este código muestra el uso de los operadores lógicos "y" y "o" para evaluar expresiones booleanas. El operador "y" devuelve verdadero si ambas expresiones son verdaderas, de lo contrario devuelve falso. El operador 􀁯o􀁰devuelve verdadero si al menos una de las expresiones es verdadera, de lo contrario devuelve falso.

_echo $((1 && 1)) #1_

_echo $((1 && 0)) #0_

_echo $((0 && 1)) #0_

_echo $((0 && 0)) #0_

_echo $((1 || 1)) #1_

_echo $((1 || 0)) #1_

_echo $((0 || 1)) #1_

_echo $((0 || 0)) #0_

# Operadores y condicionales
 
En este caso podemos ver que el código que se ejecuta depende de varios valores. Este código comprueba si una variable llamada entero es igual a 99 o 100. Si es igual a 99, imprime "Es 99" en la consola. Si es igual a 100, imprime "Es 100" en la consola. Si no es ni 99 ni 100, imprime 􀁱No 99 ni 100􀁲en la consola.

_entero=100_

_$ if [ $entero -eq 99 ]; echo "Es 99" elif [ $entero -eq 100 ]; then echo "Es 100" else: echo "No es 99 ni 100"; fi_

# Bucles

Los [bucles] son otra estructura de control de flujo que se utilizan para iterar sobre
una secuencia de elementos. También se los llama loops o ciclos.

Bucle [for]

Este código itera sobre una lista de numeros e imprime cada elemento de la lista en
la consola.

_for numero in "${numeros[@]}"_

_do_

_echo "${numero}"_

_done_

[while] es un tipo de bucle en Bash que se usa para ejecutar una serie de instrucciones
mientras se cumpla una condición. Esta condición se evalúa antes de cada iteración
del bucle.

_primerNumero=1_

_ultimoNumero=10_

_while [ $primerNumero -le $ ultimoNumero ]_

_do _

_echo $primerNumero_

_primerNumero=$((primerNumero+1)) done_

Ten cuidado de no inclur una condición para parar el bucle. Esto podría seguir corriendo tu código indefinidamente hasta congelar tu computador.

# Funciones

En Bash, una función es un bloque de código diseñado para realizar una tarea específica y se puede reutilizar en varias partes el código. Las funciones se pueden definir para realizar cualquier tarea, desde realizar cálculos hasta mostrar mensajes en la pantalla.

Esta función toma dos argumentos (primero y segundo) de forma dinámica y los suma. Luego, imprime el resultado en la consola. Esta función se llama dos veces con diferentes argumentos para mostrar los resultados de la suma.

_function sumar{_

    _echo $(($1 + $2))_
    
_}_

_sumar 2 2_ # 4
_sumar 3 4_ # 7

También puedes crear funciones que retornen un valor. Esto significa que una vez que se ejecuta una función, el valor devuelto se puede usar en otra parte del código.

_resultado=$(sumar 3 4)_
_echo $resultado_ #7

Esta función imprime el primer elemento de una lista. En este caso, la lista es una lista de animales, y la función imprime el primer elemento de la lista, que es "perro". Funciones como esta son útiles para evitar la repetición de código y para ahorrar tiempo.

_imprimirPrimerElemento() {_
    _lista=("@)_
    _echo ${lista[1]}_
_}_

_animales=('perro' 'gato' 'tortuga')_
_imprimirPrimerElemento "$animales[@]"_ # perro

_numeroMasAlto() { if (($1 > $2)); then echo "$1 es más grnade que $2"; else "$1 es más pequeño que $2"; fi; }_ 
_numeroMasAlto 4 3_ # 4 es más grande que 3

# Modulos

Los módulos son una forma de incluir código externo de otro archivo. Esto permite a los desarrolladores reutilizar código y ahorrar tiempo al escribir código.

_restar() {_
    _echo $(($1 - $2))_
_}_

El código exporta la función para que pueda ser usada en otros archivos. Exportar es una forma de compartir código entre archivos. Esto significa que un archivo puede exportar variables, funciones y objetos para que otros archivos los puedan usar.

_source ./restar.sh_
_restar 10_ 3 #7