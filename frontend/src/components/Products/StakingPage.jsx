import React from "react";

const StakingPage = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Introduction */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">What is Staking?</h1>
        <p className="text-gray-700">
          Staking is a way to earn passive income with your cryptocurrency. It's
          like putting your money in a savings account and earning interest.
          When you stake your MLXC coins, you're helping to support the
          Marvellex network, and in return, you earn rewards.
        </p>
      </section>

      {/* How to Stake */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          How to Stake MLXC on Marvellex
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            <strong>Have enough MLXC:</strong> You'll need at least $35 worth of
            MLXC in your Marvellex wallet to start staking.
          </li>
          <li>
            <strong>Go to the Staking page:</strong> Click on the staking icon
            next to your MLXC balance in your wallet.
          </li>
          <li>
            <strong>Choose your staking plan:</strong> We offer three plans with
            varying durations and rewards.
          </li>
          <li>
            <strong>Enter the amount:</strong> Select your amount and preferred
            staking plan.
          </li>
          <li>
            <strong>Start earning:</strong> Confirm your staking plan and begin
            earning rewards!
          </li>
        </ol>
      </section>

      {/* Staking Plans */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Staking Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Short-term", duration: "3 months" },
            { name: "Mid-term", duration: "6 months" },
            { name: "Long-term", duration: "9 months" },
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-gray-600">{plan.duration}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits of Staking */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">
          Benefits of Staking MLXC
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Earn passive income:</strong> Get rewards without active
            trading.
          </li>
          <li>
            <strong>Support the network:</strong> Secure the Marvellex
            ecosystem.
          </li>
          <li>
            <strong>Flexible options:</strong> Choose a staking plan that fits
            your goals.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-black text-white py-3 px-6 rounded-lg text-lg font-semibold hover:opacity-80 transition">
          Start Staking Now
        </button>
      </section>
    </div>
  );
};

export default StakingPage;
