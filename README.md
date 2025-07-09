# NLW Agents

Projeto desenvolvido durante o evento **Next Level Week (NLW)** da **Rocketseat**, focado na criação de uma API para gerenciamento de agentes inteligentes.

## 🚀 Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **TypeScript** - Linguagem de programação
- **Fastify** - Framework web rápido e eficiente
- **Drizzle ORM** - ORM type-safe para TypeScript
- **PostgreSQL** - Banco de dados relacional
- **PGVector** - Extensão para vetorização no PostgreSQL
- **Zod** - Biblioteca para validação de schemas

### Ferramentas de Desenvolvimento
- **Docker** - Containerização
- **Biome** - Linter e formatter
- **Drizzle Kit** - CLI para migrações do banco
- **Ultracite** - Configuração de linting

## 📁 Estrutura do Projeto

```
src/
├── db/
│   ├── schema/         # Definição dos schemas do banco
│   ├── migrations/     # Migrações do banco de dados
│   └── seed.ts         # Dados iniciais
├── http/
│   └── routes/         # Rotas da API
├── env.ts              # Configuração de variáveis de ambiente
└── server.ts           # Servidor principal
```

## 🔧 Pré-requisitos

- Node.js 18+ 
- Docker e Docker Compose
- PostgreSQL (via Docker)

## ⚙️ Instalação e Configuração

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd server
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5434/nwl-agents
```

### 4. Inicie o banco de dados
```bash
docker compose up -d
```

### 5. Execute as migrações
```bash
npx drizzle-kit migrate
```

### 6. Execute o seed (opcional)
```bash
npm run db:seed
```

## 🚀 Como Executar

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm start
```

A API estará disponível em `http://localhost:3333`

## 📋 Comandos Úteis

### Docker
```bash
# Iniciar containers
docker compose up -d

# Parar containers
docker compose stop

# Ver logs
docker logs <container-id>
```

### Banco de Dados
```bash
# Gerar migration
npx drizzle-kit generate

# Executar migrations
npx drizzle-kit migrate

# Visualizar banco pelo navegador
npx drizzle-kit studio
```

## 🛠️ Padrões de Projeto

- **Arquitetura em Camadas**: Separação clara entre rotas, schema e configuração
- **Type Safety**: Uso extensivo do TypeScript com Zod para validação
- **Configuração Centralizada**: Variáveis de ambiente centralizadas em `env.ts`
- **Migrations**: Controle de versão do banco de dados com Drizzle Kit
- **Containerização**: Uso do Docker para ambiente consistente

## 📡 Endpoints

### Health Check
```
GET /health
```

### Rooms
```
GET /rooms
```

---

Desenvolvido com ❤️ durante o **NLW** da **Rocketseat** 