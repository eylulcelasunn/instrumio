
import { useEffect, useState } from 'react'
import './App.css'

import instrumioLogo from './assets/instrumio-logo.webp'
import acousticGuitar from './assets/acoustic-guitar.webp'
import electricGuitar from './assets/electric-guitar.jpg'
import bassGuitar from './assets/bass-guitar.jpg'
import ukulele from './assets/ukulele.jpg'
import harp from './assets/harp.jpg'
import banjo from './assets/banjo.jpg'
import piano from './assets/piano.webp'
import accordion from './assets/accordion.jpg'
import violin from './assets/violin.webp'
import cello from './assets/cello.webp'
import drums from './assets/drums.webp'
import bongo from './assets/bongo.jpg'
import vibraphone from './assets/vibraphone.jpg'
import saxophone from './assets/saxophone.webp'
import flute from './assets/flute.jpg'
import trumpet from './assets/trumpet.webp'
import clarinet from './assets/clarinet.jpg'
import oboe from './assets/oboe.jpg'



const instruments = [
  {
    id: 1,
      image: acousticGuitar,
    name: 'Akustik Gitar',
    category: 'Telli',
    icon: '🎸',
    description: 'Tellerin titreşimiyle ses üretir; akorlar ve melodiler çalınabilir.',
    suitableFor: 'Şarkı söylemeyi, akor öğrenmeyi ve kendi başına müzik yapmayı sevenler.',
    difficulty: 'Başlangıç için uygun',
  },
  {
    id: 2,
    image: piano,
    name: 'Piyano',
    category: 'Tuşlu',
    icon: '🎹',
    description: 'Tuşları sayesinde melodi ve akorları aynı anda çalmaya imkân verir.',
    suitableFor: 'Düzenli çalışmayı, melodileri keşfetmeyi ve müzik teorisini öğrenmeyi sevenler.',
    difficulty: 'Başlangıç için uygun',
  },
  {
    id: 3,
    image: violin,
    name: 'Keman',
    category: 'Yaylı',
    icon: '🎻',
    description: 'Yayla çalınan, geniş ifade olanağına sahip bir yaylı çalgıdır.',
    suitableFor: 'Sabırlı çalışmayı, ayrıntılara dikkat etmeyi ve melodik müziği sevenler.',
   difficulty: 'Öncesinde zor gelebilir.',
  },
  {
    id: 4,
    image: drums,
    name: 'Davul',
    category: 'Vurmalı',
    icon: '🥁',
    description: 'Ritimleri ve vuruşlarıyla müziğin temposunu oluşturur.',
    suitableFor: 'Ritmi hissetmeyi, hareketli müziği ve enerjik çalışmayı sevenler.',
    difficulty: 'Temel ritimlerle başlanabilir',
  },
  {
    id: 5,
    image: saxophone,
    name: 'Saksafon',
    category: 'Üflemeli',
    icon: '🎷',
    description: 'Özellikle cazda kullanılan, güçlü ve esnek tonlara sahip bir üflemeli çalgıdır.',
    suitableFor: 'Cazı, doğaçlamayı ve kendine özgü sesleri keşfetmeyi sevenler.',
    difficulty: 'Nefes ve ağız tekniği çalışması gerektirir',
  },
  {
    id: 6,
    image: electricGuitar,
    name: 'Elektro Gitar',
    category: 'Telli',
    icon: '🎸',
    description: 'Amplifikatörle farklı tonlar oluşturabilen çok yönlü bir telli çalgıdır.',
    suitableFor: 'Rock, metal, blues veya solo çalmayı sevenler.',
    difficulty: 'Temel akorlarla başlanabilir',
  },
  {
    id: 7,
    image: cello,
    name: 'Çello',
    category: 'Yaylı',
    icon: '🎻',
    description: 'Kalın ve sıcak tonlarıyla hem eşlik hem melodi çalabilir.',
    suitableFor: 'Derin sesleri, klasik müziği ve uzun soluklu çalışmayı sevenler.',
    difficulty: 'Önce zorlanabilir.',
  },
  {
    id: 8,
    image: flute,
    name: 'Flüt',
    category: 'Üflemeli',
    icon: '🪈',
    description: 'Nefesle çalınan, berrak ve hafif tınılara sahip bir çalgıdır.',
    suitableFor: 'Melodik müziği, kontrollü nefes çalışmasını ve zarif tınıları sevenler.',
    difficulty: 'Nefes kontrolü çalışması gerektirir',
  },
  {
    id: 9,
    image: trumpet,
    name: 'Trompet',
    category: 'Üflemeli',
    icon: '🎺',
    description: 'Parlak ve güçlü sesiyle orkestralarda ve caz müziğinde öne çıkar.',
    suitableFor: 'Güçlü melodileri, topluluk içinde çalmayı ve nefesli çalgıları sevenler.',
    difficulty: 'Dudak ve nefes tekniği gerektirir',
  },
  {
    id: 10,
    image: clarinet,
    name: 'Klarnet',
    category: 'Üflemeli',
    icon: '🎶',
    description: 'Zengin ses aralığıyla klasik, caz ve geleneksel müzikte kullanılır.',
    suitableFor: 'Farklı müzik türlerini, melodileri ve ses renklerini keşfetmeyi sevenler.',
    difficulty: 'Nefes ve parmak koordinasyonu gerektirir',
  },
  {
    id: 11,
    image: ukulele,
    name: 'Ukulele',
    category: 'Telli',
    icon: '🪕',
    description: 'Küçük gövdeli, genellikle dört telli ve kolay taşınabilen bir çalgıdır.',
    suitableFor: 'Kısa sürede basit şarkılar çalmak ve hafif, neşeli müzik yapmak isteyenler.',
    difficulty: 'Başlangıç için uygun',
  },
  {
    id: 12,
    image: bassGuitar,
    name: 'Bas Gitar',
    category: 'Telli',
    icon: '🎸',
    description: 'Müziğin armonik temelini ve ritmik akışını destekler.',
    suitableFor: 'Ritim duygusunu geliştirmek ve gruplarda müziğin temelini oluşturmak isteyenler.',
    difficulty: 'Temel ritimlerle başlanabilir',
  },
  {
    id: 13,
    image: accordion,
    name: 'Akordeon',
    category: 'Tuşlu',
    icon: '🪗',
    description: 'Körük, tuşlar ve düğmeler aracılığıyla ses üreten bir çalgıdır.',
    suitableFor: 'Halk müziğini, farklı kültürlerin melodilerini ve eşlik etmeyi sevenler.',
    difficulty: 'İki el ve körük koordinasyonu gerektirir',
  },
  {
    id: 14,
    image: harp,
    name: 'Arp',
    category: 'Telli',
    icon: '🎼',
    description: 'Tellerin parmaklarla çekilmesiyle zarif ve katmanlı sesler oluşturur.',
    suitableFor: 'Yumuşak tınıları, melodileri ve ayrıntılı el çalışmalarını sevenler.',
    difficulty: 'Parmak koordinasyonu çalışması gerektirir',
  },
  {
    id: 15,
    name: 'Bongo',
    image: bongo,
    category: 'Vurmalı',
    icon: '🪘',
    description: 'Elle çalınan iki küçük davulla çeşitli ritimler oluşturur.',
    suitableFor: 'Ritim tutmayı, doğaçlamayı ve hareketli müzikleri sevenler.',
    difficulty: 'Temel ritimlerle başlanabilir',
  },
  {
    id: 16,
    image: oboe,
    name: 'Obua',
    category: 'Üflemeli',
    icon: '🎶',
    description: 'Çift kamışla ses üreten, belirgin ve etkileyici tınılı bir çalgıdır.',
    suitableFor: 'Klasik müziği, ayrıntılı çalışmayı ve farklı ses renklerini sevenler.',
    difficulty: 'Nefes ve kamış kontrolü gerektirir',
  },
  {
    id: 17,
    image: vibraphone,
    name: 'Vibrafon',
    category: 'Vurmalı',
    icon: '🎵',
    description: 'Metal çubuklara tokmaklarla vurularak titreşimli ve parlak sesler çıkarır.',
    suitableFor: 'Melodiyle ritmi birleştirmeyi ve caz tınılarını sevenler.',
    difficulty: 'İki tokmakla başlanabilir; ileri teknikler çalışma gerektirir',
  },
  {
    id: 18,
    image: banjo,
    name: 'Banjo',
    category: 'Telli',
    icon: '🪕',
    description: 'Özgün gövdesiyle parlak ve keskin tınılar üreten telli bir çalgıdır.',
    suitableFor: 'Folk, bluegrass ve hızlı telli melodileri sevenler.',
    difficulty: 'Temel vuruşlarla başlanabilir',
  },
]


