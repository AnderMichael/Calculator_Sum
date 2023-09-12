pipeline {
    agent {
        node{label 'master'}
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm build' 
            }
        }
        stage('Unit Tests') { 
            steps {
                sh 'npm test' 
            }
        }
    
        stage('Integration Tests') { 
            steps {
                sh 'npm run e2e' 
            }
        }
    }
}
