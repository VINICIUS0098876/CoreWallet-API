# 💼 CoreWallet API

Uma API RESTful de carteira digital e simulador de transações financeiras instantâneas (inspirado no Pix), robusta, segura e preparada para produção. Projeto desenvolvido para demonstrar domínio técnico do stack Node.js, TypeScript, Express e integrações modernas, com foco em qualidade e boas práticas.

---

## 🛠 Tecnologias Utilizadas

- **Node.js** & **Express.js**: base para o desenvolvimento de APIs rápidas e escaláveis.
- **TypeScript**: tipagem estática para maior segurança e legibilidade do código.
- **Prisma ORM**: abstração eficiente para bancos relacionais, facilita queries, migrations e transações.
- **Banco de dados relacional**: compatível com **MySQL** e **PostgreSQL**.
- **Zod**: validação rigorosa dos dados de entrada.
- **JWT**: autenticação robusta e segura via tokens.
- **Swagger (OpenAPI)**: documentação auto-gerada e interativa.
  
---

## 🏗 Arquitetura e Padrões

A API foi construída usando os principais padrões de separação de responsabilidades:

- **Controllers**: gerenciam as requisições e respostas da API.
- **Services**: encapsulam regras de negócio e lógica de processamento.
- **Middlewares**: executam validações, autenticação e interceptação de requisições.
- **Schemas de validação (Zod)**: garantem integridade e estrutura dos dados recebidos.

*Esta estrutura maximiza a testabilidade, facilita manutenção e evolução, além de permitir crescimento em escala.*

---

## 🚦 Regras de Negócio em Destaque

- **Criação Atômica de Usuário + Carteira**  
  Utiliza nested writes do Prisma para garantir que o cadastro seja um único processo transacional.

- **Transações Seguras com `$transaction`**  
  Todas as operações críticas (como deleção de contas) são envolvidas por transações, prevenindo concorrência/consistência.

- **Proteção Contra Exclusão Indevida**  
  Impede a exclusão de carteiras com saldo disponível, implementando soft rules para manter integridade financeira.

- **Validação Estrita com Zod**  
  Cada entrada é validada rigorosamente, prevenindo erros, injections e inconsistências.

---

## 🏃‍♂️ Como rodar o projeto localmente

```bash
# 1. Clone o repositório
git clone https://github.com/VINICIUS0098876/CoreWallet-API.git
cd CoreWallet-API

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com os dados do seu banco

# 4. Prepare o banco com o Prisma
npx prisma generate      # Gera os tipos e clientes do Prisma
npx prisma db push       # Sincroniza o esquema com o banco

# 5. Inicie a aplicação em modo desenvolvimento
npm run dev
```

---

## 📚 Documentação da API

A documentação interativa está disponível via **Swagger** na rota:

```
/api-docs
```

Basta acessar no navegador após iniciar o projeto, explorar os endpoints e testar requisições diretamente pelo painel.

---

> **Diferenciais técnicos:**  
> - Arquitetura escalável e bem segmentada  
> - Transações seguras e regras de negócio inteligentes  
> - Validação de dados rigorosa  
> - Documentação profissional

---

## 📄 License
Define the project license here (e.g., MIT).  
If you don't have one yet, you can add a `LICENSE` file.

---

### 📌 Author
**VINICIUS0098876**  
Repository: https://github.com/VINICIUS0098876/CoreWallet-API.git
 




