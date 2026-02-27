# Fresh Basket Store (Next.js + TypeScript)

Production-ready Next.js App Router application for a vegetable and fruit store.

## Features
- Next.js App Router with TypeScript.
- Home page with produce cards and API route at `/api/products`.
- Environment variable support via `.env.example` using `NEXT_PUBLIC_STORE_NAME`.
- Production Next.js configuration:
  - `output: 'standalone'`
  - `reactStrictMode: true`
  - `compress: true`
  - `poweredByHeader: false`
- Secure multi-stage Docker build on lightweight Alpine base with non-root runtime.
- GitHub Actions pipeline for CI/CD on push to `main`:
  - Build app and Docker image
  - Push image to Amazon ECR
  - Deploy to EC2 (existing host mode or auto-provision mode)
  - Generate and validate Nginx reverse proxy config in `/etc/nginx/sites-enabled/`

## Local development
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Production build
```bash
npm run build
npm run start
```

## Docker
```bash
docker build -t fruit-vegetable-store .
docker run -p 3000:3000 fruit-vegetable-store
```

## GitHub Actions deployment behavior
On every push to `main`, the workflow:
1. Uses `EC2_HOST` when provided (deploy to existing instance).
2. Otherwise auto-discovers or provisions an EC2 instance with AWS API.
3. Builds and pushes Docker image to Amazon ECR.
4. Deploys container on EC2.
5. Writes Nginx config in `/etc/nginx/sites-enabled/fruit-vegetable-store`, validates with `nginx -t`, then reloads Nginx.

> Route53 automation is intentionally excluded (DNS configured manually).

## Required GitHub secrets / variables
Always required:
- `EC2_SSH_KEY`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION` (secret or repo variable)
- `APP_DOMAIN` (secret or repo variable)

Required when `EC2_HOST` is **not** set:
- `EC2_AMI_ID`
- `EC2_INSTANCE_TYPE`
- `EC2_KEY_PAIR_NAME`
- `EC2_SECURITY_GROUP_ID`
- `EC2_SUBNET_ID`

Optional:
- `EC2_HOST`
