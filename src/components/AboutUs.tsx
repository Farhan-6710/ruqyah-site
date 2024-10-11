"use client";

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto p-8 px-2 sm:px-8">
      {/* Combined Section: About Ruqyah and Our Approach */}
      <section className="flex flex-col xl:flex-row gap-4 md:gap-14 mb-8">
        <div className="flex flex-col w-full xl:w-1/2 px-4">
          <h3 className="text-2xl xs:text-3xl font-semibold mb-4">
            About <span className="text-emerald-800">i-ruqya.com</span>
          </h3>
          <p className="text-gray-700 mb-4">
            At i-ruqya, our foundation rests on the belief that we all are
            humble servants of Allah (سبحانه وتعالى) striving to seek his
            pleasure and guidance. The intention behind creating this website is
            just for the sake of Allah to guide people and empower them with the
            proper understanding with what is Ruqya Shariah, why do we need it
            and how do we perform it.
          </p>
          <h3 className="text-2xl font-semibold mb-4">
            Understanding <span className="text-emerald-800">Ruqyah</span>{" "}
            Shariah{" "}
          </h3>
          <p className="text-gray-700">
            Ruqyah Shariah refers to the practice of using specific prayers
            (Dua’a) and selected Quranic verses for healing for literally every
            condition. This practice is rooted in the Quran and the Sunnah of
            the Prophet Muhammad ﷺ. The Prophet and his companions used Ruqyah
            for healing, and even Jibraeel (A.S) performed Ruqyah on the Prophet
            ﷺ. Such practices are documented in the Kutub Al-Sittah, the six
            authoritative Hadith collections.
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
      <section>
        <div className="container mx-auto p-4 px-4">
          <h3 className="text-3xl font-semibold mb-4">
            Why a <span className="text-emerald-800">website</span>?
          </h3>
          <p className="text-gray-700 mb-4">
            Due to the overwhelming number of people seeking assistance with
            Ruqyah Shariah, it has become difficult for us to provide one-on-one
            support to everyone, especially for those located in different areas
            or countries. Many individuals may not even realize that their
            health problems, relationship struggles, or challenges in work or
            studies could stem from metaphysical causes, and they remain unaware
            of the need for Ruqyah. <br /> <br />
            While we do our best to serve as many clients as possible, it is
            simply not feasible to attend to everyone individually. This is why
            we have created this website — to offer structured guidance in the
            form of video FAQs that answer common questions, clarify doubts, and
            provide essential information. Our goal is to help individuals begin
            their healing journey, even if we are unable to assist them in
            person. <br /> <br />
            Additionally, there is widespread misinformation, misconceptions,
            fraud, and abuse in the field of Ruqyah, often perpetrated by
            individuals with vested interests. We aim to provide authentic
            guidance, firmly adhering to the teachings of the Quran and Sunnah,
            while steering clear of all forms of deviation and shirk.
          </p>
        </div>
        <div className="container mx-auto p-4 px-4">
          <h3 className="text-3xl font-semibold mb-4">
            The <span className="text-emerald-800">Lead</span>
          </h3>
          <p className="text-gray-700 mb-4">
            i-Ruqya is lead by Brother Mohammed Imran Khan bin Ishaq
            (Rahimahuallah), mentored by Sheikh Abu Nadeer (Ruqya HealingTM
            which is the subsidiary of Ruqya International Academy run by Sheikh
            Khalid Al-Habashi, alroqya.com). May Allah (سبحانه وتعالى) reward
            him immensely and bless them in this life and hereafter for guiding
            me with his profound knowledge and dedication. His work is a true
            inspiration for the ummah and I’m grateful for the impact and I pray
            that their efforts continue to benefit and uplift many more.
          </p>
        </div>
        <div className="container mx-auto p-4 px-4">
          <h3 className="text-3xl font-semibold mb-4">
            Our <span className="text-emerald-800">Mission</span>
          </h3>
          <p className="text-gray-700 mb-4">
            Our mission at i-ruqya.com is to provide individuals with authentic
            methods of performing Ruqyah Shariah, firmly rooted in the teachings
            of the Quran and Sunnah. We aim to guide the Ummah towards spiritual
            healing and enlightenment, ensuring that all practices are aligned
            with the path set by the Prophet Muhammad (Peace be upon him).
          </p>
        </div>
        <div className="container mx-auto p-4 px-4">
          <h3 className="text-3xl font-semibold mb-4">
            Divine Guidance on
            <span className="text-emerald-800"> Healing</span>
          </h3>
          <p className="text-gray-700 mb-4">
            Allah سبحانه وتعالى has provided us with guidance in the Quran
            regarding healing:
            <ul>
              <li>
                <span>Surah Ash-Shu&apos;ara 26:80 </span> – &quot;And when I am
                ill, it is He who cures me.&quot; This verse highlights that
                ultimate healing comes from Allah alone.
              </li>
              <li>
                <span>Surah Al-Isra 17:82 </span> – &quot;And We send down of
                the Quran that which is healing and mercy for the believers, but
                it does not increase the wrongdoers except in loss.&quot; The
                Quran serves as a source of healing and mercy for those who
                believe in its divine message.
              </li>
            </ul>
          </p>
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
