pipeline {
    agent any
    tools {
        nodejs 'Nodejs'
    }
    stages {
        stage('Build') { 
            steps {
                echo 'Building...'
                sh 'apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb'
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
