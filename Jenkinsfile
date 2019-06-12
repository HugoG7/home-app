pipeline {
  agent {
    docker {
      image 'node:8-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'cd backend && npm install'
      }
    }
    stage('Deploy') {
      steps {
        sh 'node app'
      }
    }
  }
}