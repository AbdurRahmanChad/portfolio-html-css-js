
import Service from "./Service";
import { Helmet } from "react-helmet";
const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Responsive Design",
    description: "High-quality development of sites at the professional level."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Figma To Website Convert",
    description: "Professional development of applications for iOS and Android."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Pixel Perfect Design",
    description: "I make high-quality photos of any category at a professional level."
  }
];

const About = () => {
  return (
    <article className="about  active" data-page="about">
       <Helmet>
                <meta charSet="utf-8" />
                <title>About | Abdur Rahman</title>
            </Helmet>
    {/*================= About Me =======================*/}
    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>
    <section className="about-text">
      <p>
        I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
        I enjoy
        turning complex problems into simple, beautiful and intuitive designs.
      </p>
      <p>
        My job is to build your website so that it is functional and user-friendly but at the same time attractive.
        Moreover, I
        add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
        across your
        message and identity in the most creative way. I created web design for many famous brand companies.
      </p>
    </section>
    {/*=================service =======================*/}
    <section className="service">
      <h3 className="h3 service-title">What i'm doing</h3>
      <ul className="service-list">
      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
      </ul>
    </section>
    {/*==================testimonials=================*/} 
  </article>
  )
}
export default About