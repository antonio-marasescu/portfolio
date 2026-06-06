# Portfolio Infrastructure

AWS CDK infrastructure for deploying the portfolio website using CloudFront + S3.

## Quick Start

**Prerequisites:**

- AWS CLI configured with credentials
- Node.js >=24.0.0
- PNPM installed

**Commands:**

```bash
pnpm install          # Install CDK dependencies
pnpm build            # Compile TypeScript
pnpm watch            # Watch mode for development
pnpm test             # Run Jest tests
pnpm cdk diff         # Preview changes
pnpm cdk synth        # Synthesize CloudFormation template
```

**Deploy:**

```bash
cdk deploy \
  -c certificateArn=arn:aws:acm:us-east-1:123456789012:certificate/abc-123 \
  -c domainName=example.com
```

## Architecture

**Stack:** `PortfolioInfraStack`

**Resources:**

- **S3 Bucket** (`portfolio-website-prod`): Hosts static website files
- **CloudFront Distribution** (`portfolio-cf-distribution-prod`): CDN with HTTPS
- **Origin Access Identity** (`portfolio-oai-prod`): Secure S3 access from CloudFront
- **ACM Certificate**: Imported via ARN for custom domain

**CloudFront Behavior:**

- Redirects HTTP → HTTPS
- 404 errors → `/index.html` (SPA routing)
- Default root: `index.html`
- Domain names: `example.com` + `www.example.com`

## Required Context Parameters

| Parameter        | Source                 | Description                                |
| ---------------- | ---------------------- | ------------------------------------------ |
| `certificateArn` | CLI context or env var | ACM certificate ARN (must be in us-east-1) |
| `domainName`     | CLI context or env var | Base domain (e.g., `example.com`)          |

**Pass via CLI:**

```bash
cdk deploy -c certificateArn=<arn> -c domainName=<domain>
```

**Or set environment variables:**

```bash
export certificateArn="arn:aws:acm:..."
export domainName="example.com"
cdk deploy
```

## File Structure

```
/bin/infra.ts              # CDK app entry point
/lib/
  infra-stack.ts           # Main stack definition
  infra-constants.ts       # Resource IDs and tags
  infra.types.ts           # TypeScript interfaces
/cdk.json                  # CDK configuration
/tsconfig.json             # TypeScript config
```

## CI/CD

Deployment is automated via `.github/workflows/publish.yml`:

1. Build Angular app (root project)
2. Synthesize CDK stack (this directory)
3. Deploy to AWS using GitHub OIDC

**Secrets required in GitHub:**

- AWS role with CDK deployment permissions
- Certificate ARN and domain name as repository variables

## Stack Tags

All resources are tagged with:

- `Project: portfolio`
- `Environment: prod`

## Gotchas

1. **Certificate location**: ACM certificate MUST be in `us-east-1` for CloudFront (global requirement)
2. **Domain verification**: Ensure domain is validated in ACM before deployment
3. **Separate node_modules**: This directory has its own dependencies; run `pnpm install` here
4. **CDK version**: Locked to 2.114.1 (check for updates periodically)
5. **S3 bucket deletion**: `autoDeleteObjects: true` means bucket contents are deleted on stack destruction
6. **SPA routing**: 404 → index.html redirect handles client-side routing (Angular)
