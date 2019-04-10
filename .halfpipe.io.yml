team: workshop
pipeline: michaels-node-app
tasks:
- type: run
  name: build
  script: ./build.sh
  docker:
    image: node:10.10.0-alpine
  save_artifacts:
  - .

- type: deploy-cf
  name: deploy app
  api: ((cloudfoundry.api-snpaas))
  space: dev
  manifest: manifest.yml
  deploy_artifact: .
  vars:
    MY_SECRET: ((michaels-apps.test_key))