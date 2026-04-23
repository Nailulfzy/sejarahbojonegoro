
export type Language = 'id' | 'en';

export const translations = {
  id: {
    nav: {
      beranda: 'Beranda',
      katalog: 'Katalog',
      basisData: 'Basis Data',
      wbtb: 'Warisan Budaya Takbenda',
      cagarBudaya: 'Cagar Budaya',
      tentang: 'Tentang',
    },
    footer: {
      title: 'Katalog Digital Kesejarahan',
      regency: 'Kabupaten Bojonegoro',
      motto: '"Menjaga memori kolektif untuk generasi mendatang dengan integritas digital. Warisan masa lalu adalah kompas masa depan."',
      navTitle: 'Navigasi',
      contactTitle: 'Kontak Resmi',
      office: 'Dinas Kebudayaan dan Pariwisata Kabupaten Bojonegoro',
      division: 'Bidang Kebudayaan',
      subdivision: 'Subbidang Sejarah, Cagar Budaya, dan Museum',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat & Ketentuan',
      sitemap: 'Peta Situs',
    },
    home: {
      hero: {
        portal: 'Portal Kesejarahan Bojonegoro',
        title: 'Katalog Digital & Basis Data Kesejarahan',
        desc: 'Media inventarisasi, dokumentasi, dan penyajian data kesejarahan pada Dinas Kebudayaan dan Pariwisata Kabupaten Bojonegoro. Menjaga warisan masa lalu untuk masa depan.',
        viewCatalog: 'Lihat Katalog',
        accessDatabase: 'Akses Basis Data',
      },
      intro: {
        tag: 'Pengantar',
        title1: 'Menelusuri Jejak',
        title2: 'Peradaban',
        p1: 'Platform ini hadir sebagai sarana dokumentasi, pelestarian, dan akses informasi sejarah Kabupaten Bojonegoro yang komprehensif. Kami percaya bahwa sejarah bukan sekadar masa lalu, melainkan fondasi untuk membangun masa depan yang lebih baik.',
        p2: 'Melalui platform digital ini, Dinas Kebudayaan dan Pariwisata Kabupaten Bojonegoro berkomitmen untuk menyajikan data yang akurat dan terverifikasi mengenai kekayaan sejarah daerah.',
      },
      timeline: {
        tag: 'Kronik',
        title: 'Garis Waktu Sejarah',
        subtitle: 'Perjalanan panjang Kabupaten Bojonegoro dari masa ke masa.',
        close: 'Tutup Detail',
      },
      wbtb: {
        tag: 'Warisan Budaya Takbenda',
        title1: 'Melestarikan Kekayaan',
        title2: 'Budaya Takbenda',
        desc: '8 Warisan Budaya Takbenda Indonesia telah ditetapkan dari Kabupaten Bojonegoro sebagai identitas dan kekayaan budaya bangsa yang diwariskan antargenerasi.',
        viewDetail: 'Lihat Detail WBTb',
        label: 'WBTb Indonesia',
      },
      stats: {
        history: 'Data Sejarah',
        sites: 'Situs & Bangunan',
        archives: 'Arsip Digital',
        figures: 'Tokoh & Tradisi',
      },
      advantages: {
        tag: 'Keunggulan',
        title: 'Standar Pelestarian Digital',
        items: [
          { title: 'Data Terverifikasi', desc: 'Setiap informasi telah melalui proses verifikasi oleh tim ahli sejarah.' },
          { title: 'Akses Mudah', desc: 'Informasi kesejarahan dapat diakses kapan saja dan di mana saja secara terbuka.' },
          { title: 'Inventarisasi Digital', icon: 'Archive', desc: 'Pendataan aset sejarah dilakukan secara sistematis dalam basis data digital.' },
          { title: 'Mendukung Pelestarian', desc: 'Menjadi referensi utama dalam upaya pelestarian warisan budaya daerah.' },
        ],
      },
      mission: {
        tag: 'Misi Pelestarian',
        title1: 'Menjaga Warisan',
        title2: 'Masa Lalu',
        desc: 'Kami berkomitmen untuk terus melakukan riset, dokumentasi, dan edukasi guna memastikan setiap kepingan sejarah Bojonegoro tetap hidup dan relevan bagi generasi mendatang.',
      },
      cagarBudaya: {
        tag: 'CAGAR BUDAYA KABUPATEN BOJONEGORO',
        title: 'Cagar Budaya',
        desc: 'Kabupaten Bojonegoro telah memiliki 2 Cagar Budaya peringkat kabupaten yang ditetapkan sebagai warisan budaya kebendaan bernilai penting bagi sejarah, ilmu pengetahuan, dan identitas daerah.',
        statEstablished: '02',
        statEstablishedLabel: 'Objek Ditetapkan',
        statYear: '2023',
        statYearLabel: 'Penetapan Awal',
        viewBtn: 'Lihat Cagar Budaya',
        learnMoreBtn: 'Pelajari Definisi →',
        badge: '2 TELAH DITETAPKAN'
      },
    },
    catalog: {
      tag: 'Arsip & Dokumentasi',
      title: 'Katalog Kesejarahan',
      searchPlaceholder: 'Cari dokumen, situs, atau peristiwa...',
      category: 'Kategori',
      year: 'Tahun',
      all: 'Semua',
      readMore: 'Baca Selengkapnya',
      emptyTitle: 'Katalog Sedang Diperbarui',
      emptyDesc: 'Data sedang dalam proses verifikasi dan pemutakhiran oleh tim kurator.',
      noResults: 'Tidak ada hasil',
      tryOtherKeywords: 'Coba kata kunci lain atau reset filter.'
    },
    articleDetail: {
      back: 'Kembali ke Katalog',
      references: 'Referensi',
      backToCatalog: 'Kembali ke Katalog'
    },
    database: {
      tag: 'Basis Data Terpadu',
      title: 'Pusat Data Kesejarahan',
      tabSejarah: 'Dokumen Sejarah',
      tabContract: 'Contractarbeiders',
      contractSource: `Pada bagian ini disajikan data Contractarbeiders (Pekerja Kontrak) di Suriname yang berasal dari Bojonegoro.
Seluruh data bersumber dari Nationaal Archief (Arsip Nasional Belanda).`,
      searchPlaceholder: 'Cari data...',
      allGenders: 'Semua Gender',
      male: 'Laki-laki',
      female: 'Perempuan',
      export: 'Export Data',
      table: {
        id: 'ID',
        title: 'Judul Dokumen',
        type: 'Jenis',
        year: 'Tahun',
        creator: 'Pencipta/Kontributor',
        source: 'Sumber',
        regNo: 'No. Reg',
        name: 'Nama',
        gender: 'Gender',
        age: 'Umur',
        district: 'Distrik/Desa',
      },
      pagination: {
        show: 'Tampilkan',
        from: 'Data dari',
      },
      newest: 'Terbaru',
      oldest: 'Terlama',
    },
    workerDetail: {
      title: 'Dokumen Pusat Arsip Nasional Belanda',
      profile: 'Profil Pribadi',
      journey: 'Data Perjalanan',
      contract: 'Informasi Kontrak',
      origin: 'Asal Daerah',
      notes: 'Catatan & Identitas',
      fields: {
        name: 'Nama Lengkap',
        father: 'Nama Ayah',
        gender: 'Jenis Kelamin',
        age: 'Umur saat Berangkat',
        height: 'Tinggi Badan',
        religion: 'Agama',
        departurePlace: 'Tempat Keberangkatan',
        departureDate: 'Tanggal Keberangkatan',
        shipName: 'Nama Kapal',
        arrivalPlace: 'Tempat Kedatangan',
        contractCode: 'Kode Kontrak',
        contractStart: 'Mulai Kontrak',
        contractEnd: 'Akhir Kontrak',
        authority: 'Otoritas',
        plantation: 'Perkebunan',
        gewest: 'Gewest',
        afdeling: 'Afdeling',
        district: 'Distrik',
        village: 'Desa',
        identityMark: 'Tanda Pengenal',
        nameNote: 'Catatan Informasi Nama',
      }
    },
    wbtbPage: {
      hero: {
        tag: 'Warisan Budaya Nasional',
        title1: 'Warisan Budaya',
        title2: 'Takbenda',
        desc: 'Warisan budaya yang diwariskan antargenerasi serta menjadi identitas dan kekayaan budaya bangsa.',
      },
      about: {
        tag: 'Definisi',
        title: 'Tentang WBTb',
        quote: '"Warisan Budaya Takbenda adalah praktik, representasi, ekspresi, pengetahuan, keterampilan, serta instrumen, objek, artefak, dan ruang budaya yang diakui oleh komunitas, kelompok, atau masyarakat sebagai bagian dari warisan budaya mereka."',
      },
      quality: {
        tag: 'Kualitas',
        title: 'Karakteristik WBTb',
        items: [
          { title: 'Hidup dan Berkembang', desc: 'WBTb terus dipraktikkan, diwariskan, dan dikembangkan oleh masyarakat sesuai dinamika zaman tanpa kehilangan nilai utamanya.' },
          { title: 'Turun-temurun', desc: 'WBTb diwariskan dari generasi ke generasi melalui proses pembelajaran, pembiasaan, dan keterlibatan dalam kehidupan masyarakat.' },
          { title: 'Identitas Budaya', desc: 'WBTb menjadi penanda jati diri, memperkuat rasa memiliki, serta mencerminkan kekhasan suatu daerah atau komunitas.' },
          { title: 'Representatif & Sosial', desc: 'WBTb mengandung nilai kebersamaan, gotong royong, kearifan lokal, serta mempererat hubungan sosial dalam masyarakat.' },
        ],
      },
      domain: {
        tag: 'Klasifikasi',
        title: 'Domain WBTb',
        items: [
          { title: 'Tradisi & Ekspresi Lisan', desc: 'Bahasa, cerita rakyat, peribahasa, mantra, pantun, dan bentuk tuturan tradisional lainnya.' },
          { title: 'Seni Pertunjukan', desc: 'Tari, musik tradisional, teater rakyat, wayang, dan bentuk pertunjukan budaya lainnya.' },
          { title: 'Adat Istiadat & Ritus', desc: 'Upacara adat, tradisi daur hidup, ritual keagamaan, dan perayaan tradisional.' },
          { title: 'Pengetahuan Alam', desc: 'Pengetahuan lokal mengenai musim, pertanian, pengobatan tradisional, lingkungan, dan tata kehidupan.' },
          { title: 'Kemahiran Tradisional', desc: 'Keterampilan membuat benda kerajinan, kuliner tradisional, busana adat, serta teknologi tradisional.' },
        ],
      },
      inventory: {
        tag: 'Inventarisasi Daerah',
        title: 'WBTb Kabupaten Bojonegoro',
        subtitle: '8 unsur budaya telah ditetapkan sebagai Warisan Budaya Takbenda Indonesia.',
        totalLabel: 'Total Unsur Terdaftar',
        detailBtn: 'Detail Unsur',
      },
      modal: {
        year: 'Tahun',
        descTitle: 'Deskripsi Unsur',
        skTitle: 'Nomor SK Menteri',
        viewBtn: 'Lihat Dokumen SK',
      },
      legal: {
        title: 'Dasar Hukum',
        desc: 'Penetapan Warisan Budaya Takbenda dilakukan melalui Surat Keputusan Menteri Kebudayaan Republik Indonesia.',
      },
    },
    cagarBudayaPage: {
      hero: {
        tag: 'Cagar Budaya Bojonegoro',
        title: 'Cagar Budaya Bojonegoro',
        desc: 'Jejak sejarah berupa benda, bangunan, struktur, situs, dan kawasan bernilai penting bagi identitas daerah.',
        cta: 'Jelajahi Data'
      },
      definition: {
        title: 'Apa itu Cagar Budaya?',
        content: 'Menurut Undang-Undang No. 11 Tahun 2010 tentang Cagar Budaya, yang dimaksud dengan Cagar Budaya adalah warisan budaya bersifat kebendaan berupa Benda Cagar Budaya, Bangunan Cagar Budaya, Struktur Cagar Budaya, Situs Cagar Budaya, dan Kawasan Cagar Budaya di darat dan/atau di air yang perlu dilestarikan keberadaannya karena memiliki nilai penting bagi sejarah, ilmu pengetahuan, pendidikan, agama, dan/atau kebudayaan melalui proses penetapan.'
      },
      types: {
        title: 'Jenis Cagar Budaya',
        subtitle: 'Lima kategori utama dalam Undang-Undang Cagar Budaya.',
        items: [
          {
            title: 'Benda Cagar Budaya',
            content: 'Benda Cagar Budaya adalah benda alam dan/atau benda buatan manusia, baik bergerak maupun tidak bergerak, berupa kesatuan atau kelompok, atau bagian-bagiannya, atau sisa-sisanya yang memiliki hubungan erat dengan kebudayaan dan sejarah perkembangan manusia.'
          },
          {
            title: 'Bangunan Cagar Budaya',
            content: 'Bangunan Cagar Budaya adalah susunan binaan yang terbuat dari benda alam atau benda buatan manusia untuk memenuhi kebutuhan ruang berdinding dan/atau tidak berdinding, dan beratap.'
          },
          {
            title: 'Struktur Cagar Budaya',
            content: 'Struktur Cagar Budaya adalah susunan binaan yang terbuat dari benda alam dan/atau benda buatan manusia untuk memenuhi kebutuhan ruang kegiatan yang menyatu dengan alam, sarana, dan prasarana untuk menampung kebutuhan manusia.'
          },
          {
            title: 'Situs Cagar Budaya',
            content: 'Situs Cagar Budaya adalah lokasi yang berada di darat dan/atau di air yang mengandung Benda Cagar Budaya, Bangunan Cagar Budaya, dan/atau Struktur Cagar Budaya sebagai hasil kegiatan manusia atau bukti kejadian pada masa lalu.'
          },
          {
            title: 'Kawasan Cagar Budaya',
            content: 'Kawasan Cagar Budaya adalah satuan ruang geografis yang memiliki dua Situs Cagar Budaya atau lebih yang letaknya berdekatan dan/atau memperlihatkan ciri tata ruang yang khas.'
          }
        ]
      },
      officialData: {
        title: 'Cagar Budaya Kabupaten Bojonegoro',
        subtitle: 'Objek yang telah ditetapkan sebagai Cagar Budaya.',
        labels: {
          status: 'Status',
          year: 'Tahun Penetapan',
          type: 'Jenis',
          location: 'Lokasi',
          coordinates: 'Koordinat',
          sk: 'SK Penetapan',
          detail: 'DETAIL',
          map: 'PETA',
          viewSk: 'Lihat SK',
          size: 'Ukuran Objek',
          ownership: 'Status Kepemilikan',
          manager: 'Pengelola'
        }
      },
      odcb: {
        title: 'Objek Diduga Cagar Budaya',
        subtitle: 'Daftar objek yang sedang dalam proses kajian, identifikasi, atau rekomendasi.',
        searchPlaceholder: 'Cari ODCB...',
        filterDistrict: 'Filter Kecamatan',
        filterType: 'Filter Jenis',
        all: 'Semua',
        table: {
          name: 'Nama',
          location: 'Lokasi',
          status: 'Status'
        }
      },
      importance: {
        title: 'Mengapa Penting Dilestarikan?',
        items: [
          'Identitas Daerah',
          'Sumber Pendidikan Sejarah',
          'Potensi Pariwisata',
          'Warisan Generasi Mendatang'
        ]
      },
      footer: {
        quote: 'Merawat jejak masa lalu untuk memperkuat masa depan.'
      }
    },
    aboutPage: {
      tag: 'Profil Portal',
      title: 'Tentang Kami',
      subtitle1: 'Menjaga Memori Kolektif',
      subtitle2: 'Kabupaten Bojonegoro',
      p1: 'Website Katalog Digital dan Basis Data Kesejarahan merupakan inisiatif strategis dari Dinas Kebudayaan dan Pariwisata Kabupaten Bojonegoro untuk melakukan modernisasi dalam pengelolaan data sejarah daerah.',
      p2: 'Platform ini dikembangkan sebagai media pendataan dan publikasi informasi kesejarahan daerah yang kredibel, mudah diakses, dan berkelanjutan. Kami mengintegrasikan teknologi informasi dengan metodologi penelitian sejarah untuk memastikan setiap data yang disajikan memiliki nilai edukasi dan dokumentasi yang tinggi.',
      goals: [
        { title: 'Dokumentasi Sejarah', desc: 'Mendokumentasikan seluruh aset sejarah daerah secara digital dan sistematis untuk mencegah hilangnya memori kolektif.' },
        { title: 'Akses Informasi', desc: 'Menyediakan akses informasi publik yang transparan dan mudah dijangkau mengenai sejarah Bojonegoro.' },
        { title: 'Pelestarian Warisan', desc: 'Mendukung upaya pelestarian warisan budaya melalui penyediaan basis data yang kuat bagi para pemangku kepentingan.' },
        { title: 'Referensi Pendidikan', desc: 'Menjadi sumber referensi utama bagi penelitian, pendidikan, dan pengembangan ilmu pengetahuan lokal.' },
      ],
      legalTitle: 'Landasan Operasional',
      legalItems: [
        'Undang-Undang Nomor 11 Tahun 2010 tentang Cagar Budaya.',
        'Undang-Undang Nomor 5 Tahun 2017 tentang Pemajuan Kebudayaan.',
      ],
      contact: {
        tag: 'Kontak Resmi',
        addressLabel: 'Alamat Kantor',
        address: 'Jl. Teuku Umar No. 80, Bojonegoro, Jawa Timur, 62111',
        emailLabel: 'disbudpar@bojonegorokab.go.id',
        phoneLabel: 'Telepon',
      },
      help: {
        title: 'Butuh Bantuan?',
        desc: 'Jika Anda memiliki pertanyaan mengenai data sejarah atau ingin berkontribusi dalam pendataan, silakan hubungi tim kami.',
        btn: 'Hubungi Kami',
      },
    },
    timelineData: [
      { period: "Abad XIII", title: "Era Kerajaan Majapahit", desc: "Wilayah Nusantara dikuasai oleh Kerajaan Majapahit. Pada masa itu belum dikenal nama Bojonegoro, tetapi wilayah tersebut sudah termasuk dalam kekuasaan Majapahit." },
      { period: "Abad XVI", title: "Kedaulatan Kerajaan Demak", desc: "Kekuasaan Nusantara berada di bawah Kerajaan Demak. Raden Patah, Senopati Jumbun, Adipati Bintoro, diangkat sebagai raja I pada awal abad XVI. Sejak saat itu, Jipang (mencakup Bojonegoro saat itu) menjadi wilayah kedaulatan Demak." },
      { period: "1547–1554", title: "Pusat Pemerintahan di Jipang", desc: "Pusat pemerintahan Demak dipindahkan ke wilayah Jipang yang mencakup wilayah Bojonegoro." },
      { period: "1568", title: "Peralihan ke Kerajaan Pajang", desc: "Terjadi peralihan kekuasaan dan pergolakan yang akhirnya membawa Jipang (termasuk Bojonegoro) masuk ke dalam wilayah kekuasaan Kerajaan Pajang yang dipimpin oleh Raden Jaka Tingkir." },
      { period: "1587", title: "Bagian dari Kekuasaan Mataram", desc: "Terjadi pergolakan yang memaksa Senopati memboyong seluruh benda pusaka Keraton Pajang ke Mataram. Jipang dan wilayah sekitarnya, termasuk Bojonegoro, menjadi bagian dari kekuasaan Mataram." },
      { period: "1677", title: "Hari Jadi Kabupaten Bojonegoro", desc: "Status Jipang yang sebelumnya merupakan kadipaten diubah menjadi kadipaten dengan Wedana Bupati Mancanegara Wetan, Mas Tumapel. Peristiwa tersebut terjadi pada 20 Oktober 1677, yang kemudian ditetapkan sebagai Hari Jadi Kabupaten Bojonegoro." },
      { period: "1725", title: "Perpindahan ke Rajekwesi", desc: "Sunan Pakubuwono II dari Kasunanan Surakarta naik takhta. Pusat pemerintahan di Jipang dipindahkan ke Rajekwesi, sekitar 10 km di selatan Bojonegoro." },
      { period: "1755", title: "Perpecahan Mataram", desc: "Politik divide et impera memecah Mataram menjadi dua, yaitu Surakarta dan Yogyakarta Hadiningrat. Rajekwesi pada saat itu menjadi bagian dari wilayah Kerajaan Yogyakarta." },
      { period: "1812", title: "Masa Penjajahan Inggris", desc: "Rajekwesi secara resmi menjadi daerah jajahan. Hal tersebut terjadi setelah pada 1811 Pulau Jawa direbut oleh Inggris dari Belanda. Bupati ditetapkan menjadi pegawai gubernemen." },
      { period: "1816", title: "Kembalinya Kekuasaan Belanda", desc: "R. Prawirosentiko yang menjabat sebagai bupati ke-10 merasa tidak senang dengan perubahan di bawah penjajahan Inggris, lalu mengundurkan diri. Pada tahun tersebut, Pulau Jawa kembali direbut oleh Belanda." },
      { period: "1827", title: "Perlawanan Sosrodilogo", desc: "Rajekwesi direbut oleh Sosrodilogo, salah satu orang kepercayaan Pangeran Diponegoro. Pergolakan terjadi dalam usaha membebaskan Jawa Tengah dari penindasan." },
      { period: "1828", title: "Perebutan Kembali oleh Belanda", desc: "Rajekwesi direbut kembali oleh Belanda di bawah komando Kolonel Van Griesheim." },
      { period: "25 September 1828", title: "Pengesahan Nama Bojonegoro", desc: "Komisaris Jenderal Hindia Belanda, Leonard du Bus de Gisignies, mengesahkan pergantian nama Rajekwesi menjadi Bojonegoro." },
    ],
    wbtbData: [
      { 
      id: 1, 
      name: "Wayang Thengul", 
      year: "2018", 
      type: "Seni Pertunjukan", 
      sk: "SK Menteri No. 264/M/2018", 
      desc: "Wayang Thengul merupakan seni pertunjukan khas Kabupaten Bojonegoro yang menggunakan boneka kayu tiga dimensi sebagai media pementasan. Kesenian ini umumnya membawakan lakon sejarah kerajaan di Jawa, cerita Menak, serta kisah para wali.",
      link: "" 
    },
    { 
      id: 2, 
      name: "Sandur", 
      year: "2018", 
      type: "Seni Pertunjukan", 
      sk: "SK Menteri No. 264/M/2018", 
      desc: "Sandur merupakan seni pertunjukan tradisional khas Bojonegoro yang berakar dari tradisi masyarakat agraris dan memiliki unsur ritual sebagai ungkapan syukur atas hasil panen. Kesenian ini memadukan drama, tari, musik, tembang, serta atraksi akrobatik kalongking, sehingga menjadi warisan budaya yang sarat nilai simbolik dan filosofi kehidupan masyarakat.",
      link: "https://drive.google.com/file/d/1ajURZs0qom1MWHFv-qdO-bMoYbXyFTWE/view?usp=sharing" 
    },
    { 
      id: 3, 
      name: "Ajaran Samin", 
      year: "2019", 
      type: "Adat Istiadat & Ritus", 
      sk: "SK Menteri No. 362/M/2019", 
      desc: "Ajaran Samin merupakan nilai-nilai luhur masyarakat Sedulur Sikep yang menekankan kejujuran, kesederhanaan, gotong royong, serta perlawanan tanpa kekerasan terhadap penindasan. Di Bojonegoro, ajaran ini menjadi bagian penting warisan budaya yang merefleksikan kearifan lokal, harmoni sosial, dan penghormatan terhadap alam.",
      link: "https://drive.google.com/file/d/156tWH1_C5gJiAdFeZTge5ZJqB9aEm93q/view?usp=sharing" 
    },
    { 
      id: 4, 
      name: "Ledre", 
      year: "2021", 
      type: "Kemahiran Tradisional", 
      sk: "SK Menteri No. 372/M/2021", 
      desc: "Ledre merupakan makanan tradisional khas Bojonegoro yang terbuat dari adonan tepung beras, santan, dan bahan alami yang dipanggang hingga renyah. Kuliner warisan ini lahir dari kreativitas masyarakat pada masa sulit dan hingga kini menjadi ikon daerah yang sarat nilai sejarah, kebersamaan, serta persaudaraan.",
      link: "https://drive.google.com/file/d/1zwvCOBxp7vwhye6skaBcISzv0BRgq964/view?usp=sharing" 
    },
    { 
      id: 5, 
      name: "Nyadran Sawuran", 
      year: "2023", 
      type: "Adat Istiadat & Ritus", 
      sk: "SK Menteri No. 315/M/2023", 
      desc: "Nyadran Sawuran merupakan tradisi sedekah bumi masyarakat Desa Tondomulo yang dilaksanakan sebagai ungkapan syukur atas hasil pertanian dan rezeki dari Tuhan Yang Maha Esa. Tradisi ini ditandai dengan arak-arakan hasil bumi serta prosesi melempar nasi kepal, yang mengandung makna kebersamaan, doa, dan penghormatan kepada leluhur.",
      link: "https://drive.google.com/file/d/1st6eLxZVBKbv5IpyBCKc9vnagcMt4d0V/view?usp=sharing" 
    },
    { 
      id: 6, 
      name: "Kerupuk Abang Ijo", 
      year: "", 
      type: "Kemahiran Tradisional", 
      sk: "SK Menteri No. ", 
      desc: "", 
      link: ""
    },
    { 
      id: 7, 
      name: "Oklik", 
      year: "2025", 
      type: "Seni Pertunjukan", 
      sk: "SK Menteri No. 224/WB/KB.00.01/2025", 
      desc: "Oklik merupakan kesenian musik tradisional khas Bojonegoro yang berasal dari Desa Sobontoro, menggunakan alat musik ritmis berbahan bambu yang dimainkan dengan cara dipukul. Bunyi khas “klik klok” yang dihasilkan menjadi ciri utama kesenian ini sekaligus mencerminkan kreativitas masyarakat dalam mengolah alat sederhana menjadi seni pertunjukan bernilai budaya.",
      link: "https://drive.google.com/file/d/1lHX0TnjQpVPznsoT3FDzO4RVMcI92x12/view?usp=sharing" 
    },
    { 
      id: 8, 
      name: "Ijuk Nganten", 
      year: "2025", 
      type: "Adat Istiadat & Ritus", 
      sk: "SK Menteri No. 225/WB/KB.00.01/2025", 
      desc: "Ijuk Nganten merupakan tradisi masyarakat Dusun Grenjeng, Desa Sraturejo, Bojonegoro, yang dilakukan dengan membasuh tangan, wajah, dan kaki pasangan pengantin di Sumur Nganten sebagai simbol penyucian diri sebelum memasuki kehidupan rumah tangga. Tradisi ini mengandung doa, harapan, serta penghormatan kepada leluhur, sekaligus menjadi warisan budaya yang memperkuat identitas dan kebersamaan masyarakat setempat.",
      link: "https://drive.google.com/file/d/1-qcTYhe4-5pt3MBxS8ZbSbjaQ_iAW63C/view?usp=sharing" 
    },
  ],
  },
  en: {
    nav: {
      beranda: 'Home',
      katalog: 'Catalog',
      basisData: 'Database',
      wbtb: 'Intangible Cultural Heritage',
      cagarBudaya: 'Cultural Heritage',
      tentang: 'About',
    },
    footer: {
      title: 'Digital Historical Catalog',
      regency: 'Bojonegoro Regency',
      motto: '"Preserving collective memory for future generations with digital integrity. The heritage of the past is the compass for the future."',
      navTitle: 'Navigation',
      contactTitle: 'Official Contact',
      office: 'Culture and Tourism Office of Bojonegoro Regency',
      division: 'Culture Division',
      subdivision: 'Sub-division of History, Cultural Heritage, and Museums',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      sitemap: 'Sitemap',
    },
    home: {
      hero: {
        portal: 'Bojonegoro Historical Portal',
        title: 'Digital Catalog & Historical Database',
        desc: 'Inventory, documentation, and presentation media for historical data at the Culture and Tourism Office of Bojonegoro Regency. Preserving the past for the future.',
        viewCatalog: 'View Catalog',
        accessDatabase: 'Access Database',
      },
      intro: {
        tag: 'Introduction',
        title1: 'Tracing the Footsteps of',
        title2: 'Civilization',
        p1: 'This platform serves as a comprehensive means of documentation, preservation, and access to the history of Bojonegoro Regency. We believe that history is not just the past, but the foundation for building a better future.',
        p2: 'Through this digital platform, the Culture and Tourism Office of Bojonegoro Regency is committed to presenting accurate and verified data regarding the region\'s historical wealth.',
      },
      timeline: {
        tag: 'Chronicle',
        title: 'Historical Timeline',
        subtitle: 'The long journey of Bojonegoro Regency from time to time.',
        close: 'Close Detail',
      },
      wbtb: {
        tag: 'Intangible Cultural Heritage',
        title1: 'Preserving',
        title2: 'Intangible Cultural Heritage',
        desc: '8 Indonesian Intangible Cultural Heritages have been established from Bojonegoro Regency as the identity and cultural wealth of the nation passed down through generations.',
        viewDetail: 'View ICH Details',
        label: 'Indonesian ICH',
      },
      stats: {
        history: 'Historical Data',
        sites: 'Sites & Buildings',
        archives: 'Digital Archives',
        figures: 'Figures & Traditions',
      },
      advantages: {
        tag: 'Advantages',
        title: 'Digital Preservation Standards',
        items: [
          { title: 'Verified Data', desc: 'Every piece of information has gone through a verification process by a team of historical experts.' },
          { title: 'Easy Access', desc: 'Historical information can be accessed anytime and anywhere openly.' },
          { title: 'Digital Inventory', desc: 'Data collection of historical assets is carried out systematically in a digital database.' },
          { title: 'Supporting Preservation', desc: 'Becoming the main reference in efforts to preserve the region\'s cultural heritage.' },
        ],
      },
      mission: {
        tag: 'Preservation Mission',
        title1: 'Guarding the Heritage of',
        title2: 'the Past',
        desc: 'We are committed to continuing research, documentation, and education to ensure every piece of Bojonegoro\'s history remains alive and relevant for future generations.',
      },
      cagarBudaya: {
        tag: 'BOJONEGORO REGENCY CULTURAL HERITAGE',
        title: 'Cultural Heritage',
        desc: 'Bojonegoro Regency has 2 regency-level Cultural Heritages designated as tangible cultural heritage of significant value to history, science, and regional identity.',
        statEstablished: '02',
        statEstablishedLabel: 'Designated Objects',
        statYear: '2023',
        statYearLabel: 'Initial Designation',
        viewBtn: 'View Cultural Heritage',
        learnMoreBtn: 'Learn Definitions →',
        badge: '2 DESIGNATED'
      },
    },
    catalog: {
      tag: 'Archives & Documentation',
      title: 'Historical Catalog',
      searchPlaceholder: 'Search documents, sites, or events...',
      category: 'Category',
      year: 'Year',
      all: 'All',
      readMore: 'Read More',
      emptyTitle: 'Catalog is Being Updated',
      emptyDesc: 'Data is in the process of verification and updating by the curatorial team.',
      noResults: 'No results',
      tryOtherKeywords: 'Try other keywords or reset filters.'
    },
    articleDetail: {
      back: 'Back to Catalog',
      references: 'References',
      backToCatalog: 'Back to Catalog'
    },
    database: {
      tag: 'Integrated Database',
      title: 'Historical Data Center',
      tabSejarah: 'Historical Documents',
      tabContract: 'Contractarbeiders',
      contractSource: 'Contractarbeiders (Contract Workers) data is sourced from the Nationaal Archief (National Archives of the Netherlands).',
      searchPlaceholder: 'Search data...',
      allGenders: 'All Genders',
      male: 'Male',
      female: 'Female',
      export: 'Export Data',
      table: {
        id: 'ID',
        title: 'Document Title',
        type: 'Type',
        year: 'Year',
        creator: 'Creator/Contributor',
        source: 'Source',
        regNo: 'Reg No.',
        name: 'Name',
        gender: 'Gender',
        age: 'Age',
        district: 'District/Village',
      },
      pagination: {
        show: 'Show',
        from: 'Data from',
      },
      newest: 'Newest',
      oldest: 'Oldest',
    },
    workerDetail: {
      title: 'National Archives of the Netherlands Document',
      profile: 'Personal Profile',
      journey: 'Journey Data',
      contract: 'Contract Information',
      origin: 'Regional Origin',
      notes: 'Notes & Identity',
      fields: {
        name: 'Full Name',
        father: 'Father\'s Name',
        gender: 'Gender',
        age: 'Age at Departure',
        height: 'Height',
        religion: 'Religion',
        departurePlace: 'Departure Place',
        departureDate: 'Departure Date',
        shipName: 'Ship Name',
        arrivalPlace: 'Arrival Place',
        contractCode: 'Contract Code',
        contractStart: 'Contract Start',
        contractEnd: 'Contract End',
        authority: 'Authority',
        plantation: 'Plantation',
        gewest: 'Gewest',
        afdeling: 'Afdeling',
        district: 'District',
        village: 'Village',
        identityMark: 'Identification Mark',
        nameNote: 'Name Information Notes',
      }
    },
    wbtbPage: {
      hero: {
        tag: 'National Cultural Heritage',
        title1: 'Intangible',
        title2: 'Cultural Heritage',
        desc: 'Cultural heritage passed down through generations that becomes the identity and cultural wealth of the nation.',
      },
      about: {
        tag: 'Definition',
        title: 'About ICH',
        quote: '"Intangible Cultural Heritage means the practices, representations, expressions, knowledge, skills – as well as the instruments, objects, artefacts and cultural spaces associated therewith – that communities, groups and, in some cases, individuals recognize as part of their cultural heritage."',
      },
      quality: {
        tag: 'Quality',
        title: 'Characteristics of ICH',
        items: [
          { title: 'Living and Evolving', desc: 'ICH continues to be practiced, inherited, and developed by the community according to the dynamics of the times without losing its core values.' },
          { title: 'Inherited', desc: 'ICH is passed down from generation to generation through the process of learning, habituation, and involvement in community life.' },
          { title: 'Cultural Identity', desc: 'ICH becomes a marker of identity, strengthens the sense of belonging, and reflects the uniqueness of a region or community.' },
          { title: 'Representative & Social', desc: 'ICH contains values of togetherness, mutual cooperation, local wisdom, and strengthens social relations in society.' },
        ],
      },
      domain: {
        tag: 'Classification',
        title: 'ICH Domains',
        items: [
          { title: 'Oral Traditions & Expressions', desc: 'Language, folklore, proverbs, spells, poetry, and other forms of traditional speech.' },
          { title: 'Performing Arts', desc: 'Dance, traditional music, folk theater, puppets, and other forms of cultural performance.' },
          { title: 'Social Practices, Rituals & Festive Events', desc: 'Traditional ceremonies, life cycle traditions, religious rituals, and traditional celebrations.' },
          { title: 'Knowledge & Practices Concerning Nature and the Universe', desc: 'Local knowledge about seasons, agriculture, traditional medicine, the environment, and way of life.' },
          { title: 'Traditional Craftsmanship', desc: 'Skills in making handicrafts, traditional culinary, traditional clothing, and traditional technology.' },
        ],
      },
      inventory: {
        tag: 'Regional Inventory',
        title: 'ICH of Bojonegoro Regency',
        subtitle: '8 cultural elements have been established as Indonesian Intangible Cultural Heritage.',
        totalLabel: 'Total Registered Elements',
        detailBtn: 'Element Detail',
      },
      modal: {
        year: 'Year',
        descTitle: 'Element Description',
        skTitle: 'Ministerial Decree Number',
        viewBtn: 'View Decree Document',
      },
      legal: {
        title: 'Legal Basis',
        desc: 'The establishment of Intangible Cultural Heritage is carried out through a Decree of the Minister of Culture of the Republic of Indonesia.',
      },
    },
    cagarBudayaPage: {
      hero: {
        tag: 'Bojonegoro Cultural Heritage',
        title: 'Bojonegoro Cultural Heritage',
        desc: 'Historical traces in the form of objects, buildings, structures, sites, and areas of significant value to the regional identity.',
        cta: 'Explore Data'
      },
      definition: {
        title: 'What is Cultural Heritage?',
        content: 'According to Law No. 11 of 2010 concerning Cultural Heritage, Cultural Heritage is a tangible cultural heritage in the form of Cultural Heritage Objects, Cultural Heritage Buildings, Cultural Heritage Structures, Cultural Heritage Sites, and Cultural Heritage Areas on land and/or in water that need to be preserved because they have significant value for history, science, education, religion, and/or culture through a determination process.'
      },
      types: {
        title: 'Types of Cultural Heritage',
        subtitle: 'Five main categories according to the Cultural Heritage Law.',
        items: [
          {
            title: 'Cultural Heritage Objects',
            content: 'Cultural Heritage Objects are natural objects and/or man-made objects, both movable and immovable, in form of units or groups, or parts thereof, or remains thereof that have a close relationship with culture and the history of human development.'
          },
          {
            title: 'Cultural Heritage Buildings',
            content: 'Cultural Heritage Buildings are built arrangements made of natural objects or man-made objects to meet the needs of walled and/or unwalled space, and roofed.'
          },
          {
            title: 'Cultural Heritage Structures',
            content: 'Cultural Heritage Structures are built arrangements made of natural objects and/or man-made objects to meet the needs of activities that unite with nature, facilities, and infrastructure to accommodate human needs.'
          },
          {
            title: 'Cultural Heritage Sites',
            content: 'Cultural Heritage Sites are locations on land and/or in water containing Cultural Heritage Objects, Cultural Heritage Buildings, and/or Cultural Heritage Structures as a result of human activity or evidence of past events.'
          },
          {
            title: 'Cultural Heritage Areas',
            content: 'Cultural Heritage Areas are geographic space units that have two or more Cultural Heritage Sites that are located close together and/or show distinctive spatial characteristics.'
          }
        ]
      },
      officialData: {
        title: 'Bojonegoro Regency Cultural Heritage',
        subtitle: 'Objects that have been designated as Cultural Heritage.',
        labels: {
          status: 'Status',
          year: 'Designation Year',
          type: 'Type',
          location: 'Location',
          coordinates: 'Coordinates',
          sk: 'Designation SK',
          detail: 'DETAIL',
          map: 'MAP',
          viewSk: 'View Decree',
          size: 'Object Size',
          ownership: 'Ownership Status',
          manager: 'Manager'
        }
      },
      odcb: {
        title: 'Objects Suspected of Cultural Heritage',
        subtitle: 'List of objects in the process of study, identification, or recommendation.',
        searchPlaceholder: 'Search Suspected Heritage...',
        filterDistrict: 'Filter District',
        filterType: 'Filter Type',
        all: 'All',
        table: {
          name: 'Name',
          location: 'Location',
          status: 'Status'
        }
      },
      importance: {
        title: 'Why is it Important to Preserve?',
        items: [
          'Regional Identity',
          'Historical Education Source',
          'Tourism Potential',
          'Legacy for Future Generations'
        ]
      },
      footer: {
        quote: 'Nurturing traces of the past to strengthen the future.'
      }
    },
    aboutPage: {
      tag: 'Portal Profile',
      title: 'About Us',
      subtitle1: 'Preserving the Collective Memory of',
      subtitle2: 'Bojonegoro Regency',
      p1: 'The Digital Catalog and Historical Database website is a strategic initiative of the Culture and Tourism Office of Bojonegoro Regency to modernize the management of regional historical data.',
      p2: 'This platform was developed as a medium for data collection and publication of regional historical information that is credible, easily accessible, and sustainable. We integrate information technology with historical research methodology to ensure that every piece of data presented has high educational and documentary value.',
      goals: [
        { title: 'Historical Documentation', desc: 'Documenting all regional historical assets digitally and systematically to prevent the loss of collective memory.' },
        { title: 'Information Access', desc: 'Providing transparent and easily accessible public information regarding the history of Bojonegoro.' },
        { title: 'Heritage Preservation', desc: 'Supporting cultural heritage preservation efforts by providing a strong database for stakeholders.' },
        { title: 'Educational Reference', desc: 'Becoming the main source of reference for research, education, and development of local knowledge.' },
      ],
      legalTitle: 'Operational Basis',
      legalItems: [
        'Law Number 11 of 2010 concerning Cultural Heritage.',
        'Law Number 5 of 2017 concerning the Advancement of Culture.',
        'Bojonegoro Regency Regional Regulation related to the Preservation of Cultural Heritage.'
      ],
      contact: {
        tag: 'Official Contact',
        addressLabel: 'Office Address',
        address: 'Jl. Teuku Umar No. 80, Bojonegoro, Jawa Timur, Indonesia.',
        emailLabel: 'Email',
        phoneLabel: 'Phone',
      },
      help: {
        title: 'Need Help?',
        desc: 'If you have questions regarding historical data or want to contribute to data collection, please contact our team.',
        btn: 'Contact Us',
      },
    },
    timelineData: [
      { period: "13th Century", title: "Majapahit Kingdom Era", desc: "The Nusantara region was controlled by the Majapahit Kingdom. At that time the name Bojonegoro was not yet known, but the region was already included in the Majapahit territory." },
      { period: "16th Century", title: "Sovereignty of the Demak Kingdom", desc: "Power in Nusantara was under the Demak Kingdom. Raden Patah, Senopati Jumbun, Adipati Bintoro, was appointed as the 1st king in the early 16th century. Since then, Jipang (covering Bojonegoro at that time) became the sovereign territory of Demak." },
      { period: "1547–1554", title: "Government Center in Jipang", desc: "The center of the Demak government was moved to the Jipang region which covered the Bojonegoro area." },
      { period: "1568", title: "Transition to the Pajang Kingdom", desc: "There was a transition of power and upheaval that finally brought Jipang (including Bojonegoro) into the territory of the Pajang Kingdom led by Raden Jaka Tingkir." },
      { period: "1587", title: "Part of the Mataram Power", desc: "There was an upheaval that forced Senopati to bring all the heirlooms of the Pajang Palace to Mataram. Jipang and the surrounding areas, including Bojonegoro, became part of the Mataram power." },
      { period: "1677", title: "Anniversary of Bojonegoro Regency", desc: "The status of Jipang, which was previously a regency, was changed to a regency with Wedana Bupati Mancanegara Wetan, Mas Tumapel. This event occurred on October 20, 1677, which was later established as the Anniversary of Bojonegoro Regency." },
      { period: "1725", title: "Moving to Rajekwesi", desc: "Sunan Pakubuwono II of the Surakarta Sunanate ascended the throne. The center of government in Jipang was moved to Rajekwesi, about 10 km south of Bojonegoro." },
      { period: "1755", title: "Split of Mataram", desc: "Divide et impera politics split Mataram into two, namely Surakarta and Yogyakarta Hadiningrat. Rajekwesi at that time became part of the territory of the Yogyakarta Kingdom." },
      { period: "1812", title: "British Colonial Period", desc: "Rajekwesi officially became a colonial area. This happened after in 1811 Java Island was captured by the British from the Dutch. The Regent was appointed as a government employee." },
      { period: "1816", title: "Return of Dutch Power", desc: "R. Prawirosentiko who served as the 10th regent felt unhappy with the changes under British colonization, then resigned. In that year, Java Island was recaptured by the Dutch." },
      { period: "1827", title: "Sosrodilogo Resistance", desc: "Rajekwesi was captured by Sosrodilogo, one of the confidants of Prince Diponegoro. Upheaval occurred in an effort to free Central Java from oppression." },
      { period: "1828", title: "Recapture by the Dutch", desc: "Rajekwesi was recaptured by the Dutch under the command of Colonel Van Griesheim." },
      { period: "September 25, 1828", title: "Legalization of the Name Bojonegoro", desc: "The Governor-General of the Dutch East Indies, Leonard du Bus de Gisignies, legalized the change of name from Rajekwesi to Bojonegoro." },
    ],
    wbtbData: [
      { id: 1, name: "Wayang Thengul", year: "2018", type: "Performing Arts", sk: "SK Menteri No. 264/M/2018", desc: "Wayang Thengul is a typical performing art of Bojonegoro Regency that uses three-dimensional wooden puppets as a performance medium. This art generally performs historical plays of kingdoms in Java, Menak stories, and the stories of the saints." },
      { id: 2, name: "Sandur", year: "2018", type: "Performing Arts", sk: "SK Menteri No. 264/M/2018", desc: "Sandur is a traditional performing art typical of Bojonegoro rooted in the traditions of the agrarian community and has ritual elements as an expression of gratitude for the harvest. This art combines drama, dance, music, songs, and kalongking acrobatic attractions, making it a cultural heritage full of symbolic values and philosophy of community life." },
      { id: 3, name: "Ajaran Samin", year: "2019", type: "Social Practices, Rituals & Festive Events", sk: "SK Menteri No. 362/M/2019", desc: "Samin teachings are the noble values of the Sedulur Sikep community that emphasize honesty, simplicity, mutual cooperation, and non-violent resistance to oppression. In Bojonegoro, this teaching becomes an important part of cultural heritage that reflects local wisdom, social harmony, and respect for nature." },
      { id: 4, name: "Ledre", year: "2021", type: "Traditional Craftsmanship", sk: "SK Menteri No. 372/M/2021", desc: "Ledre is a typical traditional food of Bojonegoro made from a dough of rice flour, coconut milk, and natural ingredients that are baked until crispy. This culinary heritage was born from the creativity of the community during difficult times and has now become a regional icon full of historical value, togetherness, and brotherhood." },
      { id: 5, name: "Nyadran Sawuran", year: "2023", type: "Social Practices, Rituals & Festive Events", sk: "SK Menteri No. 315/M/2023", desc: "Nyadran Sawuran is a earth alms tradition of the Tondomulo Village community carried out as an expression of gratitude for agricultural products and sustenance from God Almighty. This tradition is marked by a procession of earth products and the ritual of throwing rice balls, which contains the meaning of togetherness, prayer, and respect for ancestors." },
      { id: 6, name: "Kerupuk Abang Ijo", year: "", type: "Traditional Craftsmanship", sk: "SK Menteri No. ", desc: "" },
      { id: 7, name: "Oklik", year: "2025", type: "Performing Arts", sk: "SK Menteri No. 224/WB/KB.00.01/2025", desc: "Oklik is a typical traditional music art of Bojonegoro originating from Sobontoro Village, using rhythmic musical instruments made of bamboo played by striking. The characteristic \"klik klok\" sound produced is the main feature of this art as well as reflecting the creativity of the community in processing simple tools into performing arts of cultural value." },
      { id: 8, name: "Ijuk Nganten", year: "2025", type: "Social Practices, Rituals & Festive Events", sk: "SK Menteri No. 225/WB/KB.00.01/2025", desc: "Ijuk Nganten is a tradition of the community of Grenjeng Hamlet, Sraturejo Village, Bojonegoro, carried out by washing the hands, face, and feet of the bride and groom at the Sumur Nganten as a symbol of self-purification before entering married life. This tradition contains prayers, hopes, and respect for ancestors, as well as being a cultural heritage that strengthens the identity and togetherness of the local community." },
    ]
  }
};
