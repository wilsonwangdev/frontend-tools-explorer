# Image Processing in Astro

## Overview

This document explains how image processing works in our Astro project and how we've configured it for both local development and Vercel deployment.

## Sharp Installation

Astro uses [Sharp](https://sharp.pixelplumbing.com/) as its default image processing library. When using a strict package manager like pnpm, Sharp must be installed manually as a dependency:

```bash
pnpm add sharp
```

This has been added to the project dependencies in `package.json`.

## Image Configuration

Our project uses Astro's built-in image optimization, configured in `astro.config.mjs`:

```javascript
image: {
  // Enable built-in image optimization
  domains: [
    'bun.sh',
    'upload.wikimedia.org',
    'avatars.githubusercontent.com',
    'cdn.jsdelivr.net',
    'pnpm.io',
  ]
}
```

This configuration:

1. Enables Astro's built-in image optimization
2. Allows images from the specified domains to be optimized

## Vercel Deployment

When deploying to Vercel, the `@astrojs/vercel` adapter is used. This adapter is configured in `astro.config.mjs`:

```javascript
adapter: vercel()
```

For Vercel deployments, Sharp is required for image processing. Without Sharp installed, you'll encounter the following error:

```
MissingSharp: Could not find Sharp. Please install Sharp (`sharp`) manually into your project or migrate to another image service.
```

## Alternative Approaches

If you don't want to use Sharp for image processing, you can configure a passthrough image service in `astro.config.mjs`:

```javascript
import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
});
```

This will disable image processing entirely.

## Best Practices

1. Always include Sharp as a dependency in projects that use Astro's image optimization
2. Store local images in the `src/` directory for Astro to process them
3. Use the `<Image />` component from `astro:assets` for optimized images
4. For external images, ensure their domains are added to the `domains` list in the image configuration

## Troubleshooting

If you encounter image processing issues:

1. Verify Sharp is installed correctly: `pnpm add sharp`
2. Check that the image domains are properly configured in astro.config.mjs
3. For Vercel-specific issues, ensure the Vercel adapter is properly configured with `imageService: true`
4. Check the `.vercelignore` file to ensure Sharp is not being excluded from deployment