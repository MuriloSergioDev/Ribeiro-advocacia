'use client'

import AboutSection from '@/components/AboutSection'
import BenefitsSection from '@/components/BenefitsSection'
import CausesSection from '@/components/CausesSection'
import ContactSection from '@/components/ContactSection'
import NavMenu from '@/components/NavMenu'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

import BriefSection from '@/components/BriefSection'
import FooterSection from '@/components/FooterSection'
import MainSection from '@/components/MainSection'

export default function Home() {
  return (
    <>
      <NavMenu />
      <MainSection />
      <BenefitsSection />
      <CausesSection />
      <AboutSection />
      <BriefSection />
      <ContactSection />
      <FooterSection />

      <FloatingWhatsApp
        phoneNumber="5591982644713"
        accountName="Tobias Ribeiro"
        chatMessage="Olá! 🤝 Como posso ajudar?"
        avatar="/profile.jpg"
        statusMessage="Normalmente responde dentro de 1 hora"
        placeholder="Digite uma mensagem"
        className="text-black"
      />
    </>
  )
}