const categories = ['Tümü', 'Telli', 'Tuşlu', 'Yaylı', 'Vurmalı', 'Üflemeli']

function App() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tümü')
  const [selectedInstrument, setSelectedInstrument] = useState(null)
  const [apiImages, setApiImages] = useState({})
const [apiLoading, setApiLoading] = useState(true)
const [musicFacts, setMusicFacts] = useState([])
const [factsLoading, setFactsLoading] = useState(true)

useEffect(() => {

const searchTerms = {
  1: 'acoustic guitar studio photography',
  2: 'grand piano elegant interior photography',
  3: 'violin close up warm light photography',
  4: 'drum kit studio photography',
  5: 'gold saxophone black background photography',
  6: 'electric guitar studio photography',
}


  async function fetchInstrumentImages() {
    try {
      const results = await Promise.all(
        Object.entries(searchTerms).map(async ([id, term]) => {
          const params = new URLSearchParams({
            action: 'query',
            generator: 'search',
            gsrsearch: term,
            gsrnamespace: '6',
            gsrlimit: '5',
            prop: 'imageinfo',
            iiprop: 'url',
            iiurlwidth: '500',
            format: 'json',
            origin: '*',
          })

          const response = await fetch(
            `https://commons.wikimedia.org/w/api.php?${params}`
          )

          if (!response.ok) {
            throw new Error('API isteği başarısız oldu.')
          }

          const data = await response.json()
          console.log('API sonucu:', data)
          const pages = Object.values(data.query?.pages ?? {})
          
const image = pages.find((page) => page.thumbnail?.source || page.imageinfo?.[0]?.thumburl)


          
return [id, image?.thumbnail?.source ?? image?.imageinfo?.[0]?.thumburl ?? null]

        })
      )

      setApiImages(Object.fromEntries(results))
    } catch (error) {
      console.error('Enstrüman görselleri alınamadı:', error)
    } finally {
      setApiLoading(false)
    }
  }

  fetchInstrumentImages()
}, [])
useEffect(() => {
  async function fetchMusicFacts() {
    try {
      const response = await fetch(
        'https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=musical%20instruments&gsrnamespace=0&gsrlimit=6&prop=extracts&exintro=1&explaintext=1&exsentences=2&format=json&origin=*'
      )

      if (!response.ok) {
        throw new Error('API isteği başarısız oldu.')
      }

      const data = await response.json()
      const pages = Object.values(data.query?.pages ?? {})

      setMusicFacts(
        pages.map((page) => ({
          title: page.title,
          extract: page.extract,
          url: `https://en.wikipedia.org/?curid=${page.pageid}`,
        }))
      )
    } catch (error) {
      console.error('Müzik bilgileri alınamadı:', error)
    } finally {
      setFactsLoading(false)
    }
  }

  fetchMusicFacts()
}, [])

  const filteredInstruments = instruments.filter((instrument) => {
    const matchesSearch = instrument.name
      .toLocaleLowerCase('tr')
      .includes(search.toLocaleLowerCase('tr'))

    const matchesCategory =
      selectedCategory === 'Tümü' ||
      instrument.category === selectedCategory

    return matchesSearch && matchesCategory
    
  const [apiImages, setApiImages] = useState({})
  const [apiLoading, setApiLoading] = useState(true)

  useEffect(() => {
    const searchTerms = {
      1: 'acoustic guitar musical instrument',
      2: 'piano musical instrument',
      3: 'violin musical instrument',
      4: 'drum musical instrument',
      5: 'saxophone musical instrument',
      6: 'electric guitar musical instrument',
    }

    async function fetchInstrumentImages() {
      try {
        const results = await Promise.all(
          Object.entries(searchTerms).map(async ([id, term]) => {
            const params = new URLSearchParams({
              action: 'query',
              generator: 'search',
              gsrsearch: term,
              gsrnamespace: '6',
              gsrlimit: '5',
              prop: 'imageinfo',
              iiprop: 'url',
              iiurlwidth: '500',
              format: 'json',
              origin: '*',
            })

            const response = await fetch(
              `https://commons.wikimedia.org/w/api.php?${params}`
            )

            if (!response.ok) {
              throw new Error('API isteği başarısız oldu.')
            }

            const data = await response.json()
            const pages = Object.values(data.query?.pages ?? {})
            const image = pages.find((page) => page.thumbnail?.source)

            return [id, image?.thumbnail?.source ?? null]
          })
        )

        setApiImages(Object.fromEntries(results))
      } catch (error) {
        console.error('Enstrüman görselleri alınamadı:', error)
      } finally {
        setApiLoading(false)
      }
    }

    fetchInstrumentImages()
  }, [])

  })

  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#" aria-label="Instrumio ana sayfa">
          <span className="logo-icon">♫</span>
          <span>instru<span className="logo-accent">mio</span></span>
        </a>

        <nav aria-label="Ana menü">
          <a href="#kesfet">Keşfet</a>
          <a href="#enstrumanlar">Enstrümanlar</a>
          <a href="#hakkimizda">Hakkımızda</a>
        </nav>

        <a className="nav-button" href="#enstrumanlar">Keşfetmeye Başla ↗</a>
      </header>

      <main>
        <section className="hero" id="kesfet">
          <div className="hero-content">
            <span className="eyebrow">♪ SESİNİ KEŞFET</span>
            <h1>
  Welcome to
  <br />
  <span>Instrumio.</span>
