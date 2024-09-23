"use client";

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">About Us</h2>

      {/* Combined Section: About Ruqyah and Our Approach */}
      <section className="flex flex-col xl:flex-row gap-4 md:gap-14 mb-8">
        <div className="flex flex-col w-full xl:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">What is Ruqyah?</h3>
          <p className="text-gray-700 mb-4">
            Ruqyah is an Islamic healing practice that involves reciting
            specific verses from the Quran to protect individuals from harmful
            spiritual influences. It is believed to help expel negative energies
            and heal the body, mind, and spirit. Through the power of Quranic
            verses, Ruqyah aims to bring peace, harmony, and healing to those
            affected by spiritual ailments or negativity.
          </p>
          <h3 className="text-2xl font-semibold mb-4">
            Our Approach to Ruqyah
          </h3>
          <p className="text-gray-700">
            Our dedicated team follows a compassionate and respectful approach
            to Ruqyah services. We believe in creating a safe and comforting
            environment for our clients. Each session is personalized to address
            individual needs, ensuring a holistic healing experience. We utilize
            authentic Quranic recitations and supplications, combined with
            spiritual guidance, to facilitate effective healing.
          </p>
        </div>
        <div className="aspect-video w-full xl:w-1/2 p-2">
          <iframe
            src="https://www.youtube.com/embed/Fw_voxis4vQ?si=QkrNiEFnacrRm01G" // Replace with your video URL
            title="Ruqyah Healing"
            className="w-full h-full border rounded"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Section 3: Our Services */}
      {/* <section>
        <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Individual Ruqyah sessions for personal healing.</li>
          <li>Family Ruqyah services to purify the home environment.</li>
          <li>Guidance on preventive measures and spiritual well-being.</li>
          <li>
            Consultations for those seeking deeper understanding and support.
          </li>
        </ul>
      </section> */}
    </div>
  );
};

export default AboutUs;
