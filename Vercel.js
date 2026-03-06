
  "version": 2,
  "builds": [
    { "src": "apps/web/next.config.js", "use": "@vercel/next" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/apps/web/api/$1" }
  ]
}
