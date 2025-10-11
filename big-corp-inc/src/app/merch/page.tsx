/**
 * Merch Page
 *
 * Corporate merchandise and swag
 */

import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    title: 'Big Corp Inc. Classic',
    url: 'https://shirt-slop.myshopify.com/products/big-corp-inc?_pos=4&_sid=22930b136&_ss=r',
    image: 'https://shirt-slop.myshopify.com/cdn/shop/files/11131121594443017741_2048.jpg?v=1754187257',
    description: 'The genesis of meaningless corporate branding. A timeless piece that says "I work somewhere" with unparalleled mediocrity. Ideal for quarterly earnings calls and performative team-building exercises.',
    tagline: 'Where legacy meets liability™',
  },
  {
    title: 'Big Corp Inc. 1',
    url: 'https://shirt-slop.myshopify.com/products/bigcorpinc-1?variant=42357554970698',
    image: 'https://shirt-slop.myshopify.com/cdn/shop/files/17635737147735785828_2048.jpg?v=1754196613',
    description: 'Official Big Corp Inc. branded merchandise. Demonstrate your unwavering commitment to Moving Forward, Together, Towards More Forward™.',
    tagline: 'A testament to leveraging synergy in your daily wardrobe.',
  },
  {
    title: 'Big Corp 2',
    url: 'https://shirt-slop.myshopify.com/products/big-corp-2?variant=42362157924426',
    image: 'https://shirt-slop.myshopify.com/cdn/shop/files/15024027247829244756_2048.jpg?v=1754346002',
    description: 'We pivoted. Again. The sequel that proves we learned nothing from the original but are committed to failing upward with renewed enthusiasm and additional funding rounds.',
    tagline: 'Double down on disappointment.',
  },
  {
    title: 'Environmentalism Edition',
    url: 'https://shirt-slop.myshopify.com/products/bigcorpinc-environmentalism?variant=42362220806218',
    image: 'https://shirt-slop.myshopify.com/cdn/shop/files/7032604281074346583_2048.jpg?v=1754349421',
    description: 'Our ESG initiative, manifested as textile goods. Demonstrates your deep commitment to sustainability metrics while ignoring actual environmental impact. Perfect for greenwashing presentations.',
    tagline: 'Carbon-neutral branding, maximum emissions.',
  },
  {
    title: 'Forced Resettlement',
    url: 'https://shirt-slop.myshopify.com/products/bigcorpinc-forced-resettlement-1?variant=42362211434570',
    image: 'https://shirt-slop.myshopify.com/cdn/shop/files/13776273904141592371_2048_ad3022ab-154f-4137-b88e-4dc54243a7b9.jpg?v=1754349025',
    description: 'Commemorating our strategic community optimization initiatives. When "relocation assistance" really means "please leave quietly." A conversation starter at urban planning conferences and hostile takeovers.',
    tagline: 'Displacement is just aggressive real estate strategy.',
  },
  {
    title: 'Land Negotiations',
    url: 'https://shirt-slop.myshopify.com/products/bigcorpinc-land-negotiations?variant=42361753534538',
    image: 'https://shirt-slop.myshopify.com/cdn/shop/files/2607080638395653953_2048.jpg?v=1754333617',
    description: 'When "negotiations" involves lawyers, lobbyists, and leverage ratios. Perfect attire for transforming indigenous territories into stakeholder value through the magic of legal loopholes.',
    tagline: 'Manifest destiny, corporate edition.',
  },
  {
    title: 'Chief Regarded Officer',
    url: 'https://shirt-slop.myshopify.com/products/chief-regarded-officer?variant=42619489550410',
    image: 'https://shirt-slop.myshopify.com/cdn/shop/files/8609451216515052618_2048.jpg?v=1760212363',
    description: 'For executives who are definitely regarded as something by someone. Celebrates middle management\'s ability to monetize ambiguity and delegate accountability downward.',
    tagline: 'Highly regarded, minimally responsible.',
  },
  {
    title: 'Human Capital Development',
    url: 'https://shirt-slop.myshopify.com/products/bigcorpinc-human-capital',
    image: 'https://shirt-slop.myshopify.com/cdn/shop/files/6661416232437834519_2048.jpg?v=1760225755',
    description: 'Executive leadership presents key growth metrics to our newest stakeholders. Starting workforce development early ensures maximum long-term ROI. Never too young to understand the importance of quarterly projections.',
    tagline: 'Cultivating corporate culture from cradle to cubicle.',
  },
  {
    title: 'Policy Alignment Program',
    url: 'https://shirt-slop.myshopify.com/products/policy-alignment-program',
    image: 'https://shirt-slop.myshopify.com/cdn/shop/files/16296429325244774247_2048.jpg?v=1760226460',
    description: 'Strategic partnerships between industry and government to accelerate outcomes and eliminate unnecessary oversight. Where executives and legislators align through the universal language of contribution.',
    tagline: 'Democracy works best when properly incentivized.',
  },
];

export default function MerchPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] p-2 sm:p-4 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="mb-4 sm:mb-8 p-4 sm:p-6 bg-gray-100 rounded-xl border border-gray-300 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 font-[family-name:var(--font-geist-sans)]">
          Corporate Branded Solutions
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Synergize your wardrobe with our exclusive corporate swag
        </p>
      </div>

      {/* Products Grid */}
      <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200"
              >
                <div className="aspect-square relative bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-900 mb-2 font-[family-name:var(--font-geist-sans)]">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    {product.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center space-y-3">
            <p className="text-gray-600 text-sm">
              More corporate merchandise coming soon. Stay aligned with our corporate mission.
            </p>
            <p className="text-gray-700 text-sm">
              <a
                href="https://www.shirtslop.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-black transition-colors underline"
              >
                Create your own on ShirtSlop
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
