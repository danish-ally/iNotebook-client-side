import React from "react";


const Login = () => {

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <form>
      <div class="mb-3">
        <label for="email" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          name="email"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="password"
          name="password"
        />
      </div>
      <button type="submit" class="btn btn-primary" onSubmit={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Login;
