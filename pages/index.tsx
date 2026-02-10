import React, { useEffect, useState } from "react";
import axios from "axios";
import Pill from "@/components/Pill";
import PropertyCard from "@/components/property/PropertyCard";
import { PropertyProps } from "@/interfaces";

// Background image constant
const HERO_BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const filterLabels = [
    "Top Villa",
    "Self Checkin",
    "Free Parking",
    "Beachfront",
    "Mountain View",
    "Pet Friendly",
    "Pool",
    "WiFi"
  ];

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get<PropertyProps[]>("/api/properties");
        setProperties(response.data);
      } catch (err) {
        setError("Failed to load properties. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_BACKGROUND_IMAGE}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {filterLabels.map((label) => (
            <Pill key={label} label={label} />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Properties
        </h2>
        {loading && (
          <p className="text-center text-gray-600">Loading properties...</p>
        )}

        {!loading && error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        {!loading && !error && properties.length === 0 && (
          <p className="text-center text-gray-600">No properties available.</p>
        )}

        {!loading && !error && properties.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
