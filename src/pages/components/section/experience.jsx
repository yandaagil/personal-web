import Link from "next/link";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full border-b-[1px] border-solid border-grey"
    >
      <div className="w-4/5 my-0 mx-auto flex flex-col justify-center min-[2200px]:w-7/12">
        <div className="flex flex-col lg:flex-row">
          <div className="pt-20 pr-0 pl-0 pb-10 lg:py-20 lg:pr-20 lg:border-r-[1px] lg:border-solid lg:border-text">
            <h2 className="m-0 text-lg font-bold text-text uppercase tracking-[5px] lg:rotate-left lg:text-xl">
              Experience
            </h2>
          </div>
          <div className="pt-0 px-0 pb-20 h-full flex flex-col lg:py-20">
            <ol className="list m-0 pl-0 list-none">
              <li className="lists pl-10 pb-10 text-text text-sm relative border-l-2 border-dashed border-grey before:w-8 lg:text-base lg:pl-20 lg:before:w-[2.125rem] lg:border-none">
                <div className="flex flex-col justify-between lg:flex-row">
                  <h2 className="m-0 font-bold lg:text-lg">
                    IT Staff and Web Developer
                  </h2>
                  <h5 className="mt-0 mr-0 mb-4 text-textgrey text-sm italic lg:mb-0 lg:text-base">
                    Oct 2022 - Nov 2022
                  </h5>
                </div>
                <h4 className="mt-0 mr-0 mb-4 text-textgrey text-sm lg:text-base">
                  <Link
                    href="https://diskominfo.karanganyarkab.go.id/"
                    target="__blank"
                  >
                    <span className="text-textgrey text-sm before:content-['@'] transition-all duration-300 ease-in-out lg:underline lg:decoration-dotted lg:underline-offset-8 hover:text-text lg:text-base">
                      Dinas Komunikasi dan Informatika Kabupaten Karanganyar
                    </span>
                  </Link>{" "}
                  • Internship
                </h4>
                <ul className="pl-5 list-disc text-sm lg:text-base">
                  <li>Develop SPPD Web Application.</li>
                  <li>Maintaining DISKOMINFO website.</li>
                  <li>Optimize website performance.</li>
                </ul>
              </li>
              <li className="lists mb-0 pb-0 pl-10 text-text text-sm relative border-l-2 border-dashed border-background before:w-8 lg:text-base lg:pl-20 lg:before:w-[2.125rem] lg:border-none">
                <div className="flex flex-col justify-between lg:flex-row">
                  <h2 className="m-0 font-bold lg:text-lg">
                    Front-End Engineer
                  </h2>
                  <h5 className="mt-0 mr-0 mb-4 text-textgrey text-sm italic lg:mb-0 lg:text-base">
                    Feb 2022 - Jul 2022
                  </h5>
                </div>
                <h4 className="mt-0 mr-0 mb-4 text-textgrey text-sm lg:text-base">
                  <Link href="https://www.ruangguru.com/" target="__blank">
                    <span className="text-textgrey text-sm before:content-['@'] transition-all duration-300 ease-in-out lg:underline lg:decoration-dotted lg:underline-offset-8 hover:text-text lg:text-base">
                      Ruangguru
                    </span>
                  </Link>{" "}
                  • Apprenticeship
                </h4>
                <ul className="pl-5 list-disc text-sm lg:text-base">
                  <li>
                    Build responsive and interactive website applications using
                    the ReactJS framework.
                  </li>
                  <li>
                    Website and search engine optimization using SEO and Web
                    Performance.
                  </li>
                  <li>Create API and Consume API.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
