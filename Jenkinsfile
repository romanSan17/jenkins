pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run app') {
            steps {
                sh 'nohup node app.js &'
            }
        }

        stage('Test endpoint') {
            steps {
                script {
                    sleep 3 
                    sh 'curl -f http://localhost:3000'
                }
            }
        }
    }
}
