import React from "react";
import aboutImg from "../../assets/LoginPic.jpg"; // replace with your own image

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16">
      
      {/* Left Image */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img 
          src={aboutImg} 
          alt="About Us" 
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Right Content */}
       <div className="md:w-1/2 md:pl-12 space-y-6">
        <h2 className="text-4xl font-bold text-orange-600 mb-4">About ThreadCraft</h2>

        <p className="text-gray-700">
          At ThreadCraft, we are passionate about creating high-quality, stylish garments
          that combine comfort with fashion. Our mission is to deliver unique clothing
          experiences while maintaining sustainable and ethical practices in every step
          of our production.
        </p>

        <p className="text-gray-700">
          Founded by a team of dedicated fashion enthusiasts, ThreadCraft has grown into
          a community of creators, designers, and customers who believe in quality,
          creativity, and trust. We focus on ensuring that every product tells a story
          and makes you feel confident.
        </p>

        <p className="text-gray-700">
          Our team works tirelessly to innovate in fabric selection, design techniques,
          and finishing touches. Every garment undergoes strict quality checks to ensure
          it meets our high standards and provides the perfect fit for our customers.
        </p>

        <p className="text-gray-700">
          We also believe in giving back to the community. ThreadCraft actively engages
          in social initiatives, supporting local artisans and sustainable practices
          to create a positive impact in the fashion industry and beyond.
        </p>

        <p className="text-gray-700">
          Whether you're shopping for casual wear, formal outfits, or custom designs,
          ThreadCraft guarantees a memorable and enjoyable experience. Your satisfaction
          and trust are our highest priorities.
        </p>
         </div>
    </section>
   
  );
};

export default AboutUs;
