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
    <section className="bg-[#f0f4f8] py-14 lg:py-16">
      <div className="dvag-container">
        <h2 className="text-center text-xl font-bold uppercase text-brand-gold sm:text-2xl">
          Chúng tôi luôn đồng hành cùng bạn
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {teamMembers.map((member) => (
            <article key={member.email} className="text-center">
              <div className="mx-auto aspect-[7/8] w-32 overflow-hidden rounded-[44%] border-2 border-brand-gold bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)] sm:w-44">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={220}
                  height={252}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm font-bold leading-tight text-text-strong sm:text-base">{member.name}</h3>
              <p className="mt-1 text-xs leading-tight text-text-muted sm:text-sm">Tel.: {member.phone}</p>
              <p className="text-xs leading-tight text-text-muted sm:text-sm">Mail: {member.email}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/dat-lich"
            className="inline-flex min-h-14 w-full max-w-[380px] items-center justify-center bg-brand-gold px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-brand-gold-dark"
          >
            Đặt lịch hẹn tư vấn
          </Link>
        </div>
      </div>
    </section>
  );
}
