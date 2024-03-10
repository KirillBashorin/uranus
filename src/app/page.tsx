import Updates from '@/components/blocks/Updates';
import Narrative from '@/components/blocks/Narrative';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <header>HEADER</header>
      <main>
        <Narrative />
        <Updates />
      </main>
      <Footer />
    </>
  );
}
