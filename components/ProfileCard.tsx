import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const ProfileCard = ({
  name = "Amritansh Raizada",
  title = "Full Stack AI Developer",
  handle = "@amritanshraizada",
  status = "Open to Work",
  contactText = "Hire Me",
  avatarUrl = "/avatar.jpg",
  miniAvatarUrl = "/avatar.jpg",
  showUserInfo = true,
  enableTilt = true,
  onContactClick = () => {},
}) => {
  const CardContent = (
    <div className="relative p-6 rounded-2xl bg-white dark:bg-neutral-900 shadow-lg border dark:border-neutral-800 w-80 lg:w-96 transition-all">
      <div className="flex items-center justify-center">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-24 h-24 rounded-full object-cover border-4 border-purple-500 shadow-md"
        />
      </div>
      {showUserInfo && (
        <div className="text-center mt-4">
          <h3 className="text-xl font-bold text-neutral-800 dark:text-white">{name}</h3>
          <p className="text-sm text-neutral-600 dark:text-gray-400">{title}</p>
          <p className="text-xs mt-1 text-purple-500">{handle}</p>
          <span className="inline-block mt-2 px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">
            {status}
          </span>
        </div>
      )}
      <div className="flex justify-center gap-4 mt-4 text-purple-600 text-xl">
        <a href="https://github.com/AmritanshRaizada" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/amritanshraizada" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:amritansh.raizada@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <button
        onClick={onContactClick}
        className="mt-6 w-full py-2 px-4 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
      >
        {contactText}
      </button>
    </div>
  );

  return enableTilt ? (
    <Tilt glareEnable={true} glareMaxOpacity={0.1} scale={1.02} tiltMaxAngleX={10} tiltMaxAngleY={10}>
      {CardContent}
    </Tilt>
  ) : (
    CardContent
  );
};

export default ProfileCard;
