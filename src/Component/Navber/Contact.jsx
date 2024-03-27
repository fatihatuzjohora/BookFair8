const Contact = () => {
  return (
    <div>
      <div className="fontPlay">
        <h1 className="mt-20 text-6xl text-center font-bold">Contact Us</h1>
        <p className="mt-5 mb-8 max-w-5xl mx-auto text-center text-2xl font-semibold ">
          Thank you for your interest in Prothful. We welcome your inquiries,
          feedback, and suggestions. Please feel free to reach out to us using
          the contact information provided below.
        </p>
        <hr />
      </div>

      <div className="hero mt-20 p-4 rounded-2xl fontPlay md:p-20 bg-base-200">
        <div className="hero-content grid-cols-1 grid md:grid-cols-2 gap-10">

          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center font-bold mb-5">Login now</h1>
            <p className="py-6 text-xl font-semibold text-center">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          
          <div className="card shrink-0 w-full max-w-md shadow-lg bg-base-100">

            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered text-xl font-semibold"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered text-xl font-semibold"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-xl font-semibold">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-xl font-semibold">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
