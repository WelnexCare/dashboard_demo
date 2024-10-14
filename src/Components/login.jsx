import React from 'react';
import Slider from "react-slick";
import sideimg1 from "../assets/Sign in.png"; // Example images
import sideimg2 from "../assets/Sign in.png";
import sideimg3 from "../assets/Sign in.png";

const Login = () => {
  // Slider settings without arrows
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,  // Hides the arrows
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-stretch justify-center ">
      {/* Left Column - Login Form */}
      <div className="md:w-1/2 w-full flex justify-center items-center p-6">
        <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md relative z-10">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Sign in</h2>

          {/* Form */}
          <form>
            <div className="mb-4 relative">
              <label className="block text-sm text-gray-600">Username</label>
              <div className="flex items-center border rounded-lg p-2 mt-1">
                <i className="fas fa-user text-gray-400 mr-2"></i>
                <input
                  type="text"
                  className="w-full focus:outline-none"
                  placeholder="team@welnexautomation.com"
                />
              </div>
            </div>

            <div className="mb-4 relative">
              <label className="block text-sm text-gray-600">Password</label>
              <div className="flex items-center border rounded-lg p-2 mt-1">
                <i className="fas fa-lock text-gray-400 mr-2"></i>
                <input
                  type="password"
                  className="w-full focus:outline-none"
                  placeholder="Password"
                />
                <i className="fas fa-eye-slash text-gray-400 ml-2"></i>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-200"
            >
              Log In
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Don’t have an account? <a href="/sign-up" className="text-blue-500 hover:underline">Sign Up</a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Column - Image Slider */}
      <div className="md:w-1/2 w-full h-100vh hidden md:flex justify-center items-center p-6 bg-blue-200">
        <div className="w-full max-w-md">
          <Slider {...settings}>
            <div className="text-center">
              <img src={sideimg1} alt="Slide 1" className="w-full " />
              <p className="mt-4 text-black">Welcome to Welnex! The true joy of healthcare is helping people, but repetitive tasks can make it feel like an emotionless machine.</p>
            </div>
            <div className="text-center">
              <img src={sideimg2} alt="Slide 2" className="w-full " />
              <p className="mt-4 text-black">Stay connected and streamline your work processes with us.</p>
            </div>
            <div className="text-center">
              <img src={sideimg3} alt="Slide 3" className="w-full " />
              <p className="mt-4 text-black ">Our tools will help you work more efficiently and achieve your goals faster.</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Login;
