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
        always {
            echo 'Ejecución finalizada'
        }
        success {
            echo 'El pipeline se ejecutó correctamente'
            try {
                echo 'Ejecutando el segundo Jenkinsfile...'
                build job: 'deploy.Jenkinsfile', parameters: [[$class: 'StringParameterValue', name: 'Jenkinsfile', value: 'deploy.Jenkinsfile']]
            } catch (Exception e) {
                echo 'Ocurrió un error en el primer Jenkinsfile. El segundo Jenkinsfile no se ejecutará.'
            }
        }
        failure {
            echo 'El pipeline falló. El segundo Jenkinsfile no se ejecutará.'
        }
    }
}