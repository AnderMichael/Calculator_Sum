pipeline {
    agent {
        node{label 'master'}
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
    stages {
        stage('Unit Tests') { 
            steps {
                sh 'npm test' 
            }
        }
    }
    stages {
        stage('Integration Tests') { 
            steps {
                sh 'npm run e2e' 
            }
        }
    }
    stages {
        stage('Unit Tests') { 
            steps {
                sh 'npm build' 
            }
        }
    }
}
