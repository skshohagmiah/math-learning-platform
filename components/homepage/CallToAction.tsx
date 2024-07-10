const CallToAction: React.FC = () => {
    return (
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Math Journey?</h2>
          <p className="text-xl mb-8">Join thousands of students who are mastering math with our interactive platform.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Start Free Trial
          </button>
        </div>
      </section>
    );
  };

  export default CallToAction