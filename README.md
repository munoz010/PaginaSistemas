# Ingeniería de Sistemas · Universidad de la Amazonia

Sitio web público con la información del programa de **Ingeniería de Sistemas** de la Universidad de la Amazonia (Uniamazonia), Florencia, Caquetá.

Fuente de la información: [página oficial del programa](https://www.uniamazonia.edu.co/inicio/index.php/es/programas/pregrado/ingenieria/ingenieria-de-sistemas.html).

## Contenido

- Propósito de formación del programa
- Ficha técnica (título, modalidad, jornada, duración, créditos, SNIES, registro calificado)
- Misión y visión
- Perfil de egreso
- Plan de estudios (Acuerdo 44 de 2020) y contenidos programáticos
- Admisión e inversión
- Documentos de interés y opciones de grado
- Datos de contacto

## Tecnologías

HTML5, CSS3 y JavaScript sin dependencias ni paso de compilación. Diseño responsivo con CSS Grid y Flexbox.

## Estructura

```
├── index.html       # Estructura y contenido
├── css/
│   └── styles.css   # Estilos y diseño responsivo
├── script.js        # Menú móvil
├── vercel.json      # Cabeceras de seguridad para el despliegue
└── README.md
```

## Ejecutar en local

Abre `index.html` en el navegador, o sirve la carpeta con cualquier servidor estático:

```bash
npx serve .
# o
python3 -m http.server 8080
```

## Despliegue en Vercel

1. Importa este repositorio desde [vercel.com/new](https://vercel.com/new).
2. Framework Preset: **Other** (sitio estático). No requiere comando de build ni directorio de salida.
3. Pulsa **Deploy**.

También con la CLI:

```bash
npm i -g vercel
vercel --prod
```
