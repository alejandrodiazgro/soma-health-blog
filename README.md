# SOMA Health Blog

Blog editorial de SOMA sobre práctica clínica, expediente médico, receta electrónica y tecnología para profesionales de la salud en México.

## Objetivo

Crear una biblioteca de contenido útil que aumente la visibilidad orgánica de SOMA, responda preguntas reales de médicos y genere rutas naturales hacia el producto.

## Tecnología

- Astro con generación estática
- Contenido en Markdown
- Sitemap XML automático
- Metadatos canónicos, Open Graph y Twitter
- Datos estructurados `Blog` y `MedicalWebPage`
- Diseño responsive basado en la identidad visual de SOMA

## Desarrollo

```bash
npm install
npm run dev
```

Validación y compilación:

```bash
npm run build
```

## Publicación e integración

El proyecto está configurado para publicarse bajo `https://www.somahealth.com.mx/blog`. Para conservar la autoridad SEO del dominio principal, se recomienda servir la compilación estática desde esa ruta mediante Vercel, Cloudflare o el proxy utilizado por SOMA.

## Estrategia editorial inicial

Los primeros grupos de palabras clave son:

1. expediente clínico electrónico;
2. NOM-004 y notas médicas;
3. receta médica electrónica;
4. software para consultorio médico;
5. agenda y seguimiento de pacientes;
6. inteligencia artificial aplicada a la práctica clínica.

Cada artículo debe responder una intención de búsqueda concreta, enlazar hacia otros contenidos relacionados y tener revisión profesional antes de publicarse.
