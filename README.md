# Crealynx Consulting — sitio web

Rediseño de www.crealynx.cl como sitio estático (HTML + CSS + JS, sin dependencias), bilingüe ES/EN.

## Estructura
- `index.html` — página principal (español por defecto; botón EN/ES)
- `gracias.html` — página tras enviar el formulario
- `assets/css/styles.css`, `assets/js/main.js` (incluye los textos en inglés)
- `assets/img/` — foto del consultor

## Pendientes (completar con datos reales)
- [ ] Correo real (hoy `contacto@crealynx.cl`) y URL de LinkedIn (hoy `linkedin.com`) en `index.html`
- [ ] Número de WhatsApp: reemplazar `56900000000` en `index.html` (aparece 2 veces)
- [ ] Fotos en mejor resolución (las actuales se recortaron de capturas del sitio antiguo)
- [ ] Revisar las descripciones breves de cada servicio y las traducciones al español

## Orden de la página
1. Portada: "¿Hace cuánto no revisas tus costos estratégicos?" + garantía de pago
2. Cifras clave (+15 años, +10 en LATAM, 20%, $0)
3. Servicios
4. Metodología (5 pasos)
5. Pago win-win
6. Quién soy (Mario Carrasco): trayectoria, especialidades, filosofía y visión
7. Contacto

## Publicar
Sube la carpeta a Netlify (el formulario usa Netlify Forms y funciona sin servidor).
Para verlo localmente basta abrir `index.html` en el navegador.