</h1>
            <p>
              Müziğin büyülü dünyasına adım at. Sana ilham verecek
              enstrümanları keşfet ve kendi hikâyeni yazmaya başla.
            </p>
            <a className="primary-button" href="#enstrumanlar">
              Enstrümanları keşfet <span>↗</span>
            </a>

            <div className="hero-note">
              <span>♫</span>
              Her nota yeni bir başlangıçtır.
            </div>
          </div>

          <div className="hero-art">
  <img
    src={instrumioLogo}
    alt="Instrumio müzik mağazası logosu"
    className="hero-logo"
    fetchPriority="high"
  />
</div>
        </section>

        <section className="discovery" id="enstrumanlar">
          <div className="section-heading">
            <div>
              <span className="eyebrow">MÜZİK DÜNYASI</span>
              <h2>Enstrümanları keşfet<span>.</span></h2>
              <p>Sana en uygun sesi bulmak için keşfe çık.</p>
            </div>
            <div className="instrument-count">
              <strong>{filteredInstruments.length.toString().padStart(2, '0')}</strong>
              <span>enstrüman</span>
            </div>
          </div>

          <div className="search-box">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Bir enstrüman ara..."
              aria-label="Enstrüman ara"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="category-list" aria-label="Kategori filtreleri">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="instrument-grid">
            {filteredInstruments.map((instrument) => (
              <article className="instrument-card" key={instrument.id}>
                <div className={`instrument-art art-${instrument.id}`}>
                  

{instrument.image ? (
  <img
    className="instrument-photo"
    src={instrument.image}
    alt={instrument.name}
    loading="lazy"
    width="500"
    height="300"
  />
) : (
  <span className="instrument-emoji" aria-hidden="true">
    {instrument.icon}
  </span>
)}


                  <span className="card-category">{instrument.category}</span>
                </div>
                <div className="card-content">
                  
<h3>{instrument.name}</h3>


                  
<button
  className="card-link detail-button"
  onClick={() => setSelectedInstrument(instrument)}
>
  Detayları Gör <span>↗</span>
</button>

                </div>
              </article>
            ))}
          </div>

          {filteredInstruments.length === 0 && (
            <p className="empty-state">
              Aramana uygun enstrüman bulamadık. Başka bir kelime dene.
            </p>
          )}
        </section>
        <section className="api-discovery">
  <div className="section-heading">
    <span className="eyebrow">MÜZİK REHBERİ</span>
    <h2>Müzik dünyasını keşfet</h2>
    <p>Wikipedia'dan alınan enstrüman bilgileri</p>
  </div>

  {factsLoading ? (
    <p>Bilgiler yükleniyor...</p>
  ) : (
    <div className="instrument-grid">
      {musicFacts.map((fact) => (
        <article className="instrument-card" key={fact.url}>
          <div className="card-content">
            <h3>{fact.title}</h3>
            <p>{fact.extract || 'Bu konu hakkında daha fazla bilgi edinebilirsin.'}</p>
            <a href={fact.url} target="_blank" rel="noreferrer">
              Kaynağı incele →
            </a>
          </div>
        </article>
      ))}
    </div>
  )}
