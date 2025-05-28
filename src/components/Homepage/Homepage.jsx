import React from "react";
import ServicesSlider from "../HomepageServices/servicesSlider";
import Banner from "../Banner/Banner";
import ContentSlider from "../ContentSlider/ContentSlider";
import Services from "../ServicesSlider/Services";
import PromotionalBanner from "../PromotionalBanner/PromotionalBanner";
import cleanerman from '/cleanerman-1.png'

const Homepage = () => {
  const slidesData = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1kkztlkXfMYyfe5TGSadJfwrPRD0Ww3DVuA&s",
      title: "Exciting Deals on Toys!",
      description:
        "Shop the latest fun and educational toys at amazing discounts.",
      link: "/category/toys",
      tag: "Limited stock",
    },
    {
      image:
        "https://www.candidshutters.com/maintenance/wp-content/uploads/2024/06/Best-wedding-photographers-India-Top-5-destination-wedding-photographers-Indian-weddings-2.jpg",
      title: "Premium Services for You!",
      description:
        "Get top-notch services tailored to your needs at unbeatable prices.",
      link: "/services",
      tag: "Best in Photography service",
    },
    {
      image: "https://flare.pk/wp-content/uploads/2023/01/1-1.jpg",
      title: "Exclusive Electronics Sale!",
      description:
        "Upgrade to the latest gadgets and electronics with special discounts.",
      link: "/category/electronics",
      tag: "Hot deals",
    },
  ];

  const sampleServices = [
    {
      name: "Foam-jet AC service",
      rating: 4.78,
      reviews: 1600000,
      price: 649,
      image: null
    },
    {
      name: "Intense bathroom cleaning",
      rating: 4.78,
      reviews: 2400000,
      price: 519,
      image: null
    },
    {
      name: "Intense cleaning (2 bathrooms)",
      rating: 4.78,
      reviews: 2400000,
      price: 950,
      originalPrice: 1030,
      discount: 8,
      image: null
    },
    {
      name: "Sara fruit cleanup",
      rating: 4.86,
      reviews: 138000,
      price: 699,
      image: null
    },
    {
      name: "Sofa cleaning",
      rating: 4.85,
      reviews: 493000,
      price: 499,
      image: null
    },
    {
      name: "Deep carpet cleaning",
      rating: 4.82,
      reviews: 256000,
      price: 799,
      image: null
    }
  ];

  return (
    <div className="min-h-screen">
      <div>
        <Banner />
      </div>
      <div>
        <ContentSlider banners={slidesData} />
      </div>
      <ServicesSlider
        title="Salon for Women"
        services={[
          {
            title: "Pedicure",
            image:
              "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1669782507190-9db197.jpeg",
          },
          {
            title: "Waxing",
            image:
              "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1681999813146-a2d7ed.jpeg",
          },
          { title: "Threading & face waxing", image: "threading.jpg" },
          { title: "Facial & cleanup", image: "facial.jpg" },
          { title: "Manicure", image: "manicure.jpg" },
          { title: "Manicure", image: "manicure.jpg" },
          { title: "Manicure", image: "manicure.jpg" },
          { title: "Manicure", image: "manicure.jpg" },
          { title: "Manicure", image: "manicure.jpg" },
          { title: "Manicure", image: "manicure.jpg" },
          { title: "Manicure", image: "manicure.jpg" },
        ]}
      />

<div className="px-4 md:px-12">
      {/* Water Purifier Banner */}
      <PromotionalBanner
        title="2 years of worry-free water"
        subtitle="Needs no service for 2 years*"
        buttonText="Buy now"
        // onButtonClick={handleWaterPurifierClick}
        backgroundColor="from-slate-900 to-slate-800"
        image="https://www.eurekaforbes.com/cms/assets/prod/1_d2a84114a2_e36c0e2dc0.jpg"
        imageAlt="Woman drinking water with water purifier"
        disclaimer="*Subject to terms and conditions. Based on average usage."
        className="mb-8"
      />
</div>
      <div>
          <Services 
        title="Most booked services" 
        products={sampleServices} 
      />
      </div>

<div className="px-4 md:px-12">
  {/* Cleaning Wala Banner */}
  <PromotionalBanner
    title="Sparkling Clean Homes"
    subtitle="Professional cleaning services you can trust"
    buttonText="Book Now"
    // onButtonClick={handleCleaningWalaClick}
    backgroundColor="from-green-800 to-green-900"
    image={cleanerman}
    imageAlt="Professional cleaner cleaning a living room"
    disclaimer="*Service availability may vary by location."
    className="mb-8"
  />
</div>


      {/* <ServicesSlider
        title="Salon for Women"
        services={[
          {
            title: "Pedicure",
            image:
              "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1669782507190-9db197.jpeg",
          },
          {
            title: "Waxing",
            image:
              "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1681999813146-a2d7ed.jpeg",
          },
          { title: "Threading & face waxing", image: "threading.jpg" },
          { title: "Facial & cleanup", image: "facial.jpg" },
          { title: "Manicure", image: "manicure.jpg" },
          { title: "Manicure", image: "manicure.jpg" },
          { title: "Manicure", image: "manicure.jpg" },
          { title: "Manicure", image: "manicure.jpg" },
          { title: "Manicure", image: "manicure.jpg" },
          { title: "Manicure", image: "manicure.jpg" },
          { title: "Manicure", image: "manicure.jpg" },
        ]}
      /> */}
    </div>
  );
};

export default Homepage;
