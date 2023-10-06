import PropTypes from "prop-types";

export default function About() {
  return (
    <section className="bg-slate-200 py-20 max-lg:py-10 mt-10" id="about">
      <div className="container px-18 mx-auto">
        <h1 className="text-violet-700 font-black text-center text-2xl underline underline-offset-8">
          About me
        </h1>
        <div className="bg-slate-50 rounded-lg shadow-lg p-4 mt-5 mx-auto max-lg:mx-5 lg:w-2/3">
          <h2 className="font-bold text-center text-3xl text-slate-900">Passionate about programming and web development 💻</h2>
          <p className="px-5 py-3 text-xl">
            I am a Professional Programming Technician and Systems Engineer in training. Technological team leader, with experience in <Link link={"https://solucionesstar.com/"} text={"Soluciones Star"} /> and <Link link="https://ecommbay.com/" text="Ecommerce Bay" />, where I contributed to the development of versatile web applications and e-commerce solutions. As IT Manager at <Link link={"https://gepcol.com/"} text={"Gepcol S.A.S"} />, I managed technical support teams, led improvements in technological infrastructure and solved complex technical problems.
          </p>
        </div>
      </div>
    </section>
  );
}

function Link({ link, text }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="text-violet-700">{text}</a>
  );
}

Link.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};