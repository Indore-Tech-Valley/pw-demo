import React from "react";
import ServicesSlider from "../HomepageServices/servicesSlider";
import Banner from "../Banner/Banner";
import ContentSlider from "../ContentSlider/ContentSlider";

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
