# Heitor Araujo — Landing page

Landing page profissional de Heitor Araujo, Desenvolvedor Full Stack.

**Stack:** Angular 21 (standalone, zoneless, signals) · SCSS · Tailwind CSS 4 · Lucide Angular · pré-renderização estática (SSG).

## Comandos

```bash
npm install        # .npmrc usa legacy-peer-deps (contorna um bug do npm 10 com jsdom)
npm start          # servidor de desenvolvimento em http://localhost:4200
npm run build      # build de produção com pré-renderização → dist/araujo-studio/browser
npm run preview    # serve o build estático localmente
npm test           # testes unitários (Vitest)
```

O conteúdo de `dist/araujo-studio/browser` é estático e pode ser publicado em qualquer hospedagem (Netlify, Vercel, GitHub Pages, Cloudflare Pages etc.).

## Estrutura

```text
src/app/
  core/
    config/site.config.ts   # identidade, contatos (WhatsApp, e-mail, redes) e helpers de link
    content/                # textos centralizados: navegação, serviços, projetos, processo, sobre, FAQ
    models/                 # tipos do conteúdo
    services/               # seção ativa (scrollspy)
  layout/                   # header e footer
  sections/                 # seções da página (hero, serviços, projetos, processo, sobre, FAQ, contato)
  shared/                   # moldura de navegador para capturas e diretiva de aparição
  pages/home/               # composição da one-page
```

Tokens de design (cores, fontes) ficam em `src/tailwind.css`; estilos globais reutilizáveis (botões, títulos, chips) em `src/styles.scss`.

## Como atualizar o conteúdo

- **Contatos:** `core/config/site.config.ts`. Campos vazios são ocultados na interface.
- **Projetos:** `core/content/projects.ts`. Imagens em `public/images/projects/<nome>-<largura>.webp` (720 e 1280 px). Sem imagem, use `image: null` e a área exibe um espaço reservado.
- **Foto profissional:** `ABOUT_PHOTO` em `core/content/about.ts`.

## Antes de publicar

- Definir o domínio em `SITE_CONFIG.url` e trocar `og:image`/`twitter:image` em `src/index.html` por URLs absolutas.
- Com o domínio definido, adicionar `public/sitemap.xml` e a linha `Sitemap:` em `public/robots.txt`.

## Performance

- Meça sempre o **build de produção** (`npm run build` + `npm run preview`). O `npm start` usa o servidor de desenvolvimento, sem minificação, e o Lighthouse aponta cerca de 1 MB de JavaScript extra.
- As seções abaixo da hero usam hidratação incremental (`@defer (hydrate on viewport)`): o HTML completo continua pré-renderizado, mas o JavaScript de cada seção só carrega quando ela se aproxima da tela.
- As fontes (Manrope, Sora, JetBrains Mono) ficam em `public/fonts`, com subconjunto latino, licença SIL OFL 1.1 e origem no Fontsource. Manrope e Sora são pré-carregadas no `index.html`.
- A hospedagem deve servir os arquivos comprimidos (gzip/brotli). As plataformas citadas acima já fazem isso.

## Formulário de contato

Não há backend: o formulário monta a mensagem e a abre no WhatsApp ou no aplicativo de e-mail do visitante. Nenhum dado é enviado a servidores. A integração com um serviço de e-mail pode ser adicionada depois.
