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
    }
    
    post {
        success {
            load 'deploy.Jenkinsfile'
        }
    }
}