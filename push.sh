#!/bin/bash
# push.sh - Automated Docker push script

set -e  # Exit on error

# Configuration
IMAGE_NAME="nodejs-devops-demo"
USERNAME="roniceyemeli"
VERSION="2.0.0"

echo "🚀 Starting Docker push process..."

# Build the image
echo "Building Docker image..."
docker build -t ${USERNAME}/${IMAGE_NAME}:${VERSION} .

# Test the image
echo "Testing image locally..."
docker run -d -p 5000:5000 --name test-push ${USERNAME}/${IMAGE_NAME}:${VERSION} &
sleep 5
if curl -s http://localhost:5000 > /dev/null; then
    echo "✅ Image test passed"
else
    echo "❌ Image test failed"
    docker stop test-push && docker rm test-push
    exit 1
fi
docker stop test-push && docker rm test-push

# Tag as latest
echo "Tagging image..."
docker tag ${USERNAME}/${IMAGE_NAME}:${VERSION} ${USERNAME}/${IMAGE_NAME}:latest

# Push to Docker Hub
echo "Pushing to Docker Hub..."
docker push ${USERNAME}/${IMAGE_NAME}:${VERSION}
docker push ${USERNAME}/${IMAGE_NAME}:latest

echo "✅ Successfully pushed to Docker Hub!"
echo "📦 Image: ${USERNAME}/${IMAGE_NAME}:${VERSION}"
echo "📦 Image: ${USERNAME}/${IMAGE_NAME}:latest"
echo "🌐 View at: https://hub.docker.com/r/${USERNAME}/${IMAGE_NAME}"