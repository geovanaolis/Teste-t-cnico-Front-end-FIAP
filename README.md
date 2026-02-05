# Teste-técnico-Front-end-FIAP
Landing Page que acompanha a identidade visual da FIAP.

## ⚙️ Stack
- Next.js
- Typescript
- SCSS (Sass)
- Jest (com jest-axe para testes de acessibilidade)
- ESLint (inclui plugin `jsx-a11y` para acessibilidade)

## 🌐 Compatibilidade de navegadores
Compatível com: **Google Chrome, Safari, Firefox, Edge e Opera**.
Isso está refletido em `.browserslistrc`.

## 📱 Breakpoints & Responsividade
A página será responsiva com as seguintes resoluções (usar unidades em `rem`):
- 3840x2160
- 2560x1440
- 2560x1080
- 1920x1080
- 1600x900
- 1440x900
- 1366x768
- 1280x720
- 1024x640
- 1024x1366 (iPad Pro) – vertical e horizontal
- 820x1180 (iPad Air) – vertical e horizontal
- 768x1024 (iPad) – vertical e horizontal
- 414x736 (iPhone 8 Plus) – vertical e horizontal
- 360x640 (Galaxy S5) – vertical e horizontal
- 320x568 (iPhone 5/SE) – vertical e horizontal

> Observação: o projeto já tem base para usar `rem` (html font-size configurado para 62.5%) e mixins para media queries em `styles/_responsive.scss`.

## 🚀 Comandos úteis
- `npm run dev` — iniciar em modo desenvolvimento
- `npm run build` — build de produção
- `npm run start` — rodar build
- `npm run lint` — rodar ESLint
- `npm test` — rodar testes (Jest)

## 🧭 Estrutura inicial criada
- Páginas: `src/pages/_app.tsx`, `src/pages/index.tsx`
- Componentes: `Navbar`, `Header`, `Intro`, `Cursos`, `FAQ`
- Estilos: SCSS organizado com variáveis e mixins para responsividade
- Testes: exemplo de teste de acessibilidade em `__tests__/Home.a11y.test.tsx`
