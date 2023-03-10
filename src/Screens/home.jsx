import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import img1 from "../Assets/original-e0e275874b52009a537484d7785b9fa0 1.png";
import bg1 from "../Assets/grad-bg.png";
import bg2 from "../Assets/Rectangle_373.png";
import { Buttons, MiddleHeader } from "../Utils";
import { Container } from "reactstrap";
import imgDown1 from "../Assets/Saly-22.png";
import imgDown2 from "../Assets/Saly-24.png";
import imgDown3 from "../Assets/Saly-26.png";
import imgDown4 from "../Assets/Saly-42.png";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <HeroBanner />
      <WhatWeDo />
      <ProductServices />
      <NewsLetter />
      <SupportHeader />
      <SuportChannels />
      <GainHeader />
      <StandToGain />
      <CustomerHeader />
    </>
  );
};

export default Home;

const HeroBanner = () => {
  return (
    <div
      className=""
      style={{
        background: `url(${bg1})`,
      }}
    >
      <section className="container aboutScreen d-flex hero fullOverflow">
        <section className="row container my-auto">
          <div className="col-lg-6 d-flex h-100 my-auto">
            <div className="my-auto" data-aos="fade-up-right">
              <h1
                className="textColor text5 mb-3 mainText"
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                Buy Data Easily
              </h1>
              <h2
                className="textColor2 text2 mb-3 mainText"
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                GLO, MTN, 9Mobile, Airtel
              </h2>
              <p
                className="w-75 mb-5 fontReduce fontReduceMaxhead"
                data-aos="zoom-in"
                data-aos-delay="2000"
              >
                In a few clicks, buy data to keep surfing the internet. You can
                buy whatever size of data plan for whichever network you desire.
                In a few clicks, buy data to keep surfing the internet. You can
                buy whatever size of data plan for whichever network you desire.
                Get Started
              </p>
              <div className="d-flex p-2 w-75">
                <Link
                  to={"/login"}
                  className="text-decoration-none btn btn-primary1 text-capitalize px-4 py-3 hug"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 h-100 my-auto d-flex"
            data-aos="fade-up-left"
          >
            <img src={img1} alt="Banner" className="img-fluid mx-auto" />
          </div>
        </section>
      </section>
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <div className="py-5 my-5">
      <section
        className="py-5"
        style={{
          background: `url(${bg2})`,
        }}
      >
        <MiddleHeader text={"Services We Render"} />
        <div className="d-flex justify-content-center">
          <p className="text-center w-50 w50 fontReduce">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque in
            commodi sapiente veniam magni consequatur saepe incidunt! Commodi
            laborum, a et dolorem ut est possimus adipisci alias asperiores,
            amet quis!
          </p>
        </div>
      </section>
    </div>
  );
};

