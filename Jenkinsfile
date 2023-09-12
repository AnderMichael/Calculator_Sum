pipeline {
    agent any
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
                script{
                    wrap([$class: 'xvfb', screen: '1920x1080x24']) {
                        echo 'Testing 2...'
                        sh 'npm run e2e'              
                    }
                }
            }
        }
    }
}
