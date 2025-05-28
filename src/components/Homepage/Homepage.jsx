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

<ServicesSlider
  title="Home Cleaning Services"
  services={[
    {
      title: "Kitchen Cleaning",
      image:
        "",
    },
    {
      title: "Bathroom Cleaning",
      image:
        "",
    },
    {
      title: "Sofa Cleaning",
      image:
        "",
    },
    {
      title: "Full Home Deep Cleaning",
      image:
        "",
    },
    {
      title: "Carpet Cleaning",
      image:
        "",
    },
    {
      title: "Balcony Cleaning",
      image:
        "",
    },
    {
      title: "Mattress Cleaning",
      image:
        "",
    },
  ]}
/>

    
    </div>
  );
};

export default Homepage;
