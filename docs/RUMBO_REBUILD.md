# Rumbo Co — Diagnóstico técnico y plan de reconstrucción

Documento de referencia para migrar de la base actual a un producto web **editorial, premium y mantenible**. Última actualización: marzo 2026.

---

## 1. Diagnóstico (por qué la base actual frena el resultado)

### 1.1 La stack en el papel no es “vieja”

En `package.json` del proyecto principal ya figuran **Next.js 15**, **React 19**, **App Router**, **TypeScript**, **Tailwind** y **Framer Motion**. Es decir: **no estás limitado por un framework obsoleto**, sino por **cómo se está usando** y por **deuda estructural** alrededor.

### 1.2 Problemas reales que explican sensación rígida / pesada / poco premium

| Área | Qué pasa | Efecto en producto |
|------|-----------|-------------------|
| **Client boundary** | `LandingHome` es `"use client"` y compone casi toda la home en un solo árbol cliente. | Mucho JS en el primer paint, menos uso de RSC, composición editorial más difícil de optimizar por sección. |
| **Duplicación** | Conviven `src/components/` (Hero, Header, ExperienceContext…) y `src/components/landing/` sin un solo árbol claro. | Riesgo de “dos productos”, imports confusos, miedo a tocar código, sensación de template ensamblado. |
| **Rutas de producto** | Varias páginas (`barrancas-del-cobre`, etc.) son **stubs SEO** que remiten a la home. | No hay narrativa multi-página real; la marca no escala a “casa editorial” solo con anclas en una landing larga. |
| **TypeScript** | `strict: false` en `tsconfig.json`. | Errores silenciosos, refactors lentos, imposible confiar al 100% en el tipado para contenido y props. |
| **Contenido** | Texto e imágenes mezclados en componentes gigantes + `src/data/landing.ts`. | Cambiar copy o orden es costoso; no hay camino claro hacia CMS sin reescribir. |
| **Dependencias** | `openai` en dependencias **sin uso en `src/`**. | Ruido, superficie de auditoría y bundle mental innecesarios. |
| **Motion / layout** | Motion y estilos existen, pero sin **sistema** (tokens en código, variantes, capas RSC/client). | Las animaciones se sienten “pegadas” o inconsistentes; el diseño no escala a bloques reutilizables premium. |

**Conclusión honesta:** la base **no es intrínsecamente basura tecnológica**, pero **sí está en un punto donde seguir acumulando sobre ella reproduce la rigidez que describes**. Para el nivel “travel design de lujo sobrio”, lo racional es **reconstruir el front con otra arquitectura**, reutilizando sobre todo **contenido, copy e imágenes**, no la jerarquía de componentes actual.

---

## 2. Stack recomendada (concreta)

| Capa | Elección | Rol |
|------|----------|-----|
| Framework | **Next.js 15+** (App Router) | RSC, layouts anidados, metadata, i18n routing, imágenes, edge cuando haga falta. |
| Lenguaje | **TypeScript `strict: true`** | Contrato claro entre contenido, UI y datos. |
| Estilos | **Tailwind CSS v4** en la nueva base (`rebuild/`) | Tokens vía `@theme`, rendimiento del compilador, sin abandono del control fino en CSS. |
| Variantes / UI | **`class-variance-authority` + `tailwind-merge` + `clsx`** | Componentes con API estable (variantes `size`, `tone`) sin CSS-in-JS pesado. |
| Motion | **Framer Motion** (solo en **islas** cliente) | Orquestación de entrada, gestos, layout animado; compatible con mentalidad “premium sobrio”. |
| Iconos | **Lucide** (o SVG inline para piezas hero) | Ligero, consistente. |
| Contenido (fase 1) | Módulos tipados en `src/content/` + **Zod** para validar entradas | Sin CMS al inicio; migración limpia después. |
| Contenido (fase 2) | **Sanity** o **Contentful** (recomendación tendente a **Sanity** para layouts modulares y portable text) | Equipo no técnico edita; Next consume vía API o prebuild. |
| i18n (fase 2–3) | **`next-intl`** con segmentos `[locale]` | ES primero, EN después, mismas rutas lógicas. |
| Imágenes | **`next/image`** + `sizes` explícitos + **dominio remoto** en `images.remotePatterns` cuando toque | LCP y CLS bajo control; placeholders blur desde CMS o color dominante. |
| Formularios / lead | **WhatsApp deep links** (como hoy) o **Server Actions** + email/CRM | Evitar sobredimensionar; el wizard puede seguir siendo cliente puro al principio. |

**Por qué no “otra stack” (Astro, Remix solo, etc.):** para **CMS serio, i18n, rutas dinámicas y motion rico en React**, Next sigue siendo la apuesta más equilibrada **sin moda innecesaria**. Astro es excelente para marketing estático; aquí priorizas **experiencia viva + escalado editorial**, que encaja mejor en Next bien particionado.

---

## 3. Justificación breve por tecnología

- **Next App Router:** layouts por vertical (Barrancas, Chepe, Grupos), loading UI, streaming parcial.
- **Tailwind v4 + `@theme`:** diseño sistema en un solo lugar (colores, tipografía, radios), menos “gris accidental” que utility sprawl sin tokens.
- **CVA + merge:** botones, cards y bloques editoriales con la misma gramática visual.
- **Framer Motion en islas:** el 80% de la página puede ser servidor; el 20% que necesita scroll/hero animado es cliente. Mejor percepción de fluidez **y** mejor performance que hidratar todo.
- **Zod + módulos de contenido:** antes del CMS, ya tienes **fuente única de verdad** tipada para rutas, paquetes y FAQs.
- **next-intl:** estándar maduro para App Router; evita reinventar rutas `/en/...`.

