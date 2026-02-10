import React from "react";

export interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
}

interface OrderSummaryProps {
  bookingDetails: BookingDetails;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => {
  const { propertyName, price, bookingFee, totalNights, startDate } =
    bookingDetails;

  const subtotal = price * totalNights;
  const total = subtotal + bookingFee;

  return (
    <aside className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Property Header */}
      <div className="relative h-40 sm:h-48 w-full">
        <img
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900"
          alt={propertyName}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-white text-lg font-semibold leading-tight line-clamp-2">
              {propertyName}
            </h2>
            <p className="mt-1 text-xs text-gray-100">
              Entire villa • Beachfront • Private pool
            </p>
          </div>
          <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full">
            <svg
              className="w-4 h-4 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span className="text-xs font-semibold text-gray-900">4.9</span>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-7 space-y-6">
        {/* Stay details */}
        <div className="border border-gray-100 rounded-lg p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Your stay
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-900">
              {startDate}
            </p>
          </div>
          <div className="h-px w-full bg-gray-100 sm:h-10 sm:w-px sm:self-stretch sm:my-0 my-2" />
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Total nights
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-900">
              {totalNights} night{totalNights > 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Price breakdown */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            Price details
          </h3>
          <dl className="mt-3 space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-gray-600">
                ${price.toLocaleString()} × {totalNights} night
                {totalNights > 1 ? "s" : ""}
              </dt>
              <dd className="font-medium text-gray-900">
                ${subtotal.toLocaleString()}
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-gray-600">Booking fee</dt>
              <dd className="font-medium text-gray-900">
                ${bookingFee.toLocaleString()}
              </dd>
            </div>
          </dl>

          <div className="mt-4 border-t border-dashed border-gray-200 pt-4 flex items-center justify-between text-sm">
            <dt className="font-semibold text-gray-900">Total (USD)</dt>
            <dd className="text-lg font-semibold text-gray-900">
              ${total.toLocaleString()}
            </dd>
          </div>
        </div>

        {/* Security note */}
        <div className="rounded-lg bg-gray-50 p-3.5 text-xs text-gray-600">
          <p>
            Your payment is processed securely. We’ll only share your contact
            details with the Host after your booking is confirmed.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default OrderSummary;

