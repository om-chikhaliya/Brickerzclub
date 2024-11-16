import React from "react";
import { communityLinks, platformLinks, resourcesLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="border-t mt-20 py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="">
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((ressource, index) => {
              return (
                <li className="" key={index}>
                  <a
                    href={ressource.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {ressource.text}{" "}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="">
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((ressource, index) => {
              return (
                <li className="" key={index}>
                  <a
                    href={ressource.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {ressource.text}{" "}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="">
          <h3 className="text-md font-semibold mb-4">Ressources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((ressource, index) => {
              return (
                <li className="" key={index}>
                  <a
                    href={ressource.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {ressource.text}{" "}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="mt-6 justify-center text-center">
        <h5 className="text-center text-xl text-neutral-700">
          Copyright 2024, Oumarou Sanda Souley
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
