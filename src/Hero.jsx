export default function Hero() {
  return (
    <section className="container px-28 max-lg:px-3 grid lg:grid-cols-2 gap-y-16 items-center justify-items-end max-lg:justify-items-center mx-auto lg:mt-24" id='home'>
      <div className="col-8">
        <p className="font-black text-5xl">
          <span className="text-sky-400">Full </span>
          <span className="text-blue-700">Stack </span>
          <span className="text-violet-700">Developer</span>
        </p>
        <p className="text-2xl tracking-wide mt-5">
          Hi 👋, I&apos;m{" "}
          <span className="font-bold text-3xl text-slate-900">Juan Camilo Zapata</span> <br />A
          passionate about web development 🚀. Professional programming
          technician 👨‍💻. Experience in technology team leadership 🌐,
          application development 🛠️ and efficient web solutions 💡.
        </p>
      </div>

      <div className="col-4">
        <img
          src="/images/photo.png"
          alt="profile"
          className="w-85 rounded-full border-2 border-violet-500 shadow-2xl shadow-violet-500/50"
        />
      </div>
    </section>
  );
}
