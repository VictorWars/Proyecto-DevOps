pipeline {
    agent any

    stages {
        stage('deploy') {
            steps {
                sh 'docker build -t api-devops-${GIT_BRANCH}-1.0.0:${BUILD_NUMBER} .'
                sh ''' 
                containers=$(docker ps | grep api-devops* | awk '{print $1}')
                if [ ! -z $containers ];
                then
	                docker container stop $containers
                fi
                ''' 
                sh 'docker run -d -p 3000:3000 api-devops-${GIT_BRANCH}-1.0.0:${BUILD_NUMBER}'
            }
        }
    }
}