import PropTypes from 'prop-types';

export default function Header() {
    return (
        <header className="bg-slate-50 shadow-lg lg:fixed lg:w-full lg:top-0">
            <nav className="container text-center flex place-content-between mx-auto py-4 px-28 max-lg:flex max-lg:flex-col max-lg:items-center">
                <div >
                    <a href="/" className="text-2xl flex space-x-1 max-lg:flex-col max-lg:items-center">
                        <span className="text-slate-950 font-extrabold">Juan Camilo Zapata </span>
                        <div>
                            <span className="text-sky-500 font-bold">Web</span>
                            <span className="text-cyan-700 font-bold">Dev</span>
                        </div>
                    </a>
                </div>

                <div className="flex space-x-4 items-center text-xl">
                    <NavLink link={ "home" } />
                    <NavLink link={ "about" } />
                    <NavLink link={ "projects" } />
                    <NavLink link={ "contact" } />
                </div>

                <div className="space-x-4 pl-5">
                        <a href="https://github.com/CamiloDiza" target="_blank" rel="noreferrer" className="hover:text-violet-700"><i className="bi bi-github"></i></a>
                        <a href="https://www.linkedin.com/in/juan-camilo-zapata-diaz-10b84b247/" target="_blank" rel="noreferrer" className="hover:text-violet-700"><i className="bi bi-linkedin"></i></a>
                    </div>
            </nav>
        </header>
    )
}

function NavLink({ link }) {
    return (
        <a href={"#" + link} className="hover:text-violet-700 hover:text-1xl capitalize font-bold">{ link }</a>
    )
}

NavLink.propTypes = {
    link: PropTypes.string.isRequired,
};