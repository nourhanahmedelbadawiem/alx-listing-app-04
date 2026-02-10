import React from "react";

const CancellationPolicy: React.FC = () => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="space-y-6 md:space-y-8">
        {/* Cancellation Policy */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Cancellation Policy
          </h2>
          <p className="mt-3 text-sm text-gray-700 leading-relaxed">
            Free cancellation before <span className="font-semibold">Aug 23</span>.
            After that, cancel before <span className="font-semibold">Aug 24</span> for
            a partial refund. Cancellations made after this time may not be
            eligible for a refund. Exact refund amounts may vary based on the
            time of cancellation and local regulations.
          </p>
        </div>

        {/* Ground Rules */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Ground Rules</h2>
          <p className="mt-3 text-sm text-gray-700">
            To help keep this place comfortable and enjoyable for everyone,
            please:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
            <li>Follow the house rules provided by your Host.</li>
            <li>Treat your Host&apos;s home like your own.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CancellationPolicy;

