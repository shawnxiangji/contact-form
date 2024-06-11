import { useEffect, useState } from "react";
import SuccessIcon from "../assets/images/icon-success-check.svg?react";

interface ToastProps {
  title?: string;
  message?: string;
  toastTheme?: "success" | string;
}

interface ThemeType {
  bgColor: string;
  icon: () => JSX.Element;
  titleColor: string;
  textColor: string;
}

const Toast = ({ message, title, toastTheme }: ToastProps) => {
  const defaultTheme: ThemeType = {
    bgColor: "bg-green-900",
    icon: () => <SuccessIcon />,
    titleColor: "text-white",
    textColor: "text-gray-200",
  };

  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  useEffect(() => {
    switch (toastTheme) {
      case "success":
        setTheme({ ...theme });
        break;
      default:
        break;
    }
  }, [toastTheme]);

  return (
    <div className={`${theme.bgColor} flex flex-col font-karla`}>
      <div className="flex flex-row gap-2 ">
        {theme.icon()}
        <h2 className={`${theme.titleColor} font-bold`}>{title}</h2>
      </div>
      <p className={`${theme.textColor} text-left`}>{message}</p>
    </div>
  );
};

export default Toast;
