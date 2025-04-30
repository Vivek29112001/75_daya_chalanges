import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="flex justify-between items-center bg-gray-800 text-white p-4">
            <div className="text-2xl font-bold">
                <h1>Data-Management</h1>
            </div>
            <div className="rightSide flex gap-12 font-black">
                <Link to="/">Home</Link>
                <Link to="/Growth">Growth</Link>
                <Link to="/Apply">Apply</Link>
                <Link to="/Interview">Interview</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </div>
    )
}

export default Header