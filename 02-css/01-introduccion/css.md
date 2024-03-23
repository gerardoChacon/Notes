# ¿Qué es CSS?
HTML es capaz de dar estructura a nuestro sitio, pero no de dar estilos. Las hojas de estilos en cascada (CSS) establecen las reglas de apariencia de cada elemento HTML, como tamaños, colores, tipografías y posiciones.

## ¿Cómo se usa?

# Aplicar CSS a HTML

CSS (Cascading Style Sheets) puede aplicarse a HTML de tres maneras principales: en línea, interna y externa. Cada método tiene sus propios usos y ventajas.

## 1. CSS en Línea (Inline CSS)
CSS en línea se aplica directamente a los elementos HTML mediante el atributo `style`.

&lt;p&gt; style="color: blue; font-size: 14px;"Este es un texto con estilo en línea.&lt;/p&gt;

## 2. El CSS interno. 
Se coloca dentro de la etiqueta. 

style en el head del documento HTML.

```html
<head>
  <style>
    p {
      color: white;
      font-size: 16px;
    }
  </style>
</head>
```



## 3. El CSS Externo  se coloca dentro de la etiqueta.

Los estilos CSS se vinculan desde el HTML con la etiqueta `<link>` 

 ```html

<head>
  <link rel="stylesheet" href="estilos.css">
</head>
```

# Selectores
Los selectores indican a qué elementos HTML se les aplicarán los estilos.

## Selectores de Etiqueta
Son los nombres directos de las etiquetas a las que queremos aplicar los estilos. Hay que tener cuidado porque si hay más de una etiqueta con el mismo nombre, se aplicarán los estilos a todas.
 
```css
body {
    /* estilos para la etiqueta body */
}
h1 {
    /* estilos para todas las etiquetas h1 */
}
```

## Selectores de clases
Son nombres personalizados precedidos por un punto .clase. Aplican estilos a las etiquetas que necesitemos, independientemente del nombre de la etiqueta. Las clases pueden usarse varias veces en el HTML.

 ```css
.clase {
    /* estilos para elementos con la clase 'clase' */
}
```

## Selectores de Id
Son selectores únicos, identificados por el símbolo #. Solo puede haber uno con el mismo nombre en un documento HTML.

```css
#identificacion {
    /* estilos para el elemento con id 'identificacion' */
}
```

## Estilos 
Hay una gran variedad de estilos para modificar cada aspecto visual posible.

```css
.declaracion { 
    propiedad: valor;
}

.selector {
    color: red;
    font-size: 18px;
    margin: 10px;
    border: 1px solid red;
}
```




