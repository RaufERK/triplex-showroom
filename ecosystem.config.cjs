module.exports = {
  apps: [
    {
      name: 'triplex-app',
      script: 'node_modules/vite/bin/vite.js',
      args: 'preview --host 0.0.0.0 --port 3033',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      env: {
        NODE_ENV: 'production',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
  deploy: {
    production: {
      user: 'appuser',
      host: 'amster_app',
      ref: 'origin/main',
      repo: 'https://github.com/RaufERK/triplex.git',
      path: '/home/appuser/apps/triplex-app',
      'post-deploy': [
        'source ~/.nvm/nvm.sh && nvm use --lts',
        'ln -sf /home/appuser/shared/triplex-app/.env.production ./.env.production || true',
        'npm ci',
        'npm run build',
        'pm2 startOrReload ecosystem.config.cjs --env production',
        'pm2 save',
      ].join(' && '),
      env: {
        NODE_ENV: 'production',
      },
    },
  },
};

