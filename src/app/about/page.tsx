import { Container } from '@/components/Container';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

export default function AboutPage() {
    return (
        <Container>
            <div className="py-6 sm:py-12">
                <div className="mb-8">
                    <div className="prose prose-slate dark:prose-invert mb-8">
                        <p className="text-xl font-bold">
                            Elektrikli Sürüş'e hoş geldiniz!
                        </p>
                        <p className="text-base text-gray-600 dark:text-gray-400">
                            Burası, elektrikli araçlara (EV'ler) tutkuyla bağlı bir topluluk ve bilgi merkezidir. Amacımız, elektrikli mobiliteye geçişi kolaylaştırmak, en son haberleri, incelemeleri ve ipuçlarını sizlerle paylaşmaktır.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 font-bold">
                            Neler Bulabilirsiniz?
                        </p>
                        <ul>
                            <li className="text-base text-gray-600 dark:text-gray-400">
                                <u>Güncel Haberler:</u> Elektrikli araç dünyasındaki en son gelişmeleri, yeni modelleri, teknolojik yenilikleri ve sektördeki değişimleri yakından takip ediyoruz.
                            </li>
                            <li className="text-base text-gray-600 dark:text-gray-400">
                                <u>Detaylı İncelemeler:</u> Farklı marka ve modellerdeki elektrikli araçları tüm yönleriyle inceliyor, performanslarını, menzillerini, şarj sürelerini ve fiyatlarını karşılaştırıyoruz.
                            </li>
                            <li className="text-base text-gray-600 dark:text-gray-400">
                                <u>Kullanıcı Rehberleri:</u> Elektrikli araç sahibi olmanın inceliklerini, şarj istasyonlarını, batarya teknolojilerini, devlet teşviklerini ve daha fazlasını anlatan kapsamlı rehberler sunuyoruz.
                            </li>
                            <li className="text-base text-gray-600 dark:text-gray-400">
                                <u>Sürdürülebilirlik:</u> Elektrikli araçların çevreye olan faydalarını, sürdürülebilir bir geleceğe nasıl katkı sağladıklarını ve yeşil teknolojileri ele alıyoruz.
                            </li>
                            <li className="text-base text-gray-600 dark:text-gray-400">
                                <u>Topluluk:</u> Elektrikli araç meraklılarıyla bir araya gelebileceğiniz, deneyimlerinizi paylaşabileceğiniz ve sorularınıza cevap bulabileceğiniz bir platform oluşturuyoruz.
                            </li>
                        </ul>
                        <p className="text-lg text-gray-600 dark:text-gray-400 font-bold">
                            Misyonumuz:
                        </p>
                        <p className="text-base text-gray-600 dark:text-gray-400">

                            Elektrikli araçların yaygınlaşmasına katkıda bulunmak, çevre dostu bir geleceğe geçişi hızlandırmak ve elektrikli mobilite konusunda farkındalık yaratmaktır.

                            Siz de bu heyecan verici yolculuğa katılın, elektrikli araçların dünyasını keşfedin ve sürdürülebilir bir geleceğe birlikte adım atalım!
                        </p>
                    </div>

                    {/* Sıkça Sorulan Sorular */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                            Sıkça Sorulan Sorular
                        </h2>
                        <details className="p-4 bg-gray-700 dark:bg-gray-800">
                            <summary className="text-sm leading-6 font-semibold text-gray-300 select-none">
                                Elektrikli araç şarj maliyeti ne kadardır?
                            </summary>
                            <div className="mt-3 text-sm leading-6 text-gray-400">
                                <p>Elektrikli araçların şarj maliyeti, batarya hacmi ve şarj hızına bağlıdır. Ortalama bir elektrikli aracın şarj maliyeti, batarya hacmi ve şarj hızına bağlı olarak yaklaşık olarak 0,15-0,30 TL/km arasında değişir.</p>
                            </div>
                        </details>
                        <details className="p-4 bg-gray-700 dark:bg-gray-800">
                            <summary className="text-sm leading-6 font-semibold text-gray-300 select-none">
                                Elektrikli araçların bakım maliyeti ne kadardır?
                            </summary>
                            <div className="mt-3 text-sm leading-6 text-gray-400">
                                <p>Elektrikli araçların bakım maliyeti, yakıt tüketimi ve bakım süreleriyle ilgilidir. Fakat genel olarak değiştirilmesi ya da bakımının yapılması gereken bileşenler hava filtresi, frenler, lastikler, aküler ve elektrikli sistemlerdir. Bu bileşenlerin bakımı ve onarımı, elektrikli araçların bakım maliyetini belirleyen önemli faktörlerdir.</p>
                            </div>
                        </details>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                            Bizimle iletişime geçin
                        </h2>
                        <div className="flex flex-col gap-4">
                            <a
                                href="https://github.com/melisacevik"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                                <FaTwitter className="h-5 w-5" />
                                <span>X(Twitter)</span>
                            </a>
                            <a
                                href="https://linkedin.com/in/melisacevik"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                                <FaLinkedin className="h-5 w-5" />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://medium.com/@melisacevik13"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                                <FaInstagram className="h-5 w-5" />
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>

                    {/* <div className="mb-8">
                        <Slider
                            items={certificates}
                            title="Certificates"
                            aspectRatio="16/9"
                            showDots={true}
                            showArrows={true}
                            showTitle={true}
                        />
                    </div> */}
                </div>
            </div>
        </Container>
    );
} 