import { LucideIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface LinkCardProps {
  tagText: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  bgColor: string; // The Tailwind class for background color
  textColor: string; // Title and description text color
  tagBgColor: string; // Background for the tag
  tagTextColor: string; // Text color for the tag
  iconBgColor: string; // Background for the icon container
  iconColor: string; // Color of the icon
}

export function LinkCard({
  tagText,
  title,
  description,
  icon: Icon,
  href,
  bgColor,
  textColor,
  tagBgColor,
  tagTextColor,
  iconBgColor,
  iconColor,
}: LinkCardProps) {
  return (
    <Link to={href} className="block group mb-6 w-full max-w-lg mx-auto">
      <div
        className={`relative flex items-center p-4 sm:p-6 rounded-[2rem] border-[3px] border-gray-800 neo-shadow transition-transform ${bgColor}`}
      >
        {/* Left Side: Icon */}
        <div className="flex-shrink-0 mr-4 sm:mr-5">
          <div
            className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-2xl border-[3px] border-gray-800 ${iconBgColor} shadow-sm`}
          >
            <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${iconColor}`} strokeWidth={2.5} />
          </div>
        </div>

        {/* Center: Content */}
        <div className="flex-grow">
          <div className="mb-2">
            <span
              className={`inline-block px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full ${tagBgColor} ${tagTextColor} border-2 border-gray-800`}
            >
              {tagText}
            </span>
          </div>
          <h3 className={`text-xl sm:text-2xl font-display font-bold mb-1 leading-tight ${textColor}`}>
            {title}
          </h3>
          <p className={`text-sm sm:text-base font-medium leading-snug pr-2 opacity-90 ${textColor}`}>
            {description}
          </p>
        </div>

        {/* Right Side: Arrow */}
        <div className={`flex-shrink-0 transition-transform group-hover:translate-x-1 ${textColor}`}>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 opacity-70" />
        </div>
      </div>
    </Link>
  );
}
