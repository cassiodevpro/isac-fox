
'use client';
import Image from 'next/image';
import styles from './galeria.module.css';

const images = [
  'WhatsApp Image 2026-03-10 at 18.00.02.jpeg',
  'WhatsApp Image 2026-03-10 at 18.00.44.jpeg',
  'WhatsApp Image 2026-03-10 at 18.00.49.jpeg',
  'WhatsApp Image 2026-03-10 at 18.00.50.jpeg',
  'WhatsApp Image 2026-03-10 at 18.01.55.jpeg',
  'WhatsApp Image 2026-03-10 at 18.02.26.jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.41.jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.44 (1).jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.44.jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.46.jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.48.jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.49 (1).jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.49 (2).jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.49 (3).jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.49.jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.50 (1).jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.50.jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.51 (1).jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.51 (2).jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.51 (3).jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.51.jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.52 (1).jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.52 (2).jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.52 (3).jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.52.jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.53 (1).jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.53 (2).jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.53 (3).jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.53.jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.54 (1).jpeg',
  'WhatsApp Image 2026-03-10 at 18.07.54.jpeg',
];

const dados = [
  'Fox Engenharia e construção',
  'Projetos',
  'ART',
  'Acompanhamento',
  'Vistoria Técnica',
  'Laudos',
  'Pre moldados',
  'Estrutura metálica',
  'Concreto Armado',
  'Alvenaria',
  'Projetos',
  'Arquitetura',
  'Fundação',
  'Estrutural',
  'Instalações',
  'Individualização de hidrômetro CAESB',
  'Individualização de Medidores Neo Energia',
];

export default function Galeria() {
  return (
    <div className={styles.container}>
      <button
        onClick={() => window.history.length > 1 ? window.history.back() : window.location.assign('/')}
        className={styles.backButton}
        type="button"
        aria-label="Voltar"
      >
        ← Voltar
      </button>
      <h1 className={styles.title}>Fox Engenharia e Construção</h1>
      <div className={styles.carousel}>
        <div className={styles.carouselInner}>
          {images.map((img, idx) => (
            <div className={styles.carouselItem} key={img}>
              <Image
                src={`/galeria/${img}`}
                alt={`Fox Engenharia ${idx+1}`}
                width={600}
                height={400}
                className={styles.image}
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.dados}>
        <ul>
          {dados.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
