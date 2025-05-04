"use client";
import emailjs from "@emailjs/browser";
import type React from "react";

import { useRef, useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  carDetails: string;
  serviceType: string;
  additionalDetails: string;
};

type FormErrors = {
  name?: string;
  phone?: string;
  carDetails?: string;
};

const serviceTypes = [
  "Oil Change",
  "Brake Service",
  "Tire Rotation",
  "Engine Tune-up",
  "Battery Replacement",
  "Air Conditioning",
  "Transmission Service",
  "General Inspection",
  "Other",
];

export default function ServiceRequestForm() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    carDetails: "",
    serviceType: serviceTypes[0],
    additionalDetails: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.carDetails.trim()) {
      newErrors.carDetails = "Car make & model is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    // Map the input names to the corresponding keys in formData
    const fieldMapping: { [key: string]: keyof FormData } = {
      user_name: "name",
      user_phone: "phone",
      user_email: "email",
      user_car: "carDetails",
      user_serviceType: "serviceType",
      user_additionalDetails: "additionalDetails",
    };

    const mappedField = fieldMapping[name];

    if (mappedField) {
      setFormData((prev) => ({
        ...prev,
        [mappedField]: value,
      }));

      // Clear error when user starts typing in a field
      if (errors[mappedField as keyof FormErrors]) {
        setErrors((prev) => ({
          ...prev,
          [mappedField]: undefined,
        }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      e.preventDefault();

      if (form.current) {
        emailjs
          .sendForm("service_pp4hqp6", "template_ixmwjut", form.current, {
            publicKey: "ZQoaeenJ6ZhO6Dksi",
          })
          .then(
            () => {
              console.log("SUCCESS!");
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
      } else {
        console.error("Form reference is null.");
      }

      // Simulate form submission
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: "",
            phone: "",
            email: "",
            carDetails: "",
            serviceType: serviceTypes[0],
            additionalDetails: "",
          });
          setIsSubmitted(false);
        }, 3000);
      }, 1000);
    }
  };

  return (
    <div className="bg-white shadow-xl max-w-[800px] w-full bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] border-zinc-200 border rounded-xl overflow-hidden">
      <div className="uppercase tracking-wide text-sm text-center mt-4  text-indigo-600 font-semibold mb-1">
        Premium Auto Service
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        Schedule Your Service Today
      </h2>
      {isSubmitted ? (
        <div className="p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Service Request Submitted
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Thank you for your request. Our team will contact you shortly to
            confirm your appointment.
          </p>
        </div>
      ) : (
        <form ref={form} onSubmit={handleSubmit} className="p-6 sm:p-8">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`block w-full px-4 py-3 rounded-md border ${
                    errors.name
                      ? "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } shadow-sm focus:outline-none focus:ring-2 transition duration-150 ease-in-out`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                )}
              </div>
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 relative">
                <input
                  type="tel"
                  id="phone"
                  name="user_phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`block w-full px-4 py-3 rounded-md border ${
                    errors.phone
                      ? "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } shadow-sm focus:outline-none focus:ring-2 transition duration-150 ease-in-out`}
                  placeholder="(123) 456-7890"
                />
                {errors.phone && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                )}
              </div>
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 transition duration-150 ease-in-out"
                  placeholder="john.doe@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="carDetails"
                className="block text-sm font-medium text-gray-700"
              >
                Car Make & Model <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  id="carDetails"
                  name="user_car"
                  value={formData.carDetails}
                  onChange={handleChange}
                  className={`block w-full px-4 py-3 rounded-md border ${
                    errors.carDetails
                      ? "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } shadow-sm focus:outline-none focus:ring-2 transition duration-150 ease-in-out`}
                  placeholder="Toyota Camry 2020"
                />
                {errors.carDetails && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                )}
              </div>
              {errors.carDetails && (
                <p className="mt-2 text-sm text-red-600">{errors.carDetails}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="serviceType"
                className="block text-sm font-medium text-gray-700"
              >
                Service Type
              </label>
              <div className="mt-1">
                <select
                  id="serviceType"
                  name="user_serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 transition duration-150 ease-in-out"
                >
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="additionalDetails"
                className="block text-sm font-medium text-gray-700"
              >
                Additional Details
              </label>
              <div className="mt-1">
                <textarea
                  id="additionalDetails"
                  name="user_additionalDetails"
                  rows={4}
                  value={formData.additionalDetails}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 transition duration-150 ease-in-out"
                  placeholder="Please provide any additional information about your service needs..."
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : "Schedule Service"}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