</section>

        <section className="about-section" id="hakkimizda">
          <span className="about-note">♫</span>
          <div>
            <span className="eyebrow">BİZİM HİKÂYEMİZ</span>
            <h2>Müzik herkes için.</h2>
            <p>
              Enstrümanları tanımayı kolaylaştırmak ve herkesin kendi müzik
              yolculuğuna ilham vermek için buradayız.
            </p>
          </div>
        </section>
        
{selectedInstrument && (
  <div
    className="modal-overlay"
    onClick={() => setSelectedInstrument(null)}
  >
    <section
      className="instrument-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        className="modal-close"
        onClick={() => setSelectedInstrument(null)}
        aria-label="Pencereyi kapat"
      >
        ×
      </button>

      <span className="eyebrow">ENSTRÜMAN REHBERİ</span>
    
      <h2 id="modal-title">{selectedInstrument.name}</h2>
      <p>{selectedInstrument.description}</p>

      <h3>Kimlere uygun?</h3>
      <p>{selectedInstrument.suitableFor}</p>

      <h3>Öğrenme seviyesi</h3>
      <p>{selectedInstrument.difficulty}</p>
    </section>
  </div>
)}

      </main>

      <footer className="footer">
        <a className="logo" href="#kesfet">
          <span className="logo-icon">♫</span>
          <span>instrument<span className="logo-accent">world</span></span>
        </a>
        <p>Her nota yeni bir başlangıçtır. ♫</p>
        <span>© 2026 Instrument World</span>
      </footer>
    </div>
  )
}

export default App
