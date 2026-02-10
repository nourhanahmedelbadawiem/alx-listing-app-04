import React, { useState } from "react";
import axios from "axios";

const BookingForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);
    setValidationError(null);

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const email = String(formData.get("email") || "").trim();
    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();

    if (!firstName || !lastName || !email) {
      setValidationError("Please fill in your first name, last name, and email.");
      return;
    }

    if (!email.includes("@")) {
      setValidationError("Please enter a valid email address.");
      return;
    }

    const payload = {
      firstName,
      lastName,
      email,
      phone: String(formData.get("phone") || "").trim(),
      payment: {
        cardNumber: String(formData.get("cardNumber") || "").trim(),
        expiry: String(formData.get("expiry") || "").trim(),
        cvv: String(formData.get("cvv") || "").trim(),
      },
      billingAddress: {
        street: String(formData.get("street") || "").trim(),
        apt: String(formData.get("apt") || "").trim(),
        city: String(formData.get("city") || "").trim(),
        state: String(formData.get("state") || "").trim(),
        zip: String(formData.get("zip") || "").trim(),
        country: String(formData.get("country") || "").trim(),
      },
    };

    try {
      setLoading(true);
      await axios.post("/api/bookings", payload);
      setSuccessMessage("Your booking has been submitted successfully.");
      formElement.reset();
    } catch (error) {
      setErrorMessage("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputBaseClasses =
    "mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0 outline-none";

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-gray-900">Your details</h2>
      <p className="mt-2 text-sm text-gray-600">
        Enter your information to complete the booking and secure your stay.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-8">
        {/* Guest Information */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Guest information
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className={inputBaseClasses}
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                className={inputBaseClasses}
                placeholder="Doe"
                required
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Contact details
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={inputBaseClasses}
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className={inputBaseClasses}
                placeholder="+1 (555) 000-0000"
                required
              />
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Payment information
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <input
                id="cardNumber"
                name="cardNumber"
                type="text"
                inputMode="numeric"
                autoComplete="cc-number"
                className={inputBaseClasses}
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="expiry"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expiration Date
                </label>
                <input
                  id="expiry"
                  name="expiry"
                  type="text"
                  autoComplete="cc-exp"
                  className={inputBaseClasses}
                  placeholder="MM / YY"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVV
                </label>
                <input
                  id="cvv"
                  name="cvv"
                  type="password"
                  autoComplete="cc-csc"
                  className={inputBaseClasses}
                  placeholder="123"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            Billing address
          </h3>
          <div className="mt-4 space-y-4">
            <div>
              <label
                htmlFor="street"
                className="block text-sm font-medium text-gray-700"
              >
                Street Address
              </label>
              <input
                id="street"
                name="street"
                type="text"
                autoComplete="street-address"
                className={inputBaseClasses}
                placeholder="123 Beachfront Ave"
                required
              />
            </div>
            <div>
              <label
                htmlFor="apt"
                className="block text-sm font-medium text-gray-700"
              >
                Apt, Suite, etc. (optional)
              </label>
              <input
                id="apt"
                name="apt"
                type="text"
                className={inputBaseClasses}
                placeholder="Apt 4B"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className={inputBaseClasses}
                  placeholder="City"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  className={inputBaseClasses}
                  placeholder="State"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium text-gray-700"
                >
                  Zip Code
                </label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  autoComplete="postal-code"
                  className={inputBaseClasses}
                  placeholder="12345"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                autoComplete="country-name"
                className={inputBaseClasses}
                placeholder="United States"
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2 space-y-3">
          {(validationError || errorMessage || successMessage) && (
            <div>
              {validationError && (
                <p className="text-sm text-red-500 mb-1">{validationError}</p>
              )}
              {errorMessage && (
                <p className="text-sm text-red-500 mb-1">{errorMessage}</p>
              )}
              {successMessage && (
                <p className="text-sm text-green-600 mb-1">{successMessage}</p>
              )}
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full md:w-auto justify-center rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Processing..." : "Confirm & Pay"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default BookingForm;

