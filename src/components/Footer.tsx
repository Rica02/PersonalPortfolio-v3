import React from 'react';
import '../sass/components/footer.scss';
import { FaGithub } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { openExternalLink } from '../utils/generalUtils';
import { EXTERNAL_LINKS } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="top">
        <div>
          <HiDocumentText
            onClick={() => openExternalLink(EXTERNAL_LINKS.RESUME)}
          />
        </div>
        <div>
          <BiLogoLinkedin
            onClick={() => openExternalLink(EXTERNAL_LINKS.LINKEDIN)}
          />
        </div>
        <div>
          <FaGithub onClick={() => openExternalLink(EXTERNAL_LINKS.GITHUB)} />
        </div>
        <div>
          <IoMail onClick={() => openExternalLink(EXTERNAL_LINKS.EMAIL)} />
        </div>
      </div>
      <div className="bottom">
        <p>Made by me @ {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
