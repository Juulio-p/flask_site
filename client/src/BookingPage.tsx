import { FormEvent, useRef, useState } from "react";
import classes from "./BookingPage.module.css";

type FormErrors = {
  name?: string;
  email?: string;
  vehicle?: string;
  serviceAddress?: string;
  services?: string;
  referral?: string;
  phoneNumber?: string;
};

export default function ScheduleService() {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<"success" | "error" | "">("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const messageRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    vehicle: "",
    message: "",
    serviceAddress: "",
    availability: "",
    referral: "",
    phoneNumber:"",
  });


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the error for this field as soon as they start fixing it
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };
const validateForm = () => {
  const newErrors: FormErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Please enter your first and last name.";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Please enter a valid email address.";
  }

  if (!formData.vehicle.trim()) {
    newErrors.vehicle = "Please enter your vehicle year, make, and model.";
  }

  if (!formData.serviceAddress.trim()) {
    newErrors.serviceAddress = "Please enter the service address.";
  }

  if (!formData.phoneNumber.trim()) {
    newErrors.phoneNumber = "Please enter your phone number.";
  }

  if (!formData.referral) {
    newErrors.referral = "Please tell us how you heard about us.";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear previous status
    setStatus("");
    setMessage("");

    // Validate before sending
    if (!validateForm()) {
      setStatus("error");
      setMessage("Unable to submit your request, please review form or try again.");

      setTimeout(() => {
        messageRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 50);

      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://otgoilchange.com/Booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
          }),
        }
      );

      let data;

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(
          data.error || "We were unable to submit your request."
        );
      }

      // SUCCESS
      setStatus("success");
      setMessage(
        "Your service request was submitted successfully! We'll be in contact with you shortly."
      );

      // Clear form
      setFormData({
        name: "",
        email: "",
        vehicle: "",
        message: "",
        serviceAddress: "",
        availability: "",
        referral: "",
        phoneNumber:"",

      });

      setErrors({});

      // Bring success message into view
      setTimeout(() => {
        messageRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 50);
    } catch (error) {
      console.error("Booking submission error:", error);

      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your request. Please try again."
      );

      setTimeout(() => {
        messageRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 50);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className={classes.container}>
        <h1>SCHEDULE SERVICE</h1>

        <p className={classes.subtitle}>
          Submit the info below to schedule your service.
          <br />
          We'll be in contact with you shortly to find a day and time that
          works best for you.
        </p>

        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          {/* STATUS MESSAGE */}

          {message && (
            <div
              ref={messageRef}
              className={`${classes.formMessage} ${
                status === "success"
                  ? classes.successMessage
                  : classes.errorMessage
              }`}
              role="alert"
            >
              <strong>
                {status === "success" ? "✓ Request Submitted" : "⚠ Request Error"}
              </strong>

              <span>{message}</span>
            </div>
          )}

          {/* NAME / EMAIL */}

          <div className={classes.row}>
            <div>
              <label>First and Last Name *</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? classes.inputError : ""}
              />

              {errors.name && (
                <span className={classes.fieldError}>{errors.name}</span>
              )}
            </div>

            <div>
              <label>Email *</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? classes.inputError : ""}
              />

              {errors.email && (
                <span className={classes.fieldError}>{errors.email}</span>
              )}
            </div>
          </div>

          {/* VEHICLE */}

          <label>Year Make Model *</label>

          <input
            type="text"
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            placeholder="Ex: 2015 Subaru WRX"
            className={errors.vehicle ? classes.inputError : ""}
          />

          {errors.vehicle && (
            <span className={classes.fieldError}>{errors.vehicle}</span>
          )}

          {/* MESSAGE */}

          <label>Message</label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please include sub model or engine (Ex: 2.0, 3.5, 6.2, etc)"
            rows={4}
          />

          {/* SERVICES */}

          
          {/* ADDRESS */}

          <label>Service Address *</label>

          <input
            type="text"
            name="serviceAddress"
            value={formData.serviceAddress}
            onChange={handleChange}
            placeholder="Street Address"
            className={errors.serviceAddress ? classes.inputError : ""}
          />

          {errors.serviceAddress && (
            <span className={classes.fieldError}>
              {errors.serviceAddress}
            </span>
          )}


         <label>Phone Number *</label>

<input
  type="tel"
  name="phoneNumber"
  value={formData.phoneNumber}
  onChange={handleChange}
  placeholder="(619) 555-1234"
  autoComplete="tel"
/>

{errors.phoneNumber && (
  <span className={classes.fieldError}>
    {errors.phoneNumber}
  </span>
)}

          {/* AVAILABILITY */}

          <label>Usual Availability</label>

          <textarea
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            placeholder="Any specific days and/or times work best for you?"
            rows={3}
          />

          {/* REFERRAL */}

          <label>Where did you hear about us? *</label>

          <select
            name="referral"
            value={formData.referral}
            onChange={handleChange}
            className={errors.referral ? classes.inputError : ""}
          >
            <option value="">Select one</option>
            <option value="Instagram">Instagram</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="Friend / Family">Friend / Family</option>
            <option value="Other">Other</option>
          </select>

          {errors.referral && (
            <span className={classes.fieldError}>{errors.referral}</span>
          )}


          <button type="submit" disabled={loading}>
            {loading ? "SENDING REQUEST..." : "SEND MESSAGE"}
          </button>
        </form>
      </div>
    </section>
  );
}