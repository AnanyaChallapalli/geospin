import "./index.css";
import HARTRxr1 from "./assets/hart-rxr.png";
import rectangle1 from "./assets/bg-alt.png";
import vector2 from "./assets/facebook.png";
import vector3 from "./assets/insta.png";
import vector5 from "./assets/linkedin.png";
import mailIcon from "./assets/mail.png";
import phoneIcon from "./assets/phone.png";

export const MacbookPro = () => {
  const contactInfo = {
    email: "a.talwar@hartrxr.com",
    phone: "",
  };

  const socialLinks = [
    { id: "facebook", icon: vector2, alt: "Facebook", url: "#" },
    { id: "instagram", icon: vector3, alt: "Instagram", url: "#" },
    { id: "linkedin", icon: vector5, alt: "LinkedIn", url: "https://www.linkedin.com/company/hart-rxr-pty-ltd/" },
  ];

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">
      {/* Header */}
      <header className="px-10 pt-4">
        <img
          src={HARTRxr1}
          alt="RXR Logo"
          className="w-32 object-contain"
        />
      </header>

      {/* Hero */}
      <main className="flex-grow flex items-center">
        <section className="relative mx-auto w-[90%] max-w-7xl h-[400px] md:h-[420px] rounded-3xl overflow-hidden">
          <img
            src={rectangle1}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0e1e35]/40" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center px-12">
            <div>
              <h1 className="font-extrabold text-[#ff733c] text-7xl md:text-[100px] font-[roboto]">
                Coming Soon
              </h1>

              <p className="mt-6 text-white text-5xl max-w-2xl font-[roboto]">
                Your APAC Yardi Solutions and Services Partner
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0e1e35]">
        <div className="max-w-7xl mx-auto px-12 py-8 flex justify-between items-center">
          {/* Contact */}
          <div>
            <h2 className="text-white text-2xl font-bold font-[roboto]">Contact Us</h2>

            <div className="mt-4 space-y-3">
              <div className="flex items-center text-white">
                <img src={mailIcon} className="w-5 h-5 mr-3" />
                {contactInfo.email}
              </div>

              <div className="flex items-center text-white">
                <img src={phoneIcon} className="w-5 h-5 mr-3" />
                {contactInfo.phone}
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a key={social.id} href={social.url}>
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="w-8 h-8 hover:opacity-80 transition"
                />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MacbookPro;
