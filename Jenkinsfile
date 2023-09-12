pipeline {
    agent {
    // this image provides everything needed to run Cypress
        docker {
          image 'cypress/base:18.14.1'
        }
    }
    tools {
        nodejs 'Nodejs'
    }
    stages {
        stage('Build') { 
            steps {
                echo 'Building...'
                sh 'npm install' 
                sh 'npm run build' 
            }
        }
        stage('Unit Tests') { 
            steps {
                echo 'Testing 1...'
                sh 'npm test' 
            }
        }
    
        stage('Integration Tests') {
                steps {
                    echo 'Testing 2...'
                    sh 'npm run e2e'              
                }           
        }
    }
}
