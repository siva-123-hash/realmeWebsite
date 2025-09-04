pipeline {
    agent any
    environment {
        DOCKER_HUB_USER = 'siva0927'        // 🔹 your DockerHub username
        IMAGE_NAME      = 'realmemobile'
        IMAGE_TAG       = 'v1'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/<siva-123-hash>/realme-mobile-portal.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t realmemobile:v1 ./docker'
            }
        }
        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'siva0927-dockerhub',  // 🔹 Jenkins credential ID
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                    echo "⚡ Logging into DockerHub..."
                    echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin

                    echo "⚡ Tagging image..."
                    docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${DOCKER_HUB_USER}/${IMAGE_NAME}:${IMAGE_TAG}

                    echo "⚡ Pushing image..."
                    docker push ${DOCKER_HUB_USER}/${IMAGE_NAME}:${IMAGE_TAG}
                    '''
                }
            }
        }

        stage('Test Container') {
            steps {
                sh 'docker rm -f realme-test || true'
                sh 'docker run -d --name realme-test -p 8082:8080 realmemobile:v1'
                sh 'sleep 10 && docker logs realme-test'
            }
        }

        stage('Deploy with Ansible') {
            steps {
                sh 'ansible-playbook -i ansible/inventory.ini ansible/playbook.yml'
            }
        }

        stage('Deploy to Swarm') {
            steps {
                script {
                    def swarmCheck = sh(script: "docker info --format '{{.Swarm.LocalNodeState}}'", returnStdout: true).trim()
                    if (swarmCheck != "active") {
                        sh 'docker swarm init || true'
                    }
                    sh 'docker service rm realme-service || true'
                    sh 'docker service create --name realme-service --publish 8082:8080 --replicas 3 siva0927/realmemobile:v1'
                }
            }
        }
    }
}

