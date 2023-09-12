pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
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
