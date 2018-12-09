import { ref, firebaseAuth } from './config/constants'

export function auth (username, password) {
  return firebaseAuth().createUserWithEmailAndPassword(username, password)
    .then(saveUser)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, password) {
  return firebaseAuth().signInWithEmailAndPassword(email, password)
}

export function resetPassword (username) {
  return firebaseAuth().sendPasswordResetEmail(username)
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      username: user.username,
      uid: user.uid
    })
    .then(() => user)
}