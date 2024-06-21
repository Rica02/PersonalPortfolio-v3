import React from 'react';
import '../sass/components/footer.scss';
import { FaGithub } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BiLogoLinkedin } from 'react-icons/bi';
import resumeFile from '../assets/resume.pdf';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="top">
        <div>
          <HiDocumentText onClick={() => window.open(resumeFile, '_blank')} />
        </div>
        <div>
          <BiLogoLinkedin
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/ricamaeaverion/',
                '_blank'
              )
            }
          />
        </div>
        <div>
          <FaGithub
            onClick={() => window.open('https://github.com/Rica02', '_blank')}
          />
        </div>
        <div>
          <IoMail
            onClick={() =>
              window.open('mailto:ricamaeaverion22@gmail.com', '_blank')
            }
          />
        </div>
      </div>
      <div className="bottom">
        <p>Made by me @ {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
