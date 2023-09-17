export const SunIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-sun"
      {...props}
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );
};

export const MoonIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-moon"
      {...props}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );
};

export const SearchIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-search"
      {...props}
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
};

export const CloseIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-x ${props.className}`}
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
};

export const MenuIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: 'rotate(270deg)' }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-bar-chart-2"
      {...props}
    >
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  );
};

export const InstagramIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-instagram"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
};

export const GmailIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-mail"
      {...props}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
};

export const FacebookIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-facebook"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
};

export const TwitterIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-twitter"
      {...props}
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  );
};

export const RightArrow = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-right"
      {...props}
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
};

export const LogoLight = (props) => {
  return (
    <svg
      width="100"
      height="99"
      viewBox="0 0 100 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="100" height="99" rx="49.5" fill="white" />
      <path
        d="M50.2 74.204C45.6667 74.204 43.4 69.9653 43.4 61.488C43.4 56.864 43.9667 52.6707 45.1 48.908C46.868 43.1053 48.8627 40.204 51.084 40.204C52.3987 40.204 53.4413 41.088 54.212 42.856C54.8467 44.216 55.1413 45.5533 55.096 46.868C55.096 48.6813 54.552 51.8773 53.464 56.456C52.4213 60.4453 51.9 62.916 51.9 63.868C51.9 64.82 52.1267 65.4773 52.58 65.84C53.0787 66.2027 53.6453 66.384 54.28 66.384C54.96 66.384 55.7987 65.9533 56.796 65.092C57.7933 64.2307 58.7907 63.3013 59.788 62.304C60.7853 61.2613 61.692 60.3093 62.508 59.448C63.3693 58.5867 63.9587 58.156 64.276 58.156C64.9107 58.156 65.228 58.9267 65.228 60.468C65.228 63.6413 63.6187 66.7467 60.4 69.784C57.2267 72.776 53.8267 74.2493 50.2 74.204ZM52.988 34.696C51.764 32.8827 51.152 30.9333 51.152 28.848C51.152 26.7627 51.4693 25.04 52.104 23.68C52.784 22.2747 53.4187 21.2547 54.008 20.62C54.5973 19.94 55.2773 19.6 56.048 19.6C57.3173 19.6 58.4733 20.552 59.516 22.456C60.5587 24.3147 61.08 25.8787 61.08 27.148C61.08 29.5053 60.2413 31.364 58.564 32.724C56.932 34.0387 55.0733 34.696 52.988 34.696Z"
        fill="black"
      />
    </svg>
  );
};

export const LogoDark = (props) => {
  return (
    <svg
      width="100"
      height="99"
      viewBox="0 0 100 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="100" height="99" rx="49.5" fill="black" />
      <path
        d="M50.2 74.204C45.6667 74.204 43.4 69.9653 43.4 61.488C43.4 56.864 43.9667 52.6707 45.1 48.908C46.868 43.1053 48.8627 40.204 51.084 40.204C52.3987 40.204 53.4413 41.088 54.212 42.856C54.8467 44.216 55.1413 45.5533 55.096 46.868C55.096 48.6813 54.552 51.8773 53.464 56.456C52.4213 60.4453 51.9 62.916 51.9 63.868C51.9 64.82 52.1267 65.4773 52.58 65.84C53.0787 66.2027 53.6453 66.384 54.28 66.384C54.96 66.384 55.7987 65.9533 56.796 65.092C57.7933 64.2307 58.7907 63.3013 59.788 62.304C60.7853 61.2613 61.692 60.3093 62.508 59.448C63.3693 58.5867 63.9587 58.156 64.276 58.156C64.9107 58.156 65.228 58.9267 65.228 60.468C65.228 63.6413 63.6187 66.7467 60.4 69.784C57.2267 72.776 53.8267 74.2493 50.2 74.204ZM52.988 34.696C51.764 32.8827 51.152 30.9333 51.152 28.848C51.152 26.7627 51.4693 25.04 52.104 23.68C52.784 22.2747 53.4187 21.2547 54.008 20.62C54.5973 19.94 55.2773 19.6 56.048 19.6C57.3173 19.6 58.4733 20.552 59.516 22.456C60.5587 24.3147 61.08 25.8787 61.08 27.148C61.08 29.5053 60.2413 31.364 58.564 32.724C56.932 34.0387 55.0733 34.696 52.988 34.696Z"
        fill="white"
      />
    </svg>
  );
};
