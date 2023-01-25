import Link from "next/link";
import Head from "next/head";
import Footer from "./footer";

const About = () => {
  return (
    <>
      <Head>
        <title>Profil</title>
      </Head>

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title smaller">Profil</h1>
            <p className="description paragraph">
              Mahasiswa S1 jurusan Teknik Informatika dengan fokus Front-end
              development. Terampil dalam HTML, CSS, JavaScript, dan berbagai
              framework front-end. Mahir dalam membuat situs web yang menarik
              secara visual dan ramah pengguna, dan memiliki pemahaman yang kuat
              tentang prinsip desain web, desain responsif, dan praktik terbaik
              pengembangan web. Mencari peluang magang atau bekerja untuk
              mendapatkan pengalaman langsung dan berkontribusi pada proyek
              dunia nyata sembari terus mengembangkan keterampilan dan
              pengetahuan saya di bidang pengembangan front-end.
            </p>
            <div className="button-container center">
              <Link
                href="https://github.com/yandaagil/personal-web/blob/main/public/cv.pdf"
                className="btn center"
                target="__blank"
              >
                Curriculum Vitae
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
