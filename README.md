# Método MCV

Versão estática preparada para publicação no GitHub Pages.

## Publicar no GitHub

1. Crie um repositório novo no GitHub (ex.: `metodo-mcv`).
2. Envie **todo o conteúdo desta pasta** para a branch `main`.
3. No GitHub, acesse **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione `main` e `/ (root)` e clique em **Save**.

## Configuração antes de publicar

Edite `assets/js/mcv-config.js` e preencha:

- `checkoutUrl`: link do seu checkout.
- `contactUrl`: link de contato (WhatsApp, página etc.).

## Estrutura

- `index.html`: página principal.
- `assets/`: estilos, scripts, imagens e fontes capturados/localizados.
- `assets/brand/`: identidade visual do Método MCV.
- `vendor/`: recursos de terceiros necessários à página.
- `termos.html`, `privacidade.html`, `contato.html`: páginas locais que devem ser personalizadas antes da publicação final.
- `.nojekyll`: evita tratamento do site como projeto Jekyll no GitHub Pages.

## Observação

O rastreamento/Google Tag Manager do site de origem foi removido. Configure seu próprio analytics/pixel depois.
