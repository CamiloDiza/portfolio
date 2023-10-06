export default function Contact() {
  return (
    <section className="bg-slate-200 py-20 max-lg:py-10 mt-10" id="contact">
      <div className="container px-18 mx-auto ">
        <h1 className="text-violet-700 font-black text-center text-2xl underline underline-offset-8">
          Contact me
        </h1>
        <div className="bg-slate-50 rounded-lg shadow-lg p-4 mt-5 mx-auto max-lg:mx-5 lg:w-2/3 space-y-4 text-center font-extrabold text-xl text-slate-900">
            <p>
                If you are intrested in <span className="text-violet-700">hiring</span> me, <span className="text-violet-700">call</span> me, <span className="text-violet-700">email</span> me or <span className="text-violet-700">connect</span> and chat with me via <span className="text-violet-700">LinkedIn</span>!
                </p>
            <div className="flex flex-col items-center">
                <a href="tel: +573125396918" className="flex space-x-4 hover:text-violet-700">
                    <i className="bi bi-telephone-fill"></i>
                    <span>(+57) 312 539 6918</span>
                </a>
                <a href="mailto: camilozapata.webdev@gmail.com" className="flex space-x-4 hover:text-violet-700 max-w-full overflow-x-auto">
                    <i className="bi bi-envelope-at-fill"></i>
                    <span>camilozapata.webdev@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/juan-camilo-zapata-diaz-10b84b247/" className="flex space-x-4 hover:text-violet-700">
                    <i className="bi bi-linkedin"></i>
                    <span>Juan Camilo Zapata Diaz</span>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
