# Fresh Basket Store (Next.js)

Production-ready Next.js app for a vegetable and fruit store.

## Features
- Home page with simple card UI for vegetables and fruits
- API route at `/api/products`
- Environment variable support via `NEXT_PUBLIC_STORE_NAME`
- Production Next.js settings (`output: standalone`, strict mode, compression)
- Multi-stage Dockerfile optimized for production
- GitHub Actions deployment to AWS EC2 over SSH

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build for production
```bash
npm run build
npm run start
```

## Docker
```bash
docker build -t fruit-vegetable-store .
docker run -p 3000:3000 fruit-vegetable-store
```

## GitHub Actions secrets required
- `EC2_HOST`
- `EC2_SSH_KEY`
