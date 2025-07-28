import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Navbar.css';

function CustomLink({ to, children, ...props}: any) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Miles Trompeter</Link>
            <ul>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
            </ul>
        </nav>
    )
}