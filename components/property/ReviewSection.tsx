import React, { useEffect, useState } from "react";
import axios from "axios";

interface Review {
  id: string;
  reviewerName: string;
  rating: number;
  comment: string;
  date?: string;
}

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get<Review[]>(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (err) {
        setError("Failed to load reviews. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchReviews();
    }
  }, [propertyId]);

  return (
    <section className="max-w-6xl mx-auto px-4 pb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Reviews</h2>

      {loading && (
        <p className="text-gray-600 text-sm">Loading reviews...</p>
      )}

      {!loading && error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      {!loading && !error && reviews.length === 0 && (
        <p className="text-gray-600 text-sm">No reviews yet.</p>
      )}

      {!loading && !error && reviews.length > 0 && (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-sm p-4 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-gray-900">
                  {review.reviewerName}
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-700">
                  <svg
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <span className="font-semibold">{review.rating}</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {review.comment}
              </p>
              {review.date && (
                <p className="mt-2 text-xs text-gray-500">{review.date}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ReviewSection;

