pipeline {
    agent any
    environment {
        BASE_URL = "https://tutorialsninja.com/demo"
        USER_EMAIL = "ajm@gmail.com"
        USER_PASSWORD = "2222"
        INVALID_USER = "al@gmail.co"
        INVALID_PASSWORD = "3323"
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*', allowEmptyArchive: true
        }
    }
}