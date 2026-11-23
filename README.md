# Nosso Infinito — réplica personalizável

Réplica do projeto **Kelkel — Nosso Infinito** para um novo presente de aniversário atrasado, mantendo o Sharingan interativo, Gojo/Jujutsu Kaisen, Kimetsu no Yaiba, Your Name, One Piece, mapa do tesouro, música, galeria e carta.

## Personalizar

1. Abra `src/data/site.ts` e altere `birthday.name`, `birthday.nickname`, `birthday.sender`, `birthday.longDate`, `birthday.shortDate` e os textos de `letter` e `photos`. `dateISO` pode ficar vazio para o presente atrasado; se preenchido com data futura, reativa o contador.
2. Troque as imagens `public/photos/1.svg` até `7.svg` por fotos do novo casal. **Mantenha o nome 1.svg etc.** se quiser não alterar o código; para fotos reais `.webp`, substitua as extensões nas referências de `src/data/site.ts` e `src/app/page.tsx`.
3. Música: arquivo `public/audio/romantic.mp3`. GIFs de anime são links externos centralizados em `src/data/site.ts`.

## Rodar

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## GitHub

Esta é a branch `replica-aniversario-amigo`, separada da `main`. **A main original permanece intacta.** Para um repositório totalmente independente, crie um novo repositório vazio e envie o conteúdo desta branch para ele. No Vercel, crie um projeto separado apontando para o novo repositório (ou configure a produção usando esta branch).

As sete fotografias da Kelkel foram removidas do conteúdo desta branch e substituídas por placeholders ilustrados. Para privacidade completa e separação histórica, crie um repositório novo sem importar o histórico Git do original.
