# Uso del Espacio de Color LAB en CSS

El espacio de color CIELAB, conocido como `lab`, en CSS es una forma de representar colores que se basa en la percepción humana. Ofrece una manera de describir colores de manera más precisa que otros modelos como RGB o HSL.

## Sintaxis de la Función `lab()`
- **Sintaxis General**: `lab(luminosidad a b)`
- **Ejemplo**: `lab(100 0 100)`
  - `100`: Luminosidad. Rango de 0 (negro) a 100 (blanco).
  - `0`: Cromaticidad a. Representa el eje verde a rojo/magenta. Puede ser positivo o negativo.
  - `100`: Cromaticidad b. Representa el eje azul a amarillo. También puede ser positivo o negativo.

## Características del Espacio de Color LAB
- **Percepción Humana**: Diseñado para ser más coherente con la forma en que los humanos ven los colores.
- **Luminosidad (L)**: Mide la claridad u oscuridad del color.
- **Cromaticidad (a y b)**: Representan los colores en dos ejes: verde a rojo/magenta (a) y azul a amarillo (b).

El uso del espacio de color LAB es útil para especificar colores de una manera que se alinea más estrechamente con la percepción humana de los colores, lo que lo hace valioso en diseño web y gráfico.

https://observablehq.com/@d3/lab-color-picker