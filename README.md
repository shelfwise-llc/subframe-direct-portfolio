# Subframe Portfolio with Directus CMS

A modern portfolio website built with Subframe, Vite, and Directus CMS, deployed using Kamal with Traefik SSL.

## Features

- 🎨 **Subframe UI Components** - Beautiful, consistent design system
- 🚀 **Vite** - Fast development and build tooling
- 📝 **Directus CMS** - Headless CMS for content management
- 🐳 **Docker** - Containerized deployment
- 🔒 **Traefik SSL** - Automatic SSL certificates with Let's Encrypt
- 🚀 **Kamal** - Zero-downtime deployments
- 🔄 **GitHub Actions** - Automated CI/CD pipeline

## Prerequisites

- Node.js v22 (required for Directus)
- Docker
- Kamal gem
- Docker Hub account
- Server with SSH access

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file:

```env
# Directus Configuration
DIRECTUS_URL=http://localhost:8055
DIRECTUS_TOKEN=your_directus_token_here

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Development

```bash
npm run dev
```

### 4. Build

```bash
npm run build
```

### 5. Preview

```bash
npm run preview
```

## Deployment with Kamal

### 1. Configure Secrets

Create `.kamal/secrets` file:

```bash
KAMAL_REGISTRY_PASSWORD=your_docker_hub_token
DIRECTUS_URL=your_directus_url
DIRECTUS_TOKEN=your_directus_token
```

### 2. Deploy

```bash
kamal deploy
```

## Directus Setup

1. Install Directus following the [official guide](https://directus.io/docs/installation)
2. Create collections for:
   - `about` - Personal information
   - `projects` - Portfolio projects
   - `portfolio_items` - Portfolio items
3. Configure API permissions
4. Update environment variables with your Directus URL and token

## Server Configuration

The application is configured to deploy to:
- **Server**: 38.242.219.222
- **Domain**: portfolio.38.242.219.222.nip.io
- **SSL**: Automatic with Let's Encrypt via Traefik

## GitHub Actions

The repository includes a GitHub Actions workflow that:
- Runs tests and linting
- Builds the application
- Deploys to production on push to main branch

Required secrets:
- `DOCKER_HUB_TOKEN` - Docker Hub access token
- `DIRECTUS_URL` - Directus instance URL
- `DIRECTUS_TOKEN` - Directus API token

## Project Structure

```
src/
├── ui/                 # Subframe UI components
│   ├── components/     # Reusable components
│   ├── layouts/        # Page layouts
│   └── utils.ts        # Utility functions
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles

config/
└── deploy.yml          # Kamal deployment configuration

.github/
└── workflows/
    └── deploy.yml      # GitHub Actions workflow

Dockerfile              # Docker configuration
```

## License

MIT