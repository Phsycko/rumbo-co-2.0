"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/landing/ui/Container";
import { SectionHeading } from "@/components/landing/ui/SectionHeading";
import { Landmark, MapPin, Waves, type LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const beyondCards: {
  icon: LucideIcon;
  labelKey: "beyond_chip" | "beyond_chip_playas" | "beyond_chip_pueblos_magicos";
  gradient: string;
  image?: string;
}[] = [
  {
    icon: MapPin,
    labelKey: "beyond_chip",
    gradient: "from-ink-soft via-smoke to-ink",
    image: "/images/beyond/sierra-tarahumara.png"
  },
  {
    icon: Waves,
    labelKey: "beyond_chip_playas",
    gradient: "from-[#2c3534] via-smoke to-ink",
    image: "/images/beyond/playas.png"
  },
  {
    icon: Landmark,
    labelKey: "beyond_chip_pueblos_magicos",
    gradient: "from-[#302a26] via-ink-soft to-ink",
    image: "/images/beyond/pueblos-magicos.png"
  }
];

export function BeyondCreelSection() {
  const { t } = useI18n();

  return (
    <section
      id="mas-que-creel"
      className="relative bg-cream pt-8 pb-2 sm:pt-10 sm:pb-3"
      aria-labelledby="mas-que-creel-heading"
    >
      <Container>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden border border-ink/10 bg-parchment shadow-[0_20px_60px_rgba(10,9,8,0.06)]"
        >
          <div className="border-b border-ink/8 px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
            <SectionHeading
              titleId="mas-que-creel-heading"
              eyebrow={t("beyond_eyebrow")}
              title={t("beyond_title")}
              subtitle={t("beyond_subtitle")}
            />
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/70 sm:mt-6">{t("beyond_body")}</p>
          </div>

          <ul className="grid gap-px bg-ink/10 sm:grid-cols-3" aria-label={t("beyond_chips_aria")}>
            {beyondCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.li
                  key={card.labelKey}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                  className="group relative min-h-[148px] overflow-hidden bg-cream sm:min-h-[160px]"
                >
                  {card.image ? (
                    <Image
                      src={card.image}
                      alt={t(card.labelKey)}
                      fill
                      className="object-cover object-center transition duration-700 group-hover:scale-[1.02]"
                      sizes="(min-width: 640px) 33vw, 100vw"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient} transition duration-700 group-hover:scale-[1.02]`}
                      aria-hidden
                    />
                  )}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/45 to-ink/15"
                    aria-hidden
                  />
                  <div className="relative flex h-full min-h-[148px] flex-col justify-between p-5 sm:min-h-[160px] sm:p-6">
                    <Icon className="h-5 w-5 text-cream/75" aria-hidden />
                    <p className="font-serif text-lg leading-snug text-cream sm:text-xl">{t(card.labelKey)}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
