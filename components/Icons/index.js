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
      className={`feather ${props.className} feather-chevron-right`}
      {...props}
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
};

export const UserIcon = (props) => {
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
      className="feather feather-user"
      {...props}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
};

export const ViewsIcon = (props) => {
  const svgMarkup = `
  <?xml version="1.0" encoding="utf-8"?>
  <svg width="20px" height="20px" viewBox="-33 0 255 255" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
    <defs>
      <style>
  
        .cls-3 {
          fill: url(#linear-gradient-1);
        }
  
        .cls-4 {
          fill: #fc9502;
        }
  
        .cls-5 {
          fill: #fce202;
        }
      </style>
  
      <linearGradient id="linear-gradient-1" gradientUnits="userSpaceOnUse" x1="94.141" y1="255" x2="94.141" y2="0.188">
        <stop offset="0" stop-color="#ff4c0d"/>
        <stop offset="1" stop-color="#fc9502"/>
      </linearGradient>
    </defs>
    <g id="fire">
      <path d="M187.899,164.809 C185.803,214.868 144.574,254.812 94.000,254.812 C42.085,254.812 -0.000,211.312 -0.000,160.812 C-0.000,154.062 -0.121,140.572 10.000,117.812 C16.057,104.191 19.856,95.634 22.000,87.812 C23.178,83.513 25.469,76.683 32.000,87.812 C35.851,94.374 36.000,103.812 36.000,103.812 C36.000,103.812 50.328,92.817 60.000,71.812 C74.179,41.019 62.866,22.612 59.000,9.812 C57.662,5.384 56.822,-2.574 66.000,0.812 C75.352,4.263 100.076,21.570 113.000,39.812 C131.445,65.847 138.000,90.812 138.000,90.812 C138.000,90.812 143.906,83.482 146.000,75.812 C148.365,67.151 148.400,58.573 155.999,67.813 C163.226,76.600 173.959,93.113 180.000,108.812 C190.969,137.321 187.899,164.809 187.899,164.809 Z" id="path-1" class="cls-3" fill-rule="evenodd"/>
      <path d="M94.000,254.812 C58.101,254.812 29.000,225.711 29.000,189.812 C29.000,168.151 37.729,155.000 55.896,137.166 C67.528,125.747 78.415,111.722 83.042,102.172 C83.953,100.292 86.026,90.495 94.019,101.966 C98.212,107.982 104.785,118.681 109.000,127.812 C116.266,143.555 118.000,158.812 118.000,158.812 C118.000,158.812 125.121,154.616 130.000,143.812 C131.573,140.330 134.753,127.148 143.643,140.328 C150.166,150.000 159.127,167.390 159.000,189.812 C159.000,225.711 129.898,254.812 94.000,254.812 Z" id="path-2" class="cls-4" fill-rule="evenodd"/>
      <path d="M95.000,183.812 C104.250,183.812 104.250,200.941 116.000,223.812 C123.824,239.041 112.121,254.812 95.000,254.812 C77.879,254.812 69.000,240.933 69.000,223.812 C69.000,206.692 85.750,183.812 95.000,183.812 Z" id="path-3" class="cls-5" fill-rule="evenodd"/>
    </g>
  </svg>
  `;

  return <div {...props} dangerouslySetInnerHTML={{ __html: svgMarkup }} />;
};

