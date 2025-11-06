# Acme Dashboard

Um dashboard simples e funcional para a empresa Acme, criado seguindo o tutorial oficial do Next.js. Este projeto foi desenvolvido como parte dos primeiros 5 capítulos do curso "Learn Next.js" da documentação oficial.

## 🚀 O que foi implementado

Este projeto implementa os conceitos básicos do Next.js 16 com App Router:

- **Capítulo 1**: Configuração inicial do projeto com TypeScript
- **Capítulo 2**: Estilização com Tailwind CSS
- **Capítulo 3**: Otimização de fontes usando `next/font` (Inter)
- **Capítulo 4**: Criação de layouts e páginas com rotas aninhadas
- **Capítulo 5**: Navegação entre páginas usando `next/link`

## 📁 Estrutura do Projeto

```
nextjs-dashboard/
├── src/
│   └── app/
│       ├── dashboard/          # Rotas do dashboard
│       │   ├── layout.tsx      # Layout compartilhado com sidebar
│       │   ├── page.tsx        # Página inicial (/dashboard)
│       │   ├── invoices/       # Página de invoices
│       │   └── customers/      # Página de customers
│       ├── ui/
│       │   └── sidebar.tsx     # Componente da sidebar com navegação
│       ├── layout.tsx          # Layout raiz
│       ├── page.tsx            # Página inicial (redireciona para /dashboard)
│       └── globals.css         # Estilos globais
```

## 🛠️ Tecnologias Utilizadas

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **next/font** - Otimização automática de fontes
- **next/link** - Navegação otimizada

## 🎨 Funcionalidades

✅ Sidebar com logo Acme azul  
✅ Navegação entre páginas (Home, Invoices, Customers)  
✅ Estados visuais em hover e focus  
✅ Destaque do link ativo  
✅ Layout responsivo  
✅ Rotas aninhadas funcionando corretamente  

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

## 📚 Próximos Passos

Este projeto implementa os conceitos básicos. Para continuar aprendendo, você pode:

- Adicionar mais páginas e rotas
- Implementar busca e filtros
- Adicionar formulários e validação
- Conectar com uma API ou banco de dados
- Implementar autenticação

---

Desenvolvido seguindo o tutorial oficial do Next.js 🎓
