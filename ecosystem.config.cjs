module.exports = {
  deploy: {
    production: {
      user: 'appuser',
      host: 'amster_app',
      ref: 'origin/main',
      repo: 'https://github.com/RaufERK/triplex-showroom.git',
      path: '/home/appuser/apps/triplex-app',
      'post-deploy': [
        'source ~/.nvm/nvm.sh && nvm use --lts',
        'npm ci',
        'npm run build',
        'sudo chown -R www-data:www-data dist/',
        'sudo systemctl reload nginx',
      ].join(' && '),
      env: {
        NODE_ENV: 'production',
      },
    },
  },
}
