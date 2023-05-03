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
        stage('Call Next Jenkinsfile') {
            steps {
                build job: deploy.Jenkinsfile, propagate: true
            }
        }
    }
    post {
        success {
            echo 'La compilación y las pruebas han sido exitosas. Se ejecutará el siguiente Jenkinsfile.'
        }
    }
}