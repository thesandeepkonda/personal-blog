# personal-blog

Jenkins & DockerHub Setup
DockerHub Credentials in Jenkins:

ID: dockerhub-creds

Username & Password

Kubeconfig: Jenkins needs access to your Kubernetes cluster.

Install kubectl

Add kubeconfig to Jenkins agent or use Kubernetes plugin.

✅ Final Steps
docker build -t your-dockerhub-username/personal-blog .

docker push your-dockerhub-username/personal-blog

kubectl apply -f k8s/

Configure DNS to point to Ingress controller
