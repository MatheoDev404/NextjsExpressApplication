import React from 'react'

function LoginForm() {
  return (
    <div>
      <form action="localhost:8080/api/auth/signup" method="post">
        <label htmlFor="userEmail">email:</label>
        <input type="text" id="userEmail" name="userEmail" />
        <label htmlFor="password">password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Connexion</button>
      </form>
    </div>
  )
}

export default LoginForm
