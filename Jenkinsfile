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
                    wrap([$class: 'Xvfb']) {
                        stage('Test 2'){
                            steps{
                                echo 'Testing 2...'
                                sh 'npm run e2e'
                            }              
                        }
                    }
                }
            }
        }
    }
}
