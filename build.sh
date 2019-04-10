set -e

[ -d /halfpipe-cache ] && export npm_config_cache="/halfpipe-cache/.npm"

npm install
npm test