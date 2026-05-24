pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}