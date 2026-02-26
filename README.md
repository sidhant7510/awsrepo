# Fresh Basket Store (Next.js)

Production-ready Next.js app for a vegetable and fruit store.

## Features
- Home page with simple card UI for vegetables and fruits
- API route at `/api/products`
- Environment variable support via `NEXT_PUBLIC_STORE_NAME`
- Production Next.js settings (`output: standalone`, strict mode, compression)
- Multi-stage Dockerfile optimized for production
- GitHub Actions workflow that can automatically provision/reuse an EC2 instance and deploy over SSH

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

## GitHub Actions deployment behavior
On every push to `main`, the workflow:
1. Builds a production Docker image.
2. Resolves deployment host:
   - If `EC2_HOST` is set, it deploys directly to that IP/host (no AWS provisioning call).
   - If `EC2_HOST` is empty, it auto-finds/creates an EC2 instance tagged `fruit-vegetable-store-app`.
3. Uploads image over SSH.
4. Restarts container with `--restart unless-stopped`.

## GitHub Secrets
Always required:
- `EC2_SSH_KEY`

Required only when `EC2_HOST` is not set (auto-provision mode):
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION` (can be a Secret or Repository Variable)
- `EC2_AMI_ID`
- `EC2_INSTANCE_TYPE`
- `EC2_KEY_PAIR_NAME`
- `EC2_SECURITY_GROUP_ID`
- `EC2_SUBNET_ID`

Optional (if you already manage the instance yourself):
- `EC2_HOST`
