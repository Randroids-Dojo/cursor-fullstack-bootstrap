# Cursor Full-Stack Bootstrap

A minimal yet production-ready template that glues together a modern React front-end, a FastAPI back-end, and a standalone Better-Auth service – all orchestrated with Docker Compose and backed by PostgreSQL 16 + Liquibase migrations.

## Tech Stack

| Layer        | Technology                                  |
|--------------|---------------------------------------------|
| Front-end    | React 19 + Vite 6, Tailwind CSS, shadcn/ui |
| Auth service | Better-Auth (Node 20, Express integration)  |
| Back-end     | FastAPI (🐍 Python 3.12)                    |
| Database     | PostgreSQL 16                               |
| Migrations   | Liquibase XML                               |
| Dev Ops      | Docker Compose v2                           |

Everything lives in a single Git repository for painless local setup and CI/CD.

## Quick-start

```bash
# 1. Clone & cd
# git clone <repo-url> && cd cursor-fullstack-bootstrap

# 2. Copy env-vars and tweak if needed
cp env.sample .env

# 3. Launch the full stack (hot-reload everywhere)
docker compose -f docker-compose.dev.yml up --build
```

When the logs settle you should have:

| URL                                | What                          |
|------------------------------------|-------------------------------|
| http://localhost:5173              | Vite + React front-end        |
| http://localhost:3001/api/auth/ok  | Better-Auth health endpoint   |
| http://localhost:8000/docs         | FastAPI Swagger UI            |
| `docker ps`                        | 🐳 all 5 containers running    |

Stop everything with <kbd>Ctrl-C</kbd>.

### Project layout

```text
cursor-fullstack-bootstrap/
├─ docker-compose.dev.yml      # Dev topology (hot reload)
├─ .env / env.sample           # Shared variables (DB creds, ports…)
├─ frontend/                   # React + Tailwind app
├─ auth-service/               # Better-Auth (TypeScript)
├─ backend/                    # FastAPI service
├─ migrations/                 # Liquibase XML change-logs
└─ docs/                       # Planning notes & diagrams
```

### Common development tasks

* **Front-end** – live-reload on save: the Vite dev server is exposed on <http://localhost:5173>.
* **Back-end** – `uvicorn --reload` watches your Python files.
* **Auth service** – `ts-node` reloads on TypeScript changes.
* **Database migrations** – drop new `NNN_change.xml` files under `migrations/`; Liquibase applies them automatically at next `docker compose up`.

## Production (optional)

A `docker-compose.prod.yml` (not yet committed) will:

1. Build the React app and serve static files with Nginx.
2. Run FastAPI under Gunicorn/Uvicorn workers.
3. Keep the Better-Auth and PostgreSQL containers identical.

Once added you can ship with:

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

## Contributing

1. Create a feature branch – `git switch -c feat/my-thing`.
2. Keep services starting (`docker compose …`) and linter/formatters green.
3. Open a pull-request – PR checks run the same Compose file in CI.

> ✨ **Tip:** Use [Cursor](https://cursor.sh) or your favourite AI pair-programmer to iterate quickly – the repository is designed for automated edits.

## License

MIT – do whatever you want, but don't blame us if it sets your laptop on fire.🔥
