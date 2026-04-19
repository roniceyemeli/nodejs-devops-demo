## check if your cluster is running(make sur ethat kubectl is installed and minikube likewise)

- kubectl cluster-info
- minikube status

then

1- kubectl apply -f k8s/backend-config.yaml
2- kubectl apply -f k8s/backend-deployment.yaml
3- kubectl apply -f k8s/grafana-deployment.yaml
4- kubectl apply -f k8s/prometheus-deployment.yaml
5- minikube dashboard &

## get services

kubectl get services

## get services new urls

echo "=== Service URLs ===" && echo "nodejs-devops-demo: $(minikube service nodejs-devops-demo --url)" && echo "grafana: $(minikube service grafana --url)" && echo "prometheus: $(minikube service prometheus --url)" 2>/dev/null || echo "Getting URLs..."
