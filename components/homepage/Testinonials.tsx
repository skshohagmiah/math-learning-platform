const Testimonials: React.FC = () => {
    const testimonials = [
      { name: "Alex Johnson", role: "High School Student", quote: "This platform made calculus fun and easy to understand. I've improved my grades significantly!" },
      { name: "Sarah Lee", role: "College Freshman", quote: "The interactive lessons and practice problems helped me ace my linear algebra course." },
      { name: "Mike Brown", role: "Data Analyst", quote: "The statistics course here prepared me well for my career in data science." },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Testimonials