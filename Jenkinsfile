pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run App') {
            steps {
                sh 'node app.js'
            }
        }

        stage('Wait for App to Start') {
            steps {
                script {
                    sleep(time: 10, unit: 'SECONDS')  
                }
            }
        }

        stage('Test App') {
            steps {
                sh 'curl http://localhost:3001/ || exit 1'  
            }
        }
    }

    post {
        always {
            echo 'Pipeline koik'
        }
    }
}
