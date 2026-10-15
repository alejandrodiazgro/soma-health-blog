# Plan de implementación SEO del blog SOMA

## Objetivo

Posicionar `somahealth.com.mx` entre médicos generales, especialistas y profesionales que abren o digitalizan una consulta privada en México.

## Arquitectura

El blog se prepara para publicarse en `https://www.somahealth.com.mx/blog/`. Cada página responde una intención principal y agrupa variantes de la misma búsqueda para evitar canibalización.

### Clúster 1 — Consulta privada

- Pilar: cómo iniciar una consulta privada en México.
- Soporte: recién egresados, especialistas, COFEPRIS, costos, equipamiento, fiscalidad y captación ética.

### Clúster 2 — Expediente clínico

- Pilar: expediente clínico electrónico.
- Soporte: NOM-004, historia clínica, notas, privacidad, conservación y digitalización.

### Clúster 3 — Software médico

- Pilar: software para consultorio médico.
- Soporte: agenda médica, receta electrónica, precios, comparativas, exportación y seguridad.

### Clúster 4 — IA y productividad

- Pilar: inteligencia artificial para médicos.
- Soporte: nota por voz, transcripción, privacidad, laboratorios y revisión humana.

## Estado implementado

- diseño visual alineado con el tema Liquid Glass de SOMA;
- rutas compatibles con despliegue bajo `/blog`;
- metadatos canónicos, Open Graph y Twitter;
- esquema `BlogPosting`, `MedicalWebPage` y migas de pan;
- sitemap automático y `robots.txt`;
- navegación por clúster e intención;
- doce artículos iniciales;
- enlaces contextuales hacia SOMA;
- versión móvil, foco visible y preferencias de transparencia/movimiento.

## Antes de producción

1. Sustituir cualquier enlace genérico por las rutas comerciales definitivas de SOMA.
2. Incorporar nombres y credenciales reales de autores y revisores.
3. Validar los artículos regulatorios con el responsable correspondiente.
4. Revisar analítica, consentimiento de cookies y eventos de conversión.
5. Registrar el sitemap en Google Search Console.
6. Confirmar que el servidor principal entregue `/blog/*` sin reescrituras que eliminen canónicos o archivos estáticos.

## Publicación durante 90 días

- Semana 1–4: pilares de software, expediente, consulta privada y requisitos.
- Semana 5–8: NOM-004, costos, receta y agenda.
- Semana 9–12: IA, nota por voz, crecimiento y comparativa de soluciones.

Cada semana se actualiza una página existente además de publicar contenido nuevo. La prioridad se ajusta con impresiones y consultas de Search Console, no sólo con volumen estimado por herramientas externas.

## Indicadores

- páginas indexadas;
- impresiones y clics orgánicos;
- posición por clúster;
- consultas nuevas detectadas;
- clics del blog hacia SOMA;
- registros o solicitudes atribuidas al blog;
- páginas con impresiones entre posiciones 8 y 30.
