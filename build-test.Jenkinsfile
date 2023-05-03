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
            build job: '/division-jenkinsfiles/deploy.Jenkinsfile', parameters: [
                string(name: 'GIT_BRANCH', value: "${env.GIT_BRANCH}"),
                string(name: 'BUILD_NUMBER', value: "${env.BUILD_NUMBER}")
            ], propagate: false
        }
    }
}