# Acme Dashboard

Um dashboard completo e funcional para a empresa Acme, criado seguindo o tutorial oficial do Next.js. Este projeto implementa todos os 16 capítulos do curso "Learn Next.js" da documentação oficial da Vercel.

## 🚀 O que foi implementado

Este projeto implementa todos os conceitos do Next.js 16 com App Router:

- **Capítulo 1**: Configuração inicial do projeto com TypeScript
- **Capítulo 2**: Estilização com Tailwind CSS
- **Capítulo 3**: Otimização de fontes usando `next/font` (Inter)
- **Capítulo 4**: Criação de layouts e páginas com rotas aninhadas
- **Capítulo 5**: Navegação entre páginas usando `next/link`
- **Capítulo 6**: Configuração do banco de dados Postgres
- **Capítulo 7**: Busca de dados do banco
- **Capítulo 8**: Renderização estática e dinâmica
- **Capítulo 9**: Streaming com React Suspense
- **Capítulo 11**: Busca e paginação
- **Capítulo 12**: Mutação de dados com Server Actions
- **Capítulo 13**: Tratamento de erros
- **Capítulo 14**: Melhorias de acessibilidade
- **Capítulo 15**: Autenticação com NextAuth.js
- **Capítulo 16**: Metadata e SEO

## 📁 Estrutura do Projeto

```
nextjs-dashboard/
├── app/
│   ├── dashboard/
│   │   ├── customers/
│   │   │   └── page.tsx
│   │   ├── invoices/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── ui/
│   │   ├── acme-logo.tsx
│   │   ├── dashboard/
│   │   │   ├── nav-links.tsx
│   │   │   └── sidenav.tsx
│   │   └── fonts.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── package.json
└── tsconfig.json
```

## 🛠️ Tecnologias Utilizadas

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Vercel Postgres** - Banco de dados
- **NextAuth.js** - Autenticação
- **Zod** - Validação de formulários
- **React 19** - Biblioteca UI
- **@heroicons/react** - Ícones
- **bcrypt** - Hash de senhas

## 🎨 Funcionalidades

✅ Dashboard completo com gráficos e cards de métricas  
✅ Página de invoices com busca e paginação  
✅ CRUD completo de invoices (Create, Read, Update, Delete)  
✅ Página de customers com busca  
✅ Sistema de autenticação completo  
✅ Tratamento de erros robusto  
✅ Validação de formulários com Zod  
✅ Streaming de dados com Suspense  
✅ Metadata configurada para SEO  
✅ Layout responsivo e acessível  

## 🏃 Como executar

Primeiro, instale as dependências:

```bash
npm install
```

Depois, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador. A página inicial redireciona automaticamente para `/dashboard`.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🔗 Links Úteis

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js Tutorial](https://nextjs.org/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🔐 Credenciais de Teste

- **Email**: `user@nextmail.com`
- **Senha**: `123456`

## 📋 Configuração do Banco de Dados

1. Crie uma conta na Vercel e conecte seu repositório
2. Crie um banco de dados Postgres na Vercel
3. Adicione as variáveis de ambiente no arquivo `.env.local`:
   ```
   POSTGRES_URL="postgres://..."
   POSTGRES_PRISMA_URL="postgres://..."
   POSTGRES_URL_NO_SSL="postgres://..."
   POSTGRES_URL_NON_POOLING="postgres://..."
   POSTGRES_USER="..."
   POSTGRES_HOST="..."
   POSTGRES_PASSWORD="..."
   POSTGRES_DATABASE="..."
   AUTH_SECRET="your-secret-key"
   AUTH_URL="http://localhost:3000/api/auth"
   ```
4. Execute o seed: `http://localhost:3000/api/seed`

---

Desenvolvido seguindo o tutorial oficial do Next.js 🎓
