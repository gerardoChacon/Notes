# Resets en CSS

Los "resets" en CSS son fundamentales para crear una base consistente en el diseño web. Sirven para neutralizar los estilos predeterminados de los navegadores, asegurando una apariencia más uniforme en diferentes plataformas.

## Propósito de los Resets en CSS
Los navegadores tienen estilos predeterminados para elementos HTML, lo que puede llevar a diferencias en la apariencia de una página web cuando se ve en distintos navegadores. Un reset de CSS busca eliminar estas diferencias proporcionando un punto de partida coherente.

## ¿Qué Hacen los Resets?
Un reset típicamente incluye:

1. **Eliminar Márgenes y Rellenos**: Se establecen los márgenes y rellenos de todos los elementos a cero.
2. **Unificar Estilos de Tipografía**: Establece un estilo consistente para tamaños de fuente, altura de línea, etc., para elementos como `h1`, `h2`, `p`.
3. **Estilos de Listas**: Remueve estilos predeterminados en listas, como sangrías y estilos de viñetas.
4. **Bordes y Otros Estilos**: Elimina bordes por defecto en ciertos elementos y establece estilos base para otros.
5. **Elementos de Formulario**: Busca dar una apariencia más coherente a los elementos de formulario en diferentes navegadores.

## Ejemplos de Resets
- **Reset CSS de Eric Meyer**: Uno de los más conocidos y utilizados.
- **Normalize.css**: No solo resetea, sino que también mantiene estilos útiles de los navegadores.

## Importancia del Reset CSS
El uso de un reset es solo el comienzo. Tras aplicarlo, es esencial definir estilos personalizados para construir el diseño deseado del sitio web.

## Usando un Reset CSS con CDNJS
Puedes incluir fácilmente un reset CSS en tu proyecto web usando un CDN (Content Delivery Network) como CDNJS. Aquí hay un ejemplo de cómo incluir Normalize.css:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">