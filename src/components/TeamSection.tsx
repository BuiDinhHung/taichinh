import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Bảo Vũ Thế",
    phone: "+49 176-10178768",
    email: "vuthe@hotmail.de",
    image: "/images/ql1.jpeg",
  },
  {
    name: "Ronald A. Meines",
    phone: "+49 176-70008024",
    email: "ronald.meiners@dvag.de",
    image: "/images/ql4.jpeg",
  },
  {
    name: "Tina Ngo",
    phone: "+49 174-6322994",
    email: "tinalinngo@gmail.com",
    image: "/images/ql2.jpeg",
  },
  {
    name: "Kevin Hütter",
    phone: "+49 176-32019935",
    email: "kevin.huetter97@gmail.com",
    image: "/images/ql3.jpeg",
  },
];

export function TeamSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="dvag-container">
        <h2 className="text-center text-3xl font-bold text-brand-gold">Chúng tôi là</h2>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {teamMembers.map((member) => (
            <article key={member.email} className="text-center text-brand-gold">
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-2 border-brand-gold bg-white shadow-[0_2px_3px_rgba(0,0,0,0.28)]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={180}
                  height={180}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 text-base font-bold italic leading-tight">{member.name}</h3>
              <p className="text-sm italic leading-tight">Tel.: {member.phone}</p>
              <p className="text-sm italic leading-tight">Mail: {member.email}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/dat-lich"
            className="inline-flex min-h-20 w-full max-w-[490px] items-center justify-center bg-brand-gold px-8 py-5 text-xl font-bold text-white transition-colors hover:bg-brand-gold-dark"
          >
            Đặt lịch hẹn tư vấn
          </Link>
        </div>
      </div>
    </section>
  );
}
