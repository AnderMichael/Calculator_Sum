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
        script{
            stage('Integration Tests') {
                wrap([$class: 'Xvfb', screen: '1920x1080x24']) {
                    steps {
                        echo 'Testing 2...'
                        sh 'npm run e2e'              
                    }
                }
            }
        }
    }
}
