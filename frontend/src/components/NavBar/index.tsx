import {ReactComponent as GithubLogo} from 'assets/img/github.svg';
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";

export default function NavBar(){
    return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a className="dsmovie-a" href="https://github.com/allen080" rel="noreferrer" target="_blank">
            <div className='dsmovie-contact-container'>
              <GithubLogo/>
              <p className="dsmovie-contact-link">/allen080</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
    );
}