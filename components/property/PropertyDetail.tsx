import React from "react";
import { PropertyProps } from "@/interfaces";

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {property.name}
            </h1>
            <p className="text-sm text-gray-600">
              {property.address.city}, {property.address.state},{" "}
              {property.address.country}
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-1">
              <svg
                className="w-5 h-5 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span className="font-semibold">{property.rating}</span>
            </div>
            <span className="text-gray-400">•</span>
            <span>{property.category.join(" • ")}</span>
          </div>

          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Beds
              </p>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {property.offers.bed}
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Bathrooms
              </p>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {property.offers.shower}
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Guests
              </p>
              <p className="mt-1 text-lg font-semibold text-gray-900">
                {property.offers.occupants}
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar with pricing */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  ${property.price}
                  <span className="text-base font-normal text-gray-600">
                    {" "}
                    / night
                  </span>
                </p>
                {property.discount && (
                  <p className="mt-1 text-sm text-green-600 font-semibold">
                    {property.discount} today
                  </p>
                )}
              </div>
            </div>

            <p className="text-sm text-gray-600">
              Secure your stay now. You won&apos;t be charged yet.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default PropertyDetail;