export const ProductServices = () => {
  let type = [
    {
      name: "data Services",
      description: `kemtech enterprises is reliable and affordable platform to buy cheap data bundles and Airtime topup of any Nigerian network. We offer the best price rates for Airtel, MTN, 9mobile and Glo data plans.`,
    },
    {
      name: "Airtime Services",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida vitae lacus, in porta. Faucibus porttitor commodo volutpat in tincidunt bibendum. Adipiscing amet sem eget mauris ultricies porttitor quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida vitae lacus, in porta. Faucibus porttitor commodo volutpat in tincidunt bibendum. Adipiscing amet sem eget mauris ultricies porttitor quis.`,
    },
    {
      name: "Cable Subscription",
      description: `Save money by renewing your DSTV, GOTV and Startimes subscriptions at discounted rates. You don't have to visit PHCN offices to pay for your Electricity bills as you can pay them online through Speedydata from the comfort of your home.`,
    },
    {
      name: "WAEC/NECO scratch cards",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida vitae lacus, in porta. Faucibus porttitor commodo volutpat in tincidunt bibendum. Adipiscing amet sem eget mauris ultricies porttitor quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida vitae lacus, in porta. Faucibus porttitor commodo volutpat in tincidunt bibendum. Adipiscing amet sem eget mauris ultricies porttitor quis.`,
    },
    {
      name: " Swiftest Delivery   ",
      description: `Enjoy prompt delivery of services purchased through KemTech Enterprises. Our promise to you is to deliver value for every transaction made on-time, every time.`,
    },
    {
      name: "good customer care service",
      description: `Our well trained customer support agents are always available 24/7 to help you resolve any issues. We provide you with multiple ways to reach us and get fast help.`,
    },
  ];
  return (
    <Container>
      <div className="d-grid product-service pb-5">
        {type?.map((item, i) => (
          <div className="position-relative eachProduct" key={i}>
            {i % 2 !== 0 && (
              <>
                <div className="abs1" />
              </>
            )}
            <div className="p-3 productDiv pb-5">
              <strong className="text-end d-block">
                {i <= 10 ? "0" : ""}
                {i + 1}
              </strong>
              <h4 className="text-capitalize mb-4">{item?.name}</h4>
              <p className="pb-md-5 fontReduce">{item?.description}</p>
              <div className="pb-5 d-none d-md-block" />
              <div className="pb-5 d-none d-md-block" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export const NewsLetter = () => {
  return (
    <>
      <Container className="py-5">
        <div className="bg-select-2 py-5">
          <h3 className="text-center pt-5 pb-4 text-white">
            Subscribe Newletters
          </h3>
          <div className="broderColor bg-white mx-auto w-50 w50 d-flex py-3">
            <input
              type="email"
              name="email"
              id=""
              className="form-control bg-transparent py-3 border-0 fontReduce"
              placeholder="example@mail.com"
            />
            <Buttons
              title={"subscribe now"}
              width="mx-auto"
              css={"btn-primary1 text-capitalize py-1 px-3 me-2 me-lg-5"}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

const SupportHeader = () => {
  return (
    <div className="py-5">
      <section className="py-5">
        <MiddleHeader text={"Our Support Channels"} />
        <div className="d-flex justify-content-center">
          <p className="text-center w-50 w50 fontReduce">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque in
            commodi sapiente veniam magni consequatur saepe incidunt! Commodi
            laborum, a et dolorem ut est possimus adipisci alias asperiores,
            amet quis!
          </p>
        </div>
      </section>
    </div>
  );
};

export const SuportChannels = () => {
  let type = [
    // {
    //   name: "24/7 Livechat Support",
    //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida vitae lacus, in porta. Faucibus porttitor commodo volutpat in tincidunt bibendum. Adipiscing amet sem eget mauris ultricies porttitor quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida vitae lacus, in porta. Faucibus porttitor commodo volutpat in tincidunt bibendum. Adipiscing amet sem eget mauris ultricies porttitor quis.`,
    //   image: imgDown1,
    // },
    {
      name: "Send Unlimited Tickets",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida vitae lacus, in porta. Faucibus porttitor commodo volutpat in tincidunt bibendum. Adipiscing amet sem eget mauris ultricies porttitor quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida vitae lacus, in porta. Faucibus porttitor commodo volutpat in tincidunt bibendum. Adipiscing amet sem eget mauris ultricies porttitor quis.`,
      image: imgDown2,
    },
    {
      name: "Talk to us on Whatsapp",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida vitae lacus, in porta. Faucibus porttitor commodo volutpat in tincidunt bibendum. Adipiscing amet sem eget mauris ultricies porttitor quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida vitae lacus, in porta. Faucibus porttitor commodo volutpat in tincidunt bibendum. Adipiscing amet sem eget mauris ultricies porttitor quis.`,
      image: imgDown3,
    },
    {
      name: "Connect on Slack",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida vitae lacus, in porta. Faucibus porttitor commodo volutpat in tincidunt bibendum. Adipiscing amet sem eget mauris ultricies porttitor quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida vitae lacus, in porta. Faucibus porttitor commodo volutpat in tincidunt bibendum. Adipiscing amet sem eget mauris ultricies porttitor quis.`,
      image: imgDown4,
    },
  ];
  return (
    <Container>
      <div className="d-grid product-service product-service2 py-5">
        {type?.map((item, i) => (
          <div className="" key={i}>
            <div className="p-3 productDiv py-5 px-4">
              <h4 className="text-capitalize mb-4">{item?.name}</h4>
              <p className="pb-3 fontReduce">{item?.description}</p>
              <Link
                to={"/login"}
                className="text-decoration-none btn btn-primary1 text-capitalize px-4 py-3 hug"
              >
                Get in touch
              </Link>
              <div className="pb-5" />
              <img
                src={item?.image}
                alt="Support"
                className="img-fluid mx-auto d-block imgDown"
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export const GainHeader = () => {
  return (
    <div className="py-5">
      <section className="py-5">
        <MiddleHeader text={"What you stand to gain with us"} />
        <div className="d-flex justify-content-center">
          <p className="text-center w-50 w50 fontReduce">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque in
            commodi sapiente veniam magni consequatur saepe incidunt! Commodi
            laborum, a et dolorem ut est possimus adipisci alias asperiores,
            amet quis!
          </p>
        </div>
      </section>
    </div>
  );
};

export const StandToGain = () => {
  let type = [
    {
      name: "Optimized for Speed",
      description: `Our data delivery is super-fast. We understand that you need data and you need it NOW!`,
    },
    // {
    //   name: "Track all Activities",
    //   description: `You can track all purchases as they are all stored, you can also filter transactions per mobile line.`,
    // },
    {
      name: "Optimal Security",
      description: `We take the security of your account seriously, we are committed to preventing data loss or leak.`,
    },
    // {
    //   name: "Developer Friendly",
    //   description: `Our APIs are available, alongside documentation that is easy to comprehend and integrate`,
    // },
    {
      name: "Discounts & Bonuses",
      description: `We give the best offers and discount sales on all our services (data, airtime, cable subs) periodically.`,
    },
    // {
    //   name: "Wonderful Support",
    //   description: `We provide excellent 24/7 support through various channels; Facebook, WhatsApp and Ticket System.`,
    // },
  ];
  return (
    <Container>
      <div className="d-grid product-service pb-5">
        {type?.map((item, i) => (
          <div className="eachProduct" key={i}>
            <div className="p-3 productDiv py-md-5 rounded">
              <h4 className="text-capitalize mb-4">{item?.name}</h4>
              <p className="fontReduce">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const CustomerHeader = () => {
  return (
    <div className="py-5">
      <section className="py-5">
        <MiddleHeader text={"Hear our customers speak"} />
        <div className="d-flex justify-content-center">
          <p className="text-center w-50 w50 fontReduce">
            Ever since i started business with KemTech Enterprises it has been
            all smiles...they have the best customer service team ever...prompt
            and fast response to issues and if it's something they can't handle
            personally they directit to necessary person(s) to handle...am here
            to stay and no going back...infact i have 2 friends i brought into
            the system and it has all been smiles for them too...kemtech
            enterprises thanks for always being true.
          </p>
        </div>
      </section>
    </div>
  );
};
