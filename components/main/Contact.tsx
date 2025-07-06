"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../sub/Alert";
import { Particles } from "../sub/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type: string, message: string) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form submitted:", formData);
      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Ali",
          from_email: formData.email,
          to_email: "AliSanatiDev@gmail.com",
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.error("EmailJS error:", error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  return (
    <section id="contact" className="flex flex-col relative items-center c-space section-spacing min-h-screen">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Contact Me
      </h1>
      <Particles
        className="absolute inset-0 -z-50"
        quantity={50} // Reduced for mobile performance
        ease={80}
        color="#ffffff"
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center w-full max-w-md p-5 mx-auto border border-white/10 rounded-2xl">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus w-full"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus w-full"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="field-input field-input-focus w-full"
              placeholder="Share your thoughts..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;