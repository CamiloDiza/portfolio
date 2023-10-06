import Icon from "./Icon";

export default function Skills() {
  return (
    <section className="mt-10">
      <div className="container px-18 mx-auto ">
        <h1 className="text-violet-700 font-black text-center text-2xl underline underline-offset-8">
          My Skills
        </h1>
        <div className="bg-slate-50 rounded-lg shadow-lg p-4 mt-5 mx-auto max-lg:mx-5 lg:w-2/3">
          <div className="flex gap-x-8 justify-center max-md:grid max-md:grid-cols-4 max-md:gap-4">
            <Icon img={"html5"} />
            <Icon img={"css3"} />
            <Icon img={"javascript"} />
            <Icon img={"bootstrap"} />
            <Icon img={"php"} />
            <Icon img={"laravel"} />
            <Icon img={"react"} />
            <Icon img={"git"} />
          </div>
        </div>
      </div>
    </section>
  );
}
