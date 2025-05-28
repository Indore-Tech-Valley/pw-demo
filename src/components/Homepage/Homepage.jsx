import React from "react";
import ServicesSlider from "../HomepageServices/servicesSlider";
import Banner from "../Banner/Banner";
import ContentSlider from "../ContentSlider/ContentSlider";

const Homepage = () => {
  const slidesData = [
    {
      image:
        "https://media.istockphoto.com/id/1417833200/photo/happy-professional-cleaners-cleaning-a-bathroom-at-an-apartment.jpg?s=612x612&w=0&k=20&c=98suJNqwaQnlzReilcdcfGDz_G7QNGUmha2Gm-6Yzug=",
      title: "Exciting Deals on Toys!",
      description:
        "Shop the latest fun and educational toys at amazing discounts.",
      link: "/category/toys",
      tag: "Limited stock",
    },
    {
      image:
        "https://www.pureitwater.com/media/catalog/product/e/c/echowaterhero.jpg",
      title: "Premium Services for You!",
      description:
        "Get top-notch services tailored to your needs at unbeatable prices.",
      link: "/services",
      tag: "Best in Photography service",
    },
    {
      image: "https://techsquadteam.com/assets/profile/blogimages/8c42c134c477b719fd540549fdaf44fb.jpg",
      title: "Exclusive Electronics Sale!",
      description:
        "Upgrade to the latest gadgets and electronics with special discounts.",
      link: "/category/electronics",
      tag: "Hot deals",
    },
    
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
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
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1669782507190-9db197.jpeg"
  },
  {
    title: "Waxing",
    image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1681999813146-a2d7ed.jpeg"
  },
  {
    title: "Threading & Face Waxing",
    image: "https://media.istockphoto.com/id/692999494/photo/hairdresser-cutting-some-hair-tips.jpg?s=612x612&w=0&k=20&c=5bC0fdICk914P5JWYDOi6N3CirJV4IBMTxYJh32vi8o="
  },
  {
    title: "Facial & Cleanup",
    image: "https://media.istockphoto.com/id/921797424/photo/woman-in-mask-on-face-in-spa-beauty-salon.jpg?s=612x612&w=0&k=20&c=gGSPZOjIS2wcwQyOcjANOKpRVU0KR_iEDbRACnAoIXA="
  },
  {
    title: "Manicure",
    image: "https://hips.hearstapps.com/hmg-prod/images/download-51-1567099294.jpeg?crop=1xw:1xh;center,top&resize=1200:*"
  },
  {
    title: "Hair Spa",
    image: "https://img.freepik.com/premium-photo/female-hairstylist-working-salon-spa_63106-649.jpg"
  },
  {
    title: "Body Polishing",
    image: "https://www.feminazbeautyzone.com/wp-content/uploads/2015/02/Body-Polishing.jpg"
  },
  {
    title: "Detan Treatment",
    image: "https://noahair.in/wp-content/uploads/2023/10/Detan-treatment.jpg"
  },
  {
    title: "Haircut & Styling",
    image: "https://cdn.prod.website-files.com/67336b2139b6b0905c503a6b/67a374867c3099a48ebfc598_butterfly-cut-with-highlights.jpeg"
  },
  {
    title: "Bleach & Detan",
    image: "https://fabulicious.ae/wp-content/uploads/2022/04/Esthetics-Studio-6ba8db205056a36_6ba8dc8d-5056-a36a-07f668710c84e2ec.jpg"
  },
  {
    title: "Bridal Makeup",
    image: "https://i.pinimg.com/564x/2d/07/d6/2d07d6a809b1ec416c00b818a68ba110.jpg"
  }
]
}
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
