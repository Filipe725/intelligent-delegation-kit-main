import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Check as CheckIcon,
  X as XIcon,
  Star as StarIcon,
  Home,
  Download,
  ShoppingCart,
  Printer,
  Smartphone,
  Sparkles,
  Gift,
  Users,
  Shield,
  Lock,
  CreditCard,
  Zap,
  HelpCircle,
  Dot,
} from "lucide-react";
import heroFamily from "@/assets/hero-family.png";
import familiaDepois from "@/assets/familia-depois.png";
import geladeira from "@/assets/geladeira.png";
import cargaMental from "@/assets/carga-mental.png";
import bonusStack from "@/assets/bonus-stack.png";
import bonus01 from "@/assets/bonus-01.png";
import bonus02 from "@/assets/bonus-02.png";
import kitImpresso from "@/assets/kit-impresso.png";
import cartoesTarefas from "@/assets/cartoes-tarefas.png";
import kitFan from "@/assets/kit-fan-spread.png";
import dep01 from "@/assets/Depoimentos/Comment_screenshot_with_profile_…_202605231135.jpeg";
import dep02 from "@/assets/Depoimentos/Instagram_comment_UI_mockup_202605231136.jpeg";
import dep03 from "@/assets/Depoimentos/Instagram_comment_UI_mockup_202605231142.jpeg";
import dep04 from "@/assets/Depoimentos/Woman_comments_on_delegating_chores_202605231142.jpeg";
import dep05 from "@/assets/Depoimentos/Woman_comments_on_marriage_saving_202605231138.jpeg";
import dep06 from "@/assets/Depoimentos/Ultra_realistic_Instagram_comment_screenshot,_202605231148.jpeg";

export const Route = createFileRoute("/")({
  component: SalesPage,
});

const CHECKOUT_URL = "https://pay.kiwify.com.br/D7SrZGL";

function CTA({ pulse = false, label = "QUERO MEU KIT AGORA →" }: { pulse?: boolean; label?: string }) {
  return (
    <a href={CHECKOUT_URL} className={`cta-btn ${pulse ? "pulse" : ""}`}>
      {label}
    </a>
  );
}

function Check() {
  return <CheckIcon className="w-5 h-5 flex-shrink-0 mt-1 text-[var(--green-check)]" strokeWidth={3} />;
}

function X() {
  return <XIcon className="w-5 h-5 flex-shrink-0 mt-1 text-[var(--badge-red)]" strokeWidth={3} />;
}

function BonusBadge({ color }: { color: string }) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-black uppercase tracking-wider"
      style={{ background: color }}
    >
      <Gift className="w-4 h-4" /> Bônus Gratuito
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--border)] py-4">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center text-left gap-4">
        <span className="font-bold text-[var(--text-dark)] text-lg inline-flex items-center gap-2"><HelpCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />{q}</span>
        <span className="text-[var(--primary)] text-2xl flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-3 text-[var(--text-body)] leading-relaxed">{a}</p>}
    </div>
  );
}

const depoimentoImgs = [dep01, dep02, dep03, dep04, dep05, dep06];

