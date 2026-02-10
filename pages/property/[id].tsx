import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { PropertyProps } from "@/interfaces";
import PropertyDetail from "@/components/property/PropertyDetail";
import ReviewSection from "@/components/property/ReviewSection";

const PropertyPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get<PropertyProps>(
          `/api/properties/${id}`
        );
        setProperty(response.data);
      } catch (err) {
        setError("Failed to load property details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full py-16 text-center text-gray-600">
        Loading property details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-16 text-center text-red-500">{error}</div>
    );
  }

  if (!property) {
    return (
      <div className="w-full py-16 text-center text-gray-600">
        Property not found.
      </div>
    );
  }

  const propertyId =
    typeof id === "string" ? id : Array.isArray(id) ? id[0] : "";

  return (
    <div className="w-full">
      <PropertyDetail property={property} />
      {propertyId && <ReviewSection propertyId={propertyId} />}
    </div>
  );
};

export default PropertyPage;

