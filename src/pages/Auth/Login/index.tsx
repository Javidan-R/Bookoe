import { useNavigate } from "react-router-dom";
import { Role } from "../../../models";
import { CartProvider } from "react-use-cart";
import MainBanner from "../../Main/Home/MainBanner";
import Features from "../../Main/Home/Features";
import { MainServices } from "../../Main/Home/MainServices";
import { Recomended } from "../../Main/Home/Recomanded";
import { Popular } from "../../Main/Home/Popular";
import { SpecialOffers } from "../../Main/Home/SpecialOffers";
import { FlashSale } from "../../Main/Home/FlashSale";
import { BookSale } from "../../Main/Home/BookSale";
import { Testimonials } from "../../Main/Home/Testimonials";
import { LatestNews } from "../../Main/Home/LatestNews";
import { NewsLetter } from "../../Main/Home/NewsLetter";
import { Logo } from "../../../components/Header";
import LoginForm from "./LoginForm";

interface LoginData {
  username: string;
  password: string;
}

async function login(data: LoginData): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.username === "admin" && data.password === "admin") {
        localStorage.setItem("token", JSON.stringify(data));
        localStorage.setItem("role", Role.ADMIN);
        resolve("/admin/dashboard");
      } else if (data.username === "user" && data.password === "user") {
        localStorage.setItem("token", JSON.stringify(data));
        localStorage.setItem("role", Role.USER);
        resolve("/");
      } else {
        localStorage.clear();
        reject();
      }
    }, 1000);
  });
}

const sectionStyles = {
  heading: {
    color: "var(--DarkPurple, #11142D)",
    textAlign: "center",
    fontFamily: "Cairo",
    fontSize: "50px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  description: {
    width: "80%",
    color: "var(--DarkPurple, #11142D)",
    textAlign: "center",
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    margin: "auto",
  },
};

interface PageSectionProps {
  children: React.ReactNode;
}

const PageSection: React.FC<PageSectionProps> = ({ children }) => (
  <div className="pt-10 pb-4">{children}</div>
);

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data: LoginData = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    try {
      const route = await login(data);
      navigate(route);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-auto p-6">
      <Logo className="w-[16rem] h-32 md:w-auto md:h-auto m-auto object-contain" />
      <LoginForm handleSubmit={handleSubmit} />

      <MainBanner />
      <Features />
      <MainServices />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pt-12">
        <Recomended />
        <Popular />
      </div>

      <PageSection>
        <div>
          <h3 className="flex justify-center m-4" >
            Special Offers
          </h3>
          <p >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </PageSection>

      <CartProvider>
        <SpecialOffers />
      </CartProvider>

      <FlashSale />

      <BookSale />

      {/* <FeaturedBooks /> */}
      <Testimonials />
      <LatestNews />
      <NewsLetter />
    </div>
  );
};
