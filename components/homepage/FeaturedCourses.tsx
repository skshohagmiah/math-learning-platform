const FeaturedCourses: React.FC = () => {
    const courses = [
      { title: "Calculus Fundamentals", level: "Intermediate", image: "/images/calculus.jpg" },
      { title: "Linear Algebra Mastery", level: "Advanced", image: "/images/linear-algebra.jpg" },
      { title: "Statistics for Data Science", level: "Beginner", image: "/images/statistics.jpg" },
      // Add more courses as needed
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600">Level: {course.level}</p>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default FeaturedCourses