import React from "react";
import ServicesSlider from "../HomepageServices/ServicesSlider";
import Banner from "../Banner/Banner";
import ContentSlider from "../ContentSlider/ContentSlider";
import Services from "../ServicesSlider/Services";
import PromotionalBanner from "../PromotionalBanner/PromotionalBanner";
import cleanerman from '/cleanerman-1.png'; // Adjust path as needed

const Homepage = () => {
  const slidesData = [
  {
    image:
      "https://techsquadteam.com/assets/profile/blogimages/8c42c134c477b719fd540549fdaf44fb.jpg",
    title: "Complete Home Cleaning",
    description: "Make your home shine with our affordable and expert cleaning solutions.",
    link: "/services/home-cleaning",
    tag: "Home Sparkle"
  },
  {
    image:
      "https://www.pureitwater.com/media/catalog/product/e/c/echowaterhero.jpg",
    title: "RO Water Purifier Service",
    description: "Ensure your family drinks safe and pure water with regular RO maintenance.",
    link: "/services/ro-purifier",
    tag: "Safe Water"
  },
  {
    image:
      "https://media.istockphoto.com/id/1417833200/photo/happy-professional-cleaners-cleaning-a-bathroom-at-an-apartment.jpg?s=612x612&w=0&k=20&c=98suJNqwaQnlzReilcdcfGDz_G7QNGUmha2Gm-6Yzug=",
    title: "Expert Bathroom Cleaning",
    description: "Deep clean your bathroom with our professional and hygienic service.",
    link: "/services/bathroom-cleaning",
    tag: "Sparkling Clean"
  }
];


  const sampleServices = [
    { name: "Foam-jet AC service", rating: 4.78, reviews: 1600000, price: 649 , image:"https://www.devair.co.in/images/services/2.jpg"},
    { name: "Intense bathroom cleaning", rating: 4.78, reviews: 2400000, price: 519 , image:"https://www.southernliving.com/thmb/FYfR4gtrruf5ENcg9-PZXARRKX4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1224808645-8c50b5d0099e4eb8a8d591321787237b.jpg" },
    { name: "Intense cleaning (2 bathrooms)", rating: 4.78, reviews: 2400000, price: 950, originalPrice: 1030, discount: 8 , image:"https://www.marthastewart.com/thmb/X3G1zINjas0e5skSgy1sSbWqO4w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bathroom-cleaning-products-getty-0521-2000-f433a11ae4da4ddb8e593696c1263af8.jpg"},
    { name: "Sara fruit cleanup", rating: 4.86, reviews: 138000, price: 699 , image:"https://skinkraft.com/cdn/shop/articles/Facial-Versus-Clean-up_1024x1024.jpg?v=1593155930"},
    { name: "Sofa cleaning", rating: 4.85, reviews: 493000, price: 499 , image:"https://5.imimg.com/data5/SELLER/Default/2021/10/DF/DJ/MI/17706040/sofa-cleaning-services.jpg"},
    { name: "Deep carpet cleaning", rating: 4.82, reviews: 256000, price: 799, image:"https://5.imimg.com/data5/SELLER/Default/2021/10/UH/HK/UD/17706040/carpet-cleaning-services-500x500.jpg"}
  ];

  return (
    <div className="min-h-screen ">
      <Banner />
      <ContentSlider banners={slidesData} />

      <ServicesSlider
        title="Salon for Women"
        services={[
          { title: "Pedicure", image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1669782507190-9db197.jpeg" },
          { title: "Waxing", image: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/dpr_2,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/supply/customer-app-supply/1681999813146-a2d7ed.jpeg" },
          { title: "Threading & Face Waxing", image: "https://media.istockphoto.com/id/692999494/photo/hairdresser-cutting-some-hair-tips.jpg?s=612x612&w=0&k=20&c=5bC0fdICk914P5JWYDOi6N3CirJV4IBMTxYJh32vi8o=" },
          { title: "Facial & Cleanup", image: "https://media.istockphoto.com/id/921797424/photo/woman-in-mask-on-face-in-spa-beauty-salon.jpg?s=612x612&w=0&k=20&c=gGSPZOjIS2wcwQyOcjANOKpRVU0KR_iEDbRACnAoIXA=" },
          { title: "Manicure", image: "https://hips.hearstapps.com/hmg-prod/images/download-51-1567099294.jpeg?crop=1xw:1xh;center,top&resize=1200:*" },
          { title: "Hair Spa", image: "https://img.freepik.com/premium-photo/female-hairstylist-working-salon-spa_63106-649.jpg" },
          { title: "Body Polishing", image: "https://www.feminazbeautyzone.com/wp-content/uploads/2015/02/Body-Polishing.jpg" },
          { title: "Detan Treatment", image: "https://noahair.in/wp-content/uploads/2023/10/Detan-treatment.jpg" },
          { title: "Haircut & Styling", image: "https://cdn.prod.website-files.com/67336b2139b6b0905c503a6b/67a374867c3099a48ebfc598_butterfly-cut-with-highlights.jpeg" },
          { title: "Bleach & Detan", image: "https://fabulicious.ae/wp-content/uploads/2022/04/Esthetics-Studio-6ba8db205056a36_6ba8dc8d-5056-a36a-07f668710c84e2ec.jpg" },
          { title: "Bridal Makeup", image: "https://i.pinimg.com/564x/2d/07/d6/2d07d6a809b1ec416c00b818a68ba110.jpg" }
        ]}
      />

      <div className="">
      <PromotionalBanner
  title="2 years of worry-free water"
  subtitle="Needs no service for 2 years*"
  buttonText="Buy now"
  backgroundImage="https://paragonh2o.com/wp-content/uploads/2024/10/Water-Filter-System-Maintenance-Tips-for-the-Fall-Season.webp"
  disclaimer="*Subject to terms and conditions. Based on average usage."
  className="mb-8"
/>

      </div>

      <Services title="Most booked services" products={sampleServices} />
      <ContentSlider banners={slidesData} />

      <ServicesSlider
        title="Home Cleaning Services"
   services={[
  { title: "Sofa Cleaning", image: "https://media.istockphoto.com/id/1276643694/photo/close-up-of-housekeeper-holding-modern-washing-vacuum-cleaner-and-cleaning-dirty-sofa-with.jpg?s=612x612&w=0&k=20&c=4N5hr_aKlAc4cq1Lz5m7RMiao4A4yrfK6uu8jO7VhT4=" },
  { title: "Bathroom Deep Cleaning", image: "https://bmservice.in/wp-content/uploads/2022/08/bathroom-cleaning.webp" },
  { title: "Kitchen Deep Cleaning", image: "https://www.bondcleaningingoldcoast.com.au/wp-content/uploads/2021/06/happy-woman-cleaning-kitchen-furniture-using-spray-JMHGH3N.jpg" },
  { title: "Full Home Deep Cleaning", image: "https://cdn.prod.website-files.com/640051ce8a159067e1042e74/65d5b19950d874f282b5c35f_woman-with-gloves-cleaning-floor_23-2148520978.jpg" },
  { title: "Carpet Shampooing", image: "https://2.wlimg.com/product_images/bc-full/2024/4/13200092/carpet-cleaning-service-1712209003-7368727.jpeg" },
  { title: "Mattress Cleaning", image: "https://www.proluxcleaning.co.uk/assets/img/uploads/2022-05/tzTatZ-x-large.webp " },
  { title: "Balcony & Window Cleaning", image: "https://federalland.ph/wp-content/uploads/2025/04/shutterstock_2547597889-1-scaled.jpg" },
  { title: "Fridge Cleaning", image: "https://federalland.ph/wp-content/uploads/2025/04/shutterstock_2547597889-1-scaled.jpg" },

]}

      />

      <div className="">
        <PromotionalBanner
          title="Sparkling Clean Homes"
          subtitle="Professional cleaning services you can trust"
          buttonText="Book Now"
          backgroundImage="https://png.pngtree.com/background/20230615/original/pngtree-blue-bucket-with-cleaning-supplies-on-a-wooden-background-picture-image_3540315.jpg"
          backgroundColor="from-green-800 to-green-900"
          image={cleanerman}
          imageAlt="Professional cleaner cleaning a living room"
          disclaimer="*Service availability may vary by location."
          className="mb-8"
        />
      </div>
    </div>
  );
};

export default Homepage;
