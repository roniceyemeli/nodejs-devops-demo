docker build -t roniceyemeli/nodejs-devops-demo:2.0.0 .

# docker build -f Dockerfile.dev -t roniceyemeli/nodejs-devops-demo-dev:2.0.0

# docker build -f Dockerfile.prod -t roniceyemeli/nodejs-devops-demo-prod:2.0.0

docker images
docker run --name nodejs-demo-app -p 5000:5000 -d roniceyemeli/nodejs-devops-demo:2.0.0
docker login
docker push roniceyemeli/nodejs-devops-demo:2.0.0
