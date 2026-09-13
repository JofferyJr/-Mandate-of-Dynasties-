# Mandate of Dynasties

Permainan **grand-strategy dinasti asli** untuk pelayar web, direka supaya boleh terus diterbitkan melalui **GitHub Pages**. Projek ini berinspirasikan genre grand strategy/dynasty strategy tetapi tidak menggunakan kod, aset, nama, peta atau UI milik Crusader Kings III.

## Ciri versi pertama

- Peta politik SVG interaktif dengan 20 wilayah dan 8 kerajaan.
- Masa berjalan: pause, 3 kelajuan, musim dan tahun.
- Ekonomi: emas, cukai wilayah, pembangunan dan kos tentera.
- Dinasti: ahli keluarga, legitimasi dan prestij.
- Perkahwinan dan gundik dengan senarai calon.
- Majlis menteri: Canselor, Marsyal, Pengurus, Sarjana dan Perisik.
- Diplomasi: hubungan, hadiah dan rundingan.
- Perang berasaskan tuntutan, sempadan, tentera, terrain dan rawak.
- Wilayah boleh bertukar pemilik selepas kemenangan perang.
- Save/Load menggunakan `localStorage`.
- Peta Politik, Terrain dan Hubungan.
- Responsif untuk desktop dan skrin kecil.

## Jalankan secara lokal

Anda boleh buka `index.html` terus, atau gunakan pelayan lokal:

```bash
python3 -m http.server 8000
```

Kemudian buka `http://localhost:8000`.

## Terbitkan di GitHub Pages

1. Cipta repository baharu di GitHub, contohnya `mandate-of-dynasties`.
2. Upload semua fail dalam folder projek ini ke root repository.
3. Buka **Settings → Pages**.
4. Di **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`.
6. Simpan. GitHub akan memberi URL Pages selepas deployment selesai.

## Struktur fail

```text
mandate-dynasties-github/
├── index.html
├── styles.css
├── game.js
├── README.md
└── LICENSE
```

## Roadmap disyorkan

Versi seterusnya boleh menambah penciptaan watak/kerajaan, AI kerajaan, sistem duke–marquess–baron yang lebih mendalam, pewarisan gelaran, anak dinamik, perang berfasa, pengepungan, peta lebih besar, save slot, event bercabang, agama/budaya rekaan, multiplayer asynchronous, dan editor peta/dev mode.

## GitHub Actions (disertakan)

Projek ini juga mempunyai `.github/workflows/deploy-pages.yml`. Jika anda memilih **GitHub Actions** sebagai Source di **Settings → Pages**, setiap push ke branch `main` akan menerbitkan game secara automatik.
