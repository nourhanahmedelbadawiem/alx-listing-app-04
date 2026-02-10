import React from "react";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary, {
  BookingDetails,
} from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

const bookingDetails: BookingDetails = {
  propertyName: "Villa Arrecife Beach House",
  price: 7500,
  bookingFee: 65,
  totalNights: 3,
  startDate: "24 August 2024",
};

const BookingPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10 lg:py-16">
        <header className="mb-6 lg:mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Confirm and pay
          </h1>
          <p className="mt-2 text-sm text-gray-600 max-w-2xl">
            Review your trip details, enter your information, and confirm your
            booking for{" "}
            <span className="font-semibold">{bookingDetails.propertyName}</span>.
          </p>
        </header>

        {/* Main layout: BookingForm (left) and OrderSummary (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="lg:col-span-2">
            <BookingForm />
          </div>
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <OrderSummary bookingDetails={bookingDetails} />
            </div>
          </div>
        </div>

        {/* Cancellation Policy below */}
        <div className="mt-10 lg:mt-12">
          <CancellationPolicy />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;

