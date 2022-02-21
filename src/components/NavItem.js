export default function NavItem() {
    return (
        <div className="flex justify-center space-x-11 text-lg py-16">
        <a className="nav-items font-semibold text-white text-opacity-60" href="#">Profile</a>
        <a className="nav-items font-semibold text-white text-opacity-60" href="#">Skills</a>
        <a className="nav-items font-semibold text-white text-opacity-60" href="#">Projects</a>
        <a className="nav-items font-semibold text-white text-opacity-60" href="#">About</a>
      </div>
    );
}