export const CommentsIcon = (props) => {
  const svgMarkup = `
  <?xml version="1.0" encoding="utf-8"?>

  <svg width="20px" height="20px" viewBox="0 0 24 24" id="magicoon-Filled" className="pt-5 mt-5" xmlns="http://www.w3.org/2000/svg">
  
  <defs>
  
  <style>.cls-1{fill:#41416e;}</style>
  
  </defs>
  
  
  <g id="comment-dots-Filled">
  
  <path id="comment-dots-Filled-2" data-name="comment-dots-Filled" class="cls-1" d="M17,3.5H7A4.507,4.507,0,0,0,2.5,8V21a.5.5,0,0,0,.31.46A.433.433,0,0,0,3,21.5a.469.469,0,0,0,.35-.15l2.42-2.41a1.5,1.5,0,0,1,1.06-.44H17A4.507,4.507,0,0,0,21.5,14V8A4.507,4.507,0,0,0,17,3.5ZM8,12.25A1.25,1.25,0,1,1,9.25,11,1.25,1.25,0,0,1,8,12.25Zm4,0A1.25,1.25,0,1,1,13.25,11,1.25,1.25,0,0,1,12,12.25Zm4,0A1.25,1.25,0,1,1,17.25,11,1.25,1.25,0,0,1,16,12.25Z"/>
  
  </g>
  
  </svg>
  `;

  return (
    <div
      {...props}
      style={{ position: 'relative', top: '1px' }}
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
};

export const VerifiedIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      id="verified"
      {...props}
    >
      <g clipPath="url(#clip0_1084_3803)">
        <path
          fill="#4DC4FF"
          d="M13.3546 1.46995C12.6544 0.614752 11.3466 0.614755 10.6465 1.46995L9.65463 2.6814C9.58665 2.76443 9.47325 2.79482 9.37286 2.7569L7.90817 2.20367C6.87422 1.81314 5.74163 2.46703 5.56286 3.55774L5.30963 5.10281C5.29227 5.20871 5.20926 5.29172 5.10335 5.30908L3.55829 5.56231C2.46759 5.74108 1.81368 6.87366 2.20422 7.90762L2.75745 9.37231C2.79537 9.4727 2.76498 9.5861 2.68195 9.65408L1.4705 10.6459C0.615302 11.3461 0.615304 12.6539 1.4705 13.3541L2.68195 14.3459C2.76498 14.4139 2.79537 14.5273 2.75745 14.6277L2.20422 16.0924C1.81369 17.1263 2.46758 18.2589 3.55829 18.4377L5.10335 18.6909C5.20926 18.7083 5.29227 18.7913 5.30963 18.8972L5.56286 20.4422C5.74163 21.5329 6.87421 22.1868 7.90817 21.7963L9.37286 21.2431C9.47325 21.2052 9.58665 21.2355 9.65463 21.3186L10.6465 22.53C11.3466 23.3852 12.6544 23.3852 13.3546 22.53L14.3464 21.3186C14.4144 21.2355 14.5278 21.2052 14.6282 21.2431L16.0929 21.7963C17.1269 22.1868 18.2595 21.5329 18.4382 20.4422L18.6915 18.8972C18.7088 18.7913 18.7918 18.7083 18.8977 18.6909L20.4428 18.4377C21.5335 18.2589 22.1874 17.1263 21.7969 16.0924L21.2436 14.6277C21.2057 14.5273 21.2361 14.4139 21.3191 14.3459L22.5306 13.3541C23.3858 12.6539 23.3858 11.3461 22.5306 10.6459L21.3191 9.65408C21.2361 9.5861 21.2057 9.4727 21.2436 9.37231L21.7969 7.90762C22.1874 6.87366 21.5335 5.74108 20.4428 5.56231L18.8977 5.30908C18.7918 5.29172 18.7088 5.20871 18.6915 5.10281L18.4382 3.55774C18.2595 2.46704 17.1269 1.81313 16.0929 2.20367L14.6282 2.7569C14.5278 2.79482 14.4144 2.76443 14.3464 2.6814L13.3546 1.46995Z"
        ></path>
        <path
          fill="#ECEFF1"
          fillRule="evenodd"
          d="M18.0303 7.96967C18.3232 8.26256 18.3232 8.73744 18.0303 9.03033L11.0303 16.0303C10.8897 16.171 10.6989 16.25 10.5 16.25C10.3011 16.25 10.1103 16.171 9.96967 16.0303L5.96967 12.0303C5.67678 11.7374 5.67678 11.2626 5.96967 10.9697C6.26256 10.6768 6.73744 10.6768 7.03033 10.9697L10.5 14.4393L16.9697 7.96967C17.2626 7.67678 17.7374 7.67678 18.0303 7.96967Z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1084_3803">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export const EditIcon = (props) => {
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
      className="feather feather-edit"
      {...props}
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
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
