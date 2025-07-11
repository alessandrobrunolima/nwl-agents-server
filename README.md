# NLW Agents

Projeto desenvolvido durante o evento **Next Level Week (NLW)** da **Rocketseat**. Uma API inteligente para gerenciamento de salas e perguntas utilizando IA para transcrição de áudio e geração de respostas.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem tipada 
- **Fastify** - Framework web rápido
- **Drizzle ORM** - ORM type-safe
- **PostgreSQL + PGVector** - Banco com suporte a embeddings
- **Google Gemini AI** - IA para transcrição e respostas
- **Zod** - Validação de schemas
- **Docker** - Containerização

## 🛠️ Padrões de Projeto

- **Arquitetura em Camadas** - Separação entre rotas, schemas e serviços
- **Type Safety** - TypeScript + Zod para validação completa
- **Configuração Centralizada** - Variáveis de ambiente em arquivo dedicado
- **Migrations** - Controle de versão do banco com Drizzle Kit
- **Containerização** - Docker para ambiente consistente

## ⚙️ Configuração

### Pré-requisitos
- Node.js 18+
- Docker e Docker Compose

### Instalação

1. **Clone e instale dependências**
```bash
git clone <repository-url>
cd server
npm install
```

2. **Configure variáveis de ambiente**
Crie um arquivo `.env` na raiz:
```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5434/nwl-agents
GEMINI_API_KEY=your_gemini_api_key_here
```

3. **Inicie o banco de dados**
```bash
docker compose up -d
```

4. **Execute as migrações**
```bash
npm run db:migrate
```

5. **Execute o seed (opcional)**
```bash
npm run db:seed
```

## 🚀 Execução

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm start
```

A API estará disponível em `http://localhost:3333`

## 📋 Scripts Úteis

```bash
# Desenvolvimento
npm run dev

# Gerar migration
npm run db:generate

# Executar migrations
npm run db:migrate

# Visualizar banco
npm run db:studio

# Seed do banco
npm run db:seed
```

## 🔧 Funcionalidades

- **Gerenciamento de Salas** - Criar e listar salas
- **Upload de Áudio** - Envio e transcrição automática
- **Perguntas Inteligentes** - Sistema de Q&A com IA
- **Busca Semântica** - Embeddings para busca contextual
- **API RESTful** - Endpoints organizados e documentados

---

Desenvolvido com ❤️ durante o **NLW** da **Rocketseat** 