function SalesPage() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative" style={{ background: "linear-gradient(180deg, #EAF4FB 0%, #FFFFFF 100%)" }}>
        <div className="max-w-6xl mx-auto px-5 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs font-black tracking-widest text-[var(--primary-dark)] uppercase mb-4">
              Para mães e donas de casa sobrecarregadas
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-[var(--text-dark)] leading-tight">
              Pare de Carregar a Casa <span className="text-[var(--primary-dark)]">Nas Suas Costas Sozinha</span>
            </h1>
            <p className="mt-6 text-lg text-[var(--text-body)] leading-relaxed">
              Com o <strong>Kit Delegação Inteligente</strong>, cada pessoa da sua casa sabe exatamente o que fazer, quando e como — sem você precisar pedir toda hora. Sem briga. Sem culpa.
            </p>
            <div className="mt-8">
              <CTA pulse />
              <p className="mt-3 text-sm text-[var(--text-light)]">Acesso imediato após o pagamento • Formato digital</p>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroFamily}
              alt="Família organizada na cozinha"
              fetchPriority="high"
              className="rounded-3xl soft-shadow w-full"
            />
            <div className="absolute -top-4 -right-4 md:top-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 rounded-full bg-[var(--accent)] text-white flex flex-col items-center justify-center font-black text-center shadow-2xl rotate-12">
              <span className="text-[10px] md:text-xs uppercase tracking-wider">Oferta de</span>
              <span className="text-sm md:text-base">Lançamento</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="bg-[var(--primary-dark)] text-white">
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-sm text-center">
          <span className="inline-flex items-center gap-2"><Home className="w-4 h-4" /> Mais de 3.000 famílias já organizaram a casa com o Kit Delegação</span>
          <span className="inline-flex items-center gap-2"><StarIcon className="w-4 h-4 fill-current" /> Avaliação 4.9/5</span>
          <span className="inline-flex items-center gap-2"><Download className="w-4 h-4" /> Entrega imediata</span>
        </div>
      </section>

      {/* DOR */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center fade-in">
          <div className="relative">
            <img src={cargaMental} alt="Mãe sobrecarregada com a carga mental invisível" loading="lazy" className="rounded-3xl w-full" />
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white px-4 py-2 rounded-xl text-center font-display italic">
              Isso parece familiar?
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-[var(--text-dark)] mb-6">Olá, Mamãe e Papai!</h2>
            <div className="space-y-4 text-[var(--text-body)] text-lg leading-relaxed">
              <p>Se você acorda já pensando em tudo que precisa fazer...</p>
              <p>Se você pede ajuda e ninguém lembra...</p>
              <p>Se você é a única que pensa em comprar, limpar, organizar, cozinhar, lembrar de tudo para todo mundo...</p>
              <p className="font-bold text-[var(--text-dark)]">Esse cansaço tem nome. É a carga mental invisível da casa.</p>
              <p>E não é fraqueza. É o peso de carregar sozinha o que deveria ser dividido.</p>
            </div>
            <blockquote className="mt-6 border-l-4 border-[var(--accent)] bg-[var(--bg-hero)] p-5 rounded-r-xl font-display italic text-[var(--text-dark)]">
              "A casa não é responsabilidade de uma pessoa só. Mas enquanto não existir um sistema, vai parecer que é."
            </blockquote>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-5 mt-12 fade-in">
          <ul className="space-y-3 bg-[var(--bg-light)] rounded-2xl p-6 md:p-8">
            {[
              "Você pede a mesma coisa mais de três vezes antes de alguém fazer",
              "Você faz tudo \"mais rápido sozinha\" do que explicando",
              "Quando você não faz, simplesmente não é feito",
              "Você se sente exausta mas não consegue descansar de verdade",
              "Você ama sua família, mas às vezes fica com raiva de carregar tudo",
              "No fim do dia, você ainda está pensando no que faltou fazer",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-[var(--text-body)]">
                <X /> <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-center mt-8 text-lg text-[var(--text-dark)] font-bold">
            Se você se reconheceu em pelo menos um item acima,<br />o Kit Delegação Inteligente foi feito para você.
          </p>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="py-16 md:py-24 bg-[var(--bg-light)]">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-black text-[var(--text-dark)] mb-12 fade-in">Para Quem é Indicado?</h2>
          <div className="grid md:grid-cols-2 gap-6 fade-in">
            {[
              { Icon: Users, title: "A Mãe no Limite", desc: "Trabalha fora ou em casa, acumula função de mãe, dona de casa e às vezes profissional. Sente que a casa vive bagunçada mesmo dedicando horas a ela." },
              { Icon: Home, title: "A Dona de Casa Dedicada", desc: "Está em casa em tempo integral e ainda assim sente que não dá conta de tudo. Carrega sozinha a gestão mental da casa. O marido \"ajuda quando pede\", mas ela é quem pensa por todos." },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-8 soft-shadow text-left">
                <div className="w-14 h-14 rounded-2xl bg-[var(--bg-hero)] text-[var(--primary-dark)] flex items-center justify-center mb-4">
                  <c.Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--text-dark)] mb-3">{c.title}</h3>
                <p className="text-[var(--text-body)] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-lg text-[var(--text-dark)] fade-in inline-flex items-center gap-2 justify-center">
            <Sparkles className="w-5 h-5 text-[var(--accent)]" /> Se você se reconhece em qualquer um dos perfis acima, esse kit vai mudar a dinâmica da sua casa.
          </p>
        </div>
      </section>

      {/* O QUE VOCÊ RECEBE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12 fade-in">
            <h2 className="font-display text-3xl md:text-5xl font-black text-[var(--text-dark)]">O Que Você Vai Receber?</h2>
            <p className="mt-3 text-xl text-[var(--primary-dark)] font-display italic">Kit Delegação Inteligente — Completo e Imprimível</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
            <img src={kitFan} alt="Kit Delegação Inteligente — visão completa" loading="lazy" className="rounded-3xl soft-shadow w-full" />
            <ul className="space-y-4">
              {[
                ["Plano Semanal por Morador", "cada pessoa da casa tem seu próprio quadro de responsabilidades fixas"],
                ["Escala Mensal de Tarefas", "calendário visual com legenda colorida por tipo de tarefa"],
                ["Checklists por Faixa Etária", "pequenos (5–8), crescendo (9–12), adolescentes — cada fase com tarefas adaptadas"],
                ["Quadro \"Quem Faz o Quê?\"", "missões principais de cada morador num único painel"],
                ["Cartões de Tarefas para Recortar", "12 cards prontos: lavar louça, tirar lixo, cuidar do pet, cozinhar e mais"],
                ["Nossa Constituição Familiar", "combinados e regras positivas da casa em formato visual"],
                ["Guia \"Como Pedir Ajuda sem Brigar\"", "4 passos simples para dividir sem conflito"],
                ["Missão da Semana", "quadro de objetivo coletivo semanal com meta e responsáveis"],
                ["Conquistas da Família", "sistema de pontos e recompensas motivacional"],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <Check />
                  <span className="text-[var(--text-body)]"><strong className="text-[var(--text-dark)]">{t}</strong> — {d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center fade-in">
            <img src={cartoesTarefas} alt="Cartões de tarefas para recortar" loading="lazy" className="rounded-3xl soft-shadow w-full" />
            <div>
              <img src={geladeira} alt="Quadro de tarefas na geladeira" loading="lazy" className="rounded-3xl soft-shadow w-full" />
              <p className="mt-3 text-center italic text-[var(--text-light)]">"O Kit Delegação colado na geladeira e já funcionando no primeiro dia."</p>
            </div>
          </div>

          <div className="mt-12 bg-[var(--bg-hero)] rounded-2xl p-6 text-center fade-in">
            <p className="text-lg text-[var(--text-dark)] font-bold inline-flex flex-wrap items-center justify-center gap-2"><Smartphone className="w-5 h-5 text-[var(--primary-dark)]" /> Versão Digital Editável </p>
            <p className="text-[var(--text-body)] mt-2">Acesso imediato - comece a utilizar hoje hoje mesmo.</p>
          </div>

          <div className="mt-10 text-center fade-in">
            <CTA />
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-16 md:py-24 bg-[var(--bg-light)]">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="font-display text-3xl md:text-4xl font-black text-center text-[var(--text-dark)] mb-12 fade-in">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-6 fade-in">
            {[
              { n: 1, Icon: ShoppingCart, t: "Compre agora com segurança", d: "Pagamento seguro. Acesso imediato após confirmação." },
              { n: 2, Icon: Printer, t: "Organize sua rotina em poucos minutos", d: "Baixe os arquivos, Comece a usar em poucos minutos." },
              { n: 3, Icon: Home, t: "Cole na geladeira e comece hoje", d: "Em menos de 30 minutos sua casa já tem um sistema com todos participando." },
            ].map((s) => (
              <div key={s.n} className="bg-white rounded-2xl p-6 soft-shadow text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[var(--accent)] text-white font-black flex items-center justify-center">{s.n}</div>
                <div className="w-16 h-16 mx-auto mt-4 mb-3 rounded-2xl bg-[var(--bg-hero)] text-[var(--primary-dark)] flex items-center justify-center">
                  <s.Icon className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-[var(--text-dark)] mb-2">{s.t}</h3>
                <p className="text-[var(--text-body)] text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMAÇÃO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="font-display text-3xl md:text-4xl font-black text-center text-[var(--text-dark)] mb-12 fade-in">
            Uma Semana com o Kit Delegação Muda Tudo
          </h2>
          <div className="grid md:grid-cols-2 gap-6 fade-in">
            <div className="rounded-2xl p-8" style={{ background: "#FFF1F1", border: "2px solid #FECACA" }}>
              <h3 className="font-display font-bold text-2xl text-[var(--badge-red)] mb-4 inline-flex items-center gap-2"><XIcon className="w-6 h-6" strokeWidth={3} /> Sem o Kit</h3>
              <ul className="space-y-3 text-[var(--text-body)]">
                {["Você pensa em tudo, executa quase tudo", "A louça fica acumulando até você lavar", "Brigas por tarefas não feitas", "Cansaço que não passa nem no fim de semana", "Culpa por não conseguir descansar"].map((i) => (
                  <li key={i} className="flex gap-2 items-start"><Dot className="w-5 h-5 flex-shrink-0 text-[var(--badge-red)]" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "#F0FDF4", border: "2px solid #BBF7D0" }}>
              <h3 className="font-display font-bold text-2xl text-[var(--green-check)] mb-4 inline-flex items-center gap-2"><CheckIcon className="w-6 h-6" strokeWidth={3} /> Com o Kit</h3>
              <ul className="space-y-3 text-[var(--text-body)]">
                {["Cada um sabe o que é sua responsabilidade", "As tarefas acontecem sem você precisar lembrar", "Comunicação leve e combinados claros", "Espaço real para descansar sem culpa", "Casa funcionando como um time, não como uma pessoa carregando todos"].map((i) => (
                  <li key={i} className="flex gap-2 items-start"><Dot className="w-5 h-5 flex-shrink-0 text-[var(--green-check)]" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <img src={familiaDepois} alt="Família feliz e organizada" loading="lazy" className="mt-12 rounded-3xl soft-shadow w-full max-w-3xl mx-auto fade-in" />
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-16 md:py-24 bg-[var(--bg-hero)]">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="font-display text-3xl md:text-4xl font-black text-center text-[var(--text-dark)] mb-12 fade-in">O Que Dizem Quem Já Usou</h2>
          <div className="grid md:grid-cols-3 gap-6 fade-in">
            {depoimentoImgs.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden soft-shadow hover:-translate-y-1 transition-transform">
                <img src={src} alt={`Depoimento ${i + 1}`} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12 fade-in">
            <h2 className="font-display text-3xl md:text-5xl font-black text-[var(--text-dark)]">Comprando Hoje Você Ainda Recebe<br />Mais Três Bônus</h2>
            <p className="mt-4 text-lg text-[var(--badge-gold)] font-bold inline-flex items-center gap-2 justify-center"><Gift className="w-5 h-5" /> Bônus exclusivos que somam R$ 59,90 em valor real</p>
            <img src={bonusStack} alt="Três bônus empilhados" loading="lazy" className="mt-8 mx-auto max-w-sm w-full" />
          </div>

          <div className="space-y-10">
            {/* Bônus 01 */}
            <div className="bg-[var(--bg-light)] rounded-3xl p-6 md:p-10 soft-shadow grid md:grid-cols-2 gap-8 items-center fade-in">
              <img src={bonus01} alt="Planejador do Mês Inteiro" loading="lazy" className="rounded-2xl w-full" />
              <div>
                <BonusBadge color="#D69E2E" />
                <h3 className="font-display text-2xl md:text-3xl font-black text-[var(--text-dark)] mt-4">Bônus 01 — Planejador do Mês Inteiro</h3>
                <p className="mt-3 text-[var(--text-body)]">Em menos de 30 minutos você preenche o planejador e sabe exatamente o que limpar, cozinhar e comprar em cada dia do mês. Sem improvisar. Sem esquecer.</p>
                <ul className="mt-4 space-y-2">
                  {["Calendário mensal visual", "Grade de limpeza por cômodo e por dia", "Planejador de cardápio semanal", "Lista de compras por categoria", "Versão imprimível + digital editável"].map((i) => (
                    <li key={i} className="flex gap-2 text-[var(--text-body)] text-sm"><Check /> {i}</li>
                  ))}
                </ul>
                <p className="mt-5"><span className="line-through text-[var(--text-light)]">R$ 15,90</span> <span className="ml-2 font-black text-[var(--green-check)] text-xl">GRÁTIS</span></p>
              </div>
            </div>

            {/* Bônus 02 */}
            <div className="bg-[var(--bg-light)] rounded-3xl p-6 md:p-10 soft-shadow grid md:grid-cols-2 gap-8 items-center fade-in">
              <img src={bonus02} alt="Lar em Ordem, Mente em Paz" loading="lazy" className="rounded-2xl w-full md:order-2" />
              <div className="md:order-1">
                <BonusBadge color="#9F7AEA" />
                <h3 className="font-display text-2xl md:text-3xl font-black text-[var(--text-dark)] mt-4">Bônus 02 — Lar em Ordem, Mente em Paz</h3>
                <p className="mt-3 text-[var(--text-body)]">Você organizou a casa. Agora é hora de organizar você. Com 5 minutos por dia, esse planner emocional te ajuda a começar o dia com intenção e terminar com gratidão.</p>
                <ul className="mt-4 space-y-2">
                  {["Diário de gratidão diária", "Check-in emocional com registro de humor mensal", "Metas da alma e reflexão mensal", "Rituais de paz (manhã e noite)", "Cartões de inspiração para recortar", "Afirmações positivas para geladeira ou espelho"].map((i) => (
                    <li key={i} className="flex gap-2 text-[var(--text-body)] text-sm"><Check /> {i}</li>
                  ))}
                </ul>
                <p className="mt-5"><span className="line-through text-[var(--text-light)]">R$ 27,00</span> <span className="ml-2 font-black text-[var(--green-check)] text-xl">GRÁTIS</span></p>
              </div>
            </div>

            {/* Bônus 03 */}
            <div className="bg-[var(--bg-light)] rounded-3xl p-6 md:p-10 soft-shadow text-center fade-in">
              <BonusBadge color="#48BB78" />
              <div className="mx-auto mt-6 w-20 h-20 rounded-2xl bg-[var(--bg-hero)] text-[var(--primary-dark)] flex items-center justify-center"><Gift className="w-10 h-10" /></div>
              <h3 className="font-display text-2xl md:text-3xl font-black text-[var(--text-dark)] mt-2">Bônus 03 — Ensine o Princípio da Gratidão para Seu Filho</h3>
              <p className="mt-3 text-[var(--text-body)] max-w-2xl mx-auto">Um guia simples e amoroso para cultivar o hábito da gratidão nas crianças desde cedo. Porque uma casa organizada começa com corações bem formados.</p>
              <ul className="mt-4 inline-block text-left space-y-2">
                {["Atividades práticas por faixa etária", "Linguagem adaptada para crianças", "Material para usar em família"].map((i) => (
                  <li key={i} className="flex gap-2 text-[var(--text-body)] text-sm"><Check /> {i}</li>
                ))}
              </ul>
              <p className="mt-5"><span className="line-through text-[var(--text-light)]">R$ 17,00</span> <span className="ml-2 font-black text-[var(--green-check)] text-xl">GRÁTIS</span></p>
            </div>
          </div>

          <div className="mt-12 text-center fade-in">
            <CTA />
          </div>
        </div>
      </section>

      {/* PREÇO */}
      <section id="checkout" className="py-16 md:py-24" style={{ background: "linear-gradient(135deg, #2C6E8A 0%, #4A90B8 100%)" }}>
        <div className="max-w-3xl mx-auto px-5 text-center text-white">
          <h2 className="font-display text-3xl md:text-5xl font-black mb-10 fade-in">Garanta Agora com Preço de Lançamento</h2>
          <div className="bg-white text-[var(--text-dark)] rounded-3xl p-8 md:p-12 soft-shadow fade-in">
            <p className="text-[var(--text-light)] line-through text-lg">De: R$ 89,47 por apenas</p>
            <div className="mt-2">
              <p className="font-display text-5xl md:text-6xl font-black text-[var(--accent)]">6x de R$ 5,07</p>
              <p className="text-xl mt-2 text-[var(--text-body)]">ou <strong className="text-[var(--text-dark)]">R$ 27,00 à vista no Pix</strong></p>
            </div>

            <hr className="my-8 border-[var(--border)]" />

            <ul className="text-left space-y-3 max-w-md mx-auto">
              <li className="flex gap-2"><Check /> <span><strong>Kit Delegação Inteligente</strong> (produto principal)</span></li>
              <li className="flex gap-2"><Gift className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--badge-gold)]" /><span>Bônus 01: Planejador do Mês Inteiro <span className="text-[var(--green-check)] font-bold">(R$ 15,90 grátis)</span></span></li>
              <li className="flex gap-2"><Gift className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--badge-gold)]" /><span>Bônus 02: Lar em Ordem, Mente em Paz <span className="text-[var(--green-check)] font-bold">(R$ 27,00 grátis)</span></span></li>
              <li className="flex gap-2"><Gift className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--badge-gold)]" /><span>Bônus 03: Princípio da Gratidão <span className="text-[var(--green-check)] font-bold">(R$ 17,00 grátis)</span></span></li>
            </ul>

            <div className="mt-8 bg-[var(--bg-hero)] rounded-2xl p-5">
              <p className="text-sm text-[var(--text-light)]">Valor total: <span className="line-through">R$ 89,47</span></p>
              <p className="text-xl font-black text-[var(--primary-dark)] mt-1">Você paga hoje apenas: R$ 27,00</p>
            </div>

            <div className="mt-8">
              <CTA pulse label="SIM! QUERO MEU KIT AGORA →" />
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-[var(--text-light)]">
              <span className="inline-flex items-center gap-1"><Lock className="w-4 h-4" /> Pagamento 100% seguro</span>
              <span className="inline-flex items-center gap-1"><Download className="w-4 h-4" /> Acesso imediato</span>
              <span className="inline-flex items-center gap-1"><CreditCard className="w-4 h-4" /> Parcelado sem juros</span>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-16 md:py-24 bg-[var(--bg-light)]">
        <div className="max-w-3xl mx-auto px-5 text-center fade-in">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[var(--green-check)] text-white mb-6"><Shield className="w-12 h-12" /></div>
          <h2 className="font-display text-3xl md:text-4xl font-black text-[var(--text-dark)] mb-6">Garantia de 7 Dias ou Seu Dinheiro de Volta</h2>
          <p className="text-lg text-[var(--text-body)] leading-relaxed">
            Se em até 7 dias após a compra você não estiver satisfeita com o produto, é só nos chamar e devolvemos 100% do seu dinheiro. Sem burocracia. Sem questionamento. Simples assim.
          </p>
          <p className="mt-4 text-xl font-bold text-[var(--primary-dark)]">Risco zero para você.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-display text-3xl md:text-4xl font-black text-center text-[var(--text-dark)] mb-10 fade-in">Ainda tem dúvidas? Veja as respostas mais comuns</h2>
          <div className="fade-in">
            <FAQItem q="Como vou receber o produto?" a="Assim que o pagamento for confirmado, você recebe um e-mail com o link para baixar todos os arquivos. O acesso é imediato — 24h por dia, 7 dias por semana." />
            <FAQItem q="Precisa de impressora obrigatoriamente?" a="Não. O kit tem versão digital editável que pode ser usada diretamente no celular, tablet ou computador. Mas se quiser imprimir, basta uma impressora A4 comum." />
            <FAQItem q="Funciona para quem tem filhos pequenos?" a="Sim! O Kit tem checklists adaptados por faixa etária: 5–8 anos, 9–12 anos e adolescentes. Cada fase com tarefas que fazem sentido para a criança." />
            <FAQItem q="E se meu marido não quiser participar?" a="O guia 'Como Pedir Ajuda sem Brigar' foi feito exatamente para esse momento. Ele traz um script simples para abrir essa conversa sem conflito." />
            <FAQItem q="Funciona para quem mora sozinha?" a="O Planejador do Mês Inteiro (Bônus 01) funciona muito bem para quem mora sozinha. O Kit Delegação em si é focado em famílias com mais de uma pessoa." />
            <FAQItem q="É produto físico ou digital?" a="Digital imprimível. Você baixa os arquivos e imprime quando quiser." />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-24" style={{ background: "linear-gradient(180deg, #EAF4FB 0%, #FFFFFF 100%)" }}>
        <div className="max-w-3xl mx-auto px-5 text-center fade-in">
          <img src={kitImpresso} alt="Kit Delegação impresso" loading="lazy" className="rounded-3xl soft-shadow w-full mb-10" />
          <h2 className="font-display text-3xl md:text-5xl font-black text-[var(--text-dark)]">Chega de Carregar Tudo Sozinha.</h2>
          <p className="mt-4 text-lg text-[var(--text-body)]">Sua casa pode funcionar como um time. E você pode finalmente descansar de verdade.</p>
          <div className="mt-8 bg-white rounded-2xl p-6 soft-shadow inline-block">
            <p className="text-[var(--text-dark)] font-bold text-lg">Kit Completo + 3 Bônus</p>
            <p className="font-display text-3xl font-black text-[var(--accent)] mt-1">R$ 27,00 <span className="text-base font-normal text-[var(--text-body)]">ou 6x de R$ 5,07</span></p>
          </div>
          <div className="mt-8">
            <CTA pulse />
          </div>
          <p className="mt-4 text-sm text-[var(--badge-red)] font-bold inline-flex items-center gap-2 justify-center"><Zap className="w-4 h-4 fill-current" /> Oferta de lançamento — preço pode aumentar a qualquer momento</p>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[var(--text-dark)] text-white/70 text-center text-sm py-8 px-5">
        <p>© 2025 Sistema do Lar Organizado — Todos os direitos reservados</p>
        <p className="mt-2"><a href="#" className="hover:text-white">Política de Privacidade</a> | <a href="#" className="hover:text-white">Termos de Uso</a></p>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--border)] p-3 flex items-center justify-between gap-3 z-50 soft-shadow">
        <div className="text-xs">
          <p className="font-black text-[var(--text-dark)]">R$ 27,00</p>
          <p className="text-[var(--text-light)]">ou 6x R$ 5,07</p>
        </div>
        <a href={CHECKOUT_URL} className="cta-btn flex-1 text-sm" style={{ padding: "14px 16px", fontSize: 14 }}>Garantir meu Kit</a>
      </div>
      <div className="md:hidden h-20" />
    </main>
  );
}
