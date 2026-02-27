# Fresh Basket Store (Next.js)

Production-ready Next.js app for a vegetable and fruit store.

## Features
- Home page with simple card UI for vegetables and fruits
- API route at `/api/products`
- Environment variable support via `NEXT_PUBLIC_STORE_NAME`
- Production Next.js settings (`output: standalone`, strict mode, compression)
- Multi-stage Dockerfile optimized for production
- GitHub Actions workflow that can automatically provision/reuse an EC2 instance
- ECR-based image publishing and EC2 pull-based deployment
- Automated Nginx reverse-proxy configuration on EC2

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
1. Resolves deployment host:
   - If `EC2_HOST` is set, it deploys to that instance.
   - If `EC2_HOST` is empty, it auto-finds/creates an EC2 instance tagged `fruit-vegetable-store-app`.
2. Builds Docker image and pushes it to Amazon ECR.
3. Pulls image from ECR on EC2, restarts container, installs/configures Nginx reverse proxy.

## Required GitHub secrets/variables
Always required:
- `EC2_SSH_KEY`
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION` (secret or repository variable)
- `APP_DOMAIN` (secret or repository variable)

Required only when `EC2_HOST` is not set (auto-provision mode):
- `EC2_AMI_ID`
- `EC2_INSTANCE_TYPE`
- `EC2_KEY_PAIR_NAME`
- `EC2_SECURITY_GROUP_ID`
- `EC2_SUBNET_ID`

Optional:
- `EC2_HOST` (for deploying to pre-existing instance)
