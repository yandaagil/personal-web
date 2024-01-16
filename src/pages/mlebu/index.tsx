import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Mlebu = () => {
  return (
    <>
      <Title title="بوابة إلى الجحيم" />

      <section className="min-h-screen container px-4 flex items-center justify-center md:max-w-2xl">
        <div className="h-full text-center space-y-3">
          <Input type="text" name="username" id="username" placeholder="%BKWe#7?ce" autoComplete="on" />
          <Input type="password" name="password" id="password" placeholder=";?@K!xu3;Z" />
          <Button variant="outline">ジャンプ</Button>
        </div>
      </section>
    </>
  );
};

export default Mlebu;
