pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test' 
            }
        }
        stage('Triger Deploy pipeline'){
            steps {
                build 'api-devops-deploy'
            }
        }
    }
}