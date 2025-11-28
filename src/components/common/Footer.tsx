import { Separator } from "@radix-ui/react-separator";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="px-20">
      <div className="py-24 grid grid-cols-4 gap-40">
        <div>
          <img src="eco.svg" alt="Eco Friendly" />
          <p className="text-[#58595D] mt-6 font-medium text-sm">
            Our paper is sourced from FSC-certified mills. We plant enough trees
            to more than double our paper usage.
          </p>
        </div>

        <ul className="flex flex-col gap-4 font-medium">
          <li className="text-xs font-bold uppercase tracking-widest mb-2">
            Company
          </li>

          <li>About us</li>
          <li>Partner program</li>
          <li>Career</li>
          <li>Contact us</li>
          <li>Privacy Policy</li>
        </ul>

        <ul className="flex flex-col gap-4 font-medium mt-auto">
          <li>Pricing</li>
          <li>Reviews</li>
          <li>Direct Mail Academy</li>
          <li>Success stories</li>
          <li>Terms & conditions</li>
        </ul>

        <ul className="flex flex-col gap-7 font-medium">
          <li className="text-xs font-bold uppercase tracking-widest mb-2">
            CONTACT
          </li>

          <li className="flex gap-2 items-center text-sm">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1818 4H3.81818C2.81403 4 2 4.79594 2 5.77778V18.2222C2 19.2041 2.81403 20 3.81818 20H20.1818C21.186 20 22 19.2041 22 18.2222V5.77778C22 4.79594 21.186 4 20.1818 4Z"
                fill="#FFE8DC"
                stroke="#212121"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
              <path
                d="M8.64938 14.8809L7.67969 15.7861"
                stroke="#212121"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
              <path
                d="M15.3477 14.8809L16.3174 15.7861"
                stroke="#212121"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
              <path
                d="M16.544 8L11.9986 12.4444L7.45312 8"
                stroke="#212121"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="square"
              />
            </svg>
            support@postpilot.com
          </li>

          <li className="text-[#58595D]">
            Printed with ❤️️️ at our facility in South Carolina.
          </li>
        </ul>
      </div>

      <div className="py-12 flex justify-between items-center border-t border-t-[#E6E6E7]">
        <div className="space-y-2">
          <img src="logo.svg" alt="Post Pilot" />
          <p className="text-sm text-[#58595D] font-medium">
            © 2022 PostPilot, Inc. All rights reserved.
          </p>
        </div>

        <div className="space-x-4">
          <Button variant="secondary" size="lg">
            Login
          </Button>
          <Button size="lg">Try it for free</Button>
        </div>
      </div>
    </div>
  );
}
