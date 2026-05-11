import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

const SocialConnect = () => {
  const icons = [
    {
      id: 1,
      component: <FaFacebookF />,
      url: "https://www.facebook.com/HashMicro/",
    },
    {
      id: 2,
      component: <FaTwitter />,
      url: "https://twitter.com/hashmicro",
    },
    {
      id: 3,
      component: <FaPinterestP />,
      url: "https://id.pinterest.com/hashmicro/",
    },
    {
      id: 4,
      component: <FaInstagram />,
      url: "https://www.instagram.com/hashmicro/",
    },
    {
      id: 5,
      component: <FaHeart />,
      url: "https://www.hashmicro.com/id/",
    },
  ];

  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex items-center">
        {icons.map((icon, index) => (
          <React.Fragment key={icon.id}>
            <a
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-400 bg-transparent text-white hover:border-white hover:scale-110 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-500">
                {icon.component}
              </div>
            </a>

            {index !== icons.length - 1 && (
              <div className="w-8 h-[2px] bg-gray-400" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SocialConnect;
