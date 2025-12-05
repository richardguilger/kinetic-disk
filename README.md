# Pousada Miss Roses - Website & Sistema de Reservas

Este projeto é um site completo para a Pousada Miss Roses, desenvolvido com **Next.js**, **Vanilla CSS** e **Firebase**.

## Funcionalidades

- **Site Institucional**: Home, Acomodações, Estrutura, Localização.
- **Sistema de Reservas**: Calendário, seleção de quartos, pagamento via Mercado Pago.
- **Painel Administrativo**: Gestão de reservas e acomodações.
- **Notificações**: Integração preparada para WhatsApp/Email.

## Configuração

### 1. Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes chaves:

```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=seu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=seu_app_id

# Mercado Pago
MP_ACCESS_TOKEN=seu_access_token_producao
NEXT_PUBLIC_BASE_URL=https://seu-dominio.com
```

### 2. Instalação

```bash
npm install
```

### 3. Desenvolvimento

```bash
npm run dev
```

### 4. Build & Deploy

```bash
npm run build
npm start
```

## Deploy (Vercel)

1. Faça push do código para o GitHub.
2. Importe o projeto na Vercel.
3. Adicione as variáveis de ambiente no painel da Vercel.
4. O deploy será automático.

## Painel Admin

Acesse `/admin/login` para gerenciar o sistema.
Crie o primeiro usuário diretamente no Firebase Authentication.

## Estrutura de Pastas

- `src/app`: Páginas e Rotas API.
- `src/components`: Componentes React reutilizáveis.
- `src/lib`: Configurações (Firebase, Mercado Pago).
- `public/assets`: Imagens e arquivos estáticos.
