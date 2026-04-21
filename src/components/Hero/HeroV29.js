//system
import Link from "next/link";
import Image from "next/image";

//basic
import ScrollableAnchor from "react-scrollable-anchor";

//common
import ButtonX from "@/components/common/Button";

//data
const smallImage = "/images/hero/hero_small.webp";
const bigImage = "/images/hero/hero_big.webp";

const HeroV29 = () => {
  return (
    <ScrollableAnchor id="home">
      <section
        className="hero-area hero-5-area hero-3-area pt-[200px]"
        id="hero"
      >
        <div className="justify-center">
          <div className="">
            <div className="hero-content text-center">
              <h1 className="title text-white"> عقد إيجار إلكتروني موثق</h1>
              <p className="text-gray-100">
                بإمكانك الحصول على عقدك الموثق من شبكة ايجار من أي مكان في
                المملكة
              </p>
              <div className="hero-btns">
                <ButtonX
                  tag={Link}
                  className="btn__main btn1"
                  href="/residential"
                >
                  {" "}
                  اطلب عقد سكني{" "}
                </ButtonX>
                <ButtonX
                  tag={Link}
                  className="btn__main btn1"
                  href="/commercial"
                >
                  اطلب عقد تجاري
                </ButtonX>
              </div>
              <div className="thumb mt-10">
                <Image
                  src={"/images/hero/hero_big.webp"}
                  alt="لابتوب"
                  className="mx-auto hidden sm:block"
                  width={700}
                  height={586}
                  loading="eager" // Ensures immediate loading
                  priority={true} // Preloads the image
                />
                <Image
                  src={"/images/hero/hero_small.webp"}
                  alt="لابتوب"
                  className="mx-auto block sm:hidden"
                  width={700}
                  height={586}
                  loading="eager" // Ensures immediate loading
                  priority={true} // Preloads the image
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default HeroV29;