---

## 4. Arquitectura frontend propuesta

### 4.1 Principios

1. **Server por defecto** — solo `"use client"` donde haya estado, motion compleja o formularios multi-paso.
2. **Secciones = bloques** — cada bloque editorial es un componente con props tipadas desde contenido.
3. **Un solo árbol de componentes** — eliminar la dualidad `components/` vs `components/landing/`.
4. **Rutas reales** — cada promesa de SEO/stub se convierte en página con layout compartido o plantilla.

### 4.2 Layouts y rutas

```
src/app/
  layout.tsx                 # html, fuentes, metadata base
  [locale]/                  # opcional cuando active i18n (es | en)
    layout.tsx               # proveedor intl + shell
    page.tsx                 # home
    barrancas-del-cobre/
    chepe-express/
    grupos/
    blog/
```

Hasta activar i18n, puedes usar solo `src/app/(site)/...` con `lang="es"` en root.

### 4.3 Componentes

- `components/ui/*` — primitivos (Button, Text, Container, media frame).
- `components/blocks/*` — bloques editoriales (HeroCinematic, StoryRail, Quote, ItineraryStrip).
- `components/layout/*` — SiteHeader, SiteFooter, Nav.
- `components/motion/*` — wrappers cliente (`FadeIn`, `ParallaxMedia`) que encapsulan Framer Motion.

### 4.4 Contenido

- `content/site.ts`, `content/routes.ts`, `content/packages.ts` — exportan datos + tipos.
- Validación con Zod en build o en `generateStaticParams` cuando venga de ficheros.

### 4.5 Imágenes

- Assets estáticos en `public/images/...`.
- Componente `ResponsiveImage` que fuerza `sizes`, `priority` solo en hero, `placeholder="blur"` cuando haya `blurDataURL`.

---

## 5. Estructura de carpetas (objetivo en la nueva base)

Referencia implementada como esqueleto en **`rebuild/`**:

```
rebuild/src/
  app/
    (site)/
      layout.tsx
      page.tsx
    layout.tsx
    globals.css
  components/
    blocks/
    layout/
    motion/
    ui/
  content/
    README.md
  lib/
    cn.ts
```

El repo principal puede **sustituir `src/` por esta estructura** cuando el contenido esté portado, o **mover `rebuild/` a raíz** y archivar el antiguo en una rama.

---

## 6. Estrategia de migración o reconstrucción

1. **Congelar features grandes** en el sitio actual; solo hotfixes críticos.
2. **Inventario de contenido** — extraer copy, listas de paquetes, FAQs, rutas a ficheros `content/*` (o JSON tipado).
3. **Desarrollar en `rebuild/`** hasta paridad de negocio (wizard, WhatsApp, secciones clave).
4. **Paridad SEO** — `metadata` y `openGraph` por ruta; eliminar stubs.
5. **Cutover** — swap de deploy (Vercel proyecto o dominio) o renombrar carpetas.
6. **Post-cutover** — integrar CMS; activar `next-intl`.

---

## 7. Qué rescatar

- **Copy y tono** de secciones ya redactadas.
- **`src/data/landing.ts`** como **canon temporal** (tipos y datos), migrando a `content/`.
- **Paleta y nombres de color** (adaptarlos a tokens en `@theme` v4).
- **Lógica de negocio simple:** `buildWhatsAppUrl`, ideas del wizard.
- **Imágenes en `public/images/`**.
- **`src/lib/seo.ts`** (patrón de `marketingMetadata`), refactorizado a helpers por locale.

---

## 8. Qué tirar (no migrar tal cual)

- **Árbol duplicado** `src/components/*` que compite con `landing/`.
- **`ExperienceContext` + `ExperienceWizardModal`** si la home nueva unifica solo en `LandingWizard` (o reescribe un wizard único).
- **Páginas stub** como producto final (sustituir por páginas reales o no publicar hasta tenerlas).
- **Dependencia `openai`** si sigue sin uso.
- **Patrón “toda la home cliente”** — reemplazar por composición servidor + islas.

---

## 9. Implementación iniciada en este repo

- **Carpeta `rebuild/`** — aplicación Next.js nueva (Tailwind v4, `strict: true`) como **base limpia**.
- **`docs/RUMBO_REBUILD.md`** — este documento.

Para trabajar en la nueva base:

```bash
cd rebuild
npm run dev
```

**Nota:** hay dos `package-lock.json` (raíz y `rebuild/`). Ejecuta `npm run dev` / `npm run build` **siempre desde `rebuild/`** para la nueva base; si no, Next puede inferir mal el *workspace root*.

Cuando esté lista para producción, alinea versiones de Next/React con la política del equipo (el scaffold puede quedar en Next 16 mientras el sitio legacy sigue en 15 hasta unificar).

---

## 10. Nota sobre honestidad brutal

No hace falta cambiar de framework para “sonar modernos”. Hace falta **cambiar arquitectura, límites cliente/servidor, modelo de contenido y profundidad de las rutas**. La carpeta `rebuild/` existe para **no seguir pagando interés** sobre decisiones acumuladas en el árbol actual